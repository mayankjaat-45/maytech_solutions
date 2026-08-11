import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const services = [
  "Website Development",
  "Next.js Development",
  "Portfolio Websites",
  "SEO Optimization",
  "Google Ads",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1H188Rj5YK",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/maytech.solutions",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/socialglow-online/",
    icon: FaLinkedinIn,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-(--border-soft) bg-white text-(--text-main)">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-(--primary-soft) blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-(--secondary-soft) blur-3xl" />

      <div className="container-custom relative py-14">
        <div className="mb-12 rounded-4xl border border-(--border-soft) bg-(--bg-warm) p-6 shadow-(--shadow-soft) md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-(--primary-dark)">
                Let&apos;s build together
              </p>

              <h2 className="text-2xl font-black text-(--secondary) md:text-3xl">
                Ready to grow your business online?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-(--text-muted) md:text-base">
                Get a modern, responsive and SEO-friendly website designed to
                generate quality leads for your business.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-(--primary) px-6 py-3 text-sm font-bold text-white shadow-[0_14px_32px_rgba(255,153,0,0.28)] transition hover:-translate-y-0.5 hover:bg-(--primary-dark)"
            >
              Get Free Consultation
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-5 flex items-center">
              <div className="relative h-12 w-46.25 sm:h-14 sm:w-55">
                <Image
                  src="/image/maytech-logo.png"
                  alt="MayTech Solutions"
                  fill
                  priority
                  sizes="(max-width: 640px) 185px, 220px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-(--text-muted)">
              We build modern, responsive and SEO-friendly websites that help
              businesses grow online and generate quality leads.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href === "#" ? undefined : "_blank"}
                    rel={
                      social.href === "#" ? undefined : "noopener noreferrer"
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-(--border-soft) bg-white text-(--secondary) shadow-sm transition hover:-translate-y-1 hover:bg-(--primary) hover:text-white"
                    aria-label={social.label}
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-(--secondary)">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-(--text-muted) transition hover:text-(--primary-dark)"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-(--secondary)">
              Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm font-medium text-(--text-muted)">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-(--secondary)">
              Contact
            </h3>

            <ul className="space-y-4 text-sm text-(--text-muted)">
              <li>
                <a
                  href="tel:+917827931874"
                  className="flex gap-3 transition hover:text-(--primary-dark)"
                >
                  <Phone
                    size={18}
                    className="mt-0.5 shrink-0 text-(--primary)"
                  />
                  <span>+91 7827931874</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:maytechsolutions0@gmail.com"
                  className="flex gap-3 break-all transition hover:text-(--primary-dark)"
                >
                  <Mail
                    size={18}
                    className="mt-0.5 shrink-0 text-(--primary)"
                  />
                  <span>maytechsolutions0@gmail.com</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 transition hover:text-(--primary-dark)"
                >
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0 text-(--primary)"
                  />
                  <span>India</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-(--border-soft) pt-6 text-sm text-(--text-muted) md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} MayTech Solution. All rights reserved.
          </p>

          <p>Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
