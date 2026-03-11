import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import data from "@/data/siteData.json";
import { Globe, Code, Database, Cloud, Shield, Smartphone, Monitor, Layout, Layers, Terminal } from "lucide-react";

const iconMap = {
  globe: Globe,
  layers: Layers,
  layout: Layout,
  smartphone: Smartphone,
  code: Code,
  database: Database,
  cloud: Cloud,
  shield: Shield,
};

export default function ServicesPreview() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Global Background Elements */}
      <div className="pointer-events-none absolute top-[20%] left-[-5%] h-[600px] w-[600px] rounded-full bg-teal/[0.03] blur-[150px]"></div>
      <div className="pointer-events-none absolute bottom-[10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-teal/[0.05] blur-[120px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-[3.5rem] font-black uppercase tracking-tighter text-[#111] dark:text-white italic leading-[1.1]"
          >
            Everything you need to <br className="hidden sm:block" />
            <span className="text-teal">scale</span><span className="text-[#111] dark:text-white">.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg sm:text-[17px] text-gray-500 dark:text-white/50 max-w-2xl font-medium leading-relaxed"
          >
            We don't just write code; we build the logic that powers your business.
          </motion.p>
        </div>

        {/* 4-Column Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/10 rounded-[2rem] p-8 flex flex-col h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] dark:hover:border-teal/30 transition-all duration-300 group"
              >
                <div className="flex h-[3.25rem] w-[3.25rem] flex-shrink-0 items-center justify-center rounded-2xl bg-teal/10 text-teal mb-8 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-6 w-6" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#111] dark:text-white leading-snug mb-4">
                  {service.title}
                </h3>
                
                <p className="text-[15px] leading-relaxed text-gray-500 dark:text-white/50 mb-8 flex-grow">
                  {service.solution}
                </p>
                
                <div className="mt-auto">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal hover:opacity-75 transition-opacity"
                  >
                    Learn More <span>&rarr;</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
