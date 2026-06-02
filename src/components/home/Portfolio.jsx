import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";

export default function Portfolio() {
  const featuredProjects = portfolioItems.slice(0, 6);

  return (
    <section className="section-padding bg-white text-(--text-main)">
      <div className="container-custom">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-(--primary-dark)">
              Our Portfolio
            </p>

            <h2 className="text-3xl font-black leading-tight text-(--secondary) md:text-5xl">
              Websites, SEO and marketing work built for growth.
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-bold text-(--primary-dark) transition hover:text-(--secondary)"
          >
            View Portfolio
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[28px] border border-(--border-soft) bg-white shadow-(--shadow-soft) transition duration-300 hover:-translate-y-1 hover:border-[rgba(255,153,0,0.4)] hover:shadow-(--shadow-medium)"
            >
              <div className="relative h-56 w-full overflow-hidden bg-(--bg-warm)">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/15 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="mb-2 inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-(--primary-dark)">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-black text-white">
                    {project.title}
                  </h3>

                  {project.serviceType && (
                    <p className="mt-2 text-sm font-semibold text-white/90">
                      {project.serviceType}
                    </p>
                  )}
                </div>
              </div>

              <div className="p-6">
                <p className="mb-5 text-sm leading-relaxed text-(--text-muted)">
                  {project.description}
                </p>

                {project.results && project.results.length > 0 && (
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.results.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[rgba(255,153,0,0.25)] bg-(--bg-warm) px-3 py-1 text-xs font-semibold text-(--secondary)"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mb-6 flex flex-wrap gap-2">
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
                    className="inline-flex items-center gap-2 text-sm font-bold text-(--primary-dark) transition hover:text-(--secondary)"
                  >
                    View Project
                    <ExternalLink size={15} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-(--text-muted)">
                    Case Study Coming Soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
