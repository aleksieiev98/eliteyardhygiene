import {
  BlogPreviewSection,
  FaqSection,
  FinalCtaSection,
  GallerySection,
  HeroSection,
  PhotoCarouselSection,
  PricingSection,
  ProcessSection,
  PromoSection,
  ServiceAreaSection,
  ServicesSection,
  SiteFooter,
  TestimonialsSection,
  TrustBarSection,
  WhyChooseUsSection,
} from "@/components/home";

export default async function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBarSection />
      <PromoSection />
      <GallerySection />
      <PhotoCarouselSection />
      <ServicesSection />
      <ProcessSection />
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
