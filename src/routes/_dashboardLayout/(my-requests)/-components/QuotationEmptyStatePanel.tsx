import noQuotes from '#/assets/no-qoutes.webp'
import { Card, CardContent } from '#/components/ui/card'

export default function QuotationEmptyStatePanel() {
  return (
    <Card className="gap-0 rounded-xl border border-border/70 py-0 shadow-none ring-0">
      <CardContent className="flex min-h-96 flex-col items-center justify-center px-6 py-12 text-center sm:py-16">
        <img
          src={noQuotes}
          alt=""
          className="h-auto w-60 max-w-full object-contain"
        />
        <h2 className="mt-12 text-xl font-bold">No Quotations Received Yet</h2>
        <p className="mt-2 max-w-xl text-xs leading-4 text-muted-foreground font-semibold">
          Once printers submit their quotations, they will appear here. You'll
          then be able to compare prices, delivery times, and printer ratings
          before selecting the best offer.
        </p>
      </CardContent>
    </Card>
  )
}
