import QuotationNextStepsCard from './QuotationNextStepsCard'

import QuotationSummaryCard from '#/common/components/QuotationSummaryCard'
import QuotationBanner from '#/common/components/QuotationBanner'
import {
  Award,
  CalendarDays,
  FileText,
  Shield,
  Timer,
  Users,
} from 'lucide-react'
import QuotationOfferCard from '../-components/QuotationOfferCard'
import { Badge } from '#/components/ui/badge'

const offers = {
  id: 'elite-printing',
  vendorName: 'Elite Printing Co.',
  initials: 'EP',
  location: 'Nasr City, Cairo',
  rating: 4.9,
  reviewCount: 324,
  badges: (
    <>
      <Badge className="h-auto bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700">
        <Award aria-hidden="true" />
        Top Rated
      </Badge>
      <Badge className="h-auto bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
        <Shield aria-hidden="true" />
        Recommended
      </Badge>
    </>
  ),
  price: 2200,
  currency: 'EGP',
  productDescription: '1,000 pcs A4 Brochures',
  validUntil: 'June 5',
  turnaround: '3 days',
  onTimePercentage: 96,
  responseTime: '1.5h',
  printingMethods: ['Digital', 'Offset', 'UV'],
  sampleAvailable: true,
  note: 'Can deliver gloss or matte at same price. Rush +EGP 150.',
}

const summaryCards = [
  {
    label: 'Printers Contacted',
    value: '5',
    icon: Users,
    iconClassName: 'bg-red-50 text-red-600',
  },
  {
    label: 'Quotations Received',
    value: String(4),
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

export default function QuotationPaymentState() {
  return (
    <div className="@container space-y-6 font-atyp">
      <QuotationBanner
        title={`Selected Quotation`}
        description="You have successfully selected a quotation. Complete the payment to allow the printer to start production."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <QuotationSummaryCard key={card.label} {...card} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 @md:grid-cols-1 @2xl:grid-cols-2">
        <QuotationOfferCard applyBorder {...offers} hideActions />
        <QuotationNextStepsCard />
      </div>
    </div>
  )
}
