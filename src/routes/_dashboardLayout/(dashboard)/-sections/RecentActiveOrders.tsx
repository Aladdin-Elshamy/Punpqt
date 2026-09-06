import { Badge } from '#/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import OrderProgressTracker from '../-components/OrderProgressTracker'
import OrderTable from '../-components/OrderTable'

export default function RecentActiveOrders() {
  return (
    <Card className="h-full gap-6 py-6 font-atyp shadow-none">
      <CardHeader className="flex flex-row items-center justify-between px-6">
        <CardTitle className="text-xl font-bold">
          recent active orders
        </CardTitle>
        <Badge>all active orders</Badge>
      </CardHeader>
      <CardContent className="space-y-6 px-6">
        <OrderProgressTracker />
        <OrderTable />
      </CardContent>
    </Card>
  )
}
