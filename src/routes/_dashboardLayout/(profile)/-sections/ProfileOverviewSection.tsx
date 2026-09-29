import { useState } from 'react'
import ProfileHeaderCard from '../-components/ProfileHeaderCard'
import EditProfileDialog from '../-components/EditProfileDialog'
import { initialProfile, type UserProfile } from '../-data/profileData'

export default function ProfileOverviewSection() {
  const [profile, setProfile] = useState<UserProfile>(initialProfile)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  return (
    <section aria-label="Profile Overview">
      <ProfileHeaderCard
        profile={profile}
        onEditProfile={() => setIsEditDialogOpen(true)}
      />

      <EditProfileDialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        profile={profile}
        onSave={setProfile}
      />
    </section>
  )
}
