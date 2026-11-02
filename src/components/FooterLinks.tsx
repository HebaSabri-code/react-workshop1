type FooterLinksProps = {
  title: string
  links: string[]
}

function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <nav aria-label={`${title} links`}>
      <h2 className="text-xs font-bold tracking-widest uppercase">{title}</h2>
      <ul className="mt-6 space-y-4 text-sm font-semibold text-slate-500">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:text-blue-600">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default FooterLinks
