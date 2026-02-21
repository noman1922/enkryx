import MainLayout from "@/components/MainLayout";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
    return (
        <MainLayout>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-7xl uppercase italic tracking-tighter">About ENKRYX</h1>
                        <p className="mt-8 text-xl leading-8 text-gray-600">
                            We are a remote-first team of 4 expert minds, specialized in building smart, scalable, and affordable digital solutions. At ENKRYX, we deliver premium software quality without the traditional agency bloat.
                        </p>
                    </div>

                    <div className="mt-32 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
                        <div className="space-y-16">
                            <div>
                                <h2 className="text-3xl font-bold text-black uppercase tracking-tight">Our Mission</h2>
                                <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                                    Every great idea deserves a proper system. Our mission is to bridge the gap between complex business problems and simple, reliable digital solutions. We empower startups, local businesses, and international agencies with structured execution and high-performance software.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-black uppercase tracking-tight">What We Do</h2>
                                <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                                    We move fast and build smart. Our team multitasks across Custom Web Development, SaaS Product Development, WordPress Solutions, and Mobile Apps. From deep backend architecture to pixel-perfect UI/UX design, we provide end-to-end execution that keeps your business moving.
                                </p>
                            </div>
                        </div>

                        <div className="glass-card rounded-[2.5rem] p-12 lg:p-16">
                            <h2 className="text-3xl font-bold text-black uppercase tracking-tight">Our Values</h2>
                            <dl className="mt-12 space-y-10">
                                <div>
                                    <dt className="text-lg font-bold text-black uppercase tracking-widest text-teal">Structured Execution</dt>
                                    <dd className="mt-2 text-gray-600 italic">"Speed meets logic. We don't just build; we plan for scale."</dd>
                                </div>
                                <div>
                                    <dt className="text-lg font-bold text-black uppercase tracking-widest text-teal">Premium Minimalist Design</dt>
                                    <dd className="mt-2 text-gray-600 italic">"Clean, intuitive, and conversion-focused interfaces."</dd>
                                </div>
                                <div>
                                    <dt className="text-lg font-bold text-black uppercase tracking-widest text-teal">Long-term Support</dt>
                                    <dd className="mt-2 text-gray-600 italic">"We stay beyond the launch, ensuring your system remains stable."</dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    <div className="mt-32 border-t border-gray-100 pt-32">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold text-black uppercase tracking-tight">Future Vision</h2>
                            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
                                Our goal is to grow into a leading international software company and a global digital agency. We are committed to building impactful SaaS products and setting the standard for reliable, high-performance software engineering worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <CTASection />
        </MainLayout>
    );
}
