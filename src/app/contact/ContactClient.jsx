"use client";

import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    title: "Phone",
    text: "+91 82793 80553",
    href: "tel:+918279380553",
  },
  {
    icon: Mail,
    title: "Email",
    text: "maytechsolutions0@gmail.com",
    href: "mailto:maytechsolutions0@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    text: "Chat with us directly for quick discussion.",
    href: "https://wa.me/918279380553",
  },
  {
    icon: MapPin,
    title: "Location",
    text: "India",
    href: "https://www.google.com/maps/search/?api=1&query=India",
  },
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, service, message } = formData;

    if (!name || !email || !phone || !service || !message) {
      alert("Please fill all fields before sending.");
      return;
    }

    const whatsappMessage = `
New Website Enquiry

Name: ${name}
Email: ${email}
Phone: ${phone}
Service Required: ${service}

Message:
${message}
`;

    const whatsappUrl = `https://wa.me/918279380553?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-(--bg-main) pb-20 pt-28 text-(--text-main)">
      <section className="relative overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-(--primary-soft) blur-[110px]" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-(--secondary-soft) blur-[110px]" />

        <div className="container-custom relative">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-(--primary-dark)">
              Contact Us
            </p>

            <h1 className="mb-6 text-4xl font-black leading-tight text-(--secondary) md:text-6xl">
              Let&apos;s build something great for your business.
            </h1>

            <p className="text-lg leading-relaxed text-(--text-muted)">
              Have a website idea, redesign requirement, or digital marketing
              need? Send us a message and we will connect with you.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[30px] border border-(--border-soft) bg-white p-6 shadow-(--shadow-soft) md:p-8">
              <h2 className="mb-6 text-2xl font-bold text-(--secondary)">
                Send Enquiry
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-(--secondary)">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-(--border-soft) bg-(--bg-soft) px-4 py-3 text-(--text-main) outline-none transition placeholder:text-slate-400 focus:border-(--primary) focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-(--secondary)">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-(--border-soft) bg-(--bg-soft) px-4 py-3 text-(--text-main) outline-none transition placeholder:text-slate-400 focus:border-(--primary) focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-(--secondary)">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full rounded-2xl border border-(--border-soft) bg-(--bg-soft) px-4 py-3 text-(--text-main) outline-none transition placeholder:text-slate-400 focus:border-(--primary) focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-(--secondary)">
                    Service Required
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-(--border-soft) bg-(--bg-soft) px-4 py-3 text-(--text-main) outline-none transition focus:border-(--primary) focus:bg-white"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Website Development</option>
                    <option>Next.js Website</option>
                    <option>Portfolio Website</option>
                    <option>Landing Page</option>
                    <option>SEO Optimization</option>
                    <option>Google Ads</option>
                    <option>Website Redesign</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-(--secondary)">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project"
                    className="w-full resize-none rounded-2xl border border-(--border-soft) bg-(--bg-soft) px-4 py-3 text-(--text-main) outline-none transition placeholder:text-slate-400 focus:border-(--primary) focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-(--primary) py-4 font-bold text-white shadow-[0_14px_32px_rgba(255,153,0,0.28)] transition hover:-translate-y-0.5 hover:bg-(--primary-dark)"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>

            <div className="space-y-5">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block rounded-[28px] border border-(--border-soft) bg-white p-6 shadow-(--shadow-soft) transition duration-300 hover:-translate-y-1 hover:border-[rgba(255,153,0,0.4)] hover:shadow-(--shadow-medium)"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-(--primary-soft) text-(--primary-dark)">
                        <Icon size={23} />
                      </div>

                      <div>
                        <h3 className="mb-1 text-xl font-bold text-(--secondary)">
                          {item.title}
                        </h3>
                        <p className="text-(--text-muted)">{item.text}</p>
                      </div>
                    </div>
                  </a>
                );
              })}

              <div className="rounded-[30px] border border-[rgba(255,153,0,0.2)] bg-(--bg-warm) p-6 shadow-(--shadow-soft)">
                <h3 className="mb-3 text-2xl font-black text-(--secondary)">
                  Ready to start your project?
                </h3>

                <p className="mb-5 leading-relaxed text-(--text-muted)">
                  Share your requirement and we will help you choose the best
                  website solution for your business.
                </p>

                <a
                  href="https://wa.me/918279380553"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-3 font-bold text-white shadow-[0_14px_32px_rgba(37,211,102,0.25)] transition hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
