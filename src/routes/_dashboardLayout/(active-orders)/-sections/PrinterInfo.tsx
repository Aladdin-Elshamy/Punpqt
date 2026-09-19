import { Button } from "#/components/ui/button"
import { Card } from "#/components/ui/card"
import { MessageSquare, Printer, Star } from "lucide-react"

export default function PrinterInfo({ printer, onMessagePrinter }: { printer: { name: string, initials: string, rating: number }, onMessagePrinter?: () => void }) {
    return (
        <Card className="gap-0 rounded-3xl bg-white p-6 ring-1 ring-black/5">
            <h2 className="flex items-center gap-2 text-sm font-semibold">
                <Printer className="size-4 text-primary" aria-hidden="true" />
                Printer
            </h2>
            <div className="mt-5 flex items-center gap-3">
                <span
                    className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-medium text-white"
                    aria-hidden="true"
                    style={{
                        background: 'linear-gradient(135deg, #0D7377 0%, #14919B 100%)',
                    }}
                >
                    {printer.initials}
                </span>
                <div className="min-w-0">
                    <p className="text-base font-semibold wrap-break-word">
                        {printer.name}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                        <Star
                            className="size-3 fill-amber-400 text-amber-400"
                            aria-hidden="true"
                        />
                        {printer.rating} rating
                    </p>
                </div>
            </div>
            <Button
                type="button"
                variant="outline"
                onClick={onMessagePrinter}
                // disabled={!onMessagePrinter}
                title={
                    !onMessagePrinter ? 'Messaging is not connected yet' : undefined
                }
                className="mt-5 h-9 w-full rounded-2xl border-primary/20 bg-primary/10 text-xs text-primary font-semibold"
            >
                <MessageSquare className="size-3" aria-hidden="true" />
                <span className="trim">Message Printer</span>
            </Button>
        </Card>
    )
}