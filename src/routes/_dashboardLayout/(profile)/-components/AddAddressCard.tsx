import { Plus } from 'lucide-react'

type AddAddressCardProps = {
  onClick: () => void
}

export default function AddAddressCard({ onClick }: AddAddressCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex min-h-42.5 w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-gray-100/90 bg-gray-50/50 p-6 text-center transition-all hover:border-primary/50 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
    >
      <div className="flex size-10 items-center justify-center rounded-lg bg-[#E8F4F4] text-primary transition-transform group-hover:scale-110">
        <Plus className="size-5" />
      </div>
      <span className="mt-3 text-sm font-semibold text-foreground">
        Add New Address
      </span>
    </button>
  )
}
