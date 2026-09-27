import Messages from '@/common/sections/Messages'
import NoConversationSelected from '../-components/NoConversationSelected'
import { cn } from '@/lib/utils'

type MessagesChatSectionProps = {
  selectedConversationId: string | null
  onBack?: () => void
  className?: string
}

export default function MessagesChatSection({
  selectedConversationId,
  onBack,
  className,
}: MessagesChatSectionProps) {
  if (!selectedConversationId) {
    return <NoConversationSelected className={cn('h-full', className)} />
  }

  return <Messages className={cn('h-full', className)} onBack={onBack} />
}
