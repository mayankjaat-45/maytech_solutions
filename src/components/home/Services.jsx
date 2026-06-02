import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="section-padding bg-(--bg-soft) text-(--text-main)">
      <div className="container-custom">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-(--primary-dark)">
              Our Services
            </p>

            <h2 className="text-3xl font-black leading-tight text-(--secondary) md:text-5xl">
              Everything your business needs to grow online.
            </h2>

            <p className="mt-4 text-(--text-muted)">
              From websites to SEO, we help businesses build a strong digital
              presence.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-bold text-(--primary-dark) transition hover:text-(--secondary)"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 8).map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-[26px] border border-(--border-soft) bg-white p-6 shadow-(--shadow-soft) transition duration-300 hover:-translate-y-1 hover:border-[rgba(255,153,0,0.35)] hover:shadow-(--shadow-medium)"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-(--primary-soft) text-(--primary-dark) transition group-hover:bg-(--primary) group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="mb-3 text-lg font-black text-(--secondary)">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-(--text-muted)">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
