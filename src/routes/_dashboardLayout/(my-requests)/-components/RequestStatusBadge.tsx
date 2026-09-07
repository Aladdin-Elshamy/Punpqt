import { Badge } from '#/components/ui/badge'

const statusClasses = {
  'quotes-ready': 'bg-[#FDF2DA] text-[#FBB724]',
  'waiting-for-quotes': 'bg-[#FFF7E0] text-[#D89900]',
  'payment-required': 'bg-[#EEF0FF] text-[#3349C9]',
} as const

type RequestStatus = keyof typeof statusClasses

type RequestStatusBadgeProps = {
  status: RequestStatus;
  className?: string
}

const statusLabels: Record<RequestStatus, string> = {
  'quotes-ready': 'Quotes Ready',
  'waiting-for-quotes': 'Waiting for Quotes',
  'payment-required': 'Payment Required',
}

export type { RequestStatus }

export default function RequestStatusBadge({
  status,
  className
}: RequestStatusBadgeProps) {
  return <Badge className={`${statusClasses[status]} ${className}`}>{statusLabels[status]}</Badge>
}
