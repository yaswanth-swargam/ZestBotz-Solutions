import { Link } from 'react-router-dom'
import { company } from '../data/company.js'
import logo from '../assets/logo.png'

const services = [
  ['AI Automation & RPA', '/services/process-workflow-page'],
  ['Agentic AI Solutions', '/services/agentic-ai-page'],
  ['Data Engineering & Analytics', '/services/data-analytics'],
  ['Healthcare Analytics & RCM', '/services/healthcare-page'],
  ['Web & Custom Software', '/services/web-software-page'],
  ['Web Scraping & Extraction', '/services/web-scraping-page'],
  ['Chatbot & Conversational AI', '/services/chatbot-page'],
  ['Enterprise ERP Solutions', '/services/erp-page'],
]

const companyLinks = [
  ['About Us', '/about'],
  ['Our Services', '/services'],
  ['Our Products', '/products'],
  ['Industries', '/industries'],
  ['Case Studies & Work', '/work'],
  ['Careers', '/careers'],
  ['Contact Us', '/contact'],
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
    'aria-hidden': true,
  }

  if (n.includes('linkedin'))
    return (
      <svg {...props}>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 11v5M8 8v.01M12 16v-5M12 13a2.5 2.5 0 0 1 5 0v3" />
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
    <footer className="relative overflow-hidden bg-[#faf9f6] text-left text-[#111] border-t border-black/[0.08]">
      {/* Ambient gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 35% 60% at 15% 20%, rgba(255, 140, 70, 0.16), transparent 70%),
            radial-gradient(ellipse 40% 55% at 45% 45%, rgba(232, 89, 12, 0.12), transparent 70%),
            radial-gradient(ellipse 35% 50% at 75% 25%, rgba(255, 190, 130, 0.14), transparent 70%)
          `,
          filter: 'blur(35px)',
          transform: 'scale(1.15)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 sm:px-8 lg:px-10">
        {/* Main content grid */}
        <div className="grid items-start gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1.6fr_auto] lg:gap-x-16">
          {/* Brand & Contact */}
          <div>
            <Link to="/" className="inline-block">
              <img src={logo} alt="ZestBotz Solutions Logo" width="145" height="44" className="w-[145px] h-auto object-contain" />
            </Link>

            <p className="mt-4 max-w-xs text-[15px] leading-6 text-[#444444]">
              {company.tagline}
            </p>

            <div className="mt-5 space-y-2 text-sm text-[#444444]">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-[#111]">Headquarters:</span> {company.locationFull}
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-[#111]">Email:</span>{' '}
                <a
                  href={company.emailHref}
                  className="text-[#E8590C] hover:underline transition-colors"
                >
                  {company.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-[#111]">Phone:</span>{' '}
                <a
                  href={company.phoneHref}
                  className="text-[#E8590C] hover:underline transition-colors"
                >
                  {company.phone}
                </a>
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              {company.social?.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ZestBotz on ${item.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a1a2e] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E8590C]"
                >
                  <SocialIcon name={item.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#111111]">
              Specialized Services
            </h3>
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {services.map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-[14px] text-[#444444] transition-colors hover:text-[#E8590C]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#111111]">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-2.5">
              {companyLinks.map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-[14px] text-[#444444] transition-colors hover:text-[#E8590C]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-black/[0.1] py-6">
          <div className="flex flex-col gap-2 text-xs text-[#555555] sm:flex-row sm:items-center sm:justify-between">
            <p>{company.copyright}</p>
            <p>
              {company.locationFull} | Remote-first engineering across India & Global Clients
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer