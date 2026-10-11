import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: "How Precision Spares uses the information you send in a quote request.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="bg-paper py-14 md:py-20">
      <div className="container-x">
        <h1 className="text-4xl sm:text-5xl">Privacy notice</h1>
        <p className="mt-3 text-steel">
          This is a plain-language starting point. Have it reviewed against your obligations under the Protection of Personal Information Act (POPIA) before launch.
        </p>
        <div className="prose-ps mt-6">
          <h2>What we collect</h2>
          <p>
            When you request a quote we collect the details you enter: the part or description, brand, urgency, your name, company, phone number, email address and any notes. We also record the page you were on and, where present, the campaign parameters in the link that brought you here.
          </p>
          <h2>Why we collect it</h2>
          <p>
            We use this information only to respond to your request: to check availability, lead time and price, and to contact you about it.
          </p>
          <h2>Who sees it</h2>
          <p>
            Your request is handled by our team and by the email and messaging services we use to receive it. We do not sell your information.
          </p>
          <h2>Analytics</h2>
          <p>
            We may use analytics and advertising tools to understand how the site is used and to measure whether our marketing works.
          </p>
          <h2>Your rights</h2>
          <p>
            You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. Call {SITE.phoneDisplay}
            {SITE.email ? ` or email ${SITE.email}` : ""}.
          </p>
        </div>
      </div>
    </section>
  );
}
