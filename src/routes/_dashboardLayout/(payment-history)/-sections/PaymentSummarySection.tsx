import SummaryMetricCard from '../-components/SummaryMetricCard'
import { summaryMetrics } from '../-data/summaryMetrics'

export default function PaymentSummarySection() {
  return (
    <section aria-label="Payment Summary Metrics">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {summaryMetrics.map((metric) => (
          <SummaryMetricCard key={metric.id} metric={metric} />
        ))}
      </div>
    </section>
  )
}
