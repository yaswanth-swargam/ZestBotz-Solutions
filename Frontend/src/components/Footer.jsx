import { Link } from 'react-router-dom'
import { company } from '../data/company.js'
import { footerNav } from '../data/navigation'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
            {company.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/45">
            Explore
          </p>

          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {footerNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-white/80 transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/45">
            Contact
          </p>

          <p className="mt-4 text-sm text-white/80">
            {company.region
              ? `${company.city}, ${company.region}`
              : company.locationFull}
          </p>

          <a
            href={company.phoneHref}
            className="mt-2 block text-sm text-white/80 hover:text-brand"
          >
            {company.phone}
          </a>

          <div className="mt-5 flex items-center gap-3">
            {company.social.map((item) => (
              <a
                key={item.name}
                href={item.href || '#'}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-xs font-semibold text-white/80 transition-colors hover:border-brand hover:text-brand"
                aria-label={item.name}
              >
                {item.name.charAt(0)}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {company.city}, {company.region} | {company.phone}
        </p>
        <p>{company.copyright}</p>
      </div>
    </footer>
  )
}