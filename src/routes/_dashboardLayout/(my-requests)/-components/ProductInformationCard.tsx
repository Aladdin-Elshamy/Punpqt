import { Badge } from '#/components/ui/badge'
import { Card, CardContent } from '#/components/ui/card'
import { Separator } from '#/components/ui/separator'
import { Box, Package } from 'lucide-react'

export type RequestDetails = {
  requestId: string
  productType: string
  quantity: string
  createdAt: string
  specifications: readonly string[]
}

type ProductInformationCardProps = {
  request: RequestDetails
}

export default function ProductInformationCard({
  request,
}: ProductInformationCardProps) {
  const details = [
    { label: 'Product Type', value: request.productType },
    { label: 'Request ID', value: request.requestId },
    { label: 'Quantity', value: request.quantity },
    { label: 'Created', value: request.createdAt },
  ] as const

  return (
    <Card className="relative z-10 gap-0 overflow-hidden rounded-2xl border-border/70 py-0 font-atyp shadow-none">
      <Package className="pointer-events-none absolute -inset-e-8 -top-8 size-44 text-primary/10 sm:-inset-e-10 -rotate-10 sm:-top-12 sm:size-52" />
      <CardContent className="relative p-6 sm:p-7">
        <div className='flex sm:items-center gap-2'>
          <span className='flex items-center justify-center size-7 bg-primary/10 text-primary rounded-sm'><Package size={16} /></span>
          <h2 className="text-xl font-bold tracking-tight trim">
            Product Information
          </h2>
        </div>
        <dl className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 sm:gap-x-8">
          {details.map((detail) => (
            <div key={detail.label}>
              <dt className="text-xs font-semibold text-muted-foreground">
                {detail.label}
              </dt>
              <dd className="mt-1 text-sm font-medium sm:text-base">
                {detail.value}
              </dd>
            </div>
          ))}
        </dl>
        <Separator className='my-8' />
        <div>
          <h3 className="text-sm font-medium">specifications</h3>
          <div className="mt-4 flex flex-wrap gap-4">
            {request.specifications.map((specification) => (
              <Badge
                key={specification}
                variant="secondary"
                className="bg-white border-2 border-black/6 h-8 px-3 text-foreground"
              >
                {specification}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
