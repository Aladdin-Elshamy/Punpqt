import { createFileRoute } from '@tanstack/react-router'
import logo from '@/assets/logo.webp'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='py-6 ps-20'>
      <img src={logo} />
      <nav>
        
      </nav>
    </div>
  )
}
