import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  IndianRupee,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { services } from "@/data/services";
import ServiceQueryForm from "./ServiceQueryForm";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://maytechsolutions.com";

function getService(slug) {
  return services.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Service Not Found | MayTech Solutions",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} | MayTech Solutions`,
    description: service.description,
    alternates: {
      canonical: `${siteUrl}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-(--bg-main) pt-28 pb-20 text-(--text-main)">
      <section className="relative overflow-hidden">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-(--primary-soft) blur-[120px]" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-(--secondary-soft) blur-[120px]" />

        <div className="container-custom relative">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-(--border-soft) bg-white px-5 py-3 text-sm font-bold text-(--secondary) shadow-(--shadow-soft) transition hover:-translate-x-1 hover:text-(--primary-dark)"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-(--primary-soft) text-(--primary-dark)">
                <Icon size={32} />
              </div>

              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-(--primary-dark)">
                Service Details
              </p>

              <h1 className="mb-6 text-4xl font-black leading-tight text-(--secondary) md:text-6xl">
                {service.title}
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-(--text-muted)">
                {service.detail}
              </p>

              <div className="mb-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-(--border-soft) bg-white p-5 shadow-(--shadow-soft)">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-(--primary-soft) text-(--primary-dark)">
                    <IndianRupee size={22} />
                  </div>

                  <p className="mb-1 text-sm font-bold text-(--text-muted)">
                    Starting Price
                  </p>

                  <h3 className="text-2xl font-black text-(--secondary)">
                    {service.startingPrice}
                  </h3>
                </div>

                <div className="rounded-3xl border border-(--border-soft) bg-white p-5 shadow-(--shadow-soft)">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-(--primary-soft) text-(--primary-dark)">
                    <Clock3 size={22} />
                  </div>

                  <p className="mb-1 text-sm font-bold text-(--text-muted)">
                    Timeline
                  </p>

                  <h3 className="text-2xl font-black text-(--secondary)">
                    {service.timeline}
                  </h3>
                </div>
              </div>

              <div className="mb-10 rounded-[30px] border border-(--border-soft) bg-white p-6 shadow-(--shadow-soft)">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-(--primary-soft) text-(--primary-dark)">
                    <Sparkles size={22} />
                  </div>

                  <h2 className="text-2xl font-black text-(--secondary)">
                    What’s Included
                  </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-2xl border border-(--border-soft) bg-(--bg-main) p-4"
                    >
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-(--primary-dark)"
                      />

                      <p className="font-semibold text-(--text-main)">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] border border-[rgba(255,153,0,0.35)] bg-(--primary-soft) p-6">
                <div className="mb-4 flex items-center gap-3">
                  <MessageCircle className="text-(--primary-dark)" size={24} />

                  <h3 className="text-2xl font-black text-(--secondary)">
                    Want to start this project?
                  </h3>
                </div>

                <p className="leading-relaxed text-(--text-muted)">
                  Fill the quick form and it will open WhatsApp with your
                  service name, starting price, timeline and project details.
                </p>
              </div>
            </div>

            <ServiceQueryForm
              serviceTitle={service.title}
              startingPrice={service.startingPrice}
              timeline={service.timeline}
              serviceSlug={service.slug}
              serviceDetail={service.detail}
              serviceFeatures={service.features}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
