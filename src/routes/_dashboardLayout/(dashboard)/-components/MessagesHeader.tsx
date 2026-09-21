import { Badge } from '#/components/ui/badge'
import { CardHeader, CardTitle } from '#/components/ui/card'

type MessagesHeaderProps = {
  newCount: number
}

export default function MessagesHeader({ newCount }: MessagesHeaderProps) {
  return (
    <CardHeader className="flex flex-row items-center justify-between px-4 pb-4">
      <CardTitle className="text-xl font-bold">messages</CardTitle>
      <Badge className="bg-[#FCECF0] text-[#D91E4E]">{newCount} new</Badge>
    </CardHeader>
  )
}
