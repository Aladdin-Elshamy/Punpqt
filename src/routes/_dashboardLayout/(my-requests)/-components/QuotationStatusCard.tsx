import HbarsIcon from '#/common/icons/HbarsIcon'
import { Card, CardContent } from '#/components/ui/card'
import { Clock3, History, Send } from 'lucide-react'

type QuotationStatusCardProps = {
  printersCount: number
  quotesReceived: number
  expectedResponse: string
}

export default function QuotationStatusCard({
  printersCount,
  quotesReceived,
  expectedResponse,
}: QuotationStatusCardProps) {
  return (
    <Card className="gap-0 relative z-10 rounded-2xl border-border/70 py-0 font-atyp shadow-none bg-primary text-white">
      <CardContent className="p-6 sm:p-7">
        <h2 className="text-xl font-bold tracking-tight flex gap-4 items-center"><HbarsIcon className="size-6" aria-hidden="true" /><span className='trim'>Quotation Status</span></h2>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-[#2C8E92] p-4">
            <p className='text-[#D1D1D1] font-semibold'>Sent to</p>
            <p className="mt-4 text-2xl font-bold">{printersCount}</p>
            <p className="mt-1 font-semibold text-[#D1D1D1]">
              Printers
            </p>
          </div>
          <div className="rounded-xl bg-[#2C8E92] p-4">
            <p className='text-[#D1D1D1] font-semibold'>Received</p>
            <p className="mt-4 text-2xl font-bold">{quotesReceived}</p>
            <p className="mt-1 text-[#D1D1D1] font-semibold ">
              Quotes
            </p>
          </div>
        </div>
        <div className="mt-5 flex items-center text-white gap-3 rounded-xl bg-[#2C8E92] p-4">
          <History
            className="size-4 shrink-0"
            aria-hidden="true"
          />
          <p className="text-xs leading-5 font-medium">
            {expectedResponse}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
