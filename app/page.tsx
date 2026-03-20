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

export default async function HomePage() {
  return (
    <main>
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
