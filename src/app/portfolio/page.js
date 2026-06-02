import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";

export const metadata = {
  title: "Portfolio | MayTech Solutions",
  description:
    "View website development, SEO, social media marketing and paid advertising projects completed by MayTech Solutions.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-(--bg-main) pb-20 pt-28 text-(--text-main)">
      <section className="relative overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-(--primary-soft) blur-[110px]" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-(--secondary-soft) blur-[110px]" />

        <div className="container-custom relative">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-(--primary-dark)">
              Our Work
            </p>

            <h1 className="mb-6 text-4xl font-black leading-tight text-(--secondary) md:text-6xl">
              Websites, SEO and marketing projects designed for business growth.
            </h1>

            <p className="text-lg leading-relaxed text-(--text-muted)">
              A collection of website development, SEO, social media marketing,
              Meta Ads and Google Ads projects completed for brands, businesses
              and startups.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[28px] border border-(--border-soft) bg-white shadow-(--shadow-soft) transition duration-300 hover:-translate-y-2 hover:border-[rgba(255,153,0,0.4)] hover:shadow-(--shadow-medium)"
              >
                <div className="relative h-56 overflow-hidden bg-(--bg-soft)">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-(--primary-dark) shadow-sm backdrop-blur-md">
                    {project.category}
                  </div>

                  {project.serviceType && (
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-flex rounded-full bg-black/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                        {project.serviceType}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-bold text-(--secondary)">
                    {project.title}
                  </h3>

                  <p className="mb-5 leading-relaxed text-(--text-muted)">
                    {project.description}
                  </p>

                  {project.results && project.results.length > 0 && (
                    <div className="mb-5">
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-(--primary-dark)">
                        Work Done
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.results.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[rgba(255,153,0,0.25)] bg-(--bg-warm) px-3 py-1 text-xs font-semibold text-(--secondary)"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-(--border-soft) bg-(--bg-soft) px-3 py-1 text-xs font-semibold text-(--text-muted)"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.liveUrl !== "#" ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-bold text-(--primary-dark) transition hover:text-(--secondary)"
                    >
                      View Project
                      <ExternalLink size={15} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 font-bold text-(--text-muted)">
                      Case Study Coming Soon
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
