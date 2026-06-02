import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918279380553"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/70 bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition duration-300 hover:scale-110 hover:bg-[#1ebe5d]"
    >
      <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition group-hover:opacity-100" />
      <MessageCircle size={27} className="relative" />
    </a>
  );
}
