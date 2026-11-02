import { ChevronDown } from 'lucide-react'

type SortSelectProps = {
  value: string
  onChange: (value: string) => void
}

function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <label className="inline-flex items-center gap-2 text-sm text-slate-600">
      <span className="shrink-0">Sort by:</span>
      <span className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-2 pr-9 pl-3 text-sm text-slate-900 focus:border-blue-400 focus:outline-2 focus:outline-blue-200"
        >
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="best-selling" disabled>Best Selling</option>
        </select>
        <ChevronDown size={16} aria-hidden="true" className="pointer-events-none absolute top-3 right-3 text-slate-400" />
      </span>
    </label>
  )
}

export default SortSelect
