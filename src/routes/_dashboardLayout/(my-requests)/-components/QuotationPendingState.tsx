import { Card, CardContent } from '#/components/ui/card'
import { Inbox } from 'lucide-react'

export default function QuotationPendingState() {
  return (
    <Card className="gap-0 rounded-2xl border-border/70 py-0 font-atyp shadow-none">
      <CardContent className="flex min-h-72 flex-col items-center justify-center px-6 py-12 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Inbox className="size-6" aria-hidden="true" />
        </span>
        <h2 className="mt-5 text-xl font-bold">No quotations received yet</h2>
        <p className="mt-2 max-w-sm text-sm leading-6 font-medium text-muted-foreground">
          We have sent your request to selected printers. Their offers will
          appear here as soon as they respond.
        </p>
      </CardContent>
    </Card>
  )
}
