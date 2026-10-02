import { Link } from 'react-router-dom'
import { company } from '../data/company.js'
import logo from '../assets/logo.png'

const services = [
  ['Process & Workflow Automation', '/services/process-workflow-page'],
  ['Agentic AI Solutions', '/services/agentic-ai-page'],
  ['Web Scraping & Data Solutions', '/services/web-scraping-page'],
  ['Web & Software Development', '/services/web-software-page'],
  ['Data Analytics & Dashboards', '/services/data-analytics'],
  ['Chatbot Integration', '/services/chatbot-page'],
  ['ERP Solutions', '/services/erp-page'],
  ['Healthcare RCM Data Solutions', '/services/healthcare-page'],
]

const companyLinks = [
  ['About Us', '/about'],
  ['Services', '/zestbotz-services'],
  ['Industries', '/industries'],
  ['Our Work', '/work'],
  ['Careers', '/careers'],
  ['Contact', '/contact'],
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
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5v.01" />
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
    <footer className="relative overflow-hidden bg-[#faf9f6] text-left text-[#111]">
      {/* Ambient gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(
              ellipse 35% 60% at 15% 20%,
              rgba(255, 140, 70, 0.20),
              transparent 70%
            ),
            radial-gradient(
              ellipse 40% 55% at 45% 45%,
              rgba(232, 89, 12, 0.16),
              transparent 70%
            ),
            radial-gradient(
              ellipse 35% 50% at 75% 25%,
              rgba(255, 190, 130, 0.18),
              transparent 70%
            ),
            radial-gradient(
              ellipse 45% 55% at 60% 90%,
              rgba(255, 125, 50, 0.12),
              transparent 70%
            )
          `,
          filter: 'blur(35px)',
          transform: 'scale(1.15)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 sm:px-8 lg:px-10">
        {/* Main content */}
        <div className="grid items-start gap-12 md:grid-cols-2 lg:grid-cols-[1fr_1.6fr_auto] lg:gap-x-16">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <img src={logo} alt="ZestBotz" className="-ml-10 w-[145px]" />
            </Link>

            <p className="mt-5 max-w-xs text-[15px] leading-6 text-[#2b2b2b]">
              {company.tagline ||
                'Intelligent automation and analytics for modern businesses.'}
            </p>

            <div className="mt-6 flex gap-3">
              {company.social?.map((item) => (
                <a
                  key={item.name}
                  href={item.href || '#'}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a1a2e] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E8590C]"
                >
                  <SocialIcon name={item.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Services (two columns) */}
          <div>
            <h3 className="font-serif text-base font-semibold">Services</h3>
            <ul className="mt-5 md:columns-2 md:gap-x-10">
              {services.map(([label, path]) => (
                <li key={path} className="break-inside-avoid pb-3">
                  <Link
                    to={path}
                    className="text-[15px] text-[#2b2b2b] transition-colors hover:text-[#E8590C]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-base font-semibold">Company</h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-[15px] text-[#2b2b2b] transition-colors hover:text-[#E8590C]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-[#1a1a2e] py-6">
          <div className="flex flex-col gap-2 text-xs text-[#2b2b2b] sm:flex-row sm:items-center">
            <p>
              {company.copyright ||
                '© 2026 ZestBotz Solutions. All rights reserved.'}
            </p>

            <span className="hidden h-5 w-px bg-[#1a1a2e] sm:mx-4 sm:block" />

            <p>
              {company.city && company.region
                ? `${company.city}, ${company.region}`
                : company.locationFull}
              {company.phone && ` | ${company.phone}`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}