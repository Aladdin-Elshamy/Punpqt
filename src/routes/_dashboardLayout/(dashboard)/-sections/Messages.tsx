import { Card } from '#/components/ui/card'
import { useState } from 'react'
import MessagesHeader from '../-components/MessagesHeader'
import MessagesList from '../-components/MessagesList'
import MessagesFooter from '../-components/MessagesFooter'

// Stable preview data until dashboard messages are connected to an API.
const messages = [
  { id: 'message-1', time: '16:45', unreadCount: 3 },
  { id: 'message-2', time: '16:45', unreadCount: 0 },
  { id: 'message-3', time: '16:45', unreadCount: 2 },
  { id: 'message-4', time: '16:45', unreadCount: 0 },
  { id: 'message-5', time: '16:45', unreadCount: 1 },
  { id: 'message-6', time: '16:45', unreadCount: 0 },
  { id: 'message-7', time: '16:45', unreadCount: 0 },
]

export default function Messages() {
  const [selected, setSelected] = useState<number>(0)

  return (
    <Card className="h-full gap-0 py-6 font-atyp shadow-none">
      <MessagesHeader newCount={3} />
      <MessagesList
        messages={messages}
        selectedIndex={selected}
        onSelect={setSelected}
      />
      <MessagesFooter />
    </Card>
  )
}
