import { Link } from "react-router-dom";
import data from "@/data/siteData.json";
import { Globe, Layers, Layout, Smartphone } from "lucide-react";

const iconMap = {
  globe: Globe,
  layers: Layers,
  layout: Layout,
  smartphone: Smartphone,
};

export default function ServicesPreview() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-in-up">
          <h2 className="text-3xl font-bold uppercase tracking-tighter text-white sm:text-5xl italic">
            Everything you need to <span className="text-teal underline decoration-teal/20 underline-offset-8">scale</span>.
          </h2>
          <p className="mt-6 text-xl text-white/70">
            We do not just write code; we build the logic that powers your business.
          </p>
        </div>
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {data.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <div
                key={service.id}
                className={`glass-ultra group animate-fade-in-up flex flex-col rounded-[2.5rem] p-10 transition-all duration-500 hover:scale-[1.08] hover:shadow-glow stagger-${(index % 4) + 1}`}
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal/10 text-teal ring-1 ring-teal/20 transition-all duration-500 group-hover:bg-teal group-hover:text-white group-hover:shadow-glow">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white font-font-premium">{service.title}</h3>
                <p className="mt-6 text-lg leading-relaxed text-white/60">{service.solution}</p>
                <div className="mt-auto pt-10">
                  <Link
                    to="/services"
                    className="group/btn inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-teal transition-all hover:gap-4 hover:text-white"
                  >
                    Learn more <span className="transition-transform group-hover/btn:translate-x-2" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Static Glows to provide depth behind glass */}
      <div className="absolute top-[30%] left-[-10%] h-[500px] w-[500px] rounded-full bg-teal/5 blur-[120px]"></div>
      <div className="absolute bottom-0 right-[-10%] h-[400px] w-[400px] rounded-full bg-teal/10 blur-[100px]"></div>
    </section>
  );
}
