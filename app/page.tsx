import type { Metadata } from "next";

import { AssistantPreviewSection } from "@/components/sections/assistant-preview-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ContactSection } from "@/components/sections/contact-section";
import { DifferentiatorSection } from "@/components/sections/differentiator-section";
import { HeroSection } from "@/components/sections/hero-section";
import { JoinStepsSection } from "@/components/sections/join-steps-section";
import { MissionSection } from "@/components/sections/mission-section";
import { ResourceHubSection } from "@/components/sections/resource-hub-section";
import { SportsSection } from "@/components/sections/sports-section";
import { SupportersSection } from "@/components/sections/supporters-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { homepageContent } from "@/content/homepage";
import { siteSeo } from "@/content/site";

export const metadata: Metadata = {
  title: siteSeo.title,
  description: siteSeo.description,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "Tüskevár Diák Sportegyesület",
  description: siteSeo.description,
  email: homepageContent.contact.details.emailLabel,
  telephone: homepageContent.contact.details.phoneLabel,
  logo: "/assets/brand/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lőrincz utca 40–42.",
    postalCode: "1041",
    addressLocality: "Budapest",
    addressCountry: "HU",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
        type="application/ld+json"
      />
      <HeroSection />
      <MissionSection />
      <SportsSection />
      <BenefitsSection />
      <DifferentiatorSection />
      <TestimonialsSection />
      <JoinStepsSection />
      <SupportersSection />
      <ResourceHubSection />
      <AssistantPreviewSection />
      <ContactSection />
    </>
  );
}
