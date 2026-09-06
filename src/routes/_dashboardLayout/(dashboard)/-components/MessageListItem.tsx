import { Printer } from 'lucide-react'

type MessageListItemProps = {
  time: string
  isSelected?: boolean
  onClick?: () => void;
  unreadCount?: number;
}

export default function MessageListItem({
  time,
  isSelected = false,
  onClick,
  unreadCount = 0
}: MessageListItemProps) {
  return (
    <article
      onClick={onClick}
      className={`relative flex cursor-pointer hover:bg-primary/6 items-center gap-2 px-2 py-4 ${isSelected ? 'bg-primary/6' : ''}`}
    >
      {isSelected && (
        <span className="absolute inset-y-0 left-0 w-1 bg-primary" />
      )}
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full text-white" style={{ background: "linear-gradient(135deg, #0D7377 0%, #0E757A 7.69%, #0E787C 15.38%, #0F7A7F 23.08%, #0F7C82 30.77%, #107E85 38.46%, #108187 46.15%, #11838A 53.85%, #11858D 61.54%, #128890 69.23%, #128A93 76.92%, #138C95 84.62%, #138F98 92.31%, #14919B 100%" }}>
        <Printer className="size-4" aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1 text-xs leading-tight">
        <p className="font-semibold">Elite Print</p>
        <p className="truncate text-muted-foreground">
          Order status updated to &quot;In Printing&quot;
        </p>
      </div>
      <div className="flex flex-col items-end justify-between text-xs self-start">
        <p>{time}</p>
        {isSelected && unreadCount > 0 && (
          <div
            className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-primary text-white"
            aria-label="Unread"
          >
            {unreadCount}
          </div>
        )}
      </div>
    </article>
  )
}
