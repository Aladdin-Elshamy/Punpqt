import { Link } from '@tanstack/react-router'
import { CircleCheckBig, Package } from 'lucide-react'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button, buttonVariants } from '@/components/ui/button'
import { uploadOffer } from '../-sections/UploadOfferCard'
import { Badge } from '#/components/ui/badge'

const nextSteps = [
  'Printers review your files and prepare a digital proof',
  'You approve the proof before production begins',
  'Live production tracking in your dashboard',
  'Confirm delivery to release escrow payment to printer',
]

export default function UploadSuccessDialog() {
  return (
    <DialogContent
      showCloseButton={false}
      className="gap-0 max-h-[90vh] overflow-y-auto rounded-2xl bg-white px-6 py-8 font-atyp text-black ring-0 sm:max-w-180 sm:px-14 sm:py-12 **:tracking-normal"
    >
      <DialogHeader className="items-center gap-0 text-center">
        <span className="mb-5 flex size-25 shrink-0 items-center justify-center rounded-full bg-[#E7F3F4] text-[#006970]">
          <CircleCheckBig
            className="size-11"
            strokeWidth={1.7}
            aria-hidden="true"
          />
        </span>
        <DialogTitle className="font-atyp text-xl leading-tight font-semibold sm:text-[30px]">
          Files Uploaded Successfully
        </DialogTitle>
        <DialogDescription className="mt-4 text-lg leading-6 text-muted-foreground">
          Your print-ready files have been uploaded successfully. The selected
          printer has received your files and will review them before starting
          production.
        </DialogDescription>
        <Badge
          variant={'outline'}
          className="mt-10 max-w-full items-center gap-2 rounded-full border border-[#EEEEF0] [&>svg]:size-4! px-4 h-9 text-sm text-muted-foreground"
        >
          <Package
            className="text-primary"
            strokeWidth={1.7}
            aria-hidden="true"
          />
          {uploadOffer.product}
        </Badge>
      </DialogHeader>

      <section
        aria-labelledby="upload-next-steps"
        className="mt-9 rounded-[30px] border border-[#EEEEF0] p-5 shadow-[0_1px_3px_rgb(0_0_0/0.04)] sm:p-7.5"
      >
        <h3
          id="upload-next-steps"
          className="mb-5 text-base leading-5 font-semibold"
        >
          What happens next
        </h3>
        <ol className="space-y-4.25">
          {nextSteps.map((description, index) => (
            <li
              key={description}
              className="flex items-center gap-4 text-sm leading-6 sm:text-base"
            >
              <span
                aria-hidden="true"
                className="flex size-7.5 shrink-0 items-center justify-center rounded-full border border-[#006970] bg-primary text-sm text-white"
              >
                {index + 1}
              </span>
              <span>{description}</span>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-7.5 grid gap-4 sm:grid-cols-2">
        <Button
          title="Active orders are not available yet"
          aria-label="Go to Active Orders (not available yet)"
          className="h-14 rounded-2xl font-medium text-white"
        >
          Go to Active Orders
        </Button>
        <Button
          variant={'outline'}
          title="Go to Dashboard"
          aria-label="Go to Dashboard"
          className="h-14 rounded-2xl border-2 border-primary hover:text-primary/90 font-medium text-primary"
        >
          Go to Dashboard
        </Button>
      </div>
    </DialogContent>
  )
}
