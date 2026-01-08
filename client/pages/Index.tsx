import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import LogoCarousel from "@/components/home/LogoCarousel";
import IntroSection from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ExcellenceSection from "@/components/home/ExcellenceSection";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <LogoCarousel />
      <IntroSection />
      <ServicesSection />
      <BenefitsSection />
      <FeaturedProjects />
      <ExcellenceSection />
      <ProjectShowcase />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
}
