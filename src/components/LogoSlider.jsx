const logos = [
  { img: "/images/1.png" },
  { img: "/images/2.png" },
  { img: "/images/3.png" },
  { img: "/images/4.png" },
  { img: "/images/5.png" },
  { img: "/images/6.png" },
  { img: "/images/7.png" },
  { img: "/images/8.png" },
  { img: "/images/9.png" },
];

export default function LogoSlider() {
  return (
    <section className="bg-ultra-mesh relative overflow-hidden border-y border-white/5 py-16">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .scroll-container {
          display: flex;
          width: max-content;
          animation: scroll 60s linear infinite;
        }
        .scroll-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.4em] text-white/60">
          Trusted by partners and clients worldwide
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="scroll-container items-center gap-12 whitespace-nowrap px-4 sm:gap-24">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex flex-shrink-0 items-center justify-center opacity-80 grayscale contrast-125 brightness-150 transition-all duration-500 hover:scale-110 hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_0_10px_rgba(0,111,135,0.4)]"
            >
              <div className="relative h-10 w-28 sm:h-12 sm:w-36">
                <img src={logo.img} alt="Partner logo" className="absolute inset-0 h-full w-full object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
