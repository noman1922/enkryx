import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-teal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl font-bold uppercase tracking-tighter text-white sm:text-6xl italic">
              Ready to build something great?
            </h2>
            <p className="mt-8 text-xl text-teal-50">Get in touch with us today for a free consultation and quote.</p>
          </div>
          <div className="flex w-full flex-col gap-6 sm:w-auto sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-white px-12 py-5 text-center text-xl font-bold text-teal shadow-xl transition-all hover:scale-105 hover:bg-gray-50"
            >
              Get a Quote
            </Link>
            <a
              href="https://wa.me/8801400019228?text=Hello%20ENKRYX!%20I'm%20interested%20in%20building%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-white/30 bg-black/20 px-12 py-5 text-center text-xl font-bold text-white transition-all hover:scale-105 hover:bg-white/10"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 opacity-10" aria-hidden="true">
        <svg className="h-full w-full" fill="none" viewBox="0 0 400 400">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
}
