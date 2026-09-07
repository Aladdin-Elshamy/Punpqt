import RequestCard from '../-components/RequestCard'

const requests = [
  {
    title: 'Business Cards',
    requestId: 'RQ-2026-001',
    status: 'quotes-ready',
    specifications: ['350 GSM', 'Matte', 'Double Side'],
    details: [
      { label: 'Quantity', value: '1,000 units' },
      { label: 'Send to', value: '12 Printers' },
      { label: 'Quotes', value: '5 Received' },
      { label: 'Created', value: '20 Jul 2026' },
    ],
    primaryAction: 'Compare Offers',
    secondaryAction: 'View Details',
  },
  {
    title: 'Business Cards',
    requestId: 'RQ-2026-001',
    status: 'waiting-for-quotes',
    specifications: ['350 GSM', 'Matte', 'Double Side'],
    details: [
      { label: 'Quantity', value: '1,000 units' },
      { label: 'Send to', value: '12 Printers' },
      { label: 'Quotes', value: '0 Received' },
      { label: 'Created', value: '20 Jul 2026' },
    ],
    primaryAction: 'View Details',
  },
  {
    title: 'Business Cards',
    requestId: 'RQ-2026-001',
    status: 'payment-required',
    specifications: ['350 GSM', 'Matte', 'Double Side'],
    details: [
      { label: 'Quantity', value: '1,000 units' },
      { label: 'Total', value: '1,450 EGP' },
      { label: 'Selected Printer', value: 'Elite Printing' },
      { label: 'Created', value: '20 Jul 2026' },
    ],
    primaryAction: 'Complete Payment',
    secondaryAction: 'View Details',
  },
] as const

export default function RequestsList() {
  return (
    <section aria-label="Your requests" className="space-y-6 font-atyp">
      {requests.map((request) => (
        <RequestCard
          key={`${request.status}-${request.requestId}`}
          {...request}
        />
      ))}
    </section>
  )
}
