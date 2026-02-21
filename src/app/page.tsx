import MainLayout from "@/components/MainLayout";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import WorkProcess from "@/components/WorkProcess";
import PortfolioTeaser from "@/components/PortfolioTeaser";
import Testimonials from "@/components/Testimonials";
import LogoSlider from "@/components/LogoSlider";
import TeamTeaser from "@/components/TeamTeaser";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <LogoSlider />
      <ServicesPreview />
      <WorkProcess />
      <PortfolioTeaser />
      <Testimonials />
      <TeamTeaser />
      <CTASection />
    </MainLayout>
  );
}
