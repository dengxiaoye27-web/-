import { Button } from "@/components/ui/Button";

export function InquiryCTA({
  productName,
  compact = false,
}: {
  productName: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-navy-700 bg-navy-900 text-white ${
        compact ? "p-6" : "p-8 md:p-10"
      }`}
    >
      <h3 className="text-xl md:text-2xl font-semibold">
        Interested in {productName}?
      </h3>
      <p className="mt-2 text-sm text-white/60">
        Get a datasheet, technical consultation, or a project-specific quote
        from our engineering team.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/contact">Request a Quote</Button>
        <Button href="/contact" variant="outline">
          Get Datasheet
        </Button>
      </div>
    </div>
  );
}
