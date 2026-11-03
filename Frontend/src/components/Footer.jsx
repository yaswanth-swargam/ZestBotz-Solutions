import { Link } from 'react-router-dom'
import { company, servicesList } from '../data/company.js'
import logo from '../assets/logo.png'
import logoWhite from '../assets/logo-white.png'

const companyLinks = [
  ['About ZestBotz', '/about'],
  ['Services Overview', '/services'],
  ['Target Industries', '/industries'],
  ['Product Portfolio', '/products'],
  ['Case Studies & Approach', '/work'],
  ['Careers', '/careers'],
  ['FAQs', '/#faq'],
  ['Contact Us', '/contact'],
  ['Schedule Consultation', '/book-a-call'],
]

const productLinks = [
  ['SchoolOS', '/products'],
  ['ZestHR', '/products'],
  ['ZestRCM Analytics', '/products'],
]

function SocialIcon({ name }) {
  const n = name.toLowerCase()
  const props = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  }

  if (n.includes('linkedin'))
    return (
      <svg {...props}>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 11v5M8 8v.01M12 16v-5M12 13a2.5 2.5 0 0 1 5 0v3" />
      </svg>
    )

  if (n.includes('instagram'))
    return (
      <svg {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    )

  if (n.includes('youtube'))
    return (
      <svg {...props}>
        <rect x="2.5" y="5" width="19" height="14" rx="4" />
        <path d="M10 9.5v5l4.5-2.5z" />
      </svg>
    )

  return <span className="text-sm font-semibold">{name.charAt(0)}</span>
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/[0.08] bg-white text-left text-[#0B0B0D]">
  {/* Subtle orange ambient gradient — matching Agentic AI page */}
  <div
    className="pointer-events-none absolute inset-0"
    aria-hidden="true"
    style={{
      background: `
        radial-gradient(
          ellipse at 8% 12%,
          rgba(255, 99, 28, 0.10),
          transparent 40%
        ),
        radial-gradient(
          ellipse at 95% 70%,
          rgba(245, 161, 108, 0.10),
          transparent 36%
        )
      `,
    }}
  />

  {/* Keep your existing footer content below this line */}

      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-12 sm:px-8 lg:px-10">
        {/* Main content grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand Column */}
          <div className="flex flex-col items-start lg:col-span-1">
            <Link to="/" aria-label="ZestBotz home" className="flex items-center gap-2.5">
              <img
                src={logo}
                alt="ZestBotz Logo"
                className="relative -left-3 block dark:hidden h-12 w-auto object-contain"
              />
              <img
                src={logoWhite}
                alt="ZestBotz Logo"
                className="relative -left-3 hidden dark:block h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#FF631C]">
              {company.positioning}
            </p>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {company.tagline}
            </p>

            <div className="mt-5 rounded-xl border border-black/[0.06] bg-white/70 p-3 text-xs text-gray-600 shadow-xs">
              <p className="font-semibold text-gray-900">Three Central Promises:</p>
              <p className="mt-1 text-gray-600">Automate work · Connect data · Improve decisions</p>
            </div>

            <div className="mt-6 flex gap-3">
              {company.social?.map((item) => (
                <a
                  key={item.name}
                  href={item.href || '#'}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.08] bg-white text-gray-700 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FF631C] hover:bg-[#FF631C] hover:text-white"
                >
                  <SocialIcon name={item.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Official Services (2 cols worth on desktop or clean stack) */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between pb-2 border-b border-black/[0.08]">
              <h3 className="text-base font-semibold text-gray-900">
                Official Services
              </h3>
              <Link to="/services" className="text-xs font-medium text-[#FF631C] hover:underline">
                View All 8 Services →
              </Link>
            </div>
            <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {servicesList.map((service) => (
                <li key={service.id}>
                  <Link
                    to={service.href}
                    className="group block text-xs sm:text-[13px] text-gray-600 transition-colors hover:text-[#FF631C]"
                  >
                    <span className="text-[#FF631C] mr-1.5 opacity-80 group-hover:opacity-100">
                      {service.number}.
                    </span>
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-black/[0.08]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Product Portfolio
              </h4>
              <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-2">
                {productLinks.map(([label, path]) => (
                  <Link
                    key={path}
                    to={path}
                    className="text-xs text-gray-600 transition-colors hover:text-[#FF631C]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Discovery & Consultations Callout (Moved to middle) */}
            <div className="mt-6 rounded-2xl border border-[#FF631C]/25 bg-[#FF631C]/[0.05] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#FF631C] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FF631C]" />
                  Discovery & Consultations
                </p>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                  Discuss an automation, data pipeline, or custom software requirement with our team.
                </p>
              </div>
              <Link
                to="/book-a-call"
                className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-[#FF631C] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#e05010]"
              >
                <span>Schedule a 30-min discovery call</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Company & Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold text-gray-900 pb-2 border-b border-black/[0.08]">
              Company & Inquiries
            </h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-xs sm:text-[13px] text-gray-600 transition-colors hover:text-[#FF631C]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-black/[0.08] pt-6">
          <div className="flex flex-col gap-3 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
            <p>{company.copyright}</p>
            <p className="flex items-center gap-2">
              <span>{company.locationFull}</span>
              <span>·</span>
              <a href={company.phoneHref} className="hover:text-[#FF631C] transition">
                {company.phone}
              </a>
              <span>·</span>
              <a href={`mailto:${company.email}`} className="hover:text-[#FF631C] transition">
                {company.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
