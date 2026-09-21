import { useEffect, useRef, useState } from 'react'
import { initialMessages } from '../-data/chatMessages'
import type { ChatAttachment } from '../-data/chatMessages'
import MessagesHeader from '../-components/MessagesHeader'
import MessagesTranscript from '../-components/MessagesTranscript'
import MessageComposer from '../-components/MessageComposer'

export default function Messages() {
  const [messages, setMessages] = useState(initialMessages)
  const [draft, setDraft] = useState('')
  const [attachments, setAttachments] = useState<Array<ChatAttachment>>([])

  const objectUrls = useRef(new Set<string>())

  useEffect(() => {
    const urls = objectUrls.current
    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url))
      urls.clear()
    }
  }, [])

  function addFiles(files: FileList | null) {
    if (!files) return
    const selected = Array.from(files, (file) => {
      const imageUrl = file.type.startsWith('image/')
        ? URL.createObjectURL(file)
        : undefined
      if (imageUrl) objectUrls.current.add(imageUrl)
      return {
        id: crypto.randomUUID(),
        name: file.name,
        size: file.size,
        imageUrl,
      }
    })
    setAttachments((previous) => [...previous, ...selected])
  }

  function removeAttachment(attachment: ChatAttachment) {
    if (attachment.imageUrl) {
      URL.revokeObjectURL(attachment.imageUrl)
      objectUrls.current.delete(attachment.imageUrl)
    }
    setAttachments((previous) =>
      previous.filter((item) => item.id !== attachment.id),
    )
  }

  function sendMessage() {
    const text = draft.trim()
    if (!text && !attachments.length) return
    setMessages((previous) => [
      ...previous,
      {
        id: crypto.randomUUID(),
        outgoing: true,
        text,
        attachments,
        time: new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }),
      },
    ])
    setDraft('')
    setAttachments([])
  }

  return (
    <section
      aria-label="Messages with Elite Print"
      className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white font-atyp text-[#080812] shadow-sm"
    >
      <MessagesHeader />
      <MessagesTranscript messages={messages} />
      <MessageComposer
        draft={draft}
        attachments={attachments}
        onDraftChange={setDraft}
        onAddFiles={addFiles}
        onRemoveAttachment={removeAttachment}
        onSend={sendMessage}
      />
    </section>
  )
}
