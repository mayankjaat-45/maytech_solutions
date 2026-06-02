import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export const metadata = {
  title: "Services | MayTech Solutions",
  description:
    "Explore website development, Next.js development, SEO optimization, landing page design and Google Ads services by MayTech Solutions.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-(--bg-main) pt-28 pb-20 text-(--text-main)">
      <section className="relative overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-(--primary-soft) blur-[110px]" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-(--secondary-soft) blur-[110px]" />

        <div className="container-custom relative">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-(--primary-dark)">
              Our Services
            </p>

            <h1 className="mb-6 text-4xl font-black leading-tight text-(--secondary) md:text-6xl">
              Digital services to grow your business online.
            </h1>

            <p className="text-lg leading-relaxed text-(--text-muted)">
              From modern websites to SEO and Google Ads, we provide everything
              your business needs to build trust and generate leads online.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  href={`/services/${service.slug}`}
                  key={service.slug}
                  className="group rounded-[28px] border border-(--border-soft) bg-white p-6 shadow-(--shadow-soft) transition duration-300 hover:-translate-y-2 hover:border-[rgba(255,153,0,0.4)] hover:shadow-(--shadow-medium)"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--primary-soft) text-(--primary-dark) transition group-hover:bg-(--primary) group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-(--secondary)">
                    {service.title}
                  </h3>

                  <p className="mb-5 leading-relaxed text-(--text-muted)">
                    {service.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-3">
                    <span className="rounded-full bg-(--primary-soft) px-4 py-2 text-xs font-black text-(--primary-dark)">
                      Starts {service.startingPrice}
                    </span>

                    <span className="rounded-full bg-(--bg-soft) px-4 py-2 text-xs font-black text-(--secondary)">
                      {service.timeline}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-sm font-bold text-(--primary-dark)">
                    View Details
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
