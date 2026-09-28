import { ArrowLeftRight, DollarSign, Lock, Shield, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import type { SummaryMetric } from '../-data/summaryMetrics'
import { Badge } from '#/components/ui/badge'
import { cn } from '#/lib/utils'

type SummaryMetricCardProps = {
  metric: SummaryMetric
}

export default function SummaryMetricCard({ metric }: SummaryMetricCardProps) {
  function renderIcon() {
    switch (metric.iconType) {
      case 'transaction':
        return <ArrowLeftRight className="size-5" />
      case 'spending':
        return <DollarSign className="size-5" />
      case 'escrow':
        return <Shield className="size-5" />
    }
  }

  return (
    <Card className="rounded-2xl bg-white ring-0 p-5 shadow-xs transition-shadow hover:shadow-sm">
      <CardContent className="p-0">
        <div className={"flex items-center justify-between flex-wrap gap-4"}>
          <div className="flex size-11 items-center justify-center rounded-xl bg-[#e6f4f4] text-[#0d7377]">
            {renderIcon()}
          </div>

          {metric.trend && (
            <div className="flex items-center gap-1 text-base text-[#0d7377]">
              <TrendingUp className="size-4" />
              <span className='trim'>{metric.trend}</span>
            </div>
          )}

          {metric.badgeText && (
            <Badge className="flex items-center gap-1.5 bg-[#e6f4f4] px-5 py-1 h-11! rounded-xl text-xs [&>svg]:size-3.5! font-medium text-[#0d7377]">
              <Lock />
              <span>{metric.badgeText}</span>
            </Badge>
          )}
        </div>

        <h3 className="mt-4 text-xl font-semibold text-foreground">
          {metric.title}
        </h3>

        {metric.value && (
          <p className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
            {metric.value}
          </p>
        )}

        <p className={cn("mt-1 text-sm font-semibold leading-relaxed text-muted-foreground", metric.value  ? "" : "mt-4")}>
          {metric.subtitle}
        </p>
      </CardContent>
    </Card>
  )
}
