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
    <section className="overflow-hidden border-y border-gray-100 bg-gray-50 py-12">
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

      <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
          Trusted by partners and clients worldwide
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="scroll-container items-center gap-12 whitespace-nowrap px-4 sm:gap-20">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex flex-shrink-0 items-center justify-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <div className="relative h-12 w-32 sm:h-16 sm:w-40">
                <img src={logo.img} alt="Partner logo" className="absolute inset-0 h-full w-full object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
