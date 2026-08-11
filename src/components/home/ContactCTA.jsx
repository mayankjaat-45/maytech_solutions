import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="section-padding bg-(--bg-soft) text-(--text-main)">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[34px] border border-(--border-soft) bg-(--bg-warm) p-8 shadow-(--shadow-soft) md:p-12">
          <div className="absolute -left-16 -top-16 h-60 w-60 rounded-full bg-(--primary-soft) blur-[90px]" />
          <div className="absolute -bottom-16 -right-16 h-60 w-60 rounded-full bg-(--secondary-soft) blur-[90px]" />

          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-(--primary-dark)">
                Start Your Project
              </p>

              <h2 className="text-3xl font-black leading-tight text-(--secondary) md:text-5xl">
                Ready to build a modern website for your business?
              </h2>

              <p className="mt-4 max-w-2xl leading-relaxed text-(--text-muted)">
                Share your requirement with us and we will help you choose the
                best website solution for your business goals.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-(--primary) px-7 py-4 font-bold text-white shadow-[0_14px_32px_rgba(255,153,0,0.28)] transition hover:-translate-y-1 hover:bg-(--primary-dark) hover:shadow-[0_18px_40px_rgba(255,153,0,0.34)]"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/917827931874"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-(--border-soft) bg-white px-7 py-4 font-bold text-(--secondary) shadow-sm transition hover:-translate-y-1 hover:bg-(--bg-soft) hover:shadow-(--shadow-soft)"
              >
                <MessageCircle size={18} className="text-(--primary)" />
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
