import { Clock3 } from 'lucide-react'

type QuotationBannerProps = {
  title: string;
  description: string;
}

export default function QuotationBanner({
  title,
  description,
}: QuotationBannerProps) {
  return (
    <section className="flex items-start gap-3 rounded-2xl border-2 border-primary/20 bg-primary/5 px-5 py-5 sm:py-6">
      <Clock3
        className="mt-0.5 size-5 shrink-0 text-primary"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <div className="min-w-0">
        <h2 className="text-base font-medium text-primary">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-5 text-muted-foreground font-semibold">
          {description}
        </p>
      </div>
    </section>
  )
}
