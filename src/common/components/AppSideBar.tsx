import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from '@/components/ui/sidebar'

import logo from '@/assets/logo.webp'
import BoxIcon from '../icons/BoxIcon'
import DashboardIcon from '../icons/DashboardIcon'
import FileIcon from '../icons/FileIcon'
import MessageIcon from '../icons/MessageIcon'
import SearchIcon from '../icons/SearchIcon'
import WalletIcon from '../icons/WalletIcon'
import { cn } from '#/lib/utils'
import { LogOut } from 'lucide-react'
import { Link } from '@tanstack/react-router'

const sidebarItems = [
  {
    route: '/active-orders',
    key: 'active-orders',
    title: 'Active Orders',
    icon: BoxIcon,
  },
  {
    route: '/dashboard',
    key: 'dashboard',
    title: 'Dashboard',
    icon: DashboardIcon,
  },
  {
    route: '/my-requests',
    key: 'my-requests',
    title: 'My Requests',
    icon: FileIcon,
  },
  {
    route: '/messages',
    key: 'messages',
    title: 'Messages',
    icon: MessageIcon,
  },
  {
    route: '/printers',
    key: 'printers',
    title: 'Browse Printers',
    icon: SearchIcon,
  },
  {
    route: '/payment-history',
    key: 'payment-history',
    title: 'Payment History',
    icon: WalletIcon,
  },
]

export function AppSidebar() {
  const { open, isMobile, setOpenMobile } = useSidebar()
  return (
    <Sidebar collapsible="icon" className="bg-white">
      <SidebarHeader className={cn('py-6 border-b', open && 'ps-6')}>
        <img className="w-24" src={logo} />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              const isActive = item.route === window.location.pathname
              return (
                <SidebarMenuItem
                  className={cn(open && !isMobile && 'mx-2')}
                  key={item.key}
                >
                  <SidebarMenuButton
                    render={<Link to={item.route} />}
                    onClick={() => {
                      if (isMobile) {
                        setOpenMobile(false)
                      }
                    }}
                    isActive={isActive}
                    tooltip={item.title}
                    className={cn(
                      'h-12 rounded-xl px-4 font-semibold',
                      isActive && 'bg-primary! text-white!',
                    )}
                  >
                    <Icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          <SidebarFooter className={cn(!open && 'p-0')}>
            <SidebarMenuItem className={cn('list-none')} key={'logout'}>
              <SidebarMenuButton
                tooltip={'Logout'}
                className={cn(
                  'h-12 rounded-xl px-4 font-semibold text-red-500 hover:text-red-600',
                )}
              >
                <LogOut />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarFooter>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  )
}
