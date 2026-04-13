import MainLayout from "@/components/MainLayout";
import CTASection from "@/components/CTASection";
import data from "@/data/siteData.json";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, Code, Users, MessageSquare, Lightbulb, CheckCircle2, ArrowRight } from "lucide-react";

const iconMap = {
  Briefcase: Briefcase,
  Code: Code,
  Users: Users,
  MessageSquare: MessageSquare,
  Lightbulb: Lightbulb,
};

export default function ProgramsPage() {
  const { programs } = data;

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[30%] left-[20%] h-[1000px] w-[1000px] rounded-full bg-teal/5 blur-[120px]" />
          <div className="absolute top-[10%] right-[10%] h-[800px] w-[800px] rounded-full bg-teal/10 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center opacity-0 animate-fade-in-up">
            <span className="inline-flex items-center rounded-full bg-teal/10 px-4 py-1.5 text-sm font-semibold text-teal ring-1 ring-inset ring-teal/20">
              Youth Development Initiative
            </span>
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-black sm:text-6xl">
              {programs.hero.title}
            </h1>
            <p className="mt-8 text-lg leading-8 text-gray-600">
              {programs.hero.subtitle}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScDsEiMv3rtza--WDmGto7chmeyIbAvvbX602S4fOgy0VLdng/viewform?usp=header"
                className="rounded-full bg-teal px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-teal-dark hover:shadow-teal/20 transition-all"
              >
                Apply Now
              </Link>
              <Link href="#about" className="text-sm font-semibold leading-6 text-gray-900 group flex items-center gap-2">
                Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="opacity-0 animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">About the Program</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {programs.about.description}
              </p>
              <div className="mt-10 space-y-4">
                {programs.requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-teal shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative opacity-0 animate-slide-in-right stagger-2">
              <div className="glass relative overflow-hidden rounded-3xl p-4 shadow-2xl">
                <div className="aspect-video w-full overflow-hidden rounded-2xl relative bg-gray-200">
                  <Image
                    src={programs.about.image}
                    alt="ENKRYX Youth Development Program"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-teal/10 blur-2xl" />
                <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-teal/20 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center opacity-0 animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">What You Will Learn</h2>
            <p className="mt-4 text-lg text-gray-600">Gaining the skills that actually matter in the industry.</p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {programs.learning.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] || Code;
              return (
                <div
                  key={index}
                  className={`glass-card p-8 rounded-3xl opacity-0 animate-fade-in-up stagger-${(index % 3) + 1}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-black">{item.title}</h3>
                  <p className="mt-4 text-sm text-gray-600">
                    Hands-on training and mentorship focused on {item.title.toLowerCase()} to prepare you for the real world.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-black py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-teal/40 blur-[150px]" />
          <div className="absolute -bottom-[20%] -right-[10%] h-[600px] w-[600px] rounded-full bg-teal/30 blur-[150px]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center opacity-0 animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Program Benefits</h2>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {programs.benefits.map((benefit, index) => (
              <div
                key={index}
                className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm opacity-0 animate-fade-in-up stagger-${(index % 5) + 1}`}
              >
                <CheckCircle2 className="h-6 w-6 text-teal" />
                <p className="mt-4 font-semibold text-white">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center opacity-0 animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Program Structure</h2>
            <p className="mt-4 text-lg text-gray-600">A clear roadmap from application to certification.</p>
          </div>
          <div className="mt-20 relative">
            <div className="absolute left-[50%] top-0 h-full w-px bg-gray-200 hidden md:block" />
            <div className="space-y-16">
              {programs.structure.map((item, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} opacity-0 animate-fade-in-up stagger-${(index % 2) + 1}`}>
                  <div className="flex-1 w-full">
                    <div className={`glass-card p-8 rounded-3xl ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <span className="text-teal font-bold text-sm uppercase tracking-widest">Step 0{item.step}</span>
                      <h3 className="mt-2 text-2xl font-bold text-black">{item.title}</h3>
                      <p className="mt-4 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-teal text-white font-bold text-xl shadow-xl shadow-teal/20 ring-4 ring-white">
                    {item.step}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-black/60 p-12 sm:p-20 text-center opacity-0 animate-fade-in-up backdrop-blur-xl border border-white/20 shadow-2xl">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal/30 via-transparent to-transparent opacity-40" />
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Start Your Tech Journey with ENKRYX</h2>
            <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-200">
              Ready to bridge the gap between academic learning and industry reality? Join our next cohort.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScDsEiMv3rtza--WDmGto7chmeyIbAvvbX602S4fOgy0VLdng/viewform?usp=header"
                target="_blank"
                className="group rounded-full bg-white px-10 py-5 text-lg font-bold text-black transition-all hover:bg-gray-100 hover:scale-105 hover:shadow-xl hover:shadow-white/10"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/5 px-10 py-5 text-lg font-bold text-white transition-all hover:bg-white/10 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
}
