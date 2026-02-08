"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function WhatsAppWidget() {
    // Replace with your actual phone number (include country code, no + or spaces)
    const phoneNumber = "8801400019228";
    const message = "Hello ENKRYX! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 left-8 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all hover:scale-110 hover:rotate-6 active:scale-95 group"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle size={32} fill="currentColor" className="text-white" />

            {/* Tooltip */}
            <span className="absolute left-20 scale-0 rounded bg-black px-3 py-2 text-sm font-bold text-white transition-all group-hover:scale-100 whitespace-nowrap">
                Chat with us!
            </span>
        </Link>
    );
}
