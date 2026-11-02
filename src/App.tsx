import { useState } from 'react'
import Header from './components/Header'
import Newsletter from './components/Newsletter'
import Pagination from './components/Pagination'
import ProductGrid from './components/ProductGrid'
import Sidebar from './components/Sidebar'
import SortSelect from './components/SortSelect'
import { products } from './data/products'

function App() {
  const [sortBy, setSortBy] = useState('newest')
  const sortedProducts = [...products]

  if (sortBy === 'price-low') {
    sortedProducts.sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-high') {
    sortedProducts.sort((a, b) => b.price - a.price)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <Sidebar />
          <section
            id="products"
            aria-labelledby="products-title"
            className="min-h-64 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-9"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h1 id="products-title" className="text-xl font-bold">Recommended for you</h1>
              <SortSelect value={sortBy} onChange={setSortBy} />
            </div>
            <div className="my-5 h-px bg-slate-100" />
            <ProductGrid products={sortedProducts} />
            <Pagination currentPage={1} />
          </section>
        </div>
      </main>
      <Newsletter />
    </div>
  )
}

export default App
