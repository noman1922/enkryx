import Header from "./Header";
import Footer from "./Footer";
import TawkToWidget from "./TawkToWidget";

export default function MainLayout({ children }) {
  return (
    <div className="bg-ultra-mesh relative min-h-screen overflow-x-hidden text-white transition-colors duration-500">
      <Header />
      <main className="relative z-10 flex-grow">{children}</main>
      <Footer />
      <TawkToWidget />
    </div>
  );
}
