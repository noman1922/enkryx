import data from "@/data/siteData.json";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioTeaser() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center opacity-0 animate-fade-in-up">
                    <h2 className="text-3xl font-bold tracking-tight text-black sm:text-5xl uppercase italic tracking-tighter">Selected <span className="text-teal">Works</span></h2>
                    <p className="mt-6 text-xl leading-8 text-gray-600">
                        A glimpse into the systems we've built.
                    </p>
                </div>
                <div className="mx-auto mt-20 grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
                    {data.projects.slice(0, 2).map((project, index) => (
                        <div key={project.id} className={`group glass-card glass-hover-shine relative overflow-hidden rounded-[2.5rem] transition-all hover:scale-[1.02] opacity-0 animate-fade-in-up stagger-${(index % 2) + 1}`}>
                            <Link href={project.liveUrl || "#"} target={project.liveUrl !== "#" ? "_blank" : undefined} className={project.liveUrl === "#" ? "cursor-default" : ""}>
                                <div className="aspect-[16/10] w-full bg-gray-100 overflow-hidden relative border-b border-black/5">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                                <div className="p-12">
                                    <h3 className="text-3xl font-bold text-black uppercase tracking-tight group-hover:text-teal transition-colors">{project.title}</h3>
                                    <p className="mt-6 text-lg text-gray-500 line-clamp-2 leading-relaxed">{project.summary}</p>
                                    <div className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-teal uppercase tracking-[0.2em] hover:gap-4 transition-all">
                                        {project.liveUrl === "#" ? "Coming Soon" : "View Live Demo"} <span aria-hidden="true">→</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
