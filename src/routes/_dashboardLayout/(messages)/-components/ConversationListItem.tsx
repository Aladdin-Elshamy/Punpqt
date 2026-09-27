import { Printer } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { Conversation } from '../-data/conversations'

type ConversationListItemProps = {
  conversation: Conversation
  isSelected: boolean
  onClick: () => void
}

export default function ConversationListItem({
  conversation,
  isSelected,
  onClick,
}: ConversationListItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={isSelected ? 'true' : undefined}
      className={cn(
        'relative flex w-full cursor-pointer items-center gap-3 px-4 py-3.5 text-left transition-colors',
        isSelected
          ? 'bg-[#eef7f6] hover:bg-[#eef7f6]'
          : 'bg-white hover:bg-gray-100/80',
      )}
    >
      {isSelected && (
        <span
          className="absolute inset-y-0 left-0 w-1 bg-primary"
          aria-hidden="true"
        />
      )}

      {/* Avatar */}
      <div
        className="flex size-9 shrink-0 items-center justify-center rounded-full text-white shadow-xs"
        style={{
          background: 'linear-gradient(135deg, #0D7377 0%, #14919B 100%)',
        }}
        aria-hidden="true"
      >
        <Printer className="size-4.5" />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-semibold text-foreground sm:text-sm">
          {conversation.name}
        </p>
        <p className="truncate text-xs text-muted-foreground">
          {conversation.lastMessage}
        </p>
      </div>

      {/* Timestamp & unread badge */}
      <div className="flex shrink-0 flex-col items-end justify-between self-stretch text-xs">
        <span className="text-[11px] text-muted-foreground">
          {conversation.time}
        </span>
        {conversation.unreadCount && conversation.unreadCount > 0 ? (
          <Badge
            variant="default"
            className="size-4.5 min-w-4.5 rounded-full p-0 flex items-center justify-center text-[10px] font-semibold text-white bg-primary hover:bg-primary"
          >
            {conversation.unreadCount}
          </Badge>
        ) : null}
      </div>
    </button>
  )
}
