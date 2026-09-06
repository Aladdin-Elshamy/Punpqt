import Search from './Search'
import Avatar from './Avatar'
import Notification from './Notification'
import CurrenyTabs from './CurrenyTabs'
import { SidebarTrigger } from '#/components/ui/sidebar'

export default function Navbar() {
  return (
    <nav className="w-full bg-white px-4 sm:px-6 lg:px-10 sticky top-0 z-10">
      <div className="container py-3 mx-auto flex flex-wrap items-center gap-3 md:flex-nowrap md:gap-6">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <SidebarTrigger className="shrink-0" />

          <div className="hidden min-w-0 flex-1 md:block">
            <Search />
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:gap-5 md:gap-6">
          <Avatar src="" alt="D" />
          <Notification />
          <CurrenyTabs />
        </div>

        <div className="w-full md:hidden">
          <Search />
        </div>
      </div>
    </nav>
  )
}
