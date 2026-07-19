"use client";

import { FormEvent, useState } from "react";
import { productCategories } from "@/data/categories";

type InquiryType = "product" | "project";

const inputClasses =
  "w-full rounded-lg border border-line-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-600/50 focus:border-accent-500 focus:outline-none";
const labelClasses = "block text-sm font-medium text-ink-900 mb-1.5";

export function RFQForm() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("product");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    payload.inquiryType = inquiryType;

    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent-500/40 bg-accent-500/5 p-8 text-center">
        <h3 className="text-xl font-semibold text-ink-900">Thank you — your inquiry has been received.</h3>
        <p className="mt-2 text-ink-600">
          Our engineering team will review your request and respond within 1
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <p className={labelClasses}>Inquiry Type</p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setInquiryType("product")}
            className={`flex-1 rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
              inquiryType === "product"
                ? "border-accent-500 bg-accent-500/10 text-accent-500"
                : "border-line-200 text-ink-600"
            }`}
          >
            Product Inquiry
          </button>
          <button
            type="button"
            onClick={() => setInquiryType("project")}
            className={`flex-1 rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
              inquiryType === "project"
                ? "border-accent-500 bg-accent-500/10 text-accent-500"
                : "border-line-200 text-ink-600"
            }`}
          >
            Project Inquiry
          </button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="name">Name *</label>
          <input required id="name" name="name" className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="company">Company *</label>
          <input required id="company" name="company" className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="country">Country *</label>
          <input required id="country" name="country" className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="email">Email *</label>
          <input required type="email" id="email" name="email" className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="whatsapp">WhatsApp</label>
          <input id="whatsapp" name="whatsapp" className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="product">Product of Interest</label>
          <select id="product" name="product" className={inputClasses} defaultValue="">
            <option value="" disabled>
              Select a category
            </option>
            {productCategories.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="projectType">Project Type</label>
          <input id="projectType" name="projectType" className={inputClasses} placeholder="e.g. New Data Center, Expansion, Retrofit" />
        </div>
        <div>
          <label className={labelClasses} htmlFor="quantity">Quantity</label>
          <input id="quantity" name="quantity" className={inputClasses} />
        </div>
      </div>

      {inquiryType === "project" ? (
        <div className="rounded-xl border border-accent-500/30 bg-accent-500/5 p-6 space-y-6">
          <p className="text-sm font-medium text-accent-500">
            Project Details
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className={labelClasses} htmlFor="dcCapacity">Data Center Capacity</label>
              <input id="dcCapacity" name="dcCapacity" className={inputClasses} placeholder="e.g. 500 kW" />
            </div>
            <div>
              <label className={labelClasses} htmlFor="rackCount">Number of Racks</label>
              <input id="rackCount" name="rackCount" className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses} htmlFor="itLoad">IT Load</label>
              <input id="itLoad" name="itLoad" className={inputClasses} placeholder="e.g. 3 kW / rack" />
            </div>
            <div>
              <label className={labelClasses} htmlFor="powerCapacity">Power Capacity</label>
              <input id="powerCapacity" name="powerCapacity" className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses} htmlFor="coolingType">Cooling Type</label>
              <input id="coolingType" name="coolingType" className={inputClasses} placeholder="Air / Liquid / Hybrid" />
            </div>
            <div>
              <label className={labelClasses} htmlFor="location">Project Location</label>
              <input id="location" name="location" className={inputClasses} />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClasses} htmlFor="deliveryDate">Expected Delivery Date</label>
              <input id="deliveryDate" name="deliveryDate" type="date" className={inputClasses} />
            </div>
          </div>
        </div>
      ) : null}

      <div>
        <label className={labelClasses} htmlFor="requirements">Project Requirements</label>
        <textarea
          id="requirements"
          name="requirements"
          rows={5}
          className={inputClasses}
          placeholder="Tell us about your project, specifications or timeline..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-accent-500 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-400 disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
      </button>

      {status === "error" ? (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email us directly.
        </p>
      ) : null}
    </form>
  );
}
