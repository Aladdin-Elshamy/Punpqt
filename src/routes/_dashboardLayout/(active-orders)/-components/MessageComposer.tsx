import { useRef } from 'react'
import { ImagePlus, Paperclip, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { ChatAttachment } from '../-data/chatMessages'
import ChatAttachmentPreview from './ChatAttachmentPreview'

type MessageComposerProps = {
  draft: string
  attachments: Array<ChatAttachment>
  onDraftChange: (value: string) => void
  onAddFiles: (files: FileList | null) => void
  onRemoveAttachment: (attachment: ChatAttachment) => void
  onSend: () => void
}
export default function MessageComposer({
  draft,
  attachments,
  onDraftChange,
  onAddFiles,
  onRemoveAttachment,
  onSend,
}: MessageComposerProps) {
  const fileInput = useRef<HTMLInputElement>(null)
  const imageInput = useRef<HTMLInputElement>(null)
  const composer = useRef<HTMLTextAreaElement>(null)
  function sendMessage() {
    if (!draft.trim() && !attachments.length) return
    onSend()
    composer.current?.focus()
  }
  return (
    <form
      aria-label="Compose a message"
      className="shrink-0 border-t border-gray-100 px-3 pt-4 pb-6 sm:px-5 sm:pt-4.5 sm:pb-11.5"
      onSubmit={(event) => {
        event.preventDefault()
        sendMessage()
      }}
    >
      {!!attachments.length && (
        <div
          aria-label="Selected attachments"
          className="mb-3 flex min-w-0 flex-wrap gap-2"
        >
          {attachments.map((attachment) => (
            <ChatAttachmentPreview
              key={attachment.id}
              attachment={attachment}
              onRemove={() => onRemoveAttachment(attachment)}
            />
          ))}
        </div>
      )}
      <input
        ref={fileInput}
        type="file"
        multiple
        hidden
        onChange={(event) => {
          onAddFiles(event.target.files)
          event.target.value = ''
        }}
      />
      <input
        ref={imageInput}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={(event) => {
          onAddFiles(event.target.files)
          event.target.value = ''
        }}
      />
      <div className="flex min-w-0 items-center gap-1 sm:gap-3">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="size-9"
          aria-label="Attach files"
          onClick={() => fileInput.current?.click()}
        >
          <Paperclip className="size-5" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="size-9"
          aria-label="Attach images"
          onClick={() => imageInput.current?.click()}
        >
          <ImagePlus className="size-5" />
        </Button>
        <textarea
          ref={composer}
          aria-label="Message"
          placeholder="Type your message..."
          value={draft}
          rows={1}
          className="h-12 min-w-0 flex-1 resize-none rounded-2xl border border-gray-100 bg-transparent px-4 py-3.5 text-xs leading-4.5 outline-none placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
          onChange={(event) => onDraftChange(event.target.value)}
          onKeyDown={(event) => {
            if (
              event.key === 'Enter' &&
              !event.shiftKey &&
              !event.nativeEvent.isComposing
            ) {
              event.preventDefault()
              sendMessage()
            }
          }}
        />
        <Button
          type="submit"
          size="icon"
          className="size-11 rounded-full disabled:bg-[#80bec4] disabled:opacity-100"
          aria-label="Send message"
          disabled={!draft.trim() && !attachments.length}
        >
          <Send className="size-5" />
        </Button>
      </div>
    </form>
  )
}
