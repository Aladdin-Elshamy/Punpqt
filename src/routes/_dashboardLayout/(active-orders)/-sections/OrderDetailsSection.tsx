import PrinterInfo from './PrinterInfo'
import Total from './Total'
import ProductInformationCard from '../../../../common/components/ProductInformationCard'
import SupportDetails from '#/common/sections/SupportDetails'

export interface OrderDetailsSectionProps {
  productType: string
  orderId: string
  quantity: number
  specifications: string[]
  printer: { name: string; initials: string; rating: number }
  total: number
  currency: string
  placedDate: string
  deliveryDate?: string
  onMessagePrinter?: () => void
}

export default function OrderDetailsSection({
  productType,
  orderId,
  quantity,
  specifications,
  printer,
  total,
  currency,
  placedDate,
  deliveryDate,
  onMessagePrinter,
}: OrderDetailsSectionProps) {
  const request = {
    requestId: orderId,
    productType,
    quantity: `${quantity.toLocaleString('en-US')} units`,
    // createdAt: new Intl.DateTimeFormat('en-US', {
    //   month: 'short',
    //   day: 'numeric',
    //   year: 'numeric',
    //   timeZone: 'UTC',
    // }).format(new Date(placedDate)),
    specifications,
  }
  return (
    <div className="grid min-w-0 gap-6 font-atyp xl:grid-cols-[minmax(0,1fr)_24rem] lg:gap-8">
      <div className="space-y-6">
        <ProductInformationCard request={request} />
        <SupportDetails
          deliveryAddress={
            '45 El Teseen Street, Fifth Settlement, New Cairo, Cairo Governorate'
          }
          additionalNotes={
            'Please make sure the colors are accurate and the cards are delivered in secure packaging.'
          }
        />
      </div>
      <aside
        className="flex min-w-0 flex-col gap-6"
        aria-label="Printer and order summary"
      >
        <PrinterInfo printer={printer} onMessagePrinter={onMessagePrinter} />
        <Total
          total={total}
          currency={currency}
          placedDate={placedDate}
          deliveryDate={deliveryDate}
        />
      </aside>
    </div>
  )
}
