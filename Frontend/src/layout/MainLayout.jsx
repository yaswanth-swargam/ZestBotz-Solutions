import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const elementId = decodeURIComponent(hash.slice(1))

      requestAnimationFrame(() => {
        const element = document.getElementById(elementId)

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      })
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      })
    }
  }, [pathname, hash])

  return null
}

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-white dark:bg-[#0B0B0D] text-[#0B0B0D] dark:text-gray-100 transition-colors duration-200">

      <ScrollToTop />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:border focus:border-[#FF631C] focus:bg-white dark:focus:bg-[#121216] focus:px-4 focus:py-2.5 focus:text-[#0B0B0D] dark:focus:text-white focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <Navbar />

      <div id="main-content" className="pt-20 flex-1">
        <Outlet />
      </div>

      <Footer />

    </div>
  )
}

export default MainLayout