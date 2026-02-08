import MainLayout from "@/components/MainLayout";
import CTASection from "@/components/CTASection";
import data from "@/data/siteData.json";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
    return (
        <MainLayout>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center opacity-0 animate-fade-in-up">
                        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Our Portfolio</h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            A collection of projects that showcase our commitment to quality, performance, and user-centric design.
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                        {data.projects.map((project, index) => (
                            <div key={project.id} className={`group relative flex flex-col overflow-hidden rounded-3xl bg-gray-50 transition-all hover:bg-white hover:shadow-xl hover:ring-1 hover:ring-gray-100 opacity-0 animate-fade-in-up stagger-${(index % 3) + 1}`}>
                                <Link href={project.liveUrl || "#"} target={project.liveUrl !== "#" ? "_blank" : undefined} className={project.liveUrl === "#" ? "cursor-default" : ""}>
                                    <div className="aspect-[16/10] w-full bg-gray-200 overflow-hidden relative">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col p-8">
                                        <h3 className="text-2xl font-bold text-black group-hover:text-teal transition-colors">{project.title}</h3>
                                        <p className="mt-4 text-base text-gray-600 leading-relaxed">
                                            {project.summary}
                                        </p>
                                        <p className="mt-6 text-sm text-gray-500 line-clamp-3">
                                            {project.details}
                                        </p>
                                        <div className="mt-auto pt-8">
                                            <span className="text-sm font-bold uppercase tracking-widest text-teal">
                                                {project.liveUrl === "#" ? "Coming Soon" : "View Live Demo"}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <CTASection />
        </MainLayout>
    );
}
