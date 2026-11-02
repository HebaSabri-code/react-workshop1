import { ChevronLeft, ChevronRight } from 'lucide-react'

type PaginationProps = {
  currentPage: number
}

function Pagination({ currentPage }: PaginationProps) {
  const pages = [1, 2, 3]

  return (
    <nav aria-label="Pagination" className="mt-8 flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        aria-label="Previous page"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600"
      >
        <ChevronLeft size={18} aria-hidden="true" />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          aria-label={`Page ${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
          className={`h-9 w-9 rounded-lg border text-sm font-medium ${
            page === currentPage
              ? 'border-blue-600 bg-blue-600 text-white'
              : 'border-slate-200 text-slate-500 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600'
          }`}
        >
          {page}
        </button>
      ))}
      <span className="px-2 text-sm text-slate-400">…</span>
      <button type="button" aria-label="Page 12" className="h-9 w-9 rounded-lg border border-slate-200 text-sm text-slate-500 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600">
        12
      </button>
      <button
        type="button"
        aria-label="Next page"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600"
      >
        <ChevronRight size={18} aria-hidden="true" />
      </button>
    </nav>
  )
}

export default Pagination
