import { Button } from '#/components/ui/button'

export type QuotationAcceptanceBarProps = {
  vendorName: string
  price: number
  currency: string
  turnaround: string
  onAccept?: () => void
}

export default function QuotationAcceptanceBar({
  vendorName,
  price,
  currency,
  turnaround,
  onAccept,
}: QuotationAcceptanceBarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-primary bg-linear-to-r from-primary to-[#1095A1] p-5 font-atyp text-white sm:flex-row sm:items-center sm:justify-between">
      <div role="status" aria-atomic="true" className="min-w-0 space-y-1">
        <p className="font-semibold">Accept: {vendorName}</p>
        <p className="text-sm">
          {currency} {price.toLocaleString('en-US')} · {turnaround} · Escrow
          protected
        </p>
      </div>
      <Button
        type="button"
        onClick={onAccept}
        // disabled={!onAccept}
        title={!onAccept ? 'Escrow checkout is not available yet' : undefined}
        className="h-11 w-full rounded-2xl bg-white px-6 text-primary hover:bg-white/90 sm:w-auto"
      >
        Accept &amp; Pay Escrow
      </Button>
    </div>
  )
}
