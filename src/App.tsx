import Header from './components/Header'
import ProductGrid from './components/ProductGrid'
import Sidebar from './components/Sidebar'
import { products } from './data/products'

function App() {
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
            <h1 id="products-title" className="text-xl font-bold">Recommended for you</h1>
            <div className="my-5 h-px bg-slate-100" />
            <ProductGrid products={products} />
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
