import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Separator } from '#/components/ui/separator'
import OrderBreakdownItem from '../-components/OrderBreakdownItem'

const breakdownItems = [
  { category: 'Business Cards', amount: '$1240', orders: 8, percentage: 12 },
  { category: 'Brochures', amount: '$1580', orders: 5, percentage: 52 },
  { category: 'Flyers', amount: '$890', orders: 4, percentage: 36 },
  { category: 'Catalogs', amount: '$920', orders: 2, percentage: 9 },
  { category: 'Stickers', amount: '$630', orders: 2, percentage: 6 },
] as const

export default function OrderBreakdown() {
  return (
    <Card className="gap-6 py-5 font-atyp shadow-none">
      <CardHeader className="px-5 pb-0">
        <CardTitle className="text-base font-bold">Order Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 px-5">
        {breakdownItems.map((item) => (
          <OrderBreakdownItem key={item.category} {...item} />
        ))}
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">Total</span>
          <span className="font-medium">$5,260</span>
        </div>
      </CardContent>
    </Card>
  )
}
