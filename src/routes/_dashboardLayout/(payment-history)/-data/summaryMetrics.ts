export type SummaryMetric = {
  id: string
  title: string
  value?: string
  subtitle: string
  trend?: string
  badgeText?: string
  iconType: 'transaction' | 'spending' | 'escrow'
}

export const summaryMetrics: Array<SummaryMetric> = [
  {
    id: 'total-transaction',
    title: 'Total Transaction',
    value: '13',
    subtitle: 'All time',
    trend: '5%',
    iconType: 'transaction',
  },
  {
    id: 'total-spending',
    title: 'Total Spending',
    value: '$5,260',
    subtitle: 'Payments & escrow',
    trend: '12%',
    iconType: 'spending',
  },
  {
    id: 'escrow-protection',
    title: 'Escrow Protection',
    subtitle:
      'Your payments are held securely. Funds are only released to printers after you confirm delivery.',
    badgeText: 'EGP 540 currently in escrow',
    iconType: 'escrow',
  },
]
