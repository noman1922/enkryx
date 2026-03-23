import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-ultra glass-hover-shine animate-fade-in-up relative flex flex-col items-center justify-center gap-10 rounded-[3.5rem] p-12 text-center md:p-24 border border-teal/20">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold uppercase tracking-tighter text-white sm:text-6xl italic">
              Ready to build <span className="text-teal drop-shadow-[0_0_15px_rgba(20,184,166,0.4)]">your next product</span>?
            </h2>
            <p className="mt-8 text-xl text-white/70 leading-relaxed max-w-xl mx-auto">
              We design and develop fast, scalable websites and applications for modern businesses.
            </p>
          </div>
          
          <div className="flex w-full flex-col items-center justify-center gap-6 sm:w-auto sm:flex-row">
            <Link
              to="/contact"
              className="glass-premium group inline-flex items-center justify-center gap-3 rounded-full px-12 py-5 text-center text-lg font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:scale-105 hover:bg-teal hover:shadow-glow active:scale-95 border border-teal/30"
            >
              Start a Project
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://wa.me/8801400019228?text=Hello%20ENKRYX!%20I'm%20interested%20in%20building%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-12 py-5 text-center text-lg font-bold uppercase tracking-widest text-white transition-all hover:scale-105 hover:bg-white/10 hover:border-white/30 active:scale-95"
            >
              <MessageCircle size={20} className="transition-transform group-hover:scale-110" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Subtle Internal Grid Overlay */}
          <div className="absolute inset-0 -z-10 opacity-[0.03] animate-pulse-slow" aria-hidden="true">
            <svg className="h-full w-full" fill="none" viewBox="0 0 400 400">
              <defs>
                <pattern id="grid-cta" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-cta)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
