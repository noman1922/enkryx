import data from "@/data/siteData.json";
import Image from "next/image";

export default function Testimonials() {
    return (
        <section className="bg-gray-50 py-24 sm:py-32 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 left-0 -z-10 h-full w-full opacity-10">
                <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-teal blur-[80px]"></div>
                <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-teal blur-[80px]"></div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-black sm:text-5xl uppercase italic tracking-tighter">Client Feedback</h2>
                    <p className="mt-6 text-xl leading-8 text-gray-600">
                        Trust is built through results. Here is what industry leaders have to say.
                    </p>
                </div>
                <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {data.testimonials.map((testimonial, index) => (
                        <div key={index} className="glass-card glass-hover-shine flex flex-col rounded-[2.5rem] p-12 transition-all hover:scale-[1.01]">
                            <blockquote className="flex-grow text-2xl font-medium leading-relaxed text-black tracking-tight">
                                &ldquo;{testimonial.quote}&rdquo;
                            </blockquote>
                            <div className="mt-10 flex items-center gap-x-6 border-t border-black/5 pt-8">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white font-bold text-xl shadow-lg border-2 border-teal/20 uppercase">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div className="text-sm leading-6">
                                    <p className="font-bold text-black uppercase tracking-widest">{testimonial.author}</p>
                                    <p className="text-teal font-medium uppercase text-xs mt-1">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
