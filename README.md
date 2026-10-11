# Precision Spares: Next.js lead-generation site

Next.js 16 (App Router, Cache Components), TypeScript, Tailwind v4. Fully static pages plus one API route (`/api/lead`).

## Run it
```bash
npm install
cp .env.example .env.local   # then fill it in
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Before launch (these decide whether leads reach you)
1. **Lead delivery** in `.env.local`: set `RESEND_API_KEY` + `LEAD_TO_EMAIL` (+ `LEAD_FROM_EMAIL`), and/or `LEAD_WEBHOOK_URL` (Zapier, Make, Google Sheets, CRM). In production the form returns an error rather than silently losing a lead if nothing is configured.
2. **Tracking**: `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GADS_ID` + `NEXT_PUBLIC_GADS_LEAD_LABEL`, `NEXT_PUBLIC_META_PIXEL_ID`. Events fired: `generate_lead` (quote submitted), `click_to_call`, `click_whatsapp`, `quote_form_start`. `/thank-you` is the conversion page.
3. **Business details** in `src/lib/site.ts`: add the street address and email.
4. **Photos**: images currently load from precisionspares.co.za (see `next.config.ts`). Replace with your own files in `/public` when you can.
5. **Privacy page** (`/privacy`) is a starting point only: have it reviewed for POPIA.

## Where things are
- `src/lib/content.ts`: all category, brand, service and industry pages (edit copy here)
- `src/lib/insights.ts`: articles under /insights
- `src/components/LeadForm.tsx`: the two-step quote form
- `src/app/api/lead/route.ts`: validation, spam traps, rate limit, email + webhook delivery

URLs match the existing WordPress site (e.g. `/plcs-i-o-modules`, `/siemens-plc-solutions`) so existing Google rankings carry over. Old `/services` and `/contact` redirect.

## Resources section
- `/resources` hub (search, tools, guides, glossary, downloads), `/resources/tools/[tool]`, `/resources/glossary`, `/resources/nameplate-checklist`, `/insights` (guide library) and `/insights/[slug]`.
- Add a guide: append an object to `articles` in `src/lib/insights.ts` (format described at the top of that file). It appears on the hub, the guide library, related links and the sitemap automatically.
- Add a calculator: add its entry in `src/lib/resources.ts` (`tools`) and a component in `src/components/tools/`, then register it in `src/components/tools/index.tsx`.
- Part-number prefixes live in `prefixes` in `src/lib/resources.ts`. Longest matching prefix wins.
- Downloads are plain files in `public/downloads/`; list them in `downloads` in `src/lib/resources.ts`.
- Before launch, have an engineer read every guide and tool note. The content is written to be accurate and general, but it carries your name.
