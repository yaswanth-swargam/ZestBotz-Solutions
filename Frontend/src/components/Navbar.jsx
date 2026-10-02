import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const serviceLinks = [
  ['All Services', '/zestbotz-services'],
  ['Process & Workflow Automation', '/services/process-workflow-page'],
  ['Agentic AI Solutions', '/services/agentic-ai-page'],
  ['Web Scraping & Data Solutions', '/services/web-scraping-page'],
  ['Web & Software Development', '/services/web-software-page'],
  ['Data Analytics & Dashboards', '/services/data-analytics'],
  ['Chatbot Integration', '/services/chatbot-page'],
  ['ERP Solutions', '/services/erp-page'],
  ['Healthcare RCM Data Solutions', '/services/healthcare-page'],
]

const workLinks = [
  ['Industries', '/industries'],
  ['Case Studies', '/work'],
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
        className="flex items-center gap-1.5 py-2 text-[15px] text-[#1a1a1a] transition-colors group-hover:text-[#E8590C] group-focus-within:text-[#E8590C]"
      >
        {label}
        <Chevron className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
      </button>

      {/* pt-3 keeps the hover area connected so the menu doesn't close */}
      <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="min-w-[230px] bg-[#f3f1fb] py-2 shadow-lg">
          {items.map(([text, path]) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `block whitespace-nowrap px-5 py-2.5 text-sm transition-colors hover:text-[#E8590C] ${
                    isActive ? 'text-[#E8590C]' : 'text-[#1a1a1a]'
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

  // close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setMobileSection(null)
  }, [pathname])

  const topLink = ({ isActive }) =>
    `text-[15px] transition-colors hover:text-[#E8590C] ${
      isActive ? 'text-[#E8590C]' : 'text-[#1a1a1a]'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.06)]' : ''
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="ZestBotz" className="w-[120px]" />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-9 lg:flex">
          <Dropdown label="Services" items={serviceLinks} />
          <Dropdown label="Our Work" items={workLinks} />
          <NavLink to="/careers" className={topLink}>
            Careers
          </NavLink>
          <NavLink to="/about" className={topLink}>
            About
          </NavLink>
          <Link
            to="/contact"
            className="rounded-full bg-[#11101f] px-7 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#E8590C]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md lg:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-black/10 bg-white px-6 pb-6 pt-2 lg:hidden">
          {[
            ['Services', serviceLinks],
            ['Our Work', workLinks],
          ].map(([label, items]) => (
            <div key={label} className="border-b border-black/10">
              <button
                type="button"
                onClick={() =>
                  setMobileSection(mobileSection === label ? null : label)
                }
                className="flex w-full items-center justify-between py-4 text-left text-[15px]"
              >
                {label}
                <Chevron
                  className={`transition-transform ${
                    mobileSection === label ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileSection === label && (
                <ul className="mb-3 bg-[#f3f1fb] py-2">
                  {items.map(([text, path]) => (
                    <li key={path}>
                      <NavLink
                        to={path}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm ${
                            isActive ? 'text-[#E8590C]' : 'text-[#1a1a1a]'
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

          <NavLink
            to="/careers"
            className="block border-b border-black/10 py-4 text-[15px]"
          >
            Careers
          </NavLink>
          <NavLink
            to="/about"
            className="block border-b border-black/10 py-4 text-[15px]"
          >
            About
          </NavLink>

          <Link
            to="/contact"
            className="mt-5 block rounded-full bg-[#11101f] py-3 text-center text-[15px] font-medium text-white"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}