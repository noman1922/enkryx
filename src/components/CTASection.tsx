import Link from "next/link";

export default function CTASection() {
    return (
        <section className="relative overflow-hidden bg-teal py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl uppercase italic tracking-tighter">
                            Ready to build something great?
                        </h2>
                        <p className="mt-8 text-xl text-teal-50">
                            Get in touch with us today for a free consultation and quote.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-auto">
                        <Link
                            href="/contact"
                            className="rounded-full bg-white px-12 py-5 text-center text-xl font-bold text-teal hover:bg-gray-50 transition-all hover:scale-105 shadow-xl"
                        >
                            Get a Quote
                        </Link>
                        <Link
                            href="https://wa.me/8801400019228?text=Hello%20ENKRYX!%20I'm%20interested%20in%20building%20a%20project."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black/20 border-2 border-white/30 px-12 py-5 rounded-full text-center text-xl font-bold text-white hover:bg-white/10 transition-all hover:scale-105"
                        >
                            WhatsApp
                        </Link>
                    </div>
                </div>
            </div>

            {/* Background pattern */}
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
