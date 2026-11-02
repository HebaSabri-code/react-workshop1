type FilterCheckboxProps = {
  label: string
  count?: number
  defaultChecked?: boolean
}

function FilterCheckbox({ label, count, defaultChecked = false }: FilterCheckboxProps) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-700">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="h-4 w-4 shrink-0 accent-blue-600"
      />
      <span>
        {label}
        {count !== undefined && <span className="ml-1 text-slate-400">({count})</span>}
      </span>
    </label>
  )
}

export default FilterCheckbox
