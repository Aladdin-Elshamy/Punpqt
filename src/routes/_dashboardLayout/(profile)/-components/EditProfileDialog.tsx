import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import type { UserProfile } from '../-data/profileData'

type EditProfileDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  profile: UserProfile
  onSave: (updated: UserProfile) => void
}

export default function EditProfileDialog({
  open,
  onOpenChange,
  profile,
  onSave,
}: EditProfileDialogProps) {
  const [name, setName] = useState(profile.name)
  const [email, setEmail] = useState(profile.email)
  const [phone, setPhone] = useState(profile.phone)

  useEffect(() => {
    if (open) {
      setName(profile.name)
      setEmail(profile.email)
      setPhone(profile.phone)
    }
  }, [open, profile])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const initials = name
      .trim()
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || 'AH'

    onSave({
      ...profile,
      name,
      email,
      phone,
      initials,
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={false} className="sm:max-w-xl rounded-3xl bg-white p-6 sm:p-8 shadow-lg">
        <DialogHeader className="gap-1 text-left">
          <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
            Edit Profile
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-muted-foreground font-medium">
            Update your personal information and contact details.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5 font-semibold">
            <label
              htmlFor="profile-name"
              className="text-xs text-foreground"
            >
              Full name
            </label>
            <Input
              id="profile-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ahmed Hassan"
              required
              className="h-11 rounded-lg border-gray-200 bg-[#F4F4F6] text-xs! focus-visible:border-[#0D7377] focus-visible:ring-[#0D7377]/20"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5 font-semibold">
            <label
              htmlFor="profile-email"
              className="text-xs text-foreground"
            >
              Email
            </label>
            <Input
              id="profile-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="h-11 rounded-lg border-gray-200 bg-[#F4F4F6] text-xs! focus-visible:border-[#0D7377] focus-visible:ring-[#0D7377]/20"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5 font-semibold">
            <label
              htmlFor="profile-phone"
              className="text-xs text-foreground"
            >
              Phone
            </label>
            <Input
              id="profile-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+20 100 000 0000"
              required
              className="h-11 rounded-lg border-gray-200 bg-[#F4F4F6] text-xs! focus-visible:border-[#0D7377] focus-visible:ring-[#0D7377]/20"
            />
          </div>

          {/* Actions */}
          <div className="mt-4 flex items-center gap-3">
            <Button
              type="submit"
              className="h-11 flex-1 rounded-xl"
            >
              Save Changes
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
