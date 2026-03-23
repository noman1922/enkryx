import { Link } from "react-router-dom";
import data from "@/data/siteData.json";
import { Facebook, Linkedin, Github, Globe } from "lucide-react";

export default function TeamTeaser() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold uppercase tracking-tighter text-white sm:text-5xl italic">Meet the team</h2>
          <p className="mt-6 text-xl leading-8 text-white/70">Expert minds dedicated to building your vision.</p>
        </div>
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {data.team.slice(0, 4).map((member, index) => (
            <div
              key={member.name}
              className={`glass-ultra glass-hover-shine group relative flex flex-col overflow-hidden rounded-[2.5rem] pt-10 transition-all duration-500 hover:scale-[1.05] hover:shadow-glow animate-fade-in-up stagger-${(index % 4) + 1}`}
            >
              <Link to="/team" className="flex flex-col items-center px-8 pb-8">
                <div className="relative h-48 w-48 overflow-hidden rounded-full ring-4 ring-teal shadow-xl transition-transform duration-700 group-hover:scale-110">
                  <img src={member.image} alt={member.name} className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div className="mt-8 px-4 text-center">
                  <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-teal font-font-premium">{member.name}</h3>
                  <p className="mt-2 text-sm font-bold uppercase tracking-widest text-teal">{member.role}</p>
                  <p className="mt-6 line-clamp-2 text-sm italic leading-relaxed text-white/60">"{member.bio}"</p>
                </div>
              </Link>

              <div className="mt-auto flex justify-center gap-5 border-t border-white/10 bg-white/5 p-5 backdrop-blur-md transition-colors group-hover:bg-white/10">
                {member.socials.facebook && (
                  <a
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 transition-all hover:scale-125 hover:text-teal"
                  >
                    <Facebook size={20} />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 transition-all hover:scale-125 hover:text-teal"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 transition-all hover:scale-125 hover:text-teal"
                  >
                    <Github size={20} />
                  </a>
                )}
                {member.socials.portfolio && (
                  <a
                    href={member.socials.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 transition-all hover:scale-125 hover:text-teal"
                  >
                    <Globe size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center animate-fade-in-up stagger-3">
          <Link to="/team" className="group text-sm font-bold uppercase tracking-[0.3em] text-teal transition-all hover:text-white">
            Meet the full team <span aria-hidden="true" className="ml-1 inline-block transition-transform group-hover:translate-x-2">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
