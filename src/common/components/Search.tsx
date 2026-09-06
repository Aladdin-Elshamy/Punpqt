import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '#/components/ui/input-group'
import SearchIcon from '../icons/SearchIcon'

export default function Search() {
  return (
    <InputGroup className="relative z-20 w-full min-w-0 md:max-w-xl rounded-xl border-[0.99px] border-[#0000000F] bg-black/6 px-2 py-6 shadow-xs">
      <InputGroupInput
        className="text-sm font-semibold placeholder:text-[#0A0A12]/50 sm:text-base!"
        placeholder="Shop name or specialty…"
      />
      <InputGroupAddon>
        <SearchIcon className="me-2 size-5" />
      </InputGroupAddon>
    </InputGroup>
  )
}
