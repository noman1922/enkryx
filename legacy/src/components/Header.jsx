import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
    <header className="glass-nav">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-32 sm:h-12 sm:w-40">
            <img
              src="/images/mylogo.png"
              alt="ENKRYX Logo"
              className="absolute inset-0 h-full w-full object-contain object-left"
            />
          </div>
        </Link>

        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-teal ${
                pathname === link.href ? "text-teal" : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-teal px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-dark hover:shadow-teal/20"
          >
            Get a Quote
          </Link>
        </nav>

        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition-colors hover:bg-white/40 hover:text-teal focus:outline-none"
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
        <div className="glass relative z-50 md:hidden">
          <div className="space-y-1 px-4 pb-6 pt-2 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-3 text-base font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-teal/10 text-teal"
                    : "text-gray-600 hover:bg-white/40 hover:text-teal"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 block w-full rounded-md bg-teal px-3 py-4 text-center text-lg font-semibold text-white shadow-lg"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
