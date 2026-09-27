import { cn } from '@/lib/utils'
import noConversationImg from '@/assets/no_conversation.png'

type NoConversationSelectedProps = {
  className?: string
}

export default function NoConversationSelected({
  className,
}: NoConversationSelectedProps) {
  return (
    <section
      aria-label="No conversation selected"
      className={cn(
        'flex min-w-0 flex-1 flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm h-full',
        className,
      )}
    >
      <div className="flex flex-col items-center max-w-md">
        <img
          src={noConversationImg}
          alt="No conversation selected"
          className="w-48 sm:w-56 h-auto select-none object-contain"
        />
        <h2 className="mt-6 text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          No Conversation Selected
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-semibold leading-relaxed">
          Select a Conversation from the list
          <br className="hidden sm:inline" /> or start a new conversation with a
          Printer
        </p>
      </div>
    </section>
  )
}
