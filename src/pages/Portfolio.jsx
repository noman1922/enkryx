import { useState } from "react";
import MainLayout from "@/components/MainLayout";
import CTASection from "@/components/CTASection";
import CaseStudyModal from "@/components/CaseStudyModal";
import data from "@/data/siteData.json";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <MainLayout>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          <h1 className="text-4xl font-bold uppercase tracking-tighter text-white sm:text-6xl italic">
            Our <span className="text-teal underline decoration-teal/20 underline-offset-8">Portfolio</span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-white/70">
            A collection of projects that showcase our commitment to quality, performance, and user-centric design.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {data.projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`glass-ultra glass-hover-shine group relative flex flex-col overflow-hidden rounded-[2.5rem] transition-all duration-500 hover:scale-[1.05] hover:shadow-glow animate-fade-in-up stagger-${(index % 3) + 1} cursor-pointer`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="flex flex-1 flex-col p-10">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white transition-colors group-hover:text-teal font-font-premium">
                  {project.title}
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-white/60">{project.summary}</p>
                <div className="mt-auto pt-8">
                  <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-teal transition-all hover:gap-4">
                    View Case Study <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CTASection />

      <CaseStudyModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </MainLayout>
  );
}
