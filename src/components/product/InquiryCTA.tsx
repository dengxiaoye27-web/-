import { Locale } from "@/i18n/config";
import { getCommonMessages } from "@/i18n/messages";
import { inquiryMessages } from "@/i18n/messages/inquiry";
import { Button } from "@/components/ui/Button";

export function InquiryCTA({
  productName,
  productSlug,
  locale,
  compact = false,
}: {
  productName: string;
  /** When set, the buttons open the quote form with this product preselected. */
  productSlug?: string;
  locale: Locale;
  compact?: boolean;
}) {
  const t = inquiryMessages[locale];
  const common = getCommonMessages(locale);
  const contactHref = productSlug ? `/contact?product=${encodeURIComponent(productSlug)}` : "/contact";
  const datasheetHref = productSlug ? `${contactHref}&type=datasheet` : "/contact";
  return (
    <div
      className={`rounded-2xl border border-navy-700 bg-navy-900 text-white ${
        compact ? "p-6" : "p-8 md:p-10"
      }`}
    >
      <h3 className="text-xl md:text-2xl font-semibold">
        {t.title.replace("{product}", productName)}
      </h3>
      <p className="mt-2 text-sm text-white/60">
        {t.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={contactHref}>{common.nav.requestQuote}</Button>
        <Button href={datasheetHref} variant="outline">
          {t.datasheet}
        </Button>
      </div>
    </div>
  );
}
