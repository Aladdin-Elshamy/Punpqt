import { Badge } from '#/components/ui/badge'
import { ArrowDownLeft, ArrowUpRight, Lock, RotateCcw } from 'lucide-react'
import type { TransactionType } from '../-data/transactions'

type TransactionTypeBadgeProps = {
  type: TransactionType
}

export default function TransactionTypeBadge({
  type,
}: TransactionTypeBadgeProps) {
  switch (type) {
    case 'payment':
      return (
        <Badge
          className="h-auto gap-1 rounded-full border-transparent bg-[#fef2f2] px-2.5 py-1 text-xs font-semibold! text-[#f43f5e]"
        >
          <ArrowUpRight className="size-3.5" />
          <span className="font-bold!">Payment</span>
        </Badge>
      )
    case 'top-up':
      return (
        <Badge
          className="h-auto gap-1 rounded-full border-transparent bg-[#e6f7f5] px-2.5 py-1 text-xs font-semibold! text-[#0d7377]"
        >
          <ArrowDownLeft className="size-3.5" />
          <span className="font-bold!">Top-up</span>
        </Badge>
      )
    case 'escrow':
      return (
        <Badge
          className="h-auto gap-1 rounded-full border-transparent bg-[#fffbeb] px-2.5 py-1 text-xs font-semibold! text-[#f59e0b]"
        >
          <Lock className="size-3.5" />
          <span className="font-bold!">Escrow</span>
        </Badge>
      )
    case 'refund':
      return (
        <Badge
          className="h-auto gap-1 rounded-full border-transparent bg-[#f5f3ff] px-2.5 py-1 text-xs font-semibold! text-[#7c3aed]"
        >
          <RotateCcw className="size-3.5" />
          <span className="font-bold!">Refund</span>
        </Badge>
      )
  }
}
