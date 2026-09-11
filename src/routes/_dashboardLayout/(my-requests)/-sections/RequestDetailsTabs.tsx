import { Tabs, TabsContent, TabsList, TabsTrigger } from '#/components/ui/tabs'
import { useState } from 'react'
import type { RequestDetails } from '../-components/ProductInformationCard'
import QuotationPendingState from './QuotationPendingState'
import RequestOverview from './RequestOverview'
import { cn } from '#/lib/utils'
import { useSearch } from '@tanstack/react-router'
import QuotationReadyState from './QuotationReadyState'
import QuotationPaymentState from './QuotationPaymentState'

type RequestDetailsTabsProps = {
  request: RequestDetails
}

export default function RequestDetailsTabs({
  request,
}: RequestDetailsTabsProps) {
  const [activatTab, setActivateTab] = useState('overview')
  const {status} = useSearch({from:'/_dashboardLayout/(my-requests)/my-requests_/$requestId'})
  return (
    <Tabs
      value={activatTab}
      onValueChange={setActivateTab}
      className="gap-6 font-atyp relative z-10"
    >
      <TabsList
        className="py-6 px-2 rounded-xl w-full bg-[#E0E5E6]"
        aria-label="Request details sections"
      >
        <TabsTrigger
          value="overview"
          className={cn(
            'h-9 rounded-lg px-5 text-sm font-semibold',
          )}
          style={{
            color: activatTab === 'overview' ? 'var(--primary)' : 'var(--muted-foreground)',
          }}
        >
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="quotations"
          className={cn("h-9 rounded-lg px-5 text-sm font-semibold"
          )}
          style={{
            color: activatTab === 'quotations' ? 'var(--primary)' : 'var(--muted-foreground)',
          }}
        >
          Quotations
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <RequestOverview request={request} />
      </TabsContent>
      <TabsContent value="quotations">
        {status === 'waiting-for-quotes' && <QuotationPendingState />}
        {status === 'quotes-ready' && <QuotationReadyState />}
        {status === 'payment-required' && <QuotationPaymentState />}
      </TabsContent>
    </Tabs>
  )
}
