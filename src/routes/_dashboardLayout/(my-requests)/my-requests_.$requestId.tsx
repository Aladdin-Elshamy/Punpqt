import { createFileRoute, useRouter } from '@tanstack/react-router'
import RequestDetailsTabs from './-sections/RequestDetailsTabs'
import RequestStatusBadge from './-components/RequestStatusBadge'
import Header from './-sections/Header'
import z from 'zod'
import { Button } from '#/components/ui/button'
const myRequestsSchema = z.object({
  status: z.enum(['waiting-for-quotes', 'quotes-ready', 'payment-required']).default('waiting-for-quotes'),
})

export const Route = createFileRoute(
  '/_dashboardLayout/(my-requests)/my-requests_/$requestId',
)({
  component: RouteComponent,
  validateSearch: myRequestsSchema,
  errorComponent: ({ error }) => {
    const router = useRouter()
    return (
      <div className="container mx-auto flex w-full flex-col gap-10 px-4 pb-16 sm:px-6 lg:px-10">
        <h2>Invalid Query Parameters</h2>
        <p>{error instanceof Error ? error.message : String(error)}</p>
        <Button
          onClick={() => router.navigate({ to: '/my-requests', search: {} })}
        >
          Go Back to my Requests
        </Button>
      </div>
    )
  },
})

function RouteComponent() {
  const { requestId } = Route.useParams()
  const { status } = Route.useSearch()
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
        description={status === 'quotes-ready' ? "Review your submitted printing request, specifications, and quotation status." : status === 'waiting-for-quotes' ? "View, compare, and manage your printing requests before production begins." : "Review your submitted printing request, specifications, and quotation status."}
        qoutesState={
          <RequestStatusBadge className="z-10" status={status} />
        }
      />
      <RequestDetailsTabs request={request} />
    </div>
  )
}
