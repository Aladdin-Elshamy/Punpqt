import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Header from '#/common/sections/Header'
import { Button } from '@/components/ui/button'
import { initialConversations } from './-data/conversations'
import ConversationsListSection from './-sections/ConversationsListSection'
import MessagesChatSection from './-sections/MessagesChatSection'

export const Route = createFileRoute('/_dashboardLayout/(messages)/messages')({
  component: RouteComponent,
})

function RouteComponent() {
  const [selectedConversationId, setSelectedConversationId] = useState<
    string | null
  >('conv-1')
  const [searchQuery, setSearchQuery] = useState('')
  const [isEmptyState, setIsEmptyState] = useState(false)

  const conversations = isEmptyState ? [] : initialConversations

  function handleSelectConversation(id: string) {
    // Clicking the active conversation deselects it to view "No Conversation Selected" state
    setSelectedConversationId((previous) => (previous === id ? null : id))
  }

  return (
    <div className="container mx-auto flex w-full flex-col gap-6 px-4 pb-16 sm:px-6 lg:px-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Header
          title="Messages"
          description="Contact the printers directly"
        />
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="h-8 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground"
            onClick={() => {
              setIsEmptyState((previous) => {
                const next = !previous
                if (next) {
                  setSelectedConversationId(null)
                } else {
                  setSelectedConversationId('conv-1')
                }
                return next
              })
            }}
          >
            {isEmptyState ? 'Switch to Populated View' : 'Switch to Empty View'}
          </Button>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr] xl:grid-cols-[340px_1fr] items-stretch h-160">
        {/* Left pane: Conversations List */}
        <ConversationsListSection
          className={selectedConversationId ? 'hidden lg:flex' : 'flex'}
          conversations={conversations}
          selectedId={selectedConversationId}
          onSelect={handleSelectConversation}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Right pane: Chat section or Empty conversation placeholder */}
        <MessagesChatSection
          className={!selectedConversationId ? 'hidden lg:flex' : 'flex'}
          selectedConversationId={selectedConversationId}
          onBack={() => setSelectedConversationId(null)}
        />
      </div>
    </div>
  )
}
