import { AppSidebar } from '#/common/components/AppSideBar'
import Footer from '#/common/components/Footer'
import Navbar from '#/common/components/Navbar'
import { SidebarInset, SidebarProvider } from '#/components/ui/sidebar'

import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboardLayout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-w-0 overflow-hidden bg-accent ">
        <Navbar />
        <div className="w-full flex-1 pt-20 sm:pt-16 relative">
          <div
            className="pointer-events-none absolute ltr:left-4 rtl:right-4 sm:ltr:-left-12 sm:rtl:-right-12 -top-8 sm:top-30
             h-82 w-full
             rounded-full
             bg-[#0D7377]/20
             blur-[140px]"
          />
          <Outlet />
        </div>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  )
}
