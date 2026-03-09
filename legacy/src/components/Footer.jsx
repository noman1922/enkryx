import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-32">
                <img
                  src="/images/mylogo.png"
                  alt="ENKRYX Logo"
                  className="absolute inset-0 h-full w-full object-contain object-left"
                />
              </div>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-gray-500">
              We design and build simple, reliable software that keeps your business moving. Your idea deserves a
              proper system.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.facebook.com/people/Enkryx/61587497224691/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-all hover:bg-teal hover:text-white"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/enkryx/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-all hover:bg-teal hover:text-white"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/enkryx/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-all hover:bg-teal hover:text-white"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-black">Company</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link to="/" className="text-sm text-gray-500 transition-colors hover:text-teal">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-500 transition-colors hover:text-teal">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-gray-500 transition-colors hover:text-teal">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-gray-500 transition-colors hover:text-teal">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-black">What we do</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link to="/services" className="text-sm text-gray-500 transition-colors hover:text-teal">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-500 transition-colors hover:text-teal">
                  Software Systems
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-500 transition-colors hover:text-teal">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-500 transition-colors hover:text-teal">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-black">Get in touch</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <Mail size={16} className="text-teal" />
                <span>info@enkryx.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <Phone size={16} className="text-teal" />
                <span>+880 1400 019228</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <MapPin size={16} className="text-teal" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between">
          <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} ENKRYX. All rights reserved.</p>
          <div className="mt-4 flex gap-6 sm:mt-0">
            <a href="#" className="text-xs text-gray-400 transition-colors hover:text-teal">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-400 transition-colors hover:text-teal">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
