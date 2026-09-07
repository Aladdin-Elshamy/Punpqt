import MessageAddIcon from '#/common/icons/MessageAddIcon'
import { Card, CardContent } from '#/components/ui/card'
import {  Truck } from 'lucide-react'

type RequestSupportDetailsProps = {
  deliveryAddress: string
  additionalNotes: string
}

export default function RequestSupportDetails({
  deliveryAddress,
  additionalNotes,
}: RequestSupportDetailsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <Card className="gap-0 rounded-2xl border-border/70 py-0 font-atyp shadow-none">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Truck className="size-5" aria-hidden="true" />
            </span>
            <h2 className="text-lg font-bold">Delivery Address</h2>
          </div>
          <span className='mt-5 block font-semibold text-xs text-muted-foreground'>Saved Delivery Address</span>
          <p className="mt-3 max-w-sm text-sm leading-6 font-medium">
            {deliveryAddress}
          </p>
        </CardContent>
      </Card>
      <Card className="gap-0 rounded-2xl border-border/70 py-0 font-atyp shadow-none">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MessageAddIcon className="size-5" aria-hidden="true" />
            </span>
            <h2 className="text-lg font-bold">Additional Notes</h2>
          </div>
          <p className="mt-5 border-s-5 border-primary rounded-s-[5px] rounded-e-sm px-4 h-24 flex items-center bg-[#E7F1F2] text-sm">
            “{additionalNotes}”
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
