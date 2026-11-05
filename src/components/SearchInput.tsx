import { Search } from 'lucide-react'

type SearchInputProps = {
  value: string
  onChange: (value: string) => void
}

function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="relative">
      <Search size={16} aria-hidden="true" className="absolute top-3 left-3 text-blue-100" />
      <input
        type="search"
        aria-label="Search products"
        placeholder="Search products..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 w-full rounded-xl border border-blue-400 bg-blue-500/30 pr-3 pl-9 text-xs placeholder:text-blue-100 focus:outline-2 focus:outline-white"
      />
    </div>
  )
}

export default SearchInput
