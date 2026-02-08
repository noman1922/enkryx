import MainLayout from "@/components/MainLayout";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
    return (
        <MainLayout>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-7xl uppercase italic tracking-tighter">About ENKRYX</h1>
                        <p className="mt-8 text-xl leading-8 text-gray-600">
                            We are a team of dedicated developers and designers focused on building software that makes a difference.
                        </p>
                    </div>

                    <div className="mt-32 grid grid-cols-1 gap-16 lg:grid-cols-2">
                        <div>
                            <h2 className="text-4xl font-bold text-black uppercase tracking-tight">Our Mission</h2>
                            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
                                At ENKRYX, we believe that every great idea deserves a proper system. Our mission is to bridge the gap between complex problems and simple, reliable digital solutions.
                            </p>
                            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                                We don't just write code; we partner with businesses to understand their unique challenges and build the infrastructure they need to thrive.
                            </p>
                        </div>
                        <div className="glass-card rounded-[2.5rem] p-12 lg:p-16">
                            <h2 className="text-4xl font-bold text-black uppercase tracking-tight">Our Values</h2>
                            <dl className="mt-12 space-y-12">
                                <div>
                                    <dt className="text-xl font-bold text-black uppercase tracking-widest text-teal">Reliability</dt>
                                    <dd className="mt-3 text-lg text-gray-600">Systems that work when you need them most, without fail.</dd>
                                </div>
                                <div>
                                    <dt className="text-xl font-bold text-black uppercase tracking-widest text-teal">Simplicity</dt>
                                    <dd className="mt-3 text-lg text-gray-600">Reducing complexity to its most functional and intuitive form.</dd>
                                </div>
                                <div>
                                    <dt className="text-xl font-bold text-black uppercase tracking-widest text-teal">Commitment</dt>
                                    <dd className="mt-3 text-lg text-gray-600">Going above and beyond to ensure our clients' success.</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
            <CTASection />
        </MainLayout>
    );
}
