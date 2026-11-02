import { Eye, Heart, Plus, Star } from 'lucide-react'
import type { Product } from '../data/products'

type ProductCardProps = {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  let badgeColor = 'border-amber-100 bg-amber-50/90 text-amber-700'

  if (!product.inStock) {
    badgeColor = 'border-slate-200 bg-slate-900/70 text-white'
  } else if (product.oldPrice !== undefined) {
    badgeColor = 'border-rose-100 bg-rose-50/90 text-rose-600'
  } else if (product.badge === 'Popular') {
    badgeColor = 'border-blue-100 bg-blue-50/90 text-blue-600'
  }

  return (
    <article className="group flex h-full min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-3 transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg">
      <div className="relative overflow-hidden rounded-2xl bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={1000}
          className={`aspect-4/5 w-full object-cover transition duration-500 group-hover:scale-105 ${
            !product.inStock ? 'opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0' : ''
          }`}
        />

        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-blue-600/10 opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100">
          <button
            type="button"
            aria-label={`Quick view: ${product.name}`}
            disabled={!product.inStock}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:bg-white/80 disabled:text-slate-400"
          >
            <Eye size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            disabled={!product.inStock}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:bg-white/80 disabled:text-slate-400"
          >
            <Plus size={20} aria-hidden="true" />
          </button>
        </div>

        <span className={`absolute top-3 left-3 rounded-full border px-3 py-1 text-[11px] font-bold ${badgeColor}`}>
          {product.badge}
        </span>
        <button
          type="button"
          aria-label={`Add ${product.name} to favorites`}
          className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-600 hover:bg-white hover:text-rose-500"
        >
          <Heart size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="mt-4 flex flex-1 flex-col px-1 pb-2">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">
            {product.category}
          </p>
          <span aria-label={`Rated ${product.rating} out of 5`} className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
            <Star size={12} aria-hidden="true" className="fill-amber-400 text-amber-400" />
            {product.rating}
          </span>
        </div>

        <h2 className="mt-1 min-h-10 text-sm leading-5 font-bold group-hover:text-blue-600">
          {product.name}
        </h2>
        <p className={`mt-1 min-h-8 text-[11px] ${product.badge === 'Limited' ? 'text-amber-600' : 'text-slate-500'}`}>
          {product.availability}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-3">
          <div className="flex flex-col">
            {product.oldPrice !== undefined && (
              <span className="text-[10px] text-slate-400 line-through">
                {product.oldPrice.toLocaleString('en-US')} kr
              </span>
            )}
            <span className={`text-lg font-bold ${product.inStock ? 'text-slate-900' : 'text-slate-400'}`}>
              {product.price.toLocaleString('en-US')} kr
            </span>
          </div>

          <button
            type="button"
            disabled={!product.inStock}
            className="h-10 rounded-xl bg-slate-900 px-4 text-xs font-bold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
          >
            {product.inStock ? 'Add to cart' : 'Notify Me'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
