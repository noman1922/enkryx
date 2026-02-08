import Header from "./Header";
import Footer from "./Footer";
import TawkToWidget from "./TawkToWidget";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <TawkToWidget />
        </div>
    );
}
