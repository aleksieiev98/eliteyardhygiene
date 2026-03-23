import type { Metadata } from "next";

import { StructuredData } from "@/components/seo";
import {
  BlogPreviewSection,
  FaqSection,
  FinalCtaSection,
  GallerySection,
  HeroSection,
  IncludedVisitSection,
  PhotoCarouselSection,
  PricingSection,
  ProcessSection,
  PromoSection,
  ServiceAreaSection,
  ServicesSection,
  SiteFooter,
  TestimonialsSection,
  WhyChooseUsSection,
} from "@/components/home";
import { faqs } from "@/components/home/faq/FaqSection";
import { serviceAreas } from "@/components/home/service-area/ServiceAreaSection";

export const metadata: Metadata = {
  title: "Pet Waste Removal in Chicago Northwest Suburbs",
  description:
    "Weekly and one-time pet waste removal for homes in Buffalo Grove, Wheeling, Palatine, Arlington Heights, Mount Prospect, Des Plaines, Schaumburg, Elk Grove Village, and Hoffman Estates.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Elite Yard Hygiene | Pet Waste Removal in Chicago Northwest Suburbs",
    description:
      "Weekly and one-time dog poop cleanup for homes across Chicago's northwest suburbs.",
    url: "https://eliteyardhygiene.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Elite Yard Hygiene",
  url: "https://eliteyardhygiene.com",
  image: "https://eliteyardhygiene.com/icon.svg",
  telephone: "+1-224-600-9367",
  email: "eliteyardhygiene@gmail.com",
  description:
    "Elite Yard Hygiene provides weekly and one-time pet waste removal for residential yards across Chicago's northwest suburbs.",
  areaServed: serviceAreas.map((area) => ({
    "@type": "City",
    name: area,
  })),
  sameAs: [
    "https://www.facebook.com/people/Elite-Yard-Hygiene-LLC/61588401130622",
  ],
  priceRange: "$$",
  serviceType: [
    "Pet waste removal",
    "Dog poop cleanup",
    "Weekly yard cleanup",
    "One-time yard cleanup",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default async function HomePage() {
  return (
    <main>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={faqSchema} />
      <HeroSection />
      <PromoSection />
      <GallerySection />
      <ProcessSection />
      <PhotoCarouselSection />
      <ServicesSection />
      <IncludedVisitSection />
      <PricingSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FaqSection />
      <ServiceAreaSection />
      <BlogPreviewSection />
      <FinalCtaSection />
      <SiteFooter />
    </main>
  );
}
