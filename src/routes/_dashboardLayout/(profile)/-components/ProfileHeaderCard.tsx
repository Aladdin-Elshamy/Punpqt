import { Mail, Phone } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { UserProfile } from '../-data/profileData'

type ProfileHeaderCardProps = {
  profile: UserProfile
  onEditProfile: () => void
}

export default function ProfileHeaderCard({
  profile,
  onEditProfile,
}: ProfileHeaderCardProps) {
  return (
    <Card className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-7 shadow-xs ring-0 gap-0">
      <CardContent className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-0">
        <div className="flex items-start gap-5">
          {/* User Initials Circle */}
          <div
            className="flex size-18 sm:size-20 shrink-0 items-center justify-center rounded-full text-white text-2xl font-bold shadow-xs select-none"
            style={{
              background: 'linear-gradient(180deg, #0D7377 0%, #2BA8AD 100%)',
            }}
          >
            {profile.initials}
          </div>

          {/* User Details */}
          <div className="min-w-0">
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              {profile.name}
            </h2>
            <div className="mt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Mail className="size-4 shrink-0 text-muted-foreground" />
                <span className="break-all">{profile.email}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="size-4 shrink-0 text-muted-foreground" />
                <span>{profile.phone}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Edit Profile Action */}
        <Button
          type="button"
          onClick={onEditProfile}
          className="self-start sm:self-auto h-10 px-6 rounded-xl "
        >
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  )
}
