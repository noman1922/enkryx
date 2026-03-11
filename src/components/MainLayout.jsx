import { useEffect } from "react";
import Lenis from "lenis";
import Header from "./Header";
import Footer from "./Footer";
import TawkToWidget from "./TawkToWidget";
import CursorGlow from "./CursorGlow";

export default function MainLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      smoothTouch: false,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-ultra-mesh relative min-h-screen overflow-x-hidden text-white transition-colors duration-500">
      <Header />
      <main className="relative z-10 flex-grow">{children}</main>
      <Footer />
      <TawkToWidget />

      <CursorGlow />
    </div>
  );
}
