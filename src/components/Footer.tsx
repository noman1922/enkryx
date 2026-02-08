import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-gray-100 bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="relative h-10 w-32">
                                <Image
                                    src="/images/mylogo.png"
                                    alt="ENKRYX Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="mt-6 text-sm leading-relaxed text-gray-500">
                            We design and build simple, reliable software that keeps your business moving. Your idea deserves a proper system.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <Link href="https://www.facebook.com/people/Enkryx/61587497224691/" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-teal hover:text-white transition-all">
                                <Facebook size={18} />
                            </Link>
                            <Link href="https://www.instagram.com/enkryx/" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-teal hover:text-white transition-all">
                                <Instagram size={18} />
                            </Link>
                            <Link href="https://www.linkedin.com/company/enkryx/" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-teal hover:text-white transition-all">
                                <Linkedin size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-black">Company</h3>
                        <ul className="mt-6 space-y-4">
                            <li><Link href="/" className="text-sm text-gray-500 hover:text-teal transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-sm text-gray-500 hover:text-teal transition-colors">About Us</Link></li>
                            <li><Link href="/portfolio" className="text-sm text-gray-500 hover:text-teal transition-colors">Portfolio</Link></li>
                            <li><Link href="/team" className="text-sm text-gray-500 hover:text-teal transition-colors">Our Team</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-black">What we do</h3>
                        <ul className="mt-6 space-y-4">
                            <li><Link href="/services" className="text-sm text-gray-500 hover:text-teal transition-colors">Web Development</Link></li>
                            <li><Link href="/services" className="text-sm text-gray-500 hover:text-teal transition-colors">Software Systems</Link></li>
                            <li><Link href="/services" className="text-sm text-gray-500 hover:text-teal transition-colors">UI/UX Design</Link></li>
                            <li><Link href="/contact" className="text-sm text-gray-500 hover:text-teal transition-colors">Consulting</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-black">Get in touch</h3>
                        <ul className="mt-6 space-y-4">
                            <li className="flex items-center gap-3 text-sm text-gray-500">
                                <Mail size={16} className="text-teal" />
                                <span>enkrtx@gmail.com</span>
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
                    <p className="text-xs text-gray-400">
                        &copy; {new Date().getFullYear()} ENKRYX. All rights reserved.
                    </p>
                    <div className="mt-4 flex gap-6 sm:mt-0">
                        <Link href="#" className="text-xs text-gray-400 hover:text-teal transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-xs text-gray-400 hover:text-teal transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
