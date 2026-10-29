import { test, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const nativeRequire = createRequire(import.meta.url);
const testDirectory = path.dirname(fileURLToPath(import.meta.url));

// Run server modules with Node's built-in test runner and the existing TS
// compiler. No dev server, external services or credentials are required.
function loadServerModules() {
  const cache = new Map();
  function load(filename) {
    filename = path.resolve(testDirectory, "..", filename);
    if (cache.has(filename)) return cache.get(filename).exports;
    const loadedModule = { exports: {} };
    cache.set(filename, loadedModule);
    const code = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    }).outputText;
    const localRequire = (name) => {
      if (name === "next/server") return { NextResponse: Response };
      if (name.startsWith("@/")) return load(`src/${name.slice(2)}.ts`);
      if (name.startsWith(".")) return load(path.resolve(path.dirname(filename), `${name}.ts`));
      return nativeRequire(name);
    };
    new Function("require", "module", "exports", code)(localRequire, loadedModule, loadedModule.exports);
    return loadedModule.exports;
  }
  return {
    route: load("src/app/api/lead/route.ts"),
    invoicing: load("src/lib/invoicing.ts"),
    schema: load("src/lib/lead-schema.ts").leadSchema,
  };
}

const envKeys = ["NODE_ENV", "LEDGER_API_URL", "LEDGER_API_KEY", "LEDGER_SITE_ID", "RESEND_API_KEY", "LEAD_TO_EMAIL", "LEAD_WEBHOOK_URL"];
let saved;
let originalFetch;
let modules;
let calls;
const lead = {
  requestId: "72a9ac35-bad8-4ebe-ae58-4a158939e649",
  name: "Test Customer", company: "Test Factory", phone: "0821234567",
  email: "customer@example.com", part: "Siemens 6ES7 PLC", brand: "Siemens",
  urgency: "down", notes: "Need two units", topic: "PLCs", page: "/plcs-i-o-modules",
  utm: { utm_source: "test" }, startedAt: 1700000000000,
};
const receipt = (id = 42) => Response.json({ ok: true, lead: { id, createdAt: "2026-10-29T12:00:00Z" } }, { status: 201 });
const submit = (body = lead, headers = {}) => modules.route.POST(new Request("https://precisionspares.co.za/api/lead", {
  method: "POST", headers: { "Content-Type": "application/json", "x-forwarded-for": "192.0.2.1", ...headers },
  body: JSON.stringify(body),
}));

beforeEach(() => {
  saved = Object.fromEntries(envKeys.map((key) => [key, process.env[key]]));
  for (const key of envKeys) delete process.env[key];
  process.env.NODE_ENV = "production";
  process.env.LEDGER_API_URL = "https://billing.example.com";
  process.env.LEDGER_API_KEY = "lk_test_server_secret";
  process.env.LEDGER_SITE_ID = "precision-spares";
  originalFetch = global.fetch;
  calls = [];
  global.fetch = async (url, options) => { calls.push({ url: String(url), ...options }); return receipt(); };
  modules = loadServerModules();
});
afterEach(() => {
  global.fetch = originalFetch;
  for (const key of envKeys) {
    if (saved[key] === undefined) delete process.env[key];
    else process.env[key] = saved[key];
  }
});

test("sends the quote fields and a server-only key, returning only a public success", async () => {
  const response = await submit();
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, "https://billing.example.com/api/v1/leads");
  assert.equal(calls[0].headers.Authorization, "Bearer lk_test_server_secret");
  const body = JSON.parse(calls[0].body);
  for (const key of ["company", "phone", "email"]) {
    assert.deepEqual(body[key], lead[key]);
  }
  for (const key of ["part", "brand", "urgency", "utm"]) assert.deepEqual(body.metadata[key], lead[key]);
  assert.equal(body.contactName, lead.name);
  assert.equal(body.message, lead.notes);
  assert.equal(body.source, "website");
  assert.equal(body.sourceDetail, "precision-spares");
  assert.equal(body.service, "Siemens / PLCs");
  assert.equal(body.pageUrl, "https://precisionspares.co.za/plcs-i-o-modules");
  assert.equal(body.campaign, "test");
  assert.match(body.externalId, /^[a-f0-9]{64}$/);
  assert.equal(calls[0].headers["x-idempotency-key"], body.externalId);
  assert.equal(body.website, undefined);
  assert.equal(body.startedAt, undefined);
  assert.equal(body.companyId, undefined);
  assert.equal(calls[0].redirect, "error");
  assert.ok(calls[0].signal instanceof AbortSignal);
});

test("does not hide an invoicing failure even when the email succeeds; retries use the same key", async () => {
  process.env.RESEND_API_KEY = "email-test-key";
  process.env.LEAD_TO_EMAIL = "quotes@example.com";
  let fail = true;
  global.fetch = async (url, options) => {
    calls.push({ url: String(url), ...options });
    return String(url).includes("billing.example.com") ? (fail ? new Response("Unavailable", { status: 503 }) : receipt()) : Response.json({ id: "email-id" });
  };
  assert.equal((await submit()).status, 503);
  fail = false;
  assert.equal((await submit()).status, 200);
  const deliveries = calls.filter((call) => call.url.includes("billing.example.com"));
  assert.equal(deliveries.length, 2);
  assert.equal(JSON.parse(deliveries[0].body).externalId, JSON.parse(deliveries[1].body).externalId);
  const notifications = calls.filter((call) => call.url.includes("resend.com"));
  assert.equal(notifications[0].headers["Idempotency-Key"], notifications[2].headers["Idempotency-Key"]);
});

test("concurrent duplicates share delivery; successful retries do not resend", async () => {
  let resolve;
  global.fetch = async (url, options) => {
    calls.push({ url: String(url), ...options });
    return new Promise((done) => { resolve = done; });
  };
  const first = submit();
  const second = submit();
  while (!resolve) await new Promise((done) => setImmediate(done));
  resolve(receipt());
  const responses = await Promise.all([first, second]);
  assert.deepEqual(responses.map((res) => res.status), [200, 200]);
  assert.equal((await submit()).status, 200);
  assert.equal(calls.length, 1);
});

test("a lost response remains retryable without assuming upstream deduplication", async () => {
  global.fetch = async () => { throw new Error("network timeout"); };
  assert.equal((await submit()).status, 503);
  global.fetch = async () => receipt(43);
  assert.equal((await submit()).status, 200);
});

test("invalid receipts and partial configuration never count as delivery", async () => {
  global.fetch = async () => Response.json({ ok: true });
  assert.equal((await submit()).status, 503);
  global.fetch = async () => Response.json({ data: { id: 42 } }, { status: 201 });
  assert.equal((await submit()).status, 503);
  delete process.env.LEDGER_API_KEY;
  assert.equal((await submit()).status, 503);
});

test("rejects metadata that the existing API would silently truncate", async () => {
  const large = { ...lead, part: "x".repeat(2000), utm: Object.fromEntries(Array.from({ length: 10 }, (_, i) => [`utm_${i}`, "x".repeat(200)])) };
  assert.equal((await submit(large)).status, 422);
  assert.equal(calls.length, 0);
});

test("preserves full-length notes separately from the part details", async () => {
  assert.equal((await submit({ ...lead, part: "p".repeat(2000), notes: "n".repeat(4000) })).status, 200);
  const body = JSON.parse(calls[0].body);
  assert.equal(body.message.length, 4000);
  assert.equal(body.metadata.part.length, 2000);
  assert.ok(JSON.stringify(body.metadata).length <= 3000);
});

test("rejects insecure origins before sending credentials", async () => {
  for (const origin of ["http://billing.example.com", "https://name:password@example.com", "https://billing.example.com/api", "https://billing.example.com?key=x"]) {
    process.env.LEDGER_API_URL = origin;
    assert.equal(await modules.invoicing.sendToInvoicing(modules.schema.parse(lead), "test-key"), false);
  }
  assert.equal(calls.length, 0);
});

test("spam, invalid input and cross-site requests never reach invoicing", async () => {
  assert.equal((await submit({ ...lead, website: "bot" })).status, 200);
  assert.equal((await submit({ ...lead, startedAt: Date.now() })).status, 200);
  assert.equal((await submit({ ...lead, phone: "invalid" })).status, 422);
  assert.equal((await submit(lead, { origin: "https://unrelated.example.com" })).status, 403);
  assert.equal(calls.length, 0);
});

test("existing email delivery works when invoicing is not configured", async () => {
  delete process.env.LEDGER_API_URL;
  delete process.env.LEDGER_API_KEY;
  process.env.RESEND_API_KEY = "email-key";
  process.env.LEAD_TO_EMAIL = "quotes@example.com";
  assert.equal((await submit()).status, 200);
  assert.ok(calls.every((call) => call.url === "https://api.resend.com/emails"));
});

test("idempotency is stable under UTM key order but changes for a new form or changed request", () => {
  const base = modules.schema.parse(lead);
  const key = modules.invoicing.quoteRequestKey;
  assert.equal(key({ ...base, utm: { a: "1", b: "2" } }), key({ ...base, utm: { b: "2", a: "1" } }));
  assert.notEqual(key(base), key({ ...base, part: "Different part" }));
  assert.notEqual(key(base), key({ ...base, requestId: "b8ac0a36-fcba-4c66-a89c-06449970ba56" }));
});
