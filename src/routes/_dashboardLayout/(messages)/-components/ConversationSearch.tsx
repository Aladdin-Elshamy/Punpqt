import { Search } from 'lucide-react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'

type ConversationSearchProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function ConversationSearch({
  value,
  onChange,
  placeholder = 'Searching messages...',
}: ConversationSearchProps) {
  return (
    <div className="p-3.5 sm:p-4">
      <InputGroup className="h-10 rounded-xl border-gray-200 bg-gray-50/60 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20">
        <InputGroupAddon align="inline-start" className="pl-3">
          <Search className="size-4 text-muted-foreground" aria-hidden="true" />
        </InputGroupAddon>
        <InputGroupInput
          type="search"
          aria-label={placeholder}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="text-xs text-foreground placeholder:text-muted-foreground"
        />
      </InputGroup>
    </div>
  )
}
