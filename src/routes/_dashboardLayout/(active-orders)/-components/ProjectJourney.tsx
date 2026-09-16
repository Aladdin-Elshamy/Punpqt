import {
  CreditCard,
  Eye,
  FileText,
  MailCheck,
  Printer,
  ThumbsUp,
  Truck,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { Card, CardContent, CardHeader } from '#/components/ui/card'
import { cn } from '#/lib/utils'

const journeySteps = [
  { id: 'request-submitted', label: 'Request Submitted', icon: FileText },
  { id: 'offer-selected', label: 'Offer Selected', icon: MailCheck },
  { id: 'payment', label: 'Payment', icon: CreditCard },
  { id: 'files-approved', label: 'Files Approved', icon: FileText },
  { id: 'sample-review', label: 'Sample Review', icon: Eye },
  { id: 'production', label: 'Production', icon: Printer },
  { id: 'shipping', label: 'Shipping', icon: Truck },
  { id: 'delivered', label: 'Delivered', icon: ThumbsUp },
] as const

export type JourneyStepId = (typeof journeySteps)[number]['id']
export interface ProjectJourneyProps {
  /** Use complete once delivery has finished. */
  activeStep: JourneyStepId | 'complete'
  activeStepContent?: ReactNode
}

export default function ProjectJourney({
  activeStep,
  activeStepContent,
}: ProjectJourneyProps) {
  const activeIndex =
    activeStep === 'complete'
      ? journeySteps.length
      : journeySteps.findIndex((step) => step.id === activeStep)
  return (
    <Card className="gap-5 rounded-3xl bg-white py-6 font-atyp shadow-sm ring-0 **:tracking-normal">
      <CardHeader className="px-5 sm:px-6">
        <h2 className="text-lg font-semibold">Project Journey</h2>
      </CardHeader>
      <CardContent className="px-5 sm:px-6">
        <ol aria-label="Project journey">
          {journeySteps.map((step, index) => {
            const completed = index < activeIndex
            const active = index === activeIndex
            const Icon = step.icon
            return (
              <li
                key={step.id}
                aria-current={active ? 'step' : undefined}
                className="relative grid grid-cols-[2rem_minmax(0,1fr)] gap-x-4 pb-6 last:pb-0"
              >
                {index < journeySteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute top-8 bottom-0 inset-s-4.25 w-0.5',
                      completed ? 'bg-primary' : 'bg-[#E9E9EE]',
                    )}
                  />
                )}
                <span
                  aria-hidden="true"
                  className={cn(
                    'relative z-10 flex size-9 items-center justify-center rounded-full border-2',
                    completed
                      ? 'border-primary bg-primary text-white'
                      : active
                        ? 'motion-safe:after:animate-ping motion-reduce:after:hidden after:absolute after:inset-0 after:w-full after:h-full after:rounded-full after:border-primary after:border-2 border-primary bg-white text-primary'
                        : 'border-[#E0E0E6] bg-[#F4F4F6] text-muted-foreground',
                  )}
                >
                  <Icon className="size-3.5" strokeWidth={1.5} />
                </span>
                <div className="min-w-0 pt-1">
                  <h3
                    className={cn(
                      'text-sm leading-5 font-semibold',
                      completed || active
                        ? 'text-primary'
                        : 'text-muted-foreground',
                    )}
                  >
                    {step.label}
                  </h3>
                  {active ? (
                    <span className="sr-only">Current step</span>
                  ) : (
                    <p className="text-xs leading-4 font-medium text-muted-foreground ">
                      {completed ? 'Completed' : 'Upcoming'}
                    </p>
                  )}
                  {active && activeStepContent && (
                    <div className="mt-3 max-w-5xl wrap-break-word">
                      {activeStepContent}
                    </div>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </CardContent>
    </Card>
  )
}
