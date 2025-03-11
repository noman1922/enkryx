import { Link } from "react-router-dom";
import data from "@/data/siteData.json";

export default function PortfolioTeaser() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold uppercase tracking-tighter text-white sm:text-5xl italic">
            Selected <span className="text-teal underline decoration-teal/20 underline-offset-8">Works</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-white/70">A glimpse into the systems we have built.</p>
        </div>
        <div className="mx-auto mt-20 grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-3">
          {data.projects.slice(0, 3).map((project, index) => (
            <div
              key={project.id}
              className={`glass-ultra glass-hover-shine group relative overflow-hidden rounded-[2.5rem] transition-all duration-500 hover:scale-[1.05] hover:shadow-glow animate-fade-in-up stagger-${(index % 3) + 1}`}
            >
              <a
                href={project.liveUrl || "#"}
                target={project.liveUrl !== "#" ? "_blank" : undefined}
                rel={project.liveUrl !== "#" ? "noopener noreferrer" : undefined}
                className={project.liveUrl === "#" ? "cursor-default" : ""}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white transition-colors group-hover:text-teal font-font-premium">
                    {project.title}
                  </h3>
                  <p className="mt-6 line-clamp-2 text-lg leading-relaxed text-white/60">{project.summary}</p>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-teal transition-all hover:gap-4">
                    {project.liveUrl === "#" ? "Coming Soon" : "View Live Demo"} <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center animate-fade-in-up stagger-3">
          <Link
            to="/portfolio"
            className="glass-premium inline-flex items-center justify-center rounded-full px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:scale-110 hover:bg-teal hover:shadow-glow active:scale-95"
          >
            Explore Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
