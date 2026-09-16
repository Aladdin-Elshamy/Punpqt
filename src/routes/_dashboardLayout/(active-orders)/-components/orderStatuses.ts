import { ThumbsUp, TriangleAlert } from 'lucide-react'
import Check from '#/common/icons/Check'

export const statuses = {
  'sample-review': {
    label: 'Sample Review',
    icon: TriangleAlert,
    tone: 'bg-[#FFFAEB] text-[#FFB800]',
    progress: 'bg-[#FFD65F]',
    completed: 3,
    action: 'Review Sample',
    button: 'bg-[#FFC21B] text-white hover:bg-[#FFB800]',
  },
  delivered: {
    label: 'Delivered',
    icon: ThumbsUp,
    tone: 'bg-[#EFF7F7] text-[#006970]',
    progress: 'bg-[#0D7377]',
    completed: 5,
    action: 'Review',
    button: 'bg-primary text-white hover:bg-primary/90',
  },
  'in-production': {
    label: 'In Production',
    icon: Check,
    tone: 'bg-[#F1F9FF] text-[#0088FF]',
    progress: 'bg-[#0088FF]',
    completed: 4,
    action: null,
    button: '',
  },
} as const

export type OrderStatus = keyof typeof statuses
