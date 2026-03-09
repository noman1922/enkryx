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
    <section className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl opacity-0 animate-fade-in-up">
          <h2 className="text-3xl font-bold uppercase tracking-tighter text-black sm:text-5xl italic">
            Everything you need to <span className="text-teal">scale</span>.
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            We do not just write code; we build the logic that powers your business.
          </p>
        </div>
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {data.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <div
                key={service.id}
                className={`glass-card group flex flex-col rounded-[2.5rem] p-10 opacity-0 transition-all hover:scale-[1.02] animate-fade-in-up stagger-${(index % 4) + 1}`}
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal/10 text-teal transition-all duration-300 group-hover:bg-teal group-hover:text-white">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-black">{service.title}</h3>
                <p className="mt-6 text-lg leading-relaxed text-gray-500">{service.solution}</p>
                <div className="mt-auto pt-10">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-teal hover:underline"
                  >
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
