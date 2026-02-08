import data from "@/data/siteData.json";
import Link from "next/link";

export default function ServicesPreview() {
    return (
        <section className="bg-white py-24 sm:py-32 relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl opacity-0 animate-fade-in-up">
                    <h2 className="text-3xl font-bold tracking-tight text-black sm:text-5xl uppercase italic tracking-tighter">Everything you need to <span className="text-teal">scale</span>.</h2>
                    <p className="mt-6 text-xl text-gray-600">
                        We don't just write code; we build the logic that powers your business.
                    </p>
                </div>
                <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {data.services.map((service, index) => (
                        <div key={service.id} className={`glass-card group flex flex-col p-10 rounded-[2.5rem] hover:scale-[1.02] opacity-0 animate-fade-in-up stagger-${(index % 3) + 1}`}>
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal/10 text-teal mb-8">
                                {/* SVG icons remain unchanged */}
                                {service.icon === "globe" && (
                                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
                                    </svg>
                                )}
                                {service.icon === "cpu" && (
                                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                    </svg>
                                )}
                                {service.icon === "palette" && (
                                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-3M9.707 3.293l-3.32 3.32a2 2 0 000 2.828l1.414 1.414a2 2 0 002.828 0l3.32-3.32a2 2 0 000-2.828l-1.414-1.414a2 2 0 00-2.828 0z" />
                                    </svg>
                                )}
                            </div>
                            <h3 className="text-2xl font-bold text-black uppercase tracking-tight">{service.title}</h3>
                            <p className="mt-6 text-lg leading-relaxed text-gray-500">{service.solution}</p>
                            <div className="mt-auto pt-10">
                                <Link href="/services" className="text-sm font-bold uppercase tracking-widest text-teal hover:underline">
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
