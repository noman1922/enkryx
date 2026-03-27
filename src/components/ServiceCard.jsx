import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

export default function ServiceCard({ service, index }) {
  const isEven = index % 2 === 0;
  const IconComponent = LucideIcons[service.icon.charAt(0).toUpperCase() + service.icon.slice(1)] || LucideIcons.Globe;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`flex flex-col gap-12 lg:gap-24 mb-32 lg:mb-48 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center`}
    >
      {/* Content Side */}
      <div className="flex-1 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
              <IconComponent size={24} />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-teal/80">
              {service.title}
            </h3>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white uppercase italic">
            {service.problem}
          </h2>
        </div>

        <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
          {service.description || service.solution}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          {service.features?.map((feature, i) => (
            <div key={i} className="flex items-start gap-3 group">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal group-hover:scale-150 transition-transform" />
              <span className="text-sm text-gray-300 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        <motion.button
          whileHover={{ x: 5 }}
          className="group flex items-center gap-3 text-teal font-bold uppercase tracking-widest text-xs pt-4"
        >
          Book a Consultation
          <LucideIcons.ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      {/* Visual Side */}
      <div className="flex-1 w-full max-w-xl lg:max-w-none">
        <div className="relative group">
          {/* Animated Glow Backdrops */}
          <div className="absolute -inset-4 bg-teal/20 blur-3xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative glass-premium aspect-square md:aspect-video lg:aspect-square rounded-[3rem] p-8 md:p-16 flex items-center justify-center overflow-hidden border border-white/10 hover:border-teal/30 transition-colors duration-500">
            {/* Inner background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
            
            <div className="relative z-10 text-teal/20 group-hover:scale-110 group-hover:text-teal/40 transition-all duration-700 ease-out">
              <IconComponent size={240} strokeWidth={0.5} />
            </div>

            {/* Floating details */}
            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <div className="glass-ultra px-4 py-2 rounded-xl text-[10px] font-bold tracking-tighter text-teal uppercase">
                Premium Solution
              </div>
              <div className="text-white/20 text-4xl font-black italic">
                0{index + 1}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
