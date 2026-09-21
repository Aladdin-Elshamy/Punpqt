import { Button } from '#/components/ui/button'
import { CardFooter } from '#/components/ui/card'

export default function MessagesFooter() {
  return (
    <CardFooter className="mt-auto border-0 bg-transparent px-4 pt-8">
      <Button
        variant="secondary"
        className="h-9 w-full bg-[#E7F1F2] text-[#0A5C5F] hover:bg-[#D7EBEC]"
      >
        all messages
      </Button>
    </CardFooter>
  )
}
