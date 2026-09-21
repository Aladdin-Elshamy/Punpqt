import { MoreVertical, Printer } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function MessagesHeader() {
  return (
    <header className="flex items-center gap-3 border-b border-gray-100 px-4 py-3.5">
      <div className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
        <Printer className="size-5" aria-hidden="true" />
        <span className="absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-white bg-green-500" />
      </div>
      <div className="min-w-0 flex-1">
        <h2 className="truncate text-lg leading-tight font-semibold">
          Elite Print
        </h2>
        <p className="text-xs text-green-600">
          Online now<span className="sr-only"> (preview status)</span>
        </p>
      </div>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        disabled
        aria-label="More conversation options (unavailable)"
      >
        <MoreVertical className="size-5" />
      </Button>
    </header>
  )
}
