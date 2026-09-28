import { Badge } from '#/components/ui/badge'
import { Clock } from 'lucide-react'
import type { TransactionStatus } from '../-data/transactions'
import Check from '#/common/icons/Check'

type TransactionStatusBadgeProps = {
  status: TransactionStatus
}

export default function TransactionStatusBadge({
  status,
}: TransactionStatusBadgeProps) {
  if (status === 'done') {
    return (
      <Badge
        className="h-auto gap-1 rounded-full border-[#ccfbf1] bg-[#f0fdfa] px-2.5 py-1 text-xs font-semibold! text-[#0d7377]"
      >
        <Check className="size-3" />
        <span className="font-semibold! trim">Done</span>
      </Badge>
    )
  }

  return (
    <Badge
      className="h-auto gap-1 rounded-full border-[#fef3c7] bg-[#fffbeb] px-2.5 py-1 text-xs font-semibold! text-[#d97706]"
    >
      <Clock className="size-3 stroke-[2.5]" />
      <span className="font-semibold!">Held</span>
    </Badge>
  )
}
