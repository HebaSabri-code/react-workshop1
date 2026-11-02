import type { ReactNode } from 'react'

type FilterSectionProps = {
  title: string
  children: ReactNode
}

function FilterSection({ title, children }: FilterSectionProps) {
  return (
    <fieldset className="min-w-0 border-b border-slate-100 pb-5">
      <legend className="mb-4 text-sm font-bold">{title}</legend>
      <div className="space-y-3">{children}</div>
    </fieldset>
  )
}

export default FilterSection
