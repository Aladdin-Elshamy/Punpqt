import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import type { Address } from '../-data/profileData'

type AddressFormDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialData?: Address | null
  onSave: (address: Address) => void
}

export default function AddressFormDialog({
  open,
  onOpenChange,
  initialData,
  onSave,
}: AddressFormDialogProps) {
  const [label, setLabel] = useState<Address['label']>('Work')
  const [street, setStreet] = useState('')
  const [country, setCountry] = useState('Egypt')
  const [city, setCity] = useState('Alexandria')
  const [area, setArea] = useState('Smouha')
  const [building, setBuilding] = useState('Bulding 12')
  const [instructions, setInstructions] = useState('')
  const [phone, setPhone] = useState('09395787448')

  useEffect(() => {
    if (initialData) {
      setLabel(initialData.label)
      setStreet(initialData.street)
      setCountry(initialData.country)
      setCity(initialData.city)
      setArea(initialData.area)
      setBuilding(initialData.building)
      setInstructions(initialData.instructions || '')
      setPhone(initialData.phone)
    } else {
      setLabel('Work')
      setStreet('123 Salam Street')
      setCountry('Egypt')
      setCity('Alexandria')
      setArea('Smouha')
      setBuilding('Bulding 12')
      setInstructions('')
      setPhone('09395787448')
    }
  }, [initialData, open])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSave({
      id: initialData?.id || `addr-${Date.now()}`,
      label,
      street,
      country,
      city,
      area,
      building,
      instructions,
      phone,
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={false} className="sm:max-w-xl rounded-3xl bg-white p-6 sm:p-8 font-atyp shadow-lg">
        <DialogHeader className="gap-1 text-left">
          <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
            {initialData ? 'Edit Address' : 'Add New Address'}
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-muted-foreground">
            Save a delivery address to reuse for future orders and quotation requests.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
          {/* Address Label */}
          <div className="flex flex-col gap-1.5 font-semibold">
            <label className="text-xs text-foreground">
              Address Label
            </label>
            <Select
              value={label}
              onValueChange={(val) => {
                if (val) setLabel(val as Address['label'])
              }}
            >
              <SelectTrigger className="w-full h-11! rounded-xl border-gray-200 bg-[#F4F4F6] text-xs  focus-visible:border-[#0D7377] focus-visible:ring-[#0D7377]/20">
                <SelectValue placeholder="Select label" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-gray-200 font-atyp">
                <SelectItem value="Work">Work</SelectItem>
                <SelectItem value="Home">Home</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Street Address */}
          <div className="flex flex-col gap-1.5 font-semibold">
            <label
              htmlFor="addr-street"
              className="text-xs text-foreground"
            >
              Street Address
            </label>
            <Input
              id="addr-street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder="123 Salam Street"
              required
              className="h-11 rounded-xl border-gray-200 bg-[#F4F4F6] text-xs! focus-visible:border-[#0D7377] focus-visible:ring-[#0D7377]/20"
            />
          </div>

          {/* Country & City */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5 font-semibold">
              <label
                htmlFor="addr-country"
                className="text-xs text-foreground"
              >
                Country
              </label>
              <Input
                id="addr-country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Egypt"
                required
                className="h-11 rounded-xl border-gray-200 bg-[#F4F4F6] text-xs! focus-visible:border-[#0D7377] focus-visible:ring-[#0D7377]/20"
              />
            </div>
            <div className="flex flex-col gap-1.5 font-semibold">
              <label
                htmlFor="addr-city"
                className="text-xs text-foreground"
              >
                City
              </label>
              <Input
                id="addr-city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Alexandria"
                required
                className="h-11 rounded-xl border-gray-200 bg-[#F4F4F6] text-xs! focus-visible:border-[#0D7377] focus-visible:ring-[#0D7377]/20"
              />
            </div>
          </div>

          {/* Area & Building / Apartment */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5 font-semibold">
              <label
                htmlFor="addr-area"
                className="text-xs text-foreground"
              >
                Area
              </label>
              <Input
                id="addr-area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="Smouha"
                required
                className="h-11 rounded-xl border-gray-200 bg-[#F4F4F6] text-xs! focus-visible:border-[#0D7377] focus-visible:ring-[#0D7377]/20"
              />
            </div>
            <div className="flex flex-col gap-1.5 font-semibold">
              <label
                htmlFor="addr-building"
                className="text-xs text-foreground"
              >
                Building / Apartment
              </label>
              <Input
                id="addr-building"
                value={building}
                onChange={(e) => setBuilding(e.target.value)}
                placeholder="Building 12"
                required
                className="h-11 rounded-xl border-gray-200 bg-[#F4F4F6] text-xs! focus-visible:border-[#0D7377] focus-visible:ring-[#0D7377]/20"
              />
            </div>
          </div>

          {/* Additional Instructions */}
          <div className="flex flex-col gap-1.5 font-semibold">
            <label
              htmlFor="addr-instructions"
              className="text-xs text-foreground"
            >
              Additional Instructions
            </label>
            <Textarea
              id="addr-instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Note..."
              className="min-h-24 resize-none rounded-xl border-gray-200 bg-[#F4F4F6] text-xs! focus-visible:border-[#0D7377] focus-visible:ring-[#0D7377]/20"
            />
          </div>

          {/* Actions */}
          <div className="mt-4 flex items-center gap-3">
            <Button
              type="submit"
              className="h-11 flex-1 rounded-xl"
            >
              Save Address
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="h-11 flex-1 rounded-xl border-[#0D7377] text-[#0D7377] hover:text-[#0D7377] hover:bg-[#0D7377]/5 text-xs sm:text-sm"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
