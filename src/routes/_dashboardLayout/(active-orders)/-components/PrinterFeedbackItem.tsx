import { CircleX } from 'lucide-react'

export default function PrinterFeedbackItem({ issue }: { issue: string }) {
  return (
    <li className="flex items-start gap-3 rounded-xl border border-[#FF454F] bg-[#FFF5F5] px-5 py-4 text-base font-semibold sm:px-6">
      <CircleX
        className="mt-1 size-4.5 shrink-0 text-[#FF303B]"
        strokeWidth={1.3}
        aria-hidden="true"
      />
      <span className="min-w-0 wrap-anywhere">{issue}</span>
    </li>
  )
}
