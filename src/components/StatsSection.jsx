import { motion } from "framer-motion";

export default function StatsSection() {
  const metrics = [
    { label: "Projects Delivered", value: "10+" },
    { label: "Industries Served", value: "5+" },
    { label: "Custom Built Solutions", value: "100%" },
    { label: "Architecture", value: "Fast & Scalable" },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-premium glass-hover-shine group flex flex-col items-center justify-center rounded-[2.5rem] p-8 text-center transition-all duration-500 hover:scale-[1.05] hover:shadow-glow"
            >
              <h3 className="text-4xl sm:text-5xl font-bold uppercase text-teal drop-shadow-[0_0_15px_rgba(20,184,166,0.3)] font-font-premium mb-4">
                {metric.value}
              </h3>
              <p className="text-sm font-bold uppercase tracking-widest text-white/80 group-hover:text-white transition-colors">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
