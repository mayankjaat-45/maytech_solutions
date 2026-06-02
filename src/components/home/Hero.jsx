"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Gauge,
  Globe2,
  Search,
  Sparkles,
} from "lucide-react";

const features = [
  "Next.js Development",
  "SEO Friendly",
  "Fast Loading",
  "Mobile Responsive",
];

const cards = [
  {
    icon: Code2,
    title: "Modern Stack",
    text: "Next.js, React.js and Tailwind CSS.",
  },
  {
    icon: Search,
    title: "SEO Ready",
    text: "Clean metadata and search-friendly structure.",
  },
  {
    icon: Gauge,
    title: "Performance",
    text: "Fast loading and optimized user experience.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-32 text-(--text-main) md:pb-28 md:pt-40">
      {/* Background Effects */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-(--primary-soft) blur-[110px]" />
      <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-(--secondary-soft) blur-[110px]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-(--bg-soft) to-transparent" />

      <div className="container-custom relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(255,153,0,0.22)] bg-(--primary-soft) px-4 py-2 text-sm font-semibold text-(--primary-dark)">
              <Globe2 size={16} />
              Web Development Agency
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-(--secondary) md:text-6xl">
              Websites that look premium and{" "}
              <span className="gradient-text">
                generate real business leads.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-(--text-muted) md:text-lg">
              MayTech Solutions builds fast, responsive and SEO-friendly
              websites using Next.js, React.js and Tailwind CSS for startups,
              service businesses and growing brands.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-(--primary) px-7 py-4 font-bold text-white shadow-[0_14px_32px_rgba(255,153,0,0.28)] transition hover:-translate-y-1 hover:bg-(--primary-dark) hover:shadow-[0_18px_40px_rgba(255,153,0,0.34)]"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-(--border-soft) bg-white px-7 py-4 font-bold text-(--secondary) shadow-sm transition hover:-translate-y-1 hover:bg-(--bg-soft) hover:shadow-(--shadow-soft)"
              >
                View Portfolio
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-(--border-soft) bg-white px-4 py-2 text-sm font-semibold text-(--text-muted) shadow-sm"
                >
                  <CheckCircle2 size={16} className="text-(--primary)" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-[34px] border border-(--border-soft) bg-white p-4 shadow-(--shadow-medium) md:p-6"
          >
            <div className="rounded-[28px] border border-(--border-soft) bg-(--bg-soft) p-5 md:p-6">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-(--text-muted)">
                    Project Preview
                  </p>
                  <h2 className="mt-1 text-2xl font-black text-(--secondary)">
                    Business Website
                  </h2>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-(--primary-soft) text-(--primary-dark)">
                  <Code2 />
                </div>
              </div>

              <div className="space-y-4">
                {cards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-(--border-soft) bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-(--shadow-soft)"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--primary-soft) text-(--primary-dark)">
                          <Icon size={22} />
                        </div>

                        <div>
                          <h3 className="font-bold text-(--secondary)">
                            {card.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-(--text-muted)">
                            {card.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl bg-(--secondary) p-5 text-white">
                <div className="flex items-center gap-2 text-sm font-semibold text-orange-200">
                  <Sparkles size={16} />
                  Designed to build trust
                </div>

                <p className="mt-2 text-3xl font-black">Convert Visitors</p>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/15">
                  <div className="h-full w-[82%] rounded-full bg-(--primary)" />
                </div>

                <p className="mt-3 text-sm text-white/75">
                  Clean UI, strong CTA sections and lead-focused structure.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
