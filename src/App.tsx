import { Package } from 'lucide-react'

function App() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900">
      <div className="mx-auto max-w-xl rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-5 flex items-center gap-3 text-blue-600">
          <Package size={32} aria-hidden="true" />
          <h1 className="text-3xl font-bold">LITE.SHOP</h1>
        </div>
        <h2 className="text-xl font-semibold">React Workshop 1</h2>
        <p className="mt-3 text-slate-600">
          A product listing page built with React, TypeScript and Tailwind CSS.
        </p>
      </div>
    </main>
  )
}

export default App
