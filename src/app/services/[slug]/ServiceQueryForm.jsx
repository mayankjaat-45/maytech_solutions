"use client";

import { useState } from "react";
import { Loader2, Mail, MessageSquare, Phone, Send, User } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const WHATSAPP_NUMBER = "918279380553";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  budget: "",
  message: "",
  website: "",
};

const budgetOptions = [
  {
    value: "10000",
    label: "Below ₹10,000",
  },
  {
    value: "25000",
    label: "₹10,000 - ₹25,000",
  },
  {
    value: "30000",
    label: "₹25,000 - ₹30,000",
  },
  {
    value: "50000",
    label: "₹30,000 - ₹50,000",
  },
  {
    value: "75000",
    label: "₹50,000+",
  },
];

const getBudgetLabel = (value) => {
  if (!value) return "Not selected";

  return (
    budgetOptions.find((option) => option.value === value)?.label ||
    "Not selected"
  );
};

const cleanPhone = (phone) => {
  return String(phone || "").replace(/\D/g, "");
};

export default function ServiceQueryForm({
  serviceTitle,
  timeline,
  serviceSlug,
  serviceDetail,
  serviceFeatures = [],
}) {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const customerName = form.name.trim();
    const cleanedPhone = cleanPhone(form.phone);
    const normalizedEmail = form.email.trim().toLowerCase();
    const requirement = form.message.trim();

    if (customerName.length < 2) {
      toast.error("Please enter your full name");
      return;
    }

    if (cleanedPhone.length < 10 || cleanedPhone.length > 15) {
      toast.error("Please enter a valid phone number");
      return;
    }

    const whatsappWindow = window.open("", "_blank");

    try {
      setSubmitting(true);

      const response = await fetch("/api/website-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: customerName,
          phone: cleanedPhone,
          email: normalizedEmail,

          serviceName: serviceTitle,
          serviceSlug,
          serviceRequired: serviceSlug,

          estimatedBudget: form.budget,

          requirement: requirement || "Client wants to discuss this service.",

          pageUrl: window.location.href,

          website: form.website,
        }),
      });

      const data = await response.json().catch(() => ({
        success: false,
        message: "Invalid response received from the server",
      }));

      if (!response.ok || !data?.success) {
        throw new Error(data?.message || "Unable to submit your enquiry");
      }

      const featuresText =
        serviceFeatures.length > 0
          ? serviceFeatures
              .map((feature, index) => `${index + 1}. ${feature}`)
              .join("\n")
          : "Custom features will be discussed.";

      const whatsappMessage = [
        "Hello MayTech Solutions,",
        "",
        "I want to start/query about this service.",
        "",
        `Service: ${serviceTitle}`,
        timeline ? `Timeline: ${timeline}` : "",
        serviceSlug ? `Service Slug: ${serviceSlug}` : "",
        "",
        "Service Detail:",
        serviceDetail || "I want to discuss this service.",
        "",
        "Service Features:",
        featuresText,
        "",
        "Client Details:",
        `Name: ${customerName}`,
        `Phone: ${cleanedPhone}`,
        `Email: ${normalizedEmail || "Not provided"}`,
        `Estimated Budget: ${getBudgetLabel(form.budget)}`,
        "",
        "Project Requirement:",
        requirement || "I want to discuss this service.",
      ].join("\n");

      const whatsappUrl =
        `https://wa.me/${WHATSAPP_NUMBER}` +
        `?text=${encodeURIComponent(whatsappMessage)}`;

      toast.success(data?.message || "Enquiry submitted successfully");

      setForm(initialForm);

      if (whatsappWindow) {
        whatsappWindow.location.href = whatsappUrl;
      } else {
        window.location.href = whatsappUrl;
      }
    } catch (error) {
      console.error("SERVICE ENQUIRY ERROR:", error);

      if (whatsappWindow) {
        whatsappWindow.close();
      }

      toast.error(
        error?.message || "Unable to submit your enquiry. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputWrapperClass =
    "flex items-center gap-3 rounded-2xl border " +
    "border-[var(--border-soft)] bg-[var(--bg-main)] px-4 " +
    "transition focus-within:border-[var(--primary)] " +
    "focus-within:shadow-[0_0_0_4px_rgba(255,153,0,0.12)]";

  const inputClass =
    "w-full bg-transparent py-4 text-sm font-medium " +
    "text-[var(--text-main)] outline-none " +
    "placeholder:text-[var(--text-muted)] " +
    "disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          style: {
            background: "var(--secondary)",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "14px",
            boxShadow: "var(--shadow-medium)",
          },
          success: {
            iconTheme: {
              primary: "var(--primary)",
              secondary: "#ffffff",
            },
          },
        }}
      />

      {/* Sticky removed so full form and button remain visible */}
      <div className="self-start rounded-4xl border border-(--border-soft) bg-white p-5 shadow-(--shadow-medium) sm:p-6">
        <div className="mb-6">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary-dark)">
            Start Project
          </p>

          <h2 className="text-2xl font-black text-[var(--secondary) sm:text-3xl">
            Request a custom quote
          </h2>

          <p className="mt-3 leading-relaxed text-[var(--text-muted)">
            Submit your details to add the enquiry to our CRM and connect with
            us instantly on WhatsApp.
          </p>
        </div>

        <div className="mb-6 rounded-3xl border border-[var(--border-soft) bg-[var(--bg-warm) p-5">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[var(--primary-dark)">
            Selected Service
          </p>

          <h3 className="mb-3 text-xl font-black text-[var(--secondary)">
            {serviceTitle}
          </h3>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-[var(--primary-soft) px-4 py-2 text-xs font-black text-[var(--primary-dark)">
              Custom Quote
            </span>

            {timeline ? (
              <span className="rounded-full border border-[var(--border-soft) bg-white px-4 py-2 text-xs font-black text-[var(--secondary)">
                Timeline: {timeline}
              </span>
            ) : null}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="relative space-y-4">
          <div>
            <label
              htmlFor="service-query-name"
              className="mb-2 block text-sm font-bold text-[var(--secondary)"
            >
              Full Name <span className="text-red-500">*</span>
            </label>

            <div className={inputWrapperClass}>
              <User size={18} className="shrink-0 text-[var(--primary-dark)" />

              <input
                id="service-query-name"
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="name"
                disabled={submitting}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="service-query-phone"
              className="mb-2 block text-sm font-bold text-[var(--secondary)"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>

            <div className={inputWrapperClass}>
              <Phone size={18} className="shrink-0 text-[var(--primary-dark)" />

              <input
                id="service-query-phone"
                required
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                inputMode="numeric"
                autoComplete="tel"
                disabled={submitting}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="service-query-email"
              className="mb-2 block text-sm font-bold text-[var(--secondary)"
            >
              Email Address
            </label>

            <div className={inputWrapperClass}>
              <Mail size={18} className="shrink-0 text-[var(--primary-dark)" />

              <input
                id="service-query-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email address"
                autoComplete="email"
                disabled={submitting}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="service-query-budget"
              className="mb-2 block text-sm font-bold text-[var(--secondary)"
            >
              Estimated Budget
            </label>

            <select
              id="service-query-budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              disabled={submitting}
              className="w-full rounded-2xl border border-[var(--border-soft) bg-[var(--bg-main) px-4 py-4 text-sm font-bold text-[var(--text-main) outline-none transition focus:border-[var(--primary) focus:shadow-[0_0_0_4px_rgba(255,153,0,0.12)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <option value="">Select budget</option>

              {budgetOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="service-query-message"
              className="mb-2 block text-sm font-bold text-[var(--secondary)"
            >
              Project Requirement
            </label>

            <div className="flex items-start gap-3 rounded-2xl border border-[var(--border-soft bg-[var(--bg-main) px-4 transition focus-within:border-[var(--primary) focus-within:shadow-[0_0_0_4px_rgba(255,153,0,0.12)]">
              <MessageSquare
                size={18}
                className="mt-4 shrink-0 text-[var(--primary-dark)"
              />

              <textarea
                id="service-query-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={5}
                disabled={submitting}
                className="w-full resize-none bg-transparent py-4 text-sm font-medium text-[var(--text-main) outline-none placeholder:text-[var(--text-muted) disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>
          </div>

          {/* Honeypot field */}
          <div
            aria-hidden="true"
            className="fixed -left-2499.75 h-px w-px overflow-hidden opacity-0"
          >
            <label htmlFor="service-query-website">Website</label>

            <input
              id="service-query-website"
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Submit button */}
          {/* Submit button */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={submitting}
              className="
      group flex min-h-14 w-full
      items-center justify-center gap-3
      rounded-2xl
      bg-[#ff9900]
      px-5 py-4
      text-sm font-black uppercase tracking-widest
      text-white
      shadow-lg
      transition-all duration-300
      hover:-translate-y-1
      hover:bg-[#e68a00]
      hover:shadow-xl
      disabled:cursor-not-allowed
      disabled:translate-y-0
      disabled:opacity-60
    "
            >
              {submitting ? (
                <Loader2 size={19} className="animate-spin" />
              ) : (
                <Send
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              )}

              <span>
                {submitting ? "Submitting Enquiry..." : "Request Custom Quote"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
