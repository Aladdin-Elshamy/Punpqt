import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import ConversationSearch from '../-components/ConversationSearch'
import ConversationListItem from '../-components/ConversationListItem'
import ConversationListEmpty from '../-components/ConversationListEmpty'
import type { Conversation } from '../-data/conversations'

type ConversationsListSectionProps = {
  conversations: Array<Conversation>
  selectedId: string | null
  onSelect: (id: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
  className?: string
}

export default function ConversationsListSection({
  conversations,
  selectedId,
  onSelect,
  searchQuery,
  onSearchChange,
  className,
}: ConversationsListSectionProps) {
  const filteredConversations = conversations.filter((conversation) => {
    if (!searchQuery.trim()) return true
    const query = searchQuery.toLowerCase().trim()
    return (
      conversation.name.toLowerCase().includes(query) ||
      conversation.lastMessage.toLowerCase().includes(query)
    )
  })

  return (
    <aside
      aria-label="Conversations"
      className={cn(
        'flex min-w-0 flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm h-full',
        className,
      )}
    >
      <ConversationSearch
        value={searchQuery}
        onChange={onSearchChange}
        placeholder="Searching messages..."
      />

      <Separator className="bg-gray-100" />

      {filteredConversations.length === 0 ? (
        <ConversationListEmpty />
      ) : (
        <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
          {filteredConversations.map((conversation) => (
            <ConversationListItem
              key={conversation.id}
              conversation={conversation}
              isSelected={conversation.id === selectedId}
              onClick={() => onSelect(conversation.id)}
            />
          ))}
        </div>
      )}
    </aside>
  )
}
