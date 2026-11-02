import { useState } from 'react'

function Newsletter() {
  const [message, setMessage] = useState('')

  return (
    <section aria-labelledby="newsletter-title" className="mt-12 bg-slate-900 py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <div className="max-w-xl">
          <h2 id="newsletter-title" className="text-3xl font-bold tracking-tight uppercase italic sm:text-4xl">
            Join the LITE.CLUB
          </h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            Subscribe to our newsletter and get{' '}
            <span className="font-bold text-white underline decoration-blue-500 underline-offset-4">15% off</span>{' '}
            your first order. Be the first to know about new arrivals and exclusive sales.
          </p>
        </div>

        <form
          className="w-full max-w-md"
          onSubmit={(event) => {
            event.preventDefault()
            setMessage('Newsletter signup is not available yet.')
          }}
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              aria-label="Email address"
              placeholder="Enter your email"
              autoComplete="email"
              required
              className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm placeholder:text-slate-400 focus:outline-2 focus:outline-blue-500"
            />
            <button type="submit" className="rounded-2xl bg-blue-600 px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-blue-500">
              Subscribe
            </button>
          </div>
          <p className="mt-3 text-[10px] text-slate-400 italic">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
          <p role="status" className="mt-3 text-sm text-blue-200">{message}</p>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
