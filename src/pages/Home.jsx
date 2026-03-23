import MainLayout from "@/components/MainLayout";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import LogoSlider from "@/components/LogoSlider";
import ServicesPreview from "@/components/ServicesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import WorkProcess from "@/components/WorkProcess";
import PortfolioTeaser from "@/components/PortfolioTeaser";
import Testimonials from "@/components/Testimonials";
import TeamTeaser from "@/components/TeamTeaser";
import TeamGallery from "@/components/TeamGallery";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <StatsSection />
      <LogoSlider />
      <ServicesPreview />
      <WhyChooseUs />
      <WorkProcess />
      <PortfolioTeaser />
      <Testimonials />
      <TeamTeaser />
      <TeamGallery />
      <CTASection />
    </MainLayout>
  );
}
