import FilterCheckbox from './FilterCheckbox'
import FilterSection from './FilterSection'

function Sidebar() {
  return (
    <aside aria-label="Product filters" className="self-start lg:sticky lg:top-20 lg:col-span-3">
      <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <FilterSection title="Categories">
          <FilterCheckbox label="All Products" count={124} defaultChecked />
          <FilterCheckbox label="Outerwear" count={42} />
          <FilterCheckbox label="Footwear" count={18} />
          <FilterCheckbox label="Accessories" count={64} />
        </FilterSection>

        <FilterSection title="Price Range">
          <div className="flex justify-between text-xs text-slate-500">
            <span>0 kr</span>
            <span>1800 kr</span>
          </div>
          <input
            type="range"
            min={0}
            max={1800}
            defaultValue={900}
            aria-label="Maximum price"
            className="w-full accent-blue-600"
          />
        </FilterSection>

        <FilterSection title="Availability">
          <FilterCheckbox label="In Stock" />
          <FilterCheckbox label="On Sale" />
        </FilterSection>

        <section className="rounded-2xl bg-linear-to-br from-blue-600 to-amber-500 p-6 text-white">
          <h2 className="text-lg font-bold">Summer Sale</h2>
          <p className="mt-2 text-sm leading-relaxed">
            Get up to 50% off on all summer collections. Limited time offer!
          </p>
          <a
            href="#products"
            className="mt-6 block rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-blue-600 hover:bg-blue-50"
          >
            Shop Now
          </a>
        </section>
      </div>
    </aside>
  )
}

export default Sidebar
