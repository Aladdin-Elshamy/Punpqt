import { useState, type ReactNode } from 'react'
import { Card, CardContent } from '#/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '#/components/ui/tabs'
import { cn } from '#/lib/utils'

export interface OrderDetailsTabsProps {
  journey: ReactNode
  details?: ReactNode
  designFiles?: ReactNode
  messages?: ReactNode
  messageCount?: number
}

export default function OrderDetailsTabs({
  journey,
  details,
  designFiles,
  messages,
  messageCount = 0,
}: OrderDetailsTabsProps) {
  const [activeTab, setActiveTab] = useState('journey')
  const count = Number.isFinite(messageCount)
    ? Math.max(0, Math.floor(messageCount))
    : 0
  const tabs = [
    { value: 'journey', label: 'Project Journey', content: journey },
    {
      value: 'details',
      label: 'Details',
      content: details,
      empty: 'No order details available yet.',
    },
    {
      value: 'design-files',
      label: 'Design Files',
      content: designFiles,
      empty: 'No design files available yet.',
    },
    {
      value: 'messages',
      label: 'Messages',
      content: messages,
      empty: 'Messages are not connected yet.',
    },
  ]
  return (
    <Tabs
      value={activeTab}
      onValueChange={(value) => setActiveTab(value)}
      className="min-w-0 gap-7 font-atyp relative z-10"
    >
      <div className="max-w-full overflow-x-auto pb-1">
        <TabsList
          aria-label="Order details"
          className="h-auto min-h-11 gap-1 rounded-2xl bg-[#EDEEF2] p-1"
        >
          {tabs.map((tab, index) => (
            <TabsTrigger
              key={index}
              value={tab.value}
              className={cn(
                "min-h-9 flex-none rounded-xl px-4 py-2 text-xs font-semibold",
                activeTab === tab.value ? "bg-white text-primary!" : "text-muted-foreground",
              )}
            >
              {tab.label}
              {tab.value === 'messages' && count > 0 && (
                <span
                  className="flex min-w-4 min-h-4 shrink-0 items-center justify-center rounded-full bg-primary px-1 text-[10px] leading-4 text-white"
                  aria-label={`${count} messages`}
                >
                  <span className='trim'>{count}</span>
                </span>
              )}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content ?? (
            <Card className="rounded-3xl bg-white py-6 ring-0">
              <CardContent>
                <h2 className="mb-2 text-lg font-semibold">{tab.label}</h2>
                <p className="text-sm text-muted-foreground">{tab.empty}</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      ))}
    </Tabs>
  )
}
