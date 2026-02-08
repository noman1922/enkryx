import MainLayout from "@/components/MainLayout";
import CTASection from "@/components/CTASection";
import data from "@/data/siteData.json";

export default function ServicesPage() {
    return (
        <MainLayout>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-7xl uppercase italic tracking-tighter">Our Services</h1>
                        <p className="mt-8 text-xl leading-8 text-gray-600">
                            We provide end-to-end software solutions that help businesses scale, automate, and succeed in the digital world.
                        </p>
                    </div>

                    <div className="mt-32 space-y-32">
                        {data.services.map((service, index) => (
                            <div key={service.id} className={`flex flex-col gap-16 lg:flex-row lg:items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="flex-1">
                                    <span className="text-sm font-bold uppercase tracking-[0.3em] text-teal">{service.title}</span>
                                    <h2 className="mt-6 text-4xl font-bold text-black uppercase tracking-tight leading-tight">{service.problem}</h2>
                                    <p className="mt-8 text-xl text-gray-600 leading-relaxed">
                                        {service.solution}
                                    </p>
                                </div>
                                <div className="flex-1 glass-card aspect-square rounded-[3rem] p-12 flex items-center justify-center transition-all hover:scale-[1.02]">
                                    {/* Placeholder for service illustration with higher fidelity glass feel */}
                                    <div className="text-teal/10 relative">
                                        <div className="absolute -inset-10 bg-teal/5 blur-3xl rounded-full"></div>
                                        {service.icon === "globe" && <svg className="h-64 w-64 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" /></svg>}
                                        {service.icon === "cpu" && <svg className="h-64 w-64 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>}
                                        {service.icon === "palette" && <svg className="h-64 w-64 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-3M9.707 3.293l-3.32 3.32a2 2 0 000 2.828l1.414 1.414a2 2 0 002.828 0l3.32-3.32a2 2 0 000-2.828l-1.414-1.414a2 2 0 00-2.828 0z" /></svg>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <CTASection />
        </MainLayout>
    );
}
