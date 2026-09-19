import { Card } from "#/components/ui/card"

export default function Total({ total, currency, placedDate, deliveryDate }: { total: number, currency: string, placedDate: string, deliveryDate?: string }) {
    function formatDate(value: string) {
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            timeZone: 'UTC',
        }).format(new Date(value))
    }
    return (
        <Card className="min-h-40 gap-0 rounded-3xl bg-white p-6 ring-1 ring-black/5">
            <dl className="text-xs font-medium">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/5 pb-3">
                    <dt className="text-muted-foreground font-semibold text-sm">Order total</dt>
                    <dd className="text-lg text-primary">
                        {currency} {total.toLocaleString('en-US')}
                    </dd>
                </div>
                <div className="mt-3 flex flex-wrap justify-between gap-3">
                    <dt className="text-muted-foreground font-semibold text-sm">Placed</dt>
                    <dd>
                        <time dateTime={placedDate}>{formatDate(placedDate)}</time>
                    </dd>
                </div>
                <div className="mt-3 flex flex-wrap justify-between gap-3">
                    <dt className="text-muted-foreground font-semibold text-sm">Delivery</dt>
                    <dd>
                        {deliveryDate ? (
                            <time dateTime={deliveryDate}>
                                {formatDate(deliveryDate)}
                            </time>
                        ) : (
                            <span aria-label="Not scheduled">&ndash;</span>
                        )}
                    </dd>
                </div>
            </dl>
        </Card>
    )
}