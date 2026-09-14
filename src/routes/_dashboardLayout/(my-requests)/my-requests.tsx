import { createFileRoute } from '@tanstack/react-router'
import Header from '../../../common/sections/Header'
import RequestSearch from '../../../common/sections/RequestSearch'
import RequestsList from './-sections/RequestsList'
const filters = [
  'All Requests',
  'Waiting for Quotes',
  'Quotes Ready',
  'Payment Required',
]
export const Route = createFileRoute(
  '/_dashboardLayout/(my-requests)/my-requests',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="container mx-auto flex w-full flex-col gap-10 px-4 pb-16 sm:px-6 lg:px-10">
      <Header
        title="Requests"
        description="View, compare, and manage your printing requests before production begins."
        newRequest
      />
      <RequestSearch filters={filters} />
      <RequestsList />
    </div>
  )
}
