import Header from "./Header";
import Footer from "./Footer";
import TawkToWidget from "./TawkToWidget";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <TawkToWidget />
    </div>
  );
}
