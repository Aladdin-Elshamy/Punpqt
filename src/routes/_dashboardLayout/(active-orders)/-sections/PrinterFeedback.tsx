import { useId } from 'react'
import PrinterFeedbackItem from '../-components/PrinterFeedbackItem'
import { Card, CardContent } from '#/components/ui/card'

export default function PrinterFeedback({
  issues,
  notes,
}: {
  issues: Array<string>
  notes: string
}) {
  const headingId = useId()

  return (
    <section aria-labelledby={headingId}>
      <Card className="gap-0 rounded-3xl py-8 shadow-sm ring-black/5 sm:py-9">
        <CardContent className="px-5 sm:px-6">
          <h2 id={headingId} className="text-lg font-semibold">
            Printer Feedback
          </h2>
          {issues.length > 0 ? (
            <ul className="mt-5 space-y-4">
              {issues.map((issue, index) => (
                <PrinterFeedbackItem key={`${index}-${issue}`} issue={issue} />
              ))}
            </ul>
          ) : (
            <p className="mt-5 text-sm text-muted-foreground">
              No revisions requested.
            </p>
          )}
          {notes && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Additional Notes</h3>
              <p className="mt-5 rounded-md border-s-5 border-primary bg-[#E7F1F2] px-4 py-4 text-base leading-relaxed wrap-anywhere">
                {notes}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
