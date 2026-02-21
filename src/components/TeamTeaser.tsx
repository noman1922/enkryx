import data from "@/data/siteData.json";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Github, Globe } from "lucide-react";

export default function TeamTeaser() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center opacity-0 animate-fade-in-up">
                    <h2 className="text-3xl font-bold tracking-tight text-black sm:text-5xl uppercase italic tracking-tighter">Meet the team</h2>
                    <p className="mt-6 text-xl leading-8 text-gray-600">
                        Expert minds dedicated to building your vision.
                    </p>
                </div>
                <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {data.team.slice(0, 4).map((member, index) => (
                        <div key={member.name} className={`glass-card glass-hover-shine group relative flex flex-col overflow-hidden rounded-[2rem] transition-all pt-10 hover:scale-[1.02] opacity-0 animate-fade-in-up stagger-${(index % 3) + 1}`}>
                            <Link href="/team" className="flex flex-col items-center px-8 pb-8">
                                <div className="relative h-48 w-48 overflow-hidden rounded-full ring-4 ring-teal shadow-xl transition-transform duration-500 group-hover:scale-110">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="mt-8 text-center px-4">
                                    <h3 className="text-2xl font-bold text-black group-hover:text-teal transition-colors">{member.name}</h3>
                                    <p className="text-teal font-semibold text-sm uppercase tracking-wider mt-2">{member.role}</p>
                                    <p className="mt-6 text-gray-500 text-sm italic leading-relaxed line-clamp-2">"{member.bio}"</p>
                                </div>
                            </Link>

                            <div className="mt-auto bg-teal/5 backdrop-blur-sm border-t border-white/10 p-4 flex justify-center gap-5">
                                {member.socials.facebook && (
                                    <Link href={member.socials.facebook} target="_blank" className="text-gray-400 hover:text-teal transition-all hover:scale-110">
                                        <Facebook size={18} />
                                    </Link>
                                )}
                                {member.socials.linkedin && (
                                    <Link href={member.socials.linkedin} target="_blank" className="text-gray-400 hover:text-teal transition-all hover:scale-110">
                                        <Linkedin size={18} />
                                    </Link>
                                )}
                                {member.socials.github && (
                                    <Link href={member.socials.github} target="_blank" className="text-gray-400 hover:text-teal transition-all hover:scale-110">
                                        <Github size={18} />
                                    </Link>
                                )}
                                {member.socials.portfolio && (
                                    <Link href={member.socials.portfolio} target="_blank" className="text-gray-400 hover:text-teal transition-all hover:scale-110">
                                        <Globe size={18} />
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <Link href="/team" className="text-sm font-bold uppercase tracking-widest text-teal hover:underline">
                        Meet the full team <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
