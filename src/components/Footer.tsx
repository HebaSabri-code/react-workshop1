import FooterLinks from './FooterLinks'
import Logo from './Logo'

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 space-y-6">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-slate-500">
              Modern e-commerce experience built for speed and elegance. Discover the latest
              trends in outerwear, footwear and accessories.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </a>
            </div>
          </div>

          <FooterLinks
            title="Shop"
            links={['New Arrival', 'Best Sellers', 'Men Collection', 'Women Collection']}
          />
          <FooterLinks
            title="Support"
            links={['Order Status', 'Shipping Policy', 'Returns & Exchanges', 'FAQs']}
          />
          <FooterLinks
            title="Company"
            links={['About Us', 'Sustainability', 'Careers', 'Contact']}
          />
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
            &copy; 2026 LITE.SHOP. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
