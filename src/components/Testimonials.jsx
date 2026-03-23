import data from "@/data/siteData.json";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold uppercase tracking-tighter text-white sm:text-5xl italic">Client Feedback</h2>
          <p className="mt-6 text-xl leading-8 text-white/70">
            Trust is built through results. Here is what industry leaders have to say.
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-20 space-y-16 w-full">
        {/* Row 1: Swapping Left to Right */}
        <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] sm:[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused] gap-3 sm:gap-8 py-3 sm:py-4 px-3 sm:px-8">
            {[...data.testimonials, ...data.testimonials, ...data.testimonials, ...data.testimonials].map((testimonial, index) => (
              <div
                key={`row1-${index}`}
                className="glass-ultra glass-hover-shine group flex min-w-[240px] sm:min-w-[350px] max-w-[250px] sm:max-w-[400px] flex-col rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-10 transition-all duration-500 hover:scale-[1.02] hover:shadow-glow"
              >
                <blockquote className="flex-grow text-sm sm:text-lg font-medium leading-relaxed tracking-tight text-white italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-5 sm:mt-8 flex items-center gap-x-3 sm:gap-x-4 border-t border-white/10 pt-4 sm:pt-6">
                  <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-teal/20 bg-teal/10 text-sm sm:text-base font-bold uppercase text-teal shadow-lg transition-all duration-500 group-hover:bg-teal group-hover:text-white group-hover:shadow-glow">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="text-[10px] sm:text-xs leading-4 sm:leading-5">
                    <p className="font-bold uppercase tracking-widest text-white">{testimonial.author}</p>
                    <p className="mt-0.5 font-medium uppercase text-teal/80">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Swapping Right to Left */}
        <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] sm:[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused] gap-3 sm:gap-8 py-3 sm:py-4 px-3 sm:px-8">
            {[...data.testimonials, ...data.testimonials, ...data.testimonials, ...data.testimonials].map((testimonial, index) => (
              <div
                key={`row2-${index}`}
                className="glass-ultra glass-hover-shine group flex min-w-[240px] sm:min-w-[350px] max-w-[250px] sm:max-w-[400px] flex-col rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-10 transition-all duration-500 hover:scale-[1.02] hover:shadow-glow"
              >
                <blockquote className="flex-grow text-sm sm:text-lg font-medium leading-relaxed tracking-tight text-white italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-5 sm:mt-8 flex items-center gap-x-3 sm:gap-x-4 border-t border-white/10 pt-4 sm:pt-6">
                  <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-teal/20 bg-teal/10 text-sm sm:text-base font-bold uppercase text-teal shadow-lg transition-all duration-500 group-hover:bg-teal group-hover:text-white group-hover:shadow-glow">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="text-[10px] sm:text-xs leading-4 sm:leading-5">
                    <p className="font-bold uppercase tracking-widest text-white">{testimonial.author}</p>
                    <p className="mt-0.5 font-medium uppercase text-teal/80">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
