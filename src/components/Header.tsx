import { useState } from 'react'
import { Menu, ShoppingBag, User, X } from 'lucide-react'
import Logo from './Logo'
import SearchInput from './SearchInput'

type HeaderProps = {
  searchTerm: string
  onSearchChange: (value: string) => void
}

function Header({ searchTerm, onSearchChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const links = ['New Arrival', 'Men', 'Women', 'Sale']

  return (
    <header className="sticky top-0 z-40 bg-blue-600 text-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-2">
          <Logo light />

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

            <div className="hidden w-40 sm:block lg:w-44">
              <SearchInput value={searchTerm} onChange={onSearchChange} />
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
              aria-controls={isMenuOpen ? 'mobile-navigation' : undefined}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-xl border border-blue-400 p-2 hover:bg-blue-500 lg:hidden"
            >
              {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div className="pb-3 sm:hidden">
          <SearchInput value={searchTerm} onChange={onSearchChange} />
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
