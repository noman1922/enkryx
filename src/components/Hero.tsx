import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-black py-24 sm:py-32">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero_bg.png"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-24 sm:px-6 lg:px-8 lg:pt-32">
                <div className="max-w-4xl opacity-0 animate-fade-in-up">
                    <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 px-3 py-1 text-sm font-bold text-teal ring-1 ring-inset ring-white/20 mb-8 opacity-0 animate-fade-in-up stagger-1">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal"></span>
                        </span>
                        <span className="uppercase tracking-widest text-[10px]">Now accepting new projects</span>
                    </div>
                    <h1 className="text-5xl font-bold tracking-tight text-white sm:text-8xl italic uppercase leading-[0.9] tracking-tighter opacity-0 animate-fade-in-up stagger-2">
                        Your idea deserves a <span className="text-teal">proper</span> system.
                    </h1>
                    <p className="mt-8 text-xl leading-8 text-gray-300 max-w-2xl opacity-0 animate-fade-in-up stagger-3">
                        We design and build simple, reliable software that keeps your business moving. No bloat, no friction—just clean execution.
                    </p>
                    <div className="mt-12 flex flex-wrap items-center gap-6 opacity-0 animate-fade-in-up stagger-3" style={{ animationDelay: '0.4s' }}>
                        <Link
                            href="/contact"
                            className="rounded-full bg-teal px-10 py-5 text-lg font-bold text-white shadow-2xl transition-all hover:bg-teal-dark hover:scale-105 active:scale-95 shadow-teal/20"
                        >
                            Build my project
                        </Link>
                        <Link
                            href="/portfolio"
                            className="group flex items-center space-x-3 text-lg font-bold text-white hover:text-teal transition-colors"
                        >
                            <span>See our work</span>
                            <svg className="h-6 w-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Subtle light accents */}
            <div className="absolute top-0 right-0 z-0 h-full w-full opacity-30" aria-hidden="true">
                <div className="absolute top-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-teal/20 blur-[120px]"></div>
            </div>
        </section>
    );
}
