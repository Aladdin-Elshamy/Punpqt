import Header from '#/common/sections/Header'
import { createFileRoute } from '@tanstack/react-router'
import ProfileOverviewSection from './-sections/ProfileOverviewSection'
import SavedAddressesSection from './-sections/SavedAddressesSection'

export const Route = createFileRoute('/_dashboardLayout/(profile)/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="container mx-auto flex w-full flex-col gap-8 px-4 pb-16 sm:px-6 lg:px-10 z-10 relative font-atyp">
      <Header
        title="My Profile"
        description="Manage your personal information, saved addresses, and account preferences."
      />

      <ProfileOverviewSection />

      <SavedAddressesSection />
    </div>
  )
}
