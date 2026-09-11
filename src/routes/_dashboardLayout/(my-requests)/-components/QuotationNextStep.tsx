type QuotationNextStepProps = {
  number: number
  description: string
}

export default function QuotationNextStep({
  number,
  description,
}: QuotationNextStepProps) {
  return (
    <li className="flex items-start font-medium gap-3 text-lg text-muted-foreground">
      <span
        aria-hidden="true"
        className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-primary bg-primary text-sm text-primary-foreground"
      >
        {number}
      </span>
      <span>{description}</span>
    </li>
  )
}
