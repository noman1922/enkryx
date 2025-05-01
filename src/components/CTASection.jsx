import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-ultra glass-hover-shine animate-scale-in relative flex flex-col items-center justify-between gap-12 rounded-[3.5rem] p-12 md:flex-row md:p-20">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl font-bold uppercase tracking-tighter text-white sm:text-6xl italic">
              Ready to build <span className="text-teal underline decoration-teal/20 underline-offset-8">something great</span>?
            </h2>
            <p className="mt-8 text-xl text-white/70">Get in touch with us today for a free consultation and quote.</p>
          </div>
          <div className="flex w-full flex-col gap-6 sm:w-auto sm:flex-row">
            <Link
              to="/contact"
              className="glass-premium inline-flex items-center justify-center rounded-full px-12 py-5 text-center text-xl font-bold text-white shadow-xl transition-all hover:scale-110 hover:bg-teal hover:shadow-glow active:scale-95"
            >
              Get a Quote
            </Link>
            <a
              href="https://wa.me/8801400019228?text=Hello%20ENKRYX!%20I'm%20interested%20in%20building%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-md px-12 py-5 text-center text-xl font-bold text-white transition-all hover:scale-110 hover:bg-white/10 active:scale-95"
            >
              WhatsApp
            </a>
          </div>

          {/* Subtle Internal Grid Overlay */}
          <div className="absolute inset-0 -z-10 opacity-5" aria-hidden="true">
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
