import type { LucideIcon } from 'lucide-react'
import { Card, CardContent } from '#/components/ui/card'
import { cn } from '#/lib/utils'
import { isValidElement } from 'react'
import type { ComponentType, ReactNode } from 'react'

type IconComponentType =
  | LucideIcon
  | ComponentType<{ className?: string; strokeWidth?: number; 'aria-hidden'?: boolean | string }>

type QuotationSummaryCardProps = {
  label: string
  value: string
  icon: IconComponentType | ReactNode
  iconClassName: string
}

export default function QuotationSummaryCard({
  label,
  value,
  icon: Icon,
  iconClassName,
}: QuotationSummaryCardProps) {
  const IconComponent =
    typeof Icon === 'function' ||
    (typeof Icon === 'object' && Icon !== null && !isValidElement(Icon))
      ? (Icon as IconComponentType)
      : null

  return (
    <Card className="gap-0 rounded-xl border border-border/70 py-0 shadow-sm ring-0">
      <CardContent className="flex min-h-25 items-center gap-3 px-5 py-6">
        <span
          className={cn(
            'flex size-11 shrink-0 items-center justify-center rounded-xl',
            iconClassName,
          )}
        >
          {isValidElement(Icon) ? (
            Icon
          ) : IconComponent ? (
            <IconComponent className="size-4" strokeWidth={1.5} aria-hidden={true} />
          ) : typeof Icon === 'string' || typeof Icon === 'number' ? (
            Icon
          ) : null}
        </span>
        <dl className="min-w-0">
          <dt className="text-sm leading-5 text-muted-foreground">{label}</dt>
          <dd className="mt-1 text-lg leading-6 font-semibold text-[#002B31]">
            {value}
          </dd>
        </dl>
      </CardContent>
    </Card>
  )
}

