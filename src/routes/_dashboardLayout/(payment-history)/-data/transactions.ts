export type TransactionType = 'payment' | 'top-up' | 'escrow' | 'refund'
export type TransactionStatus = 'done' | 'held'

export type Transaction = {
  id: string
  type: TransactionType
  title: string
  subtitle: string
  orderId?: string
  date: string
  time: string
  method: string
  amount: string
  status: TransactionStatus
}

export const initialTransactions: Array<Transaction> = [
  {
    id: 'TXN-2401',
    type: 'payment',
    title: 'Elite Printing Co.',
    subtitle: 'Business Cards — 500 pcs',
    orderId: 'ORD-2401',
    date: 'Jul 11, 2026',
    time: '1:45 PM',
    method: 'Visa 4532',
    amount: 'EGP 180',
    status: 'done',
  },
  {
    id: 'TXN-2400',
    type: 'top-up',
    title: 'Wallet Top-up',
    subtitle: 'Bank transfer credit',
    date: 'Jul 11, 2026',
    time: '10:30 AM',
    method: 'Bank Transfer',
    amount: '+EGP 500',
    status: 'done',
  },
  {
    id: 'TXN-2399',
    type: 'payment',
    title: 'Premium Print Hub',
    subtitle: 'A5 Flyers — 1,000 pcs',
    orderId: 'ORD-2385',
    date: 'Jul 10, 2026',
    time: '4:20 PM',
    method: 'Wallet Balance',
    amount: 'EGP 360',
    status: 'done',
  },
  {
    id: 'TXN-2398',
    type: 'escrow',
    title: 'Escrow Hold',
    subtitle: 'Quality Offset — ORD-2372',
    date: 'Jul 10, 2026',
    time: '2:15 PM',
    method: 'Wallet Balance',
    amount: 'EGP 540',
    status: 'held',
  },
  {
    id: 'TXN-2394',
    type: 'payment',
    title: 'Precision Printing',
    subtitle: 'Stickers — 2,000 pcs',
    orderId: 'ORD-2341',
    date: 'Jul 8, 2026',
    time: '3:30 PM',
    method: 'Visa 4532',
    amount: 'EGP 445',
    status: 'done',
  },
]
