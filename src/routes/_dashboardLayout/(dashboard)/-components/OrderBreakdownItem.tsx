type OrderBreakdownItemProps = {
  category: string
  amount: string
  orders: number
  percentage: number
}

export default function OrderBreakdownItem({
  category,
  amount,
  orders,
  percentage,
}: OrderBreakdownItemProps) {
  return (
    <article className="space-y-2">
      <div className="flex items-center justify-between gap-4 text-sm">
        <div className="flex min-w-0 items-center gap-2 font-medium">
          <span
            className="size-2.5 shrink-0 rounded-full bg-primary"
            aria-hidden="true"
          />
          <span className="truncate">{category}</span>
        </div>
        <p className="shrink-0 text-right text-xs">
          <span className="font-bold">{amount}</span>
          <span className="ml-3 text-muted-foreground font-semibold">({orders} orders)</span>
        </p>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-muted"
        role="progressbar"
        aria-label={`${category} order value`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
      >
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </article>
  )
}
