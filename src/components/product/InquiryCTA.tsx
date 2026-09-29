import { Locale } from "@/i18n/config";
import { getCommonMessages } from "@/i18n/messages";
import { inquiryMessages } from "@/i18n/messages/inquiry";
import { Button } from "@/components/ui/Button";

export function InquiryCTA({
  productName,
  locale,
  compact = false,
}: {
  productName: string;
  locale: Locale;
  compact?: boolean;
}) {
  const t = inquiryMessages[locale];
  const common = getCommonMessages(locale);
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
        <Button href="/contact">{common.nav.requestQuote}</Button>
        <Button href="/contact" variant="outline">
          {t.datasheet}
        </Button>
      </div>
    </div>
  );
}
