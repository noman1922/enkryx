export default function WorkProcess() {
    const steps = [
        { name: "Discover", description: "We dive deep into your requirements and business goals." },
        { name: "Plan", description: "Mapping out the technical architecture and user flow." },
        { name: "Build", description: "Agile development with regular updates and feedback." },
        { name: "Support", description: "Deployment and ongoing maintenance for peace of mind." },
    ];

    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-black sm:text-5xl uppercase italic tracking-tighter">How we work</h2>
                    <p className="mt-6 text-xl leading-8 text-gray-600">
                        A simple 4-step process to bring your digital vision to life.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid grid-cols-1 gap-4 sm:mt-16 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <div key={step.name} className="relative glass-card glass-hover-shine flex flex-col items-start text-left p-5 sm:p-7 rounded-[1rem] sm:rounded-[2rem] group transition-all hover:scale-[1.02]">
                            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-md sm:rounded-lg bg-teal/10 text-base sm:text-lg font-bold text-teal mb-3 sm:mb-6">
                                {index + 1}
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-black uppercase tracking-tight">{step.name}</h3>
                            <p className="mt-2 sm:mt-4 text-xs sm:text-sm leading-relaxed text-gray-500">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
