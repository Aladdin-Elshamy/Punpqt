import { CalendarDays, FileText, Timer, Users } from 'lucide-react'
import QuotationEmptyStatePanel from '../-components/QuotationEmptyStatePanel'
import QuotationSummaryCard from '#/common/components/QuotationSummaryCard'
import QuotationBanner from '#/common/components/QuotationBanner'

const summaryCards = [
  {
    label: 'Printers Contacted',
    value: '5',
    icon: Users,
    iconClassName: 'bg-red-50 text-red-600',
  },
  {
    label: 'Quotations Received',
    value: '2',
    icon: FileText,
    iconClassName: 'bg-sky-50 text-sky-500',
  },
  {
    label: 'Expected Response',
    value: '24\u201348 hrs',
    icon: Timer,
    iconClassName: 'bg-amber-50 text-amber-400',
  },
  {
    label: 'Request Submitted',
    value: '31 Jul 2026',
    icon: CalendarDays,
    iconClassName: 'bg-primary/10 text-primary',
  },
] as const

export default function QuotationPendingState() {
  return (
    <div className="space-y-6 font-atyp">
      <QuotationBanner
        title='Waiting for Quotations'
        description="Your request has been successfully sent to available printing vendors."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <QuotationSummaryCard key={card.label} {...card} />
        ))}
      </div>
      <QuotationEmptyStatePanel />
    </div>
  )
}
