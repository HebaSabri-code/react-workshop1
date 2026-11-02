import { useState } from 'react'
import { Menu, Package, Search, ShoppingBag, User, X } from 'lucide-react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const links = ['New Arrival', 'Men', 'Women', 'Sale']

  return (
    <header className="sticky top-0 z-40 bg-blue-600 text-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-2">
          <a href="#" className="flex shrink-0 items-center gap-2">
            <span className="rounded-lg bg-white p-2 text-blue-600">
              <Package size={20} aria-hidden="true" />
            </span>
            <span className="text-lg font-bold tracking-tight sm:text-xl">LITE.SHOP</span>
          </a>

          <nav aria-label="Main navigation" className="hidden gap-6 lg:flex">
            {links.map((link) => (
              <a key={link} href="#products" className="text-sm font-semibold text-blue-100 hover:text-white">
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span className="mr-2 hidden items-center gap-2 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold xl:flex">
              <span className="h-2 w-2 rounded-full bg-blue-100" />
              Live
            </span>

            <div className="relative hidden sm:block">
              <Search size={16} aria-hidden="true" className="absolute top-3 left-3 text-blue-100" />
              <input
                type="search"
                aria-label="Search products"
                placeholder="Search products..."
                className="h-10 w-40 rounded-xl border border-blue-400 bg-blue-500/30 pr-3 pl-9 text-xs placeholder:text-blue-100 focus:outline-2 focus:outline-white lg:w-44"
              />
            </div>

            <button
              type="button"
              aria-label="Cart"
              className="rounded-xl border border-blue-400 p-2 hover:bg-blue-500"
            >
              <ShoppingBag size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Account"
              className="rounded-xl border border-blue-400 p-2 hover:bg-blue-500"
            >
              <User size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-xl border border-blue-400 p-2 hover:bg-blue-500 lg:hidden"
            >
              {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="flex flex-col gap-4 border-t border-blue-400 py-4 lg:hidden"
          >
            {links.map((link) => (
              <a key={link} href="#products" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold hover:underline">
                {link}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
