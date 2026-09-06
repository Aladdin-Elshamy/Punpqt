import OrderStatusBadge from './OrderStatusBadge'

const orders = [
  {
    id: 'ORD-1042',
    product: 'Business Cards',
    dueDate: '8 June',
    tone: 'teal',
  },
  {
    id: 'ORD-1042',
    product: 'Business Cards',
    dueDate: '8 June',
    tone: 'yellow',
  },
  {
    id: 'ORD-1042',
    product: 'Business Cards',
    dueDate: '8 June',
    tone: 'pink',
  },
  {
    id: 'ORD-1042',
    product: 'Business Cards',
    dueDate: '8 June',
    tone: 'teal',
  },
  {
    id: 'ORD-1042',
    product: 'Business Cards',
    dueDate: '8 June',
    tone: 'teal',
  },
] as const

export default function OrderTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-152.5 border-collapse text-left text-xs">
        <thead className="bg-[#f0f0f3] text-primary">
          <tr>
            <th className="px-3 py-4 font-medium rounded-tl-md rtl:rounded-tr-md">ID</th>
            <th className="px-3 py-4 font-medium">Product</th>
            <th className="px-3 py-4 font-medium">Due to</th>
            <th className="px-3 py-4 font-medium">Status</th>
            <th className="px-3 py-4 font-medium rounded-tr-md rtl:rounded-tl-md">Printer</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={`${order.id}-${index}`} className="border-b border-border">
              <td className="px-3 py-4 font-medium">{order.id}</td>
              <td className="px-3 py-4">{order.product}</td>
              <td className="px-3 py-4">{order.dueDate}</td>
              <td className="px-3 py-4">
                <OrderStatusBadge tone={order.tone} />
              </td>
              <td className="px-3 py-4 font-medium">Elite Printing Co.</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
