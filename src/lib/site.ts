/**
 * Single source of truth for business details.
 * Change values here (or via .env) and they update site-wide:
 * header, footer, schema.org markup, WhatsApp links and email templates.
 */

export const SITE = {
  name: "Precision Spares",
  legalName: "Precision Spares",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://precisionspares.co.za",
  tagline: "Hard-to-find industrial automation spares",
  description:
    "Hard-to-find PLC, drive, HMI and sensor parts for South African plants. Send the part number and we check availability, state the source and condition, and flag compatibility before you buy.",
  phoneDisplay: "+27 61 548 4573",
  phoneTel: "+27615484573",
  /** WhatsApp number in international format, digits only */
  whatsapp: "27615484573",
  /** Public email shown on the site. Leave blank to hide it. */
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@precisionspares.co.za",
  /** Fill in once confirmed; shown in footer and schema.org when present. */
  address: {
    street: "",
    locality: "",
    region: "",
    postalCode: "",
    country: "ZA",
  },
  hours: [
    { days: "Monday to Sunday", opens: "07:00", closes: "17:00" },
  ],
  serviceArea: "South Africa (nationwide delivery)",
} as const;

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Precision Spares, I need a quote for: ";

export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const IMG_BASE = "https://precisionspares.co.za/wp-content/uploads/2026/02";
export const img = (file: string) => `${IMG_BASE}/${file}`;
