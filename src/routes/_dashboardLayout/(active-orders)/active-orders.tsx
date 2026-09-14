import ActiveOrderCard from './-components/ActiveOrderCard'
import { activeOrders } from './-data/activeOrders'
import Header from '#/common/sections/Header'
import { createFileRoute } from '@tanstack/react-router'
import RequestSearch from '#/common/sections/RequestSearch'
import QuotationSummaryCard from '#/common/components/QuotationSummaryCard'
import { Package, ThumbsUp } from 'lucide-react'
import Check from '#/common/icons/Check'
import Warning from '#/common/icons/Warning'

const filters = ['All', 'Action Need', 'In Progress']
const summaryCards = [
  {
    label: 'Active Orders',
    value: '12',
    icon: <Package className="size-5" />,
    iconClassName: 'bg-red-50 text-red-600 size-12',
  },
  {
    label: 'Action Need',
    value: '2',
    icon: <Warning className="size-5" />,
    iconClassName: 'bg-[#FBBF24]/10 text-amber-400 size-12',
  },
  {
    label: 'In Production',
    value: '2',
    icon: <Check className="size-5" />,
    iconClassName: 'bg-sky-50 text-sky-500 size-12',
  },
  {
    label: 'Delieverd',
    value: '5',
    icon: <ThumbsUp className="size-5" />,
    iconClassName: 'bg-primary/5 text-primary size-12',
  },
] as const
export const Route = createFileRoute(
  '/_dashboardLayout/(active-orders)/active-orders',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="container mx-auto flex w-full flex-col gap-10 px-4 pb-16 sm:px-6 lg:px-10">
      <Header
        title="Active Orders"
        description="Track your ongoing printing orders and their progress."
      />
      <div className="grid relative z-10 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <QuotationSummaryCard key={card.label} {...card} />
        ))}
      </div>
      <RequestSearch
        hideFilters
        placeholder="Search by product or Order ID..."
        filters={filters}
      />

      <section
        aria-label="Active orders"
        className="relative z-10 flex flex-col gap-7"
      >
        {activeOrders.map((order) => (
          <ActiveOrderCard key={order.id} order={order} />
        ))}
      </section>
    </div>
  )
}
