import Search from './Search'
import Avatar from './Avatar'
import Notification from './Notification'
import CurrenyTabs from './CurrenyTabs'
import { SidebarTrigger } from '#/components/ui/sidebar'
import { Link } from '@tanstack/react-router'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-xs px-4 sm:px-6 lg:px-10">
      <div className="container py-3 mx-auto flex flex-wrap items-center gap-3 md:flex-nowrap md:gap-6">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <SidebarTrigger className="shrink-0" />

          <div className="hidden min-w-0 flex-1 md:block">
            <Search />
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:gap-5 md:gap-6">
          <Link to="/profile"><Avatar src="" alt="D" /></Link>
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
