import type { ActiveOrder } from '../-components/ActiveOrderCard'

// Static preview data until the orders API is connected.
export const activeOrders: ActiveOrder[] = [
  {
    id: 'restaurant-business-cards',
    orderNumber: 'ORD-1042',
    product: 'Restaurant Business Cards',
    printer: 'Elite Printing Co.',
    tags: ['Business Cards', '1,000 pcs'],
    status: 'sample-review',
    expectedDelivery: '2026-08-06',
  },
  {
    id: 'storefront-banners',
    orderNumber: 'ORD-1042',
    product: 'Storefront Banners',
    printer: 'Cairo-Flex Print',
    tags: ['Vinyl Banners', '3 units'],
    status: 'delivered',
    expectedDelivery: '2026-08-06',
  },
  {
    id: 'event-flyers',
    orderNumber: 'ORD-1042',
    product: 'Event Flyers',
    printer: 'Elite Printing Co.',
    tags: ['Business Cards', '1,000 pcs', 'Elite Printing Co.'],
    status: 'in-production',
    expectedDelivery: '2026-08-06',
  },
]
