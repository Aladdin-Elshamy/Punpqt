import OrderDetailsHeader from './-components/OrderDetailsHeader'
import { createFileRoute } from '@tanstack/react-router'
import OrderDetailsTabs from './-components/OrderDetailsTabs'
import ProjectJourney from './-components/ProjectJourney'
import JourneyStepHint from './-components/JourneyStepHint'

export const Route = createFileRoute(
  '/_dashboardLayout/(active-orders)/active-orders_/$orderId/order-details',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="container mx-auto flex w-full flex-col gap-10 px-4 pb-16 sm:px-6 lg:px-10">
      {/* Preview data until the order details API is connected. */}
      <OrderDetailsHeader
        product="Restaurant Business Cards"
        printer="Elite Printing Co."
        orderNumber="ORD-1042"
        expectedDelivery="2026-08-06"
        status="in-production"
        completedStages={3}
      />
      <OrderDetailsTabs
        messageCount={3}
        journey={
          <ProjectJourney
            activeStep="production"
            activeStepContent={
              <JourneyStepHint
                title="Your order is being printed"
                description="The printer is working on your order. You'll be notified when it's ready for shipping."
              />
            }
          />
        }
      />
    </div>
  )
}
