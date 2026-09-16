import { statuses } from './orderStatuses'
import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import { Card, CardContent, CardHeader } from '#/components/ui/card'
import { Separator } from '#/components/ui/separator'
import { cn } from '#/lib/utils'

export interface ActiveOrder {
  id: string
  orderNumber: string
  product: string
  printer: string
  tags: string[]
  status: keyof typeof statuses
  expectedDelivery: string
}

interface ActiveOrderCardProps {
  order: ActiveOrder
  onViewDetails?: (order: ActiveOrder) => void
  onAction?: (order: ActiveOrder) => void
}

export default function ActiveOrderCard({
  order,
  onViewDetails,
  onAction,
}: ActiveOrderCardProps) {
  const status = statuses[order.status]
  const Icon = status.icon
  const delivery = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(order.expectedDelivery))

  return (
    <Card className="gap-0 rounded-xl bg-white py-4 font-atyp ring-0 **:tracking-normal">
      <CardHeader className="flex flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className={cn(
              'flex size-11 shrink-0 items-center justify-center rounded-2xl',
              status.tone,
            )}
          >
            <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h2 className="text-base leading-6 font-semibold">
              {order.product} - {order.printer}
            </h2>
            <p className="mt-0.5 font-medium text-xs text-muted-foreground">
              {order.orderNumber}
            </p>
          </div>
        </div>
        <Badge
          className={cn('h-7 gap-1.5 px-3 text-sm font-normal', status.tone)}
        >
          <span className="size-2 rounded-full bg-current" aria-hidden="true" />
          {status.label}
        </Badge>
      </CardHeader>
      <CardContent className="px-4">
        <div className="mt-7 flex flex-wrap gap-2">
          {order.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="h-5 bg-[#F4F4F6] px-3 text-xs text-muted-foreground font-medium"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div
          role="progressbar"
          aria-label={`${order.product} order progress`}
          aria-valuemin={0}
          aria-valuemax={5}
          aria-valuenow={status.completed}
          aria-valuetext={`${status.label}: stage ${status.completed} of 5`}
          className="mt-6 grid grid-cols-5 gap-2"
        >
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              aria-hidden="true"
              className={cn(
                'h-2 rounded-full',
                index < status.completed ? status.progress : 'bg-[#EDEEF2]',
              )}
            />
          ))}
        </div>
        <Separator className="my-5 bg-[#F1F1F3]" />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs text-muted-foreground font-semibold">
              Expected Delivery
            </p>
            <time
              dateTime={order.expectedDelivery}
              className="mt-2 block text-sm font-medium"
            >
              {delivery}
            </time>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              // disabled={!onViewDetails}
              onClick={() => onViewDetails?.(order)}
              title={
                !onViewDetails
                  ? 'Order details are not available yet'
                  : undefined
              }
              className="h-10 rounded-xl border-black/6 px-4 text-muted-foreground disabled:opacity-100 font-medium"
            >
              View Details
            </Button>
            {status.action && (
              <Button
                // disabled={!onAction}
                onClick={() => onAction?.(order)}
                title={!onAction ? 'Reviews are not available yet' : undefined}
                className={cn(
                  'h-10 min-w-32 rounded-xl px-4 font-normal disabled:opacity-100',
                  status.button,
                )}
              >
                {status.action}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
