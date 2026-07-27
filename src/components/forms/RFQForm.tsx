"use client";

import { FormEvent, useState } from "react";
import { productCategories } from "@/data/categories";
import { ContactMessages } from "@/i18n/messages";
import { useLocale } from "@/i18n/LocaleContext";
import { getCategoryContent } from "@/i18n/content/categories";

type InquiryType = "product" | "project";

const inputClasses =
  "w-full rounded-lg border border-line-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-600/50 focus:border-accent-500 focus:outline-none";
const labelClasses = "block text-sm font-medium text-ink-900 mb-1.5";

export function RFQForm({ messages: f }: { messages: ContactMessages["form"] }) {
  const locale = useLocale();
  const [inquiryType, setInquiryType] = useState<InquiryType>("product");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    const formData = new FormData(form);
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
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent-500/40 bg-accent-500/5 p-8 text-center">
        <h3 className="text-xl font-semibold text-ink-900">{f.successTitle}</h3>
        <p className="mt-2 text-ink-600">{f.successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <p className={labelClasses}>{f.inquiryTypeLabel}</p>
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
            {f.inquiryTypeProduct}
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
            {f.inquiryTypeProject}
          </button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="name">{f.name}</label>
          <input required id="name" name="name" className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="company">{f.company}</label>
          <input required id="company" name="company" className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="country">{f.country}</label>
          <input required id="country" name="country" className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="email">{f.email}</label>
          <input required type="email" id="email" name="email" className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="whatsapp">{f.whatsapp}</label>
          <input id="whatsapp" name="whatsapp" className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="product">{f.productOfInterest}</label>
          <select id="product" name="product" className={inputClasses} defaultValue="">
            <option value="" disabled>
              {f.selectCategory}
            </option>
            {productCategories.map((c) => (
              <option key={c.slug} value={c.name}>
                {getCategoryContent(c.slug, locale, c).name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="projectType">{f.projectType}</label>
          <input id="projectType" name="projectType" className={inputClasses} placeholder={f.projectTypePlaceholder} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="quantity">{f.quantity}</label>
          <input id="quantity" name="quantity" className={inputClasses} />
        </div>
      </div>

      {inquiryType === "project" ? (
        <div className="rounded-xl border border-accent-500/30 bg-accent-500/5 p-6 space-y-6">
          <p className="text-sm font-medium text-accent-500">{f.projectDetailsHeading}</p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className={labelClasses} htmlFor="dcCapacity">{f.dcCapacity}</label>
              <input id="dcCapacity" name="dcCapacity" className={inputClasses} placeholder={f.dcCapacityPlaceholder} />
            </div>
            <div>
              <label className={labelClasses} htmlFor="rackCount">{f.rackCount}</label>
              <input id="rackCount" name="rackCount" className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses} htmlFor="itLoad">{f.itLoad}</label>
              <input id="itLoad" name="itLoad" className={inputClasses} placeholder={f.itLoadPlaceholder} />
            </div>
            <div>
              <label className={labelClasses} htmlFor="powerCapacity">{f.powerCapacity}</label>
              <input id="powerCapacity" name="powerCapacity" className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses} htmlFor="coolingType">{f.coolingType}</label>
              <input id="coolingType" name="coolingType" className={inputClasses} placeholder={f.coolingTypePlaceholder} />
            </div>
            <div>
              <label className={labelClasses} htmlFor="location">{f.location}</label>
              <input id="location" name="location" className={inputClasses} />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClasses} htmlFor="deliveryDate">{f.deliveryDate}</label>
              <input id="deliveryDate" name="deliveryDate" type="date" className={inputClasses} />
            </div>
          </div>
        </div>
      ) : null}

      <div>
        <label className={labelClasses} htmlFor="requirements">{f.requirements}</label>
        <textarea
          id="requirements"
          name="requirements"
          rows={5}
          className={inputClasses}
          placeholder={f.requirementsPlaceholder}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-accent-500 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-400 disabled:opacity-60"
      >
        {status === "submitting" ? f.submitting : f.submit}
      </button>

      {status === "error" ? (
        <p className="text-sm text-red-600">{f.errorMessage}</p>
      ) : null}
    </form>
  );
}
