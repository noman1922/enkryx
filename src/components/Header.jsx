import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ScrambledText from "./ScrambledText";
import GlassBar from "./GlassBar";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useLocation().pathname;

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[95%] -translate-x-1/2 transition-all duration-300">
      {/* 3D Glass bar canvas — stays behind all nav content */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ pointerEvents: 'none', zIndex: 0 }}>
        <GlassBar />
      </div>
      <div className="relative glass-nav rounded-2xl px-4 py-3 sm:px-6 lg:px-8" style={{ zIndex: 1, background: 'transparent' }}>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95">
            <div className="relative h-10 w-32 sm:h-12 sm:w-40">
              <img
                src="/images/mylogo.png"
                alt="ENKRYX Logo"
                className="absolute inset-0 h-full w-full object-contain object-left brightness-0 invert"
              />
            </div>
          </Link>

          <nav className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-semibold tracking-wide transition-all hover:text-teal hover:scale-105 ${
                  pathname === link.href ? "text-teal" : "text-white/80"
                }`}
              >
                <ScrambledText>{link.name}</ScrambledText>
              </Link>
            ))}
            <Link
              to="/contact"
              className="rounded-full bg-teal px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-teal/20 transition-all hover:bg-teal-dark hover:scale-105 active:scale-95"
            >
              <ScrambledText>Get a Quote</ScrambledText>
            </Link>
          </nav>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-xl p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="glass-premium absolute top-full left-0 mt-4 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-2xl md:hidden">
            <div className="space-y-1 px-4 pb-8 pt-4 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-xl px-4 py-4 text-lg font-semibold transition-all ${
                    pathname === link.href
                      ? "bg-teal/20 text-teal"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <ScrambledText>{link.name}</ScrambledText>
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full rounded-xl bg-teal px-3 py-4 text-center text-xl font-bold text-white shadow-lg"
                >
                  <ScrambledText>Get a Quote</ScrambledText>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
