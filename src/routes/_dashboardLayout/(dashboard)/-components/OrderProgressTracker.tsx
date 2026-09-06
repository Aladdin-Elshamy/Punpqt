import { cn } from '#/lib/utils';
import {
  CheckCircle2,
  CreditCard,
  Eye,
  FileText,
  Printer,
  Truck,
  type LucideIcon,
} from 'lucide-react'

const steps: { label: string; icon: LucideIcon; completed: boolean }[] = [
  { label: 'Offer Selected', icon: CheckCircle2, completed: true },
  { label: 'Payment', icon: CreditCard, completed: true },
  { label: 'files approval', icon: FileText, completed: true },
  { label: 'Sample review', icon: Eye, completed: true },
  { label: 'production', icon: Printer, completed: true },
  { label: 'shipping', icon: Truck, completed: false },
]

export default function OrderProgressTracker() {
  return (
    <section
      className="rounded-2xl bg-[#CBE3E5] px-4 py-3 sm:px-4"
      aria-label="Order progress"
    >
      <div className="mb-5 flex items-center justify-between gap-4 text-sm font-medium">
        <p className="whitespace-nowrap">
          Track your order ORD-1042 - restaurant business card
        </p>
        <span className="shrink-0 rounded-full bg-white px-3 py-1 text-primary">
          shipping soon
        </span>
      </div>

      <div className="overflow-x-auto pb-1">
        <ol className="relative flex min-w-180 justify-between px-1">

          {steps.map((step) => {
            const Icon = step.icon

            return (
              <li
                key={step.label}
                className="relative z-10 flex w-[16.666%] flex-col items-center text-center"
              >
                <span
                  className={`flex size-11 items-center justify-center rounded-full ${step.completed
                      ? 'bg-primary text-white'
                      : 'border-black/6 border-2 bg-[#F8F5FA] text-[#6B6B80]'
                    }`}
                >
                  <Icon
                    className="size-4"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <span
                  className={cn("absolute top-16 w-full h-0.5",
                    step.completed ? 'bg-primary' : 'bg-white'
                  )}
                  aria-hidden="true"
                />
                <span
                  className={`h-5 w-0.5 ${step.completed ? 'bg-primary' : 'bg-white'
                    }`}
                  aria-hidden="true"
                />
                <span className="mt-2 whitespace-nowrap text-primary text-xs font-medium leading-none">
                  {step.label}
                </span>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
