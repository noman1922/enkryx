import MainLayout from "@/components/MainLayout";
import CTASection from "@/components/CTASection";
import data from "@/data/siteData.json";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Github, Globe } from "lucide-react";

export default function TeamPage() {
    return (
        <MainLayout>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center opacity-0 animate-fade-in-up">
                        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-5xl uppercase italic tracking-tighter">Our <span className="text-teal">Team</span></h2>
                        <p className="mt-6 text-xl leading-8 text-gray-600">
                            The collective mind powering every project.
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                        {data.team.map((member, index) => (
                            <div key={member.name} className={`glass-card glass-hover-shine group relative flex flex-col overflow-hidden rounded-[2rem] transition-all pt-12 opacity-0 animate-fade-in-up stagger-${(index % 3) + 1}`}>
                                <div className="flex flex-col items-center px-10 pb-10">
                                    <div className="relative h-64 w-64 overflow-hidden rounded-full ring-4 ring-teal shadow-2xl transition-transform duration-500 group-hover:scale-105">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="mt-8 text-center">
                                        <h3 className="text-2xl font-bold text-black">{member.name}</h3>
                                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal mt-3">{member.role}</p>
                                        <p className="mt-6 text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-auto bg-teal/10 backdrop-blur-sm border-t border-white/20 p-6 flex justify-center gap-8">
                                    {member.socials.facebook && (
                                        <Link href={member.socials.facebook} target="_blank" className="text-gray-400 hover:text-teal transition-all hover:scale-110">
                                            <Facebook size={22} />
                                        </Link>
                                    )}
                                    {member.socials.linkedin && (
                                        <Link href={member.socials.linkedin} target="_blank" className="text-gray-400 hover:text-teal transition-all hover:scale-110">
                                            <Linkedin size={22} />
                                        </Link>
                                    )}
                                    {member.socials.github && (
                                        <Link href={member.socials.github} target="_blank" className="text-gray-400 hover:text-teal transition-all hover:scale-110">
                                            <Github size={22} />
                                        </Link>
                                    )}
                                    {member.socials.portfolio && (
                                        <Link href={member.socials.portfolio} target="_blank" className="text-gray-400 hover:text-teal transition-all hover:scale-110">
                                            <Globe size={22} />
                                        </Link>
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

