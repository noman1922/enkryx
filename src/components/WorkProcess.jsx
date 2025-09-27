export default function WorkProcess() {
    const steps = [
        { name: "Discover", description: "We dive deep into your requirements and business goals." },
        { name: "Plan", description: "Mapping out the technical architecture and user flow." },
        { name: "Build", description: "Agile development with regular updates and feedback." },
        { name: "Support", description: "Deployment and ongoing maintenance for peace of mind." },
    ];

    return (
        <section className="relative overflow-hidden py-24 sm:py-32">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl uppercase italic tracking-tighter">How we work</h2>
                    <p className="mt-6 text-xl leading-8 text-white/70">
                        A simple 4-step process to bring your digital vision to life.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid grid-cols-1 gap-4 sm:mt-16 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <div key={step.name} className="glass-ultra glass-hover-shine group relative flex flex-col items-start rounded-[2rem] p-8 text-left transition-all duration-500 hover:scale-[1.05] hover:shadow-glow animate-fade-in-up">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/20 font-font-premium text-xl font-bold text-teal transition-all duration-500 group-hover:bg-teal group-hover:text-white group-hover:shadow-glow">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-tight text-white">{step.name}</h3>
                            <p className="mt-4 text-sm leading-relaxed text-white/60">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
