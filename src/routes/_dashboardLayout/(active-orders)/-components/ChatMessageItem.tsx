import { Bubble, BubbleContent } from '@/components/ui/bubble'
import { Message, MessageContent } from '@/components/ui/message'
import type { ChatMessage } from '../-data/chatMessages'
import ChatAttachmentPreview from './ChatAttachmentPreview'

type ChatMessageItemProps = { message: ChatMessage }
export default function ChatMessageItem({ message }: ChatMessageItemProps) {
  return (
    <Message align={message.outgoing ? 'end' : 'start'}>
      <MessageContent>
        <Bubble
          align={message.outgoing ? 'end' : 'start'}
          variant={message.outgoing ? 'default' : 'muted'}
          className="max-w-[90%] sm:max-w-[70%] lg:max-w-[48%] [--muted:#f0f0f3]"
        >
          <BubbleContent className="w-full rounded-[20px] px-4 py-3 sm:px-4 sm:py-3.5 sm:pr-12">
            <span className="sr-only">
              {message.outgoing ? 'You' : 'Elite Print'}:{' '}
            </span>
            {message.text && (
              <p className="whitespace-pre-wrap text-sm leading-5 wrap-anywhere sm:text-base">
                {message.text}
              </p>
            )}
            {!!message.attachments?.length && (
              <div className="mt-2 flex min-w-0 flex-col gap-2">
                {message.attachments.map((attachment) => (
                  <ChatAttachmentPreview
                    key={attachment.id}
                    attachment={attachment}
                  />
                ))}
              </div>
            )}
            <p className="mt-2 text-[11px] opacity-85">{message.time}</p>
          </BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  )
}
