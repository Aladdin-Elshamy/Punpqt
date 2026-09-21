import { CardContent } from '#/components/ui/card'
import { Separator } from '#/components/ui/separator'
import MessageListItem from './MessageListItem'

type MessagesListProps = {
  messages: ReadonlyArray<{ id: string; time: string; unreadCount: number }>
  selectedIndex: number
  onSelect: (index: number) => void
}

export default function MessagesList({
  messages,
  selectedIndex,
  onSelect,
}: MessagesListProps) {
  return (
    <CardContent className="px-0">
      {messages.map((message, index) => (
        <div key={message.id}>
          <MessageListItem
            time={message.time}
            isSelected={selectedIndex === index}
            onClick={() => onSelect(index)}
            unreadCount={message.unreadCount}
          />
          {index < messages.length - 1 && <Separator />}
        </div>
      ))}
    </CardContent>
  )
}
