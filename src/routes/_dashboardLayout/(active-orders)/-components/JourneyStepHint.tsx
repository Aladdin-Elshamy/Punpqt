import { CircleAlert, Clock } from 'lucide-react'
import type { ReactNode } from 'react'
import { Button } from '#/components/ui/button'

export interface JourneyStepHintProps {
  title: string
  description: ReactNode
  tone?: 'info' | 'attention'
  supplementaryText?: string
  action?: { label: string; onClick: () => void; disabled?: boolean }
}

export default function JourneyStepHint({
  title,
  description,
  tone = 'info',
  supplementaryText,
  action,
}: JourneyStepHintProps) {
  const Icon = tone === 'attention' ? CircleAlert : Clock
  return (
    <div className="rounded-2xl border border-primay/20 bg-primary/5 p-5 sm:px-8 sm:py-6">
      <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
        <div className="flex items-center gap-3">
          <Icon
            className="size-5 shrink-0 text-primary"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <h4 className="text-sm font-semibold">
            {title}
          </h4>
        </div>
        {supplementaryText && (
          <p className="text-sm font-semibold text-primary">
            {supplementaryText}
          </p>
        )}
      </div>
      <div className="mt-2 text-sm leading-relaxed font-medium text-muted-foreground">
        {description}
      </div>
      {action && (
        <div className="mt-3 flex justify-end">
          <Button
            type="button"
            onClick={action.onClick}
            disabled={action.disabled}
            className="h-auto min-h-10 max-w-full rounded-2xl border border-primary bg-primary px-5 py-2 text-sm whitespace-normal text-white sm:text-base"
          >
            {action.label}
          </Button>
        </div>
      )}
    </div>
  )
}
