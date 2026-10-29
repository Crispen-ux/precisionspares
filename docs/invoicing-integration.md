# Website quote requests into the existing invoicing API

The website submits POST /api/lead to Precision Spares. After validation and spam checks, the server calls the existing POST /api/v1/leads on https://billing.cretekgroup.co.za using a company-scoped API key. No additional invoicing receiver or database migration is required.

## Website variables

Set these server-only values on the Precision Spares website (or in its ignored .env.local):

```dotenv
LEDGER_API_URL=https://billing.cretekgroup.co.za
LEDGER_API_KEY=your-precision-spares-company-key
LEDGER_SITE_ID=precision-spares
```

Use the base origin without an /api path. In invoicing, select Precision Spares, then Settings → Integrations → API keys. Create a dedicated website key with leads:write. Its owning company determines where leads are stored. LEDGER_SITE_ID is attribution only; it cannot select a company. Enable Customer relations to access Leads.

These variable names already exist on the cretek-invoicing Vercel project, but they must also be configured on the website that sends enquiries. Their presence on invoicing does not configure this website. Existing secret values were not revealed or copied during QA. The invoicing database stores API-key hashes; the plaintext appears only once at creation. Never put the key in a NEXT_PUBLIC_ variable. Restart/redeploy after configuration.

## Existing API contract

- Name → contactName; company, phone and email retain their names.
- Notes → message (maximum 4000 characters).
- Brand and topic → service; the page becomes an absolute pageUrl.
- Campaign → campaign; LEDGER_SITE_ID → sourceDetail; source is website.
- Part description, brand, urgency, referrer and UTM → metadata.
- Stable request fingerprint → externalId and the x-idempotency-key header.

The existing API returns HTTP 201 with {"ok":true,"lead":{"id":42,"createdAt":"..."}}. The server requires a valid saved lead ID before returning {"ok":true} to the visitor. Requests appear as new Website leads. Part details and urgency are in the lead notes; the existing intake does not automatically set Hot/Warm/Cold ratings.

The receiver truncates serialized metadata at 3000 characters. The website rejects oversized metadata visibly instead of silently losing details. Notes and part description are sent separately so up to 4000 characters of notes can accompany the requested part.

Email and generic webhook notifications can remain enabled. Once LEDGER_API_URL or LEDGER_API_KEY is set, invoicing must confirm storage before the website shows success, even if an email succeeded. With both unset, existing email/webhook delivery continues.

## Retry limitation

The website shares concurrent duplicate submissions within one server instance and briefly caches confirmed successes. Failures remain retryable. Retries carry the same external request ID, and Resend notifications use idempotency keys. The existing invoicing endpoint records externalId but DOES NOT deduplicate it. A retry after a lost response or across server instances can create another lead. Use the external ID recorded in lead notes to reconcile duplicates; do not assume database-backed duplicate protection.

## QA evidence — 29 October 2026

The billing domain serves deployment dpl_Hs2KseaXHVw36L5E4gX1KqX7xFNx from feature/website-lead-connector at commit 5bcfbf81720198a94f333fdb3c38e8fa14fbeeca. That branch already includes POST /api/v1/leads, leads:write and Integration Health. The original review of main missed this deployed work; the redundant receiver draft PR #5 was closed and is not required.

Both billing and spares domains returned HTTP 401 JSON from /api/v1/whoami without credentials. The older spares.cretekgroup.co.za deployment uses a different commit. Existing LEDGER_* production variable names were verified through authenticated Vercel CLI metadata; values remained secret.

npm test checks the deployed request/response contract with mocked external services, including payload mapping, metadata limits, credentials, failure/retry handling, concurrent submissions, spam and origin checks. TypeScript and ESLint are separate checks. Live authenticated submission remains unverified until the Precision Spares key is configured on this website. Then submit a test form and confirm the lead under Precision Spares → Leads and Settings → Integrations → Integration Health.
