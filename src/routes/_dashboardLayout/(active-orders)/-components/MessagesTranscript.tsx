import { useEffect, useRef } from 'react'
import { Marker, MarkerContent } from '@/components/ui/marker'
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScroller,
} from '@/components/ui/message-scroller'
import type { ChatMessage } from '../-data/chatMessages'
import ChatMessageItem from './ChatMessageItem'

type MessagesTranscriptProps = { messages: Array<ChatMessage> }

type ScrollToLatestProps = {
  latestMessage: ChatMessage | undefined
}

function ScrollToLatest({ latestMessage }: ScrollToLatestProps) {
  const { scrollToEnd } = useMessageScroller()
  const previousMessageId = useRef(latestMessage?.id)

  useEffect(() => {
    if (
      latestMessage &&
      latestMessage.id !== previousMessageId.current &&
      latestMessage.outgoing
    ) {
      scrollToEnd({ behavior: 'smooth' })
    }

    previousMessageId.current = latestMessage?.id
  }, [latestMessage, scrollToEnd])

  return null
}

export default function MessagesTranscript({
  messages,
}: MessagesTranscriptProps) {
  const latestMessage = messages.at(-1)

  return (
    <MessageScrollerProvider defaultScrollPosition="end" autoScroll>
      <ScrollToLatest latestMessage={latestMessage} />
      <MessageScroller className="h-[min(70dvh,535px)] min-h-80 w-full">
        <MessageScrollerViewport aria-label="Conversation history">
          <MessageScrollerContent className="gap-4 p-4 sm:gap-5 sm:px-6 sm:pt-6 sm:pb-8 sm:justify-between">
            {!messages.length && (
              <Marker>
                <MarkerContent>
                  No messages yet. Start a conversation with Elite Print.
                </MarkerContent>
              </Marker>
            )}
            {messages.map((message) => (
              <MessageScrollerItem key={message.id} messageId={message.id}>
                <ChatMessageItem message={message} />
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton aria-label="Jump to latest message" />
      </MessageScroller>
    </MessageScrollerProvider>
  )
}
