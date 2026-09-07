import { createFileRoute } from '@tanstack/react-router'
import RequestDetailsTabs from './-sections/RequestDetailsTabs'
import RequestStatusBadge from './-components/RequestStatusBadge'
import Header from './-sections/Header'

export const Route = createFileRoute(
  '/_dashboardLayout/(my-requests)/my-requests_/$requestId',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const { requestId } = Route.useParams()
  const request = {
    requestId: requestId || 'RQ-2026-001',
    productType: 'Business Cards',
    quantity: '1,000 units',
    createdAt: '20 Jul 2026',
    specifications: [
      'Matt Lamination',
      'Gloss Lamination',
      'Spot UV',
      'Die-Cut',
      '350 GSM',
      'Soft Touch',
      'Embossing',
    ],
  } as const

  return (
    <div className="container mx-auto flex w-full flex-col gap-10 px-4 pb-16 sm:px-6 lg:px-10">
      <Header
        title="Requests Details"
        description="View, compare, and manage your printing requests before production begins."
        qoutesState={
          <RequestStatusBadge className="z-10" status="waiting-for-quotes" />
        }
      />
      <RequestDetailsTabs request={request} />
    </div>
  )
}
