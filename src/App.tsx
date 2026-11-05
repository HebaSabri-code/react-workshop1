import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Newsletter from './components/Newsletter'
import Pagination from './components/Pagination'
import ProductGrid from './components/ProductGrid'
import Sidebar from './components/Sidebar'
import SortSelect from './components/SortSelect'
import { products } from './data/products'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('newest')
  const sortedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  )

  if (sortBy === 'price-low') {
    sortedProducts.sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-high') {
    sortedProducts.sort((a, b) => b.price - a.price)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
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
            <p role="status" className="mt-3 text-sm text-slate-500">
              {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'} found
            </p>
            <div className="my-5 h-px bg-slate-100" />
            <ProductGrid products={sortedProducts} />
            {sortedProducts.length > 0 && <Pagination currentPage={1} />}
          </section>
        </div>
      </main>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
