import { useState } from 'react'
import QuotationAcceptanceBar from '../-components/QuotationAcceptanceBar'

import QuotationSummaryCard from '#/common/components/QuotationSummaryCard'
import QuotationBanner from '#/common/components/QuotationBanner'
import RequestSearch from './RequestSearch'
import {
  Award,
  CalendarDays,
  FileText,
  Shield,
  Timer,
  Users,
} from 'lucide-react'
import QuotationOfferCard from '../-components/QuotationOfferCard'
import type { QuotationOfferCardProps } from '../-components/QuotationOfferCard'
import { Badge } from '#/components/ui/badge'

const offers = [
  {
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
  },
  {
    id: 'nile-print',
    vendorName: 'Nile Print House',
    initials: 'NP',
    location: 'Dokki, Giza',
    rating: 4.7,
    reviewCount: 218,
    badges: (
      <Badge className="h-auto bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
        <Shield aria-hidden="true" />
        Recommended
      </Badge>
    ),
    price: 1950,
    currency: 'EGP',
    productDescription: '1,000 pcs A4 Brochures',
    validUntil: 'June 7',
    turnaround: '5 days',
    onTimePercentage: 94,
    responseTime: '2h',
    printingMethods: ['Digital', 'Offset'],
    sampleAvailable: true,
    note: 'Includes a free digital proof. Delivery within Cairo available.',
  },
  {
    id: 'swift-press',
    vendorName: 'Swift Press',
    initials: 'SP',
    location: 'Heliopolis, Cairo',
    rating: 4.8,
    reviewCount: 186,
    badges: (
      <Badge className="h-auto bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700">
        <Award aria-hidden="true" />
        Top Rated
      </Badge>
    ),
    price: 2450,
    currency: 'EGP',
    productDescription: '1,000 pcs A4 Brochures',
    validUntil: 'June 4',
    turnaround: '2 days',
    onTimePercentage: 98,
    responseTime: '45m',
    printingMethods: ['Digital', 'UV'],
    sampleAvailable: false,
    note: 'Priority production included. Ready for pickup in two days.',
  },
] satisfies Array<QuotationOfferCardProps & { id: string }>

const filters = [
  'All',
  'Recommended',
  'Lowest Price',
  'Fastest Delivery',
  'Top Rated',
]
const summaryCards = [
  {
    label: 'Printers Contacted',
    value: '5',
    icon: Users,
    iconClassName: 'bg-red-50 text-red-600',
  },
  {
    label: 'Quotations Received',
    value: String(offers.length),
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

export default function QuotationReadyState() {
  const [selectedOfferId, setSelectedOfferId] = useState<string | null>(null)
  const selectedOffer = offers.find((offer) => offer.id === selectedOfferId)
  return (
    <div className="@container space-y-6 font-atyp">
      <QuotationBanner
        title={`${offers.length} Quotations Received`}
        description="Great news! Multiple printing vendors have responded to your request. Compare pricing, delivery time and ratings before selecting your preferred quotation."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <QuotationSummaryCard key={card.label} {...card} />
        ))}
      </div>
      <RequestSearch filters={filters} hideFilters />
      <div className="grid grid-cols-1 gap-6 @md:grid-cols-1 @2xl:grid-cols-2 @4xl:grid-cols-3">
        {offers.map(({ id, ...offer }) => (
          <QuotationOfferCard
            key={id}
            {...offer}
            isSelected={id === selectedOfferId}
            isDimmed={selectedOfferId !== null && id !== selectedOfferId}
            onSelect={() => setSelectedOfferId(id)}
          />
        ))}
      </div>
      {selectedOffer && (
        <QuotationAcceptanceBar
          vendorName={selectedOffer.vendorName}
          price={selectedOffer.price}
          currency={selectedOffer.currency}
          turnaround={selectedOffer.turnaround}
        />
      )}
    </div>
  )
}
