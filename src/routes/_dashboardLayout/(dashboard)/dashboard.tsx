import { createFileRoute } from '@tanstack/react-router'
import Actions from './-sections/Actions'
import Greeting from './-sections/Greeting'
import Messages from './-sections/Messages'
import OrderBreakdown from './-sections/OrderBreakdown'
import RecentActiveOrders from './-sections/RecentActiveOrders'

export const Route = createFileRoute('/_dashboardLayout/(dashboard)/dashboard')(
  { component: RouteComponent },
)

function RouteComponent() {
  return (
    <div className="container mx-auto flex w-full flex-col gap-10 px-4 sm:px-6 lg:px-10 pb-16">
      <Greeting />
      <Actions />
      <div className="grid items-stretch gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">
        <RecentActiveOrders />
        <Messages />
      </div>
      <OrderBreakdown />
    </div>
  )
}
