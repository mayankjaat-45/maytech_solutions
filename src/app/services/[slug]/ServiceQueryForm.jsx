"use client";

import { useState } from "react";
import { Mail, MessageSquare, Phone, Send, User } from "lucide-react";

const WHATSAPP_NUMBER = "918279380553";

export default function ServiceQueryForm({
  serviceTitle,
  timeline,
  serviceSlug,
  serviceDetail,
  serviceFeatures,
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const featuresText = serviceFeatures
      ?.map((feature, index) => `${index + 1}. ${feature}`)
      .join("\n");

    const whatsappMessage = `Hello MayTech Solutions,

I want to start/query about this service.

Service: ${serviceTitle}
Timeline: ${timeline}
Service Slug: ${serviceSlug}

Service Detail:
${serviceDetail}

Service Features:
${featuresText}

Client Details:
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "Not provided"}
Estimated Budget: ${form.budget || "Not selected"}

Project Requirement:
${form.message || "I want to discuss this service."}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="sticky top-28 rounded-4xl border border-(--border-soft) bg-white p-6 shadow-(--shadow-medium)">
      <div className="mb-6">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-(--primary-dark)">
          Start Project
        </p>

        <h2 className="text-3xl font-black text-(--secondary)">
          Send enquiry on WhatsApp
        </h2>

        <p className="mt-3 leading-relaxed text-(--text-muted)">
          Share your details and connect instantly with us for a custom quote.
        </p>
      </div>

      <div className="mb-6 rounded-3xl border border-(--border-soft) bg-(--bg-main) p-5">
        <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-(--primary-dark)">
          Selected Service
        </p>

        <h3 className="mb-3 text-xl font-black text-(--secondary)">
          {serviceTitle}
        </h3>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-(--primary-soft) px-4 py-2 text-xs font-black text-(--primary-dark)">
            Custom Quote
          </span>

          <span className="rounded-full bg-white px-4 py-2 text-xs font-black text-(--secondary)">
            Timeline: {timeline}
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-bold text-(--secondary)">
            Full Name *
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-(--border-soft) bg-(--bg-main) px-4">
            <User size={18} className="text-(--primary-dark)" />

            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full bg-transparent py-4 text-sm font-medium outline-none placeholder:text-(--text-muted)"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-(--secondary)">
            Phone Number *
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-(--border-soft) bg-(--bg-main) px-4">
            <Phone size={18} className="text-(--primary-dark)" />

            <input
              required
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full bg-transparent py-4 text-sm font-medium outline-none placeholder:text-(--text-muted)"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-(--secondary)">
            Email Address
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-(--border-soft) bg-(--bg-main) px-4">
            <Mail size={18} className="text-(--primary-dark)" />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full bg-transparent py-4 text-sm font-medium outline-none placeholder:text-(--text-muted)"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-(--secondary)">
            Estimated Budget
          </label>

          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="w-full rounded-2xl border border-(--border-soft) bg-(--bg-main) px-4 py-4 text-sm font-bold text-(--text-main) outline-none"
          >
            <option value="">Select budget</option>
            <option value="Below ₹10,000">Below ₹10,000</option>
            <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
            <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
            <option value="₹50,000+">₹50,000+</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-(--secondary)">
            Project Requirement
          </label>

          <div className="flex items-start gap-3 rounded-2xl border border-(--border-soft) bg-(--bg-main) px-4">
            <MessageSquare size={18} className="mt-4 text-(--primary-dark)" />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={5}
              className="w-full resize-none bg-transparent py-4 text-sm font-medium outline-none placeholder:text-(--text-muted)"
            />
          </div>
        </div>

        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-(--primary) px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-(--shadow-soft) transition hover:-translate-y-1 hover:bg-(--primary-dark) hover:shadow-(--shadow-medium)"
        >
          Request Custom Quote
          <Send size={18} className="transition group-hover:translate-x-1" />
        </button>
      </form>
    </div>
  );
}
