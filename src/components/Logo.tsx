import { Package } from 'lucide-react'

type LogoProps = {
  light?: boolean
}

function Logo({ light = false }: LogoProps) {
  return (
    <a href="#" className={`flex shrink-0 items-center gap-2 ${light ? 'text-white' : 'text-slate-900'}`}>
      <span className={`rounded-lg p-2 ${light ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}>
        <Package size={20} aria-hidden="true" />
      </span>
      <span className="text-lg font-bold tracking-tight sm:text-xl">LITE.SHOP</span>
    </a>
  )
}

export default Logo
