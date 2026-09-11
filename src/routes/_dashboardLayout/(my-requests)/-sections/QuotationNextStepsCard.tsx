import QuotationNextStep from '../-components/QuotationNextStep'
import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'

const steps = [
  'Complete the payment.',
  'Upload your design files.',
  'The printer will review your files.',
  'Production will begin.',
] as const

type QuotationNextStepsCardProps = {
  onUpload?: () => void
}

export default function QuotationNextStepsCard({
  onUpload,
}: QuotationNextStepsCardProps) {
  return (
    <Card className="h-full min-h-103 rounded-2xl py-0 font-atyp shadow-sm ring-border/60">
      <CardContent className="p-5">
        <h3 className="text-xl font-semibold">What happens next?</h3>
        <ol role="list" className="mt-5 space-y-5">
          {steps.map((description, index) => (
            <QuotationNextStep
              key={description}
              number={index + 1}
              description={description}
            />
          ))}
        </ol>
        <div className="mt-7 flex justify-end">
          <Button
            type="button"
            onClick={onUpload}
            // disabled={!onUpload}
            title={!onUpload ? 'File upload is not available yet' : undefined}
            className="h-12 w-full rounded-2xl sm:w-67"
          >
            Upload Files
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
