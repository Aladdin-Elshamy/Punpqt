import Header from '#/common/sections/Header'
import RequestSearch from '#/common/sections/RequestSearch'
import { createFileRoute } from '@tanstack/react-router'
import PaymentSummarySection from './-sections/PaymentSummarySection'
import TransactionsTableSection from './-sections/TransactionsTableSection'

export const Route = createFileRoute(
  '/_dashboardLayout/(payment-history)/payment-history',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="container mx-auto flex w-full flex-col gap-6 px-4 pb-16 sm:px-6 lg:px-10 z-10 relative">
      <Header
        title="Payment History"
        description="Manage your transactions"
      />
      <PaymentSummarySection />
      <RequestSearch
        filters={['All', 'Payments', 'Top-Ups', 'Refunds', 'Escrows']}
        placeholder="Search by printer name..."
        hideFilters
      />
      <TransactionsTableSection />
    </div>
  )
}