import { BadgeCheck, Gauge, Headphones, ShieldCheck } from "lucide-react";

const points = [
  {
    icon: BadgeCheck,
    title: "Professional UI/UX",
    text: "Clean and premium designs that create trust and improve user experience.",
  },
  {
    icon: Gauge,
    title: "Speed Optimized",
    text: "Fast-loading websites built with performance and Core Web Vitals in mind.",
  },
  {
    icon: ShieldCheck,
    title: "SEO Friendly",
    text: "Proper metadata, clean structure, responsive layout, and search-friendly pages.",
  },
  {
    icon: Headphones,
    title: "Support After Launch",
    text: "We help with updates, improvements, fixes, and future feature development.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-(--bg-soft) py-20 text-(--text-main)">
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-(--primary-soft) blur-[110px]" />
      <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-(--secondary-soft) blur-[110px]" />

      <div className="container-custom relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-(--primary-dark)">
              Why Choose Us
            </p>

            <h2 className="text-3xl font-black leading-tight text-(--secondary) md:text-5xl">
              Websites designed for performance, trust, and business growth.
            </h2>

            <p className="mt-5 leading-relaxed text-(--text-muted)">
              We do not just build good-looking websites. We create digital
              experiences that help businesses explain their services, generate
              enquiries, and grow their online presence.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {points.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-(--border-soft) bg-white p-6 shadow-(--shadow-soft) transition duration-300 hover:-translate-y-1 hover:border-[rgba(255,153,0,0.4)] hover:shadow-(--shadow-medium)"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-(--primary-soft) text-(--primary-dark) transition group-hover:bg-(--primary) group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-(--secondary)">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-(--text-muted)">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
