import { Badge } from '#/components/ui/badge'

const statusClasses = {
  teal: 'bg-[#E8F4F4] text-[#0A5C5F]',
  yellow: 'bg-[#FFF7E0] text-[#D89900]',
  pink: 'bg-[#FCECF0] text-[#D91E4E]',
} as const

type OrderStatusBadgeProps = {
  tone: keyof typeof statusClasses
}

export default function OrderStatusBadge({ tone }: OrderStatusBadgeProps) {
  return <Badge className={`${statusClasses[tone]} h-8`}>In production</Badge>
}
