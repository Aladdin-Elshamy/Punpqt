import { Briefcase, Home, MapPin, Phone } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import type { Address } from '../-data/profileData'
import { Button } from '#/components/ui/button'

type AddressCardProps = {
  address: Address
  onEdit: (address: Address) => void
  onDelete: (id: string) => void
}

export default function AddressCard({
  address,
  onEdit,
  onDelete,
}: AddressCardProps) {
  function renderIcon() {
    switch (address.label) {
      case 'Home':
        return <Home className="size-4.5" />
      case 'Work':
        return <Briefcase className="size-4.5" />
      default:
        return <MapPin className="size-4.5" />
    }
  }

  return (
    <Card className="rounded-2xl border-0 bg-primary/5 p-5 sm:p-6 shadow-xs ring-0 gap-0">
      <CardContent className="p-0">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-[#E8F4F4] text-primary">
              {renderIcon()}
            </div>
            <h3 className="text-base sm:text-lg font-medium text-foreground">
              {address.label}
            </h3>
          </div>

          <div className="flex items-center gap-0 text-xs">
            <Button
              type="button"
              variant={"ghost"}
              onClick={() => onEdit(address)}
              className="hover:text-foreground transition-colors cursor-pointer font-normal"
            >
              Edit
            </Button>
            <Button
              type="button"
              variant={"ghost"}
              onClick={() => onDelete(address.id)}
              className="text-rose-500 hover:text-rose-600 transition-colors cursor-pointer font-normal"
            >
              Delete
            </Button>
          </div>
        </div>

        {/* Address Lines */}
        <div className="mt-4 text-xs sm:text-sm font-medium text-muted-foreground space-y-0.5">
          <p>{address.street}</p>
          <p>
            {address.city}, {address.country}
          </p>
        </div>

        {/* Contact */}
        <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <Phone className="size-3.5 text-muted-foreground" />
          <span>{address.phone}</span>
        </div>
      </CardContent>
    </Card>
  )
}
