import MainLayout from "@/components/MainLayout";
import CTASection from "@/components/CTASection";
import data from "@/data/siteData.json";
import { Facebook, Linkedin, Github, Globe } from "lucide-react";

export default function TeamPage() {
  return (
    <MainLayout>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center opacity-0 animate-fade-in-up">
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-black sm:text-5xl italic">
              Our <span className="text-teal">Team</span>
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">The collective mind powering every project.</p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {data.team.map((member, index) => (
              <div
                key={member.name}
                className={`glass-card glass-hover-shine group relative flex flex-col overflow-hidden rounded-[2rem] pt-12 opacity-0 transition-all animate-fade-in-up stagger-${(index % 3) + 1}`}
              >
                <div className="flex flex-col items-center px-10 pb-10">
                  <div className="relative h-64 w-64 overflow-hidden rounded-full ring-4 ring-teal shadow-2xl transition-transform duration-500 group-hover:scale-105">
                    <img src={member.image} alt={member.name} className="absolute inset-0 h-full w-full object-cover" />
                  </div>

                  <div className="mt-8 text-center">
                    <h3 className="text-2xl font-bold text-black">{member.name}</h3>
                    <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-teal">{member.role}</p>
                    <p className="mx-auto mt-6 max-w-xs text-sm leading-relaxed text-gray-500">{member.bio}</p>
                  </div>
                </div>

                <div className="mt-auto flex justify-center gap-8 border-t border-white/20 bg-teal/10 p-6 backdrop-blur-sm">
                  {member.socials.facebook && (
                    <a
                      href={member.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition-all hover:scale-110 hover:text-teal"
                    >
                      <Facebook size={22} />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition-all hover:scale-110 hover:text-teal"
                    >
                      <Linkedin size={22} />
                    </a>
                  )}
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition-all hover:scale-110 hover:text-teal"
                    >
                      <Github size={22} />
                    </a>
                  )}
                  {member.socials.portfolio && (
                    <a
                      href={member.socials.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition-all hover:scale-110 hover:text-teal"
                    >
                      <Globe size={22} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </MainLayout>
  );
}
