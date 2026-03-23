import CircularGallery from "@/components/ui/CircularGallery";
import { teamGallery } from "@/data/teamGallery";

const items = teamGallery.map((img) => ({
  image: img,
  text: "Enkryx"
}));

export default function TeamGallery() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold uppercase tracking-tighter text-white sm:text-5xl italic">
            Inside <span className="text-teal underline decoration-teal/20 underline-offset-8">Enkryx</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-white/70">
            Moments from our team meetings and collaboration.
          </p>
        </div>

        <div className="relative h-[360px] sm:h-[420px] md:h-[520px] lg:h-[600px] overflow-hidden rounded-3xl glass-ultra shadow-glow animate-fade-in-up">
          <CircularGallery
            items={items}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.08}
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>
      </div>
    </section>
  );
}
