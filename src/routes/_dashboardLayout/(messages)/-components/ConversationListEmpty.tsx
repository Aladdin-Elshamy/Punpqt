export default function ConversationListEmpty() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-8 text-center min-h-[300px]">
      <h3 className="text-base font-bold text-foreground">
        No Conversation yet
      </h3>
      <p className="mt-1.5 max-w-[210px] font-semibold text-xs leading-relaxed text-muted-foreground">
        When you message a printer, your conversation will appear here.
      </p>
    </div>
  )
}
