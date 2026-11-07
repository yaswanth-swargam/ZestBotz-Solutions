import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { company } from '../data/company.js'

function ArrowIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  )
}



function SectionLabel({ children }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#FF631C]">
      {children}
    </p>
  )
}

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-white text-[#0B0B0D]">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
        style={{
          background:
            'radial-gradient(ellipse at 8% 12%, rgba(255,99,28,0.12), transparent 40%), radial-gradient(ellipse at 95% 70%, rgba(245,161,108,0.12), transparent 36%)',
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF631C]/25 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FF631C]">
            <span className="h-2 w-2 rounded-full bg-[#FF631C]" />
            About ZestBotz Solutions
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[58px]">
            {company.positioning}.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            {company.tagline} We are an early-stage technology solutions venture founded by Anil Kumar M., focused on practical automation, data engineering, business intelligence, healthcare analytics, and custom software.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/10 hover:bg-[#e05010] transition"
            >
              Explore Our Services
              <ArrowIcon />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#0B0B0D] hover:border-[#FF631C] hover:text-[#FF631C] transition"
            >
              Get in Touch
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* THREE CENTRAL PROMISES */}
      <section className="border-y border-black/[0.06] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <SectionLabel>Our Philosophy</SectionLabel>
            <h2 className="text-3xl font-semibold sm:text-4xl text-[#0B0B0D]">
              Three commitments guiding every solution.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {company.promises.map((p, idx) => (
              <div
                key={p.title}
                className="rounded-2xl border border-black/[0.08] bg-[#FAFAFA] p-7 transition hover:border-[#FF631C]/30 hover:bg-white"
              >
                <span className="text-xs font-bold text-[#FF631C]">0{idx + 1}</span>
                <h3 className="mt-3 text-2xl font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER SPOTLIGHT */}
      <section className="bg-[#F9F9FA] py-20 sm:py-24 border-b border-black/[0.06]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div>
              <SectionLabel>Leadership & Vision</SectionLabel>
              <h2 className="text-3xl font-semibold sm:text-4xl text-[#0B0B0D]">
                Meet the Founder: Anil Kumar M.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                ZestBotz was founded by Anil Kumar M. with a straightforward conviction: most businesses do not need complex, fragile AI hype—they need dependable automation and clean data architectures that solve real operational headaches.
              </p>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                By bridging modern AI capabilities with everyday business operations, ZestBotz engineers solutions that work hand-in-hand with human teams, ensuring full transparency, verification, and deterministic control.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={company.social.find((s) => s.name === 'LinkedIn')?.href || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-5 py-2.5 text-xs font-semibold text-gray-800 hover:border-[#FF631C] hover:text-[#FF631C] transition"
                >
                  Connect on LinkedIn
                  <ArrowIcon className="h-3.5 w-3.5" />
                </a>
                <Link
                  to="/book-a-call"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0B0B0D] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#FF631C] transition"
                >
                  Schedule Discovery Call
                  <ArrowIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-black/[0.08] bg-white p-7 sm:p-9 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 border-b border-black/[0.06] pb-3">
                Founding Principles & Venture Overview
              </h3>
              <dl className="mt-5 space-y-4 text-xs sm:text-sm">
                <div className="flex justify-between py-2 border-b border-black/[0.04]">
                  <dt className="text-gray-500 font-medium">Founder</dt>
                  <dd className="font-semibold text-gray-900">{company.founder}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-black/[0.04]">
                  <dt className="text-gray-500 font-medium">Positioning</dt>
                  <dd className="font-semibold text-gray-900 text-right">{company.positioning}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-black/[0.04]">
                  <dt className="text-gray-500 font-medium">Founded</dt>
                  <dd className="font-semibold text-gray-900">{company.founded}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-black/[0.04]">
                  <dt className="text-gray-500 font-medium">Headquarters</dt>
                  <dd className="font-semibold text-gray-900">{company.locationFull}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-black/[0.04]">
                  <dt className="text-gray-500 font-medium">Work Style</dt>
                  <dd className="font-semibold text-gray-900">{company.workStyle}</dd>
                </div>
                <div className="flex justify-between py-2">
                  <dt className="text-gray-500 font-medium">Core Focus</dt>
                  <dd className="font-semibold text-[#FF631C] text-right">Practical Automation & Data</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Mission */}
            <div className="rounded-3xl border border-black/[0.08] bg-[#FAFAFA] p-8 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF631C]">
                Our Mission
              </span>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl text-gray-900">
                Simplifying operations. Powering better decisions.
              </h3>
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                {company.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-3xl border border-black/[0.08] bg-[#0B0B0D] p-8 sm:p-10 text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF631C]">
                Our Vision
              </span>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl text-white">
                Accessible intelligence for modern businesses.
              </h3>
              <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                {company.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-[#F9F9FA] py-20 sm:py-24 border-t border-black/[0.06]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <SectionLabel>Core Values</SectionLabel>
            <h2 className="text-3xl font-semibold sm:text-4xl text-[#0B0B0D]">
              How we work with our partners.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Our culture and technical standards are anchored in five non-negotiable principles.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {company.coreValues.map((val, idx) => (
              <div
                key={val.title}
                className="rounded-2xl border border-black/[0.07] bg-white p-6 shadow-sm hover:border-[#FF631C]/30 transition"
              >
                <span className="text-xs font-bold text-[#FF631C]">0{idx + 1}</span>
                <h3 className="mt-3 text-xl font-semibold text-gray-900">{val.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div
          className="mx-auto max-w-7xl rounded-3xl bg-[#0B0B0D] p-8 sm:p-14 lg:p-16 text-white relative overflow-hidden"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 5% 10%, rgba(255,99,28,0.25), transparent 35%), radial-gradient(ellipse at 95% 90%, rgba(245,161,108,0.12), transparent 36%)',
          }}
        >
          <div className="max-w-2xl">
            <SectionLabel>Start a Partnership</SectionLabel>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl lg:text-[44px] leading-tight">
              Work with a technology partner that values operational substance.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              Let's discuss how practical automation, data pipelines, and custom software can simplify your operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book-a-call"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#e05010] transition"
              >
                Book Discovery Call
                <ArrowIcon />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:border-[#FF631C] hover:text-[#FF631C] transition"
              >
                Send an Enquiry
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
