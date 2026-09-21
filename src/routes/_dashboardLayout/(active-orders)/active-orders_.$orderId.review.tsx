import { createFileRoute } from '@tanstack/react-router'
import JourneyStepHint from './-components/JourneyStepHint'
import Header from '#/common/sections/Header'
import SamplePreview from './-sections/SamplePerview'
import ProductSpecifications from './-sections/ProductSpecifications'
import SampleInformation from './-sections/SampleInformation'

export const Route = createFileRoute(
  '/_dashboardLayout/(active-orders)/active-orders_/$orderId/review',
)({ component: RouteComponent })

const specifications = [
  ['Product', 'Business Cards'],
  ['Quantity', '5,000 pcs'],
  ['Size', '3.5 x 2 in'],
  ['Paper Type', '350gsm Matte'],
  ['Print Color', 'Full Color (CMYK)'],
  ['Finishing', 'Spot UV'],
]

function RouteComponent() {
  return (
    <main className="container mx-auto flex w-full flex-col gap-8 px-4 pb-16 sm:px-6 lg:px-10">

      <Header
        title="Review Sample"
        description="Review the latest digital proof uploaded by the printer before approving production."
      />
      <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1.9fr)_minmax(290px,1fr)] relative z-10">
        <SamplePreview />
        <aside className="flex flex-col gap-6">
          <SampleInformation />
          <ProductSpecifications specifications={specifications} />
          <JourneyStepHint tone='attention' title="Once you approve this sample, production will begin." />
        </aside>
      </div>
    </main>
  )
}
