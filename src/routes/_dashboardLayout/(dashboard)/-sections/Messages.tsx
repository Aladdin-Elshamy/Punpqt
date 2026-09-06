import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { Separator } from '#/components/ui/separator'
import { useState } from 'react'
import MessageListItem from '../-components/MessageListItem'

const messages = ['16:45', '16:45', '16:45', '16:45', '16:45', '16:45', '16:45']

export default function Messages() {
  const [selected, setSelected] = useState<number>(0)
  return (
    <Card className="h-full gap-0 py-6 font-atyp shadow-none">
      <CardHeader className="flex flex-row items-center justify-between px-4 pb-4">
        <CardTitle className="text-xl font-bold">messages</CardTitle>
        <Badge className="bg-[#FCECF0] text-[#D91E4E]">3 new</Badge>
      </CardHeader>
      <CardContent className="px-0">
        {messages.map((time, index) => (
          <div key={`${time}-${index}`}>
            <MessageListItem
              time={time}
              isSelected={selected === index}
              onClick={() => setSelected(index)}
              unreadCount={Math.random() > 0.5 ? Math.floor(Math.random() * 10) : 0}
            />
            {index < messages.length - 1 && <Separator />}
          </div>
        ))}
      </CardContent>
      <CardFooter className="mt-auto border-0 bg-transparent px-4 pt-8">
        <Button
          variant="secondary"
          className="h-9 w-full bg-[#E7F1F2] text-[#0A5C5F] hover:bg-[#D7EBEC]"
        >
          all messages
        </Button>
      </CardFooter>
    </Card>
  )
}
