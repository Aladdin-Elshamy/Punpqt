import DotsIcon from '#/common/icons/DotsIcon'
import { Card, CardContent } from '#/components/ui/card'
import { Check, Circle } from 'lucide-react'

type TimelineItem = {
  title: string
  description: string
  completed: boolean
}

type RequestActivityTimelineProps = {
  items: readonly TimelineItem[]
}

export default function RequestActivityTimeline({
  items,
}: RequestActivityTimelineProps) {
  return (
    <Card className="gap-0 rounded-2xl border-border/70 py-0 font-atyp shadow-none">
      <CardContent className="p-6 sm:p-7">
        <h2 className="text-xl font-bold tracking-tight">Activity Timeline</h2>
        <ol className="mt-6 space-y-0">
          {items.map((item, index) => (
            <li key={item.title} className="relative flex gap-4 pb-6 last:pb-0">
              {index < items.length - 1 && (
                <span className="absolute left-4 top-8 h-[calc(100%-1.5rem)] w-px bg-border" />
              )}
              <span
                className={`relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full ${
                  item.completed
                    ? 'bg-primary text-primary-foreground'
                    : 'border-2 border-primary bg-white text-primary'
                }`}
              >
                {item.completed ? (
                  <Check className="size-4" aria-hidden="true" />
                ) : (
                  <DotsIcon className="size-3 stroke-primary" aria-hidden="true" />
                )}
              </span>
              <div className="pt-0.5">
                <p className={`${item.completed ? "" : "text-primary"} text-sm font-semibold`}>{item.title}</p>
                <p className="mt-1 text-xs font-semibold text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}
