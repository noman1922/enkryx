"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function WhatsAppButton() {
    const phoneNumber = "+8801400019228"; // Cleaned number for WhatsApp link
    const message = "Hi Enkryx, I'm interested in your services!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:bg-[#20ba56] active:scale-95 sm:bottom-8 sm:right-8 group"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle size={28} className="fill-white" />
            <span className="absolute right-16 rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-gray-800 shadow-md opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap hidden sm:block">
                Chat on WhatsApp
            </span>
        </Link>
    );
}
