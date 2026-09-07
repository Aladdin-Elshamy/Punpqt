import ProductInformationCard, {
  type RequestDetails,
} from '../-components/ProductInformationCard'
import QuotationStatusCard from '../-components/QuotationStatusCard'
import RequestActivityTimeline from '../-components/RequestActivityTimeline'
import RequestSupportDetails from '../-components/RequestSupportDetails'

type RequestOverviewProps = {
  request: RequestDetails
}

const activityItems = [
  {
    title: 'Request created',
    description: '20 Jul 2026, 10:30 AM',
    completed: true,
  },
  {
    title: 'Sent to printers',
    description: 'Your request was shared with 12 printers.',
    completed: true,
  },
  {
    title: 'Waiting for quotations',
    description: 'Printers are currently preparing their offers.',
    completed: false,
  },
] as const

export default function RequestOverview({ request }: RequestOverviewProps) {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_24rem]">
      <div className="space-y-6">
        <ProductInformationCard request={request} />
        <RequestSupportDetails
          deliveryAddress="45 El Teseen Street, Fifth Settlement, New Cairo, Cairo Governorate"
          additionalNotes="Please make sure the colors are accurate and the cards are delivered in secure packaging."
        />
      </div>
      <aside className="space-y-6" aria-label="Request status and activity">
        <QuotationStatusCard
          printersCount={12}
          quotesReceived={0}
          expectedResponse="Most printers respond within 24 hours."
        />
        <RequestActivityTimeline items={activityItems} />
      </aside>
    </div>
  )
}
