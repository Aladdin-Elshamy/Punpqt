import {
  CircleCheck,
  Clock,
  MapPin,
  MessageSquare,
  Printer,
  Star,
  Zap,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'

export type QuotationOfferCardProps = {
  vendorName: string
  initials: string
  location: string
  rating: number
  reviewCount: number
  badges?: ReactNode
  price: number
  currency: string
  productDescription: string
  validUntil: string
  turnaround: string
  onTimePercentage: number
  responseTime: string
  printingMethods: readonly string[]
  sampleAvailable?: boolean
  note: string
  isSelected?: boolean
  isDimmed?: boolean
  onSelect?: () => void
  onPrint?: () => void
  onMessage?: () => void
  hideActions?: boolean
  applyBorder?: boolean
}

export default function QuotationOfferCard({
  vendorName,
  initials,
  location,
  rating,
  reviewCount,
  badges,
  price,
  currency,
  productDescription,
  validUntil,
  turnaround,
  onTimePercentage,
  responseTime,
  printingMethods,
  sampleAvailable,
  note,
  isSelected = false,
  isDimmed = false,
  onSelect,
  onPrint,
  onMessage,
  hideActions,
  applyBorder
}: QuotationOfferCardProps) {
  const metrics = [
    { label: 'Turnaround', value: turnaround, icon: Clock },
    { label: 'On-Time', value: `${onTimePercentage}%`, icon: CircleCheck },
    { label: 'Response', value: responseTime, icon: Zap },
  ]
  return (
    <Card
      className={`h-full rounded-3xl py-0 font-atyp shadow-sm transition-[opacity,background-color,box-shadow] ${isSelected ? 'bg-primary/5 ring-2 ring-primary' : 'ring-border/60'} ${isDimmed ? 'opacity-50 hover:opacity-100 focus-within:opacity-100' : ''} ${applyBorder ? 'ring-2 ring-primary' : ''}`}
    >
      <CardContent className="flex h-full flex-col gap-5 p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <div
              aria-hidden="true"
              className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#0B0B13] text-sm text-white"
            >
              {initials}
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-semibold leading-tight">
                {vendorName}
              </h3>
              <p className="mt-1 flex items-start gap-1 text-sm font-medium text-muted-foreground">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-3.5 shrink-0"
                />
                {location}
              </p>
            </div>
          </div>
          <div className="shrink-0 text-right text-sm font-semibold">
            <p className="flex items-center justify-end gap-1">
              <Star
                aria-hidden="true"
                className="size-4 fill-amber-400 text-amber-400"
              />
              <span aria-label={`${rating} out of 5 stars`}>{rating}</span>
            </p>
            <p className="text-muted-foreground">
              {reviewCount.toLocaleString('en-US')} reviews
            </p>
          </div>
        </div>
        {badges && <div className="flex flex-wrap gap-2">{badges}</div>}
        <div className="rounded-2xl bg-white p-4">
          <p className="text-2xl font-bold text-primary">
            {currency} {price.toLocaleString('en-US')}
          </p>
          <p className="mt-1 text-sm font-semibold text-muted-foreground">
            For {productDescription} · Valid until {validUntil}
          </p>
        </div>
        <dl className="grid grid-cols-3 gap-2 text-center">
          {metrics.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className={`flex flex-col rounded-2xl px-1 py-3 ${label === 'On-Time' ? 'bg-primary/5 text-primary' : ' bg-white'}`}
            >
              <dt className="flex flex-col items-center gap-2 text-xs font-semibold text-muted-foreground sm:text-sm">
                <Icon
                  aria-hidden="true"
                  className={`size-4 ${label === 'On-Time' ? 'text-primary' : ''}`}
                />
                <span>{label}</span>
              </dt>
              <dd className="mt-2 font-bold">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-wrap gap-1.5">
          {printingMethods.map((method) => (
            <Badge
              key={method}
              variant="secondary"
              className="h-auto px-2.5 py-1 text-sm font-normal"
            >
              {method}
            </Badge>
          ))}
          {sampleAvailable && (
            <Badge className="h-auto bg-primary/5 px-2.5 py-1 text-sm font-normal text-primary">
              Sample Available
            </Badge>
          )}
        </div>
        <p className="text-sm font-semibold text-muted-foreground">
          &quot;{note}&quot;
        </p>
        {!hideActions && (
          <div className="mt-auto flex gap-2">
            <Button
              aria-pressed={isSelected}
              onClick={onSelect}
              className="h-11 min-w-0 flex-1 rounded-full px-3"
            >
              Select This Offer
            </Button>
            <Button
              onClick={onPrint}
              variant="outline"
              size="icon"
              aria-label={`Print offer from ${vendorName}`}
              className="size-11 rounded-2xl bg-muted/50 text-muted-foreground"
            >
              <Printer aria-hidden="true" />
            </Button>
            <Button
              onClick={onMessage}
              variant="outline"
              size="icon"
              aria-label={`Message ${vendorName}`}
              className="size-11 rounded-2xl bg-muted/50 text-muted-foreground"
            >
              <MessageSquare aria-hidden="true" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
