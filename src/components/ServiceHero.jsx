import { motion } from "framer-motion";
import ScrambledText from "./ScrambledText";

export default function ServiceHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-teal/20 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-teal/30 bg-teal/5 text-teal text-xs font-bold uppercase tracking-[0.3em] mb-8">
              Expertise & Solutions
            </span>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter uppercase italic leading-[1.1]">
              <ScrambledText>Our Services</ScrambledText>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              We provide end-to-end software solutions that help businesses scale, 
              automate, and succeed in a rapidly evolving digital world.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
