import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'
import RequestStatusBadge, { type RequestStatus } from './RequestStatusBadge'

type RequestDetail = {
  label: string
  value: string
}

type RequestCardProps = {
  title: string
  requestId: string
  status: RequestStatus
  specifications: readonly string[]
  details: readonly RequestDetail[]
  primaryAction: string
  secondaryAction?: string
}

export default function RequestCard({
  title,
  requestId,
  status,
  specifications,
  details,
  primaryAction,
  secondaryAction,
}: RequestCardProps) {
  return (
    <Card className="gap-0 relative z-10 rounded-2xl border-border/70 py-0 font-atyp shadow-none">
      <CardContent className="flex flex-col gap-8 p-6 sm:p-7">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-bold tracking-tight">{title}</h2>
            <RequestStatusBadge status={status} />
          </div>
          <p className="mt-1 text-xs font-medium text-muted-foreground">
            Request ID: {requestId}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {specifications.map((specification) => (
              <Badge
                key={specification}
                variant="secondary"
                className="bg-muted text-foreground"
              >
                {specification}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4 sm:gap-x-12">
            {details.map((detail) => (
              <div key={detail.label}>
                <dt className="text-xs font-medium text-muted-foreground">
                  {detail.label}
                </dt>
                <dd className="mt-0.5 text-base font-semibold">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="flex w-full flex-col-reverse gap-3 sm:w-auto sm:flex-row sm:items-center">
            {secondaryAction && (
              <Button variant="outline" className="h-11 px-5">
                {secondaryAction}
              </Button>
            )}
            <Button className="h-11 px-6">{primaryAction}</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
