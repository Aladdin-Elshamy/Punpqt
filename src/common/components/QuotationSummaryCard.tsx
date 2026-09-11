import type { LucideIcon } from 'lucide-react'
import { Card, CardContent } from '#/components/ui/card'
import { cn } from '#/lib/utils'

type QuotationSummaryCardProps = {
  label: string
  value: string
  icon: LucideIcon
  iconClassName: string
}

export default function QuotationSummaryCard({
  label,
  value,
  icon: Icon,
  iconClassName,
}: QuotationSummaryCardProps) {
  return (
    <Card className="gap-0 rounded-xl border border-border/70 py-0 shadow-sm ring-0">
      <CardContent className="flex min-h-25 items-center gap-3 px-5 py-6">
        <span
          className={cn(
            'flex size-11 shrink-0 items-center justify-center rounded-xl',
            iconClassName,
          )}
        >
          <Icon className="size-4" strokeWidth={1.5} aria-hidden="true" />
        </span>
        <dl className="min-w-0">
          <dt className="text-sm leading-5 text-[#343454]">{label}</dt>
          <dd className="mt-1 text-lg leading-6 font-semibold text-[#002B31]">
            {value}
          </dd>
        </dl>
      </CardContent>
    </Card>
  )
}
