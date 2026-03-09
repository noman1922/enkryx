import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "+8801400019228";
  const message = "Hi Enkryx, I'm interested in your services!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:bg-[#20ba56] active:scale-95 sm:bottom-8 sm:right-8"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} className="fill-white" />
      <span className="absolute right-16 hidden whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-gray-800 opacity-0 shadow-md transition-opacity group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
