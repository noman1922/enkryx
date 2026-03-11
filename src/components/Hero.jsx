import { Link } from "react-router-dom";
import GridDistortion from "./GridDistortion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-transparent py-24 sm:py-32">

      {/* Grid Distortion Background — warps hero_bg.png with mouse movement */}
      <div className="absolute inset-0 z-0">
        <GridDistortion
          imageSrc="/images/hero_bg.png"
          grid={12}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
        />
      </div>

      {/* Subtle dark tint — lets distortion show everywhere including under text */}
      <div className="absolute inset-0 z-[1] bg-black/35 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8 lg:pt-32 pointer-events-none">
        <div className="max-w-4xl opacity-0 animate-fade-in-up">
          <div className="mb-8 inline-flex items-center space-x-2 rounded-full bg-white/10 px-3 py-1 text-sm font-bold text-teal ring-1 ring-inset ring-white/20 opacity-0 animate-fade-in-up stagger-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal"></span>
            </span>
            <span className="text-[10px] uppercase tracking-widest">Now accepting new projects</span>
          </div>
          <h1 className="text-4xl font-bold uppercase leading-[0.9] tracking-tighter text-white opacity-0 animate-fade-in-up stagger-2 sm:text-7xl lg:text-8xl italic">
            Your idea deserves a <span className="text-teal">proper</span> system.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-gray-300 opacity-0 animate-fade-in-up stagger-3">
            We design and build simple, reliable software that keeps your business moving. No bloat, no friction - just
            clean execution.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-6 opacity-0 animate-fade-in-up stagger-3" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/contact"
              className="pointer-events-auto rounded-full bg-teal px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-teal/20 transition-all hover:scale-105 hover:bg-teal-dark active:scale-95"
            >
              Build my project
            </Link>
            <Link to="/portfolio" className="pointer-events-auto group flex items-center space-x-3 text-lg font-bold text-white transition-colors hover:text-teal">
              <span>See our work</span>
              <svg className="h-6 w-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Extra glow accent */}
      <div className="absolute right-0 top-0 z-[1] h-full w-full opacity-30 pointer-events-none" aria-hidden="true">
        <div className="absolute right-[-10%] top-[-10%] h-[50%] w-[50%] rounded-full bg-teal/20 blur-[120px]"></div>
      </div>
    </section>
  );
}
