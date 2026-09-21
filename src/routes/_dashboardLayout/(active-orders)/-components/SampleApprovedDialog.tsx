import { CircleCheckBig } from 'lucide-react'
import { Button } from '#/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '#/components/ui/dialog'

export default function SampleApprovedDialog({
  onBackToOrderDetails,
  title,
  description
}: {
  onBackToOrderDetails: () => void,
  title: string
  description: string
}) {
  return (
    <DialogContent
      showCloseButton={false}
      className="gap-0 rounded-2xl bg-white px-6 py-8 text-black ring-0 sm:max-w-xl sm:px-12 sm:py-12"
    >
      <DialogHeader className="items-center gap-0 text-center">
        <span className="mb-6 flex size-24 items-center justify-center rounded-full bg-[#E7F3F4] text-primary">
          <CircleCheckBig
            className="size-11"
            strokeWidth={1.7}
            aria-hidden="true"
          />
        </span>
        <DialogTitle className="font-atyp text-xl leading-tight font-semibold sm:text-2xl">
          {title}
        </DialogTitle>
        <DialogDescription className="mt-4 max-w-md leading-6 text-muted-foreground text-base font-semibold">
          {description}
        </DialogDescription>
      </DialogHeader>
      <Button
        className="mt-8 h-14 w-full rounded-2xl text-base font-medium text-white"
        onClick={onBackToOrderDetails}
      >
        Back to Order Details
      </Button>
    </DialogContent>
  )
}
