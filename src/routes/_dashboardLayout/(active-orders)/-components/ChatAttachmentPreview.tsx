import { FileText, X } from 'lucide-react'
import type { ChatAttachment } from '../-data/chatMessages'
import {
  Attachment,
  AttachmentAction,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from '@/components/ui/attachment'

export default function ChatAttachmentPreview({
  attachment,
  onRemove,
}: {
  attachment: ChatAttachment
  onRemove?: () => void
}) {
  return (
    <Attachment className="w-full max-w-72" state="idle">
      <AttachmentMedia variant={attachment.imageUrl ? 'image' : 'icon'}>
        {attachment.imageUrl ? (
          <img src={attachment.imageUrl} alt={attachment.name} />
        ) : (
          <FileText aria-hidden="true" />
        )}
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle title={attachment.name}>
          {attachment.name}
        </AttachmentTitle>
        <AttachmentDescription>
          {Math.max(1, Math.ceil(attachment.size / 1024))} KB · Local preview
        </AttachmentDescription>
      </AttachmentContent>
      {onRemove && (
        <AttachmentAction
          type="button"
          aria-label={`Remove ${attachment.name}`}
          onClick={onRemove}
        >
          <X />
        </AttachmentAction>
      )}
    </Attachment>
  )
}
