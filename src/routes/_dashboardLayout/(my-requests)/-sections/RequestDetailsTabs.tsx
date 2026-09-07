import { Tabs, TabsContent, TabsList, TabsTrigger } from '#/components/ui/tabs'
import type { RequestDetails } from '../-components/ProductInformationCard'
import QuotationPendingState from '../-components/QuotationPendingState'
import RequestOverview from './RequestOverview'

type RequestDetailsTabsProps = {
  request: RequestDetails
}

export default function RequestDetailsTabs({
  request,
}: RequestDetailsTabsProps) {
  return (
    <Tabs defaultValue="overview" className="gap-6 font-atyp">
      <TabsList

        className="py-6 px-2 rounded-xl w-full bg-[#E0E5E6]"
        aria-label="Request details sections"
      >
        <TabsTrigger value="overview" className="h-9 rounded-lg px-5 text-sm">
          Overview
        </TabsTrigger>
        <TabsTrigger value="quotations" className="h-9 rounded-lg px-5 text-sm">
          Quotations
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <RequestOverview request={request} />
      </TabsContent>
      <TabsContent value="quotations">
        <QuotationPendingState />
      </TabsContent>
    </Tabs>
  )
}
