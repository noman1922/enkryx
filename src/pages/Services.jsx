import MainLayout from "@/components/MainLayout";
import CTASection from "@/components/CTASection";
import ServiceHero from "@/components/ServiceHero";
import ServiceCard from "@/components/ServiceCard";
import data from "@/data/siteData.json";

export default function ServicesPage() {
  return (
    <MainLayout>
      <div className="relative">
        <ServiceHero />
        
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="space-y-12 lg:space-y-0">
              {data.services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </div>
    </MainLayout>
  );
}

