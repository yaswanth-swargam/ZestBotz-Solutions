import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const serviceLinks = [
  ['AI Automation & RPA', '/services/process-workflow-page'],
  ['Agentic AI Solutions', '/services/agentic-ai-page'],
  ['Data Engineering & Analytics', '/services/data-analytics'],
  ['Healthcare Analytics & RCM', '/services/healthcare-page'],
  ['Web & Custom Software', '/services/web-software-page'],
  ['Web Scraping & Extraction', '/services/web-scraping-page'],
  ['Chatbot & Conversational AI', '/services/chatbot-page'],
  ['Enterprise ERP Solutions', '/services/erp-page'],
  ['All Services Hub', '/services'],
]

const workLinks = [
  ['Industries', '/industries'],
  ['Case Studies & Work', '/work'],
]

function Chevron({ className = '' }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function Dropdown({ label, items }) {
  return (
    <div className="group relative">
      <button
        type="button"
        aria-haspopup="true"
        className="flex items-center gap-1.5 py-2 text-[15px] font-medium text-[#1a1a1a] transition-colors group-hover:text-[#E8590C] group-focus-within:text-[#E8590C]"
      >
        {label}
        <Chevron className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
      </button>

      <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="min-w-[260px] rounded-xl border border-black/[0.08] bg-[#f9f8fc] py-2.5 shadow-xl">
          {items.map(([text, path]) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `block px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white hover:text-[#E8590C] ${
                    isActive ? 'font-semibold text-[#E8590C]' : 'text-[#222222]'
                  }`
                }
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMobileSection(null)
  }, [pathname])

  const topLink = ({ isActive }) =>
    `text-[15px] font-medium transition-colors hover:text-[#E8590C] ${
      isActive ? 'font-semibold text-[#E8590C]' : 'text-[#1a1a1a]'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.06)]' : 'border-b border-black/[0.05]'
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10"
      >
        <Link to="/" className="shrink-0 flex items-center gap-2">
          <img src={logo} alt="ZestBotz Solutions Logo" width="125" height="38" className="w-[125px] h-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          <Dropdown label="Services" items={serviceLinks} />
          <Dropdown label="Our Work" items={workLinks} />
          <NavLink to="/products" className={topLink}>
            Products
          </NavLink>
          <NavLink to="/careers" className={topLink}>
            Careers
          </NavLink>
          <NavLink to="/about" className={topLink}>
            About
          </NavLink>
          <Link
            to="/contact"
            className="rounded-full bg-[#11101f] px-7 py-3 text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#E8590C]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-black/10 text-[#111111] hover:bg-black/5 lg:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-black/10 bg-white px-6 pb-8 pt-3 lg:hidden shadow-2xl"
        >
          {[
            ['Services', serviceLinks],
            ['Our Work', workLinks],
          ].map(([label, items]) => (
            <div key={label} className="border-b border-black/[0.08]">
              <button
                type="button"
                onClick={() =>
                  setMobileSection(mobileSection === label ? null : label)
                }
                className="flex w-full items-center justify-between py-4 text-left text-[15px] font-medium"
              >
                {label}
                <Chevron
                  className={`transition-transform duration-200 ${
                    mobileSection === label ? 'rotate-180 text-[#E8590C]' : ''
                  }`}
                />
              </button>

              {mobileSection === label && (
                <ul className="mb-3 rounded-lg bg-[#f3f1fb] py-2.5">
                  {items.map(([text, path]) => (
                    <li key={path}>
                      <NavLink
                        to={path}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm ${
                            isActive ? 'font-semibold text-[#E8590C]' : 'text-[#222222]'
                          }`
                        }
                      >
                        {text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Corrected: Products was previously missing from mobile navigation */}
          <NavLink
            to="/products"
            className="block border-b border-black/[0.08] py-4 text-[15px] font-medium hover:text-[#E8590C]"
          >
            Products
          </NavLink>

          <NavLink
            to="/careers"
            className="block border-b border-black/[0.08] py-4 text-[15px] font-medium hover:text-[#E8590C]"
          >
            Careers
          </NavLink>

          <NavLink
            to="/about"
            className="block border-b border-black/[0.08] py-4 text-[15px] font-medium hover:text-[#E8590C]"
          >
            About
          </NavLink>

          {/* Corrected: Changed py-1 to accessible touch target py-3.5 */}
          <Link
            to="/contact"
            className="mt-5 block w-full rounded-full bg-[#11101f] py-3.5 text-center text-[15px] font-semibold text-white shadow hover:bg-[#E8590C] transition"
          >
            Contact Our Team
          </Link>
        </div>
      )}
    </header>
  )
}