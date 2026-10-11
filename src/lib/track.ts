"use client";

/**
 * Tiny analytics helper. Fires to whichever tools are configured:
 * Google Analytics 4 (gtag), Google Ads conversions, Meta Pixel.
 */

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", event, params);
    window.dataLayer?.push({ event, ...params });
  } catch {
    /* analytics must never break the page */
  }
}

export function trackLead(params: Params = {}) {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", "generate_lead", params);
    const adsId = process.env.NEXT_PUBLIC_GADS_ID;
    const adsLabel = process.env.NEXT_PUBLIC_GADS_LEAD_LABEL;
    if (adsId && adsLabel) {
      window.gtag?.("event", "conversion", { send_to: `${adsId}/${adsLabel}` });
    }
    window.fbq?.("track", "Lead", params);
    window.dataLayer?.push({ event: "generate_lead", ...params });
  } catch {
    /* ignore */
  }
}

/** Read UTM and click-id parameters that brought the visitor here (kept for the session). */
export function captureAttribution(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];
  const out: Record<string, string> = {};
  try {
    const stored = JSON.parse(sessionStorage.getItem("ps_attr") ?? "{}") as Record<string, string>;
    Object.assign(out, stored);
    const sp = new URLSearchParams(window.location.search);
    for (const k of keys) {
      const v = sp.get(k);
      if (v) out[k] = v.slice(0, 200);
    }
    sessionStorage.setItem("ps_attr", JSON.stringify(out));
  } catch {
    /* storage can be blocked */
  }
  return out;
}
