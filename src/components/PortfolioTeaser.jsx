import { Link } from "react-router-dom";
import data from "@/data/siteData.json";

export default function PortfolioTeaser() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center opacity-0 animate-fade-in-up">
          <h2 className="text-3xl font-bold uppercase tracking-tighter text-black sm:text-5xl italic">
            Selected <span className="text-teal">Works</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">A glimpse into the systems we have built.</p>
        </div>
        <div className="mx-auto mt-20 grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-3">
          {data.projects.slice(0, 3).map((project, index) => (
            <div
              key={project.id}
              className={`glass-card glass-hover-shine group relative overflow-hidden rounded-[2.5rem] opacity-0 transition-all hover:scale-[1.02] animate-fade-in-up stagger-${(index % 3) + 1}`}
            >
              <a
                href={project.liveUrl || "#"}
                target={project.liveUrl !== "#" ? "_blank" : undefined}
                rel={project.liveUrl !== "#" ? "noopener noreferrer" : undefined}
                className={project.liveUrl === "#" ? "cursor-default" : ""}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-black/5 bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-12">
                  <h3 className="text-3xl font-bold uppercase tracking-tight text-black transition-colors group-hover:text-teal">
                    {project.title}
                  </h3>
                  <p className="mt-6 line-clamp-2 text-lg leading-relaxed text-gray-500">{project.summary}</p>
                  <div className="mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-teal transition-all hover:gap-4">
                    {project.liveUrl === "#" ? "Coming Soon" : "View Live Demo"} <span aria-hidden="true">&rarr;</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center opacity-0 animate-fade-in-up stagger-3">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-xl transition-all hover:scale-105 hover:bg-teal active:scale-95"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
