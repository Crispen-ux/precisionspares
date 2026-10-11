import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyActions } from "@/components/StickyActions";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Precision Spares | Hard-to-Find and Obsolete Industrial Automation Spares",
    template: "%s | Precision Spares",
  },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_ZA",
    url: SITE.url,
    title: "Precision Spares | Hard-to-Find and Obsolete Industrial Automation Spares",
    description: SITE.description,
    images: [
      {
        url: "https://precisionspares.co.za/wp-content/uploads/2026/02/industrial-spares-supplier-south-africa-1024x682.jpg",
        width: 1024,
        height: 682,
        alt: "Industrial automation spares",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b1722",
  width: "device-width",
  initialScale: 1,
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phoneTel,
  description: SITE.description,
  areaServed: { "@type": "Country", name: "South Africa" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
  ...(SITE.email ? { email: SITE.email } : {}),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phoneTel,
    contactType: "sales",
    areaServed: "ZA",
    availableLanguage: ["English"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-ZA" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-amber focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyActions />
        <JsonLd data={orgSchema} />
        <Analytics />
      </body>
    </html>
  );
}
