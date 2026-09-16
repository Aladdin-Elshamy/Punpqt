import { Image } from 'lucide-react'
import { statuses } from './orderStatuses'
import type { OrderStatus } from './orderStatuses'
import { Badge } from '#/components/ui/badge'
import { Card, CardContent, CardHeader } from '#/components/ui/card'
import { Separator } from '#/components/ui/separator'
import { cn } from '#/lib/utils'

export interface OrderDetailsHeaderProps {
  product: string
  printer: string
  orderNumber: string
  expectedDelivery: string
  status: OrderStatus
  completedStages: number
}

export default function OrderDetailsHeader({
  product,
  printer,
  orderNumber,
  expectedDelivery,
  status,
  completedStages,
}: OrderDetailsHeaderProps) {
  const currentStatus = statuses[status]
  const progress = Number.isFinite(completedStages)
    ? Math.min(5, Math.max(0, Math.floor(completedStages)))
    : 0
  const delivery = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(expectedDelivery))

  return (
    <Card className="gap-0 rounded-xl bg-white py-6 font-atyp ring-0 sm:pb-8 relative z-10">
      <CardHeader className="flex flex-col gap-5 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-9">
        <div className="flex min-w-0 items-start sm:items-center gap-3">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-[#EFF3F8] text-muted-foreground">
            <Image className="size-5" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h1 className="text-lg leading-7 font-semibold wrap-break-word sm:text-xl">
              {product} - {printer}
            </h1>
            <p className="mt-0.5 text-sm font-medium text-muted-foreground">
              {orderNumber}
            </p>
          </div>
        </div>
        <div className="shrink-0">
          <p className="text-sm font-medium text-muted-foreground">
            Expected Delivery
          </p>
          <time
            dateTime={expectedDelivery}
            className="mt-3 block text-base font-medium"
          >
            {delivery}
          </time>
        </div>
      </CardHeader>
      <CardContent className="px-5">
        <Separator className="my-8 bg-black/7 sm:mt-10" />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-base font-medium text-muted-foreground">Current Status</p>
          <Badge
            className={cn(
              'h-7 gap-1.5 px-3 text-sm font-normal',
              currentStatus.tone,
            )}
          >
            <span
              className="size-2.5 rounded-full bg-current"
              aria-hidden="true"
            />
            {currentStatus.label}
          </Badge>
        </div>
        <div
          role="progressbar"
          aria-label={`${product} order progress`}
          aria-valuemin={0}
          aria-valuemax={5}
          aria-valuenow={progress}
          aria-valuetext={`${currentStatus.label}: stage ${progress} of 5`}
          className="mt-7 grid grid-cols-5 gap-2 sm:gap-2.5"
        >
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              aria-hidden="true"
              className={cn(
                'h-2 rounded-full',
                index < progress ? 'bg-[#0D7377]' : 'bg-[#EDEEF2]',
              )}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
