import { motion } from "framer-motion";
import { Code2, Cpu, Rocket, ShieldCheck, Zap, HeadphonesIcon } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Custom Built Solutions",
      description: "We build everything from scratch tailored to your business.",
      icon: Code2,
    },
    {
      title: "Modern Tech Stack",
      description: "React, Next.js, Tailwind, Node, and scalable architecture.",
      icon: Cpu,
    },
    {
      title: "Fast Delivery",
      description: "Efficient workflow from design to deployment.",
      icon: Zap,
    },
    {
      title: "Clean & Scalable Code",
      description: "Future proof and easy to expand.",
      icon: ShieldCheck,
    },
    {
      title: "Startup Friendly",
      description: "Perfect for MVPs and SaaS products.",
      icon: Rocket,
    },
    {
      title: "Ongoing Support",
      description: "We support after launch.",
      icon: HeadphonesIcon,
    },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold uppercase tracking-tighter text-white sm:text-5xl italic">
            Why Choose <span className="text-teal underline decoration-teal/20 underline-offset-8">Enkryx</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-white/70">
            We deliver uncompromising quality with a modern workflow.
          </p>
        </div>
        <div className="mx-auto mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-ultra glass-hover-shine group relative flex flex-col rounded-[2.5rem] p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
              >
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/10 border border-teal/20 text-teal transition-all duration-500 group-hover:bg-teal group-hover:text-white group-hover:shadow-glow">
                  <Icon size={24} />
                </div>
                <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-white transition-colors group-hover:text-teal font-font-premium">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
