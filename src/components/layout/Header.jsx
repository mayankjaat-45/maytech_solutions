"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-(--border-soft) bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={closeMenu} className="flex items-center">
            <div className="relative h-12 w-46.25 sm:h-14 sm:w-57.5">
              <Image
                src="/image/maytech-logo.png"
                alt="MayTech Solutions"
                fill
                priority
                sizes="230px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-semibold text-(--secondary) transition hover:text-(--primary) after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-(--primary) after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-(--primary) px-6 py-3 text-sm font-bold text-white shadow-[0_14px_32px_rgba(255,153,0,0.28)] transition hover:-translate-y-0.5 hover:bg-(--primary-dark) hover:shadow-[0_18px_40px_rgba(255,153,0,0.34)]"
            >
              Get Started
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-(--border-soft) bg-(--bg-soft) text-(--secondary) transition hover:bg-(--primary-soft) hover:text-(--primary-dark) lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-(--border-soft) bg-white shadow-lg lg:hidden">
          <div className="container-custom py-5">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-(--secondary) transition hover:bg-(--primary-soft) hover:text-(--primary-dark)"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-(--primary) px-5 py-4 text-sm font-bold text-white shadow-[0_14px_32px_rgba(255,153,0,0.28)] transition hover:bg-(--primary-dark)"
            >
              Get Free Consultation
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
