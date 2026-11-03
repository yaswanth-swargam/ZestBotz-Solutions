import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { servicesList, targetIndustries, productList, company, trustedCompanies } from '../data/company.js'
import { FAQSection } from '../components/FAQSection'

function TrustedBySection() {
  const companies = [
    {
      name: 'Ktrips',
      category: 'Travel & Mobility Solutions',
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
    },
    {
      name: 'Happy Air Travels',
      category: 'Aviation & Global Ticketing',
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
        </svg>
      ),
    },
    {
      name: 'Rapid Group',
      category: 'Logistics & Industrial Services',
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      name: 'Raman Schools',
      category: 'Education & Institutional Ops',
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      name: 'Revantage',
      category: 'Enterprise Growth & Analytics',
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 2 7l10 5 10-5-10-5Z" />
          <path d="m2 17 10 5 10-5" />
          <path d="m2 12 10 5 10-5" />
        </svg>
      ),
    },
  ]

  return (
    <section className="border-y border-black/[0.06] dark:border-white/10 bg-[#FAFAFC] dark:bg-[#0D0D11] py-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#FF631C]">
            Trusted by Industry Leaders
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl text-[#0B0B0D] dark:text-white">
            Trusted by forward-thinking companies & institutions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Powering intelligent automation, seamless data integration, and high-impact operations across industries.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {companies.map((co) => (
            <div
              key={co.name}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-black/[0.06] dark:border-white/10 bg-white dark:bg-[#141418] p-6 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#FF631C]/40 hover:shadow-lg hover:shadow-orange-500/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF631C]/10 text-[#FF631C] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FF631C] group-hover:text-white">
                {co.icon}
              </div>
              <h3 className="mt-4 text-base font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-[#FF631C] transition-colors">
                {co.name}
              </h3>
              <p className="mt-1 text-[11.5px] font-medium text-gray-500 dark:text-gray-400">
                {co.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

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

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 text-[#FF631C] shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
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

function HeroWorkflowVisual() {
  const steps = [
    { number: '01', title: 'Automate Work', desc: 'Python scripts & intelligent agents eliminating repetitive tasks' },
    { number: '02', title: 'Connect Data', desc: 'Normalized ETL pipelines & validated multi-system staging' },
    { number: '03', title: 'Improve Decisions', desc: 'Validated Power BI dashboards & operational exception alerts' },
  ]

  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="absolute inset-8 rounded-full bg-[#FF631C]/15 blur-3xl" />

      <div className="relative rounded-[28px] border border-black/[0.08] dark:border-white/10 bg-white/90 dark:bg-[#141417] p-6 sm:p-8 shadow-[0_25px_80px_rgba(11,11,13,0.08)] backdrop-blur">
        <div className="flex items-start justify-between border-b border-black/[0.06] pb-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FF631C]">
              Operational Framework
            </p>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[#0B0B0D] dark:text-white">
              Practical Engineering
            </h3>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Bridging AI Capabilities with Business Operations
            </p>
          </div>

          <span className="rounded-full border border-[#FF631C]/30 bg-[#FF631C]/10 px-3 py-1 text-[11px] font-semibold text-[#FF631C]">
            Verified Model
          </span>
        </div>

        <div className="my-6 space-y-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-3.5 rounded-2xl border border-black/[0.06] dark:border-white/10 bg-[#FAFAFA] dark:bg-[#18181D] p-4 transition hover:border-[#FF631C]/40 hover:bg-white dark:hover:bg-[#1E1E24]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FF631C]/10 text-xs font-bold text-[#FF631C]">
                {step.number}
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{step.title}</p>
                <p className="mt-0.5 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="rounded-xl bg-[#0B0B0D] p-3.5 text-white">
            <p className="text-[11px] text-gray-400">Positioning</p>
            <p className="mt-1 text-xs font-semibold">Practical Technology Partner</p>
          </div>
          <div className="rounded-xl border border-black/[0.07] dark:border-white/10 bg-gray-50 dark:bg-[#18181D] p-3.5">
            <p className="text-[11px] text-gray-500">Core Approach</p>
            <p className="mt-1 text-xs font-semibold text-gray-900 dark:text-white">Deterministic & Validated</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Home() {
  useEffect(() => {
    document.title = 'ZestBotz | Bridging AI Capabilities with Business Operations'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="overflow-hidden bg-white dark:bg-[#0B0B0D] text-[#0B0B0D] dark:text-gray-100">
      {/* 1. HERO SECTION */}
      <section
        className="relative overflow-hidden px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
        style={{
          background:
            'radial-gradient(ellipse at 8% 12%, rgba(255,99,28,0.14), transparent 38%), radial-gradient(ellipse at 95% 70%, rgba(245,161,108,0.12), transparent 35%)',
        }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FF631C]/25 bg-white/85 dark:bg-white/10 dark:border-[#FF631C]/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FF631C]">
              <span className="h-2 w-2 rounded-full bg-[#FF631C]" />
              {company.positioning}
            </div>

            <h1 className="max-w-3xl text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[60px] text-[#0B0B0D] dark:text-white">
              Transforming workflows with{' '}
              <span className="text-[#FF631C]">AI-driven automation</span> and
              analytics.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg">
              We design and implement practical technology solutions that eliminate repetitive operational work, connect fragmented data systems, and deliver actionable business analytics.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Link
                to="/book-a-call"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-[#e05010]"
              >
                Schedule a Discovery Call
                <ArrowIcon className="h-4 w-4" />
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 dark:border-white/20 bg-white/80 dark:bg-white/5 px-6 py-3.5 text-sm font-semibold text-gray-800 dark:text-white transition hover:border-[#FF631C] hover:text-[#FF631C]"
              >
                Explore Services
                <ArrowIcon className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
              <span className="inline-flex items-center gap-2">
                <CheckIcon />
                Automating Manual Work
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckIcon />
                Connecting Fragmented Data
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckIcon />
                Improving Decisions
              </span>
            </div>
          </div>

          <HeroWorkflowVisual />
        </div>
      </section>

      {/* TRUSTED BY COMPANIES */}
      <TrustedBySection />

      {/* 2. THREE CENTRAL PROMISES */}
      <section className="border-y border-black/[0.06] dark:border-white/10 bg-white dark:bg-[#0B0B0D] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <SectionLabel>Our Core Value Proposition</SectionLabel>
            <h2 className="text-3xl font-semibold sm:text-4xl text-[#0B0B0D] dark:text-white">
              Three clear promises for your operations.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              We communicate ZestBotz as a practical technology partner that understands business workflows, rather than a generic AI agency or software development shop.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {company.promises.map((p, idx) => (
              <div
                key={p.title}
                className="relative rounded-2xl border border-black/[0.08] dark:border-white/10 bg-[#FAFAFA] dark:bg-[#141417] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#FF631C]/40 hover:bg-white dark:hover:bg-[#1A1A20] hover:shadow-lg"
              >
                <span className="text-xs font-bold text-[#FF631C]">PROMISE 0{idx + 1}</span>
                <h3 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EIGHT CORE SERVICES */}
      <section id="services" className="scroll-mt-24 bg-[#F9F9FA] dark:bg-[#0E0E11] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionLabel>Comprehensive Services</SectionLabel>
              <h2 className="text-3xl font-semibold sm:text-4xl text-[#0B0B0D] dark:text-white">
                Eight practical service offerings.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Engineered with deterministic validation layers, exception handling, and human-in-the-loop checkpoints.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 dark:border-white/20 bg-white dark:bg-white/5 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:border-[#FF631C] hover:text-[#FF631C] transition"
            >
              <span>View All Detailed Services</span>
              <ArrowIcon />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicesList.map((service) => (
              <article
                key={service.id}
                className="group flex flex-col justify-between rounded-2xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-[#141417] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#FF631C]/50 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/10">
                    <span className="text-xs font-bold text-[#FF631C]">{service.number}</span>
                    <span className="text-[11px] font-semibold text-gray-400">{service.shortTitle}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-[#FF631C] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-gray-100 dark:bg-white/10 px-2 py-0.5 text-[10.5px] font-medium text-gray-600 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/10">
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF631C] hover:underline"
                  >
                    <span>Explore Service Scope</span>
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUCT SUITE (Ordered: 1. SchoolOS, 2. ZestHR, 3. ZestRCM) */}
      <section className="bg-white dark:bg-[#0B0B0D] py-20 sm:py-24 border-t border-black/[0.06] dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionLabel>Our Products & Platforms</SectionLabel>
              <h2 className="text-3xl font-semibold sm:text-4xl text-[#0B0B0D] dark:text-white">
                Purpose-built platforms for real-world impact.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Scalable SaaS platforms and operational systems engineered with strict multi-tenant isolation, real-time alerts, and transparent roadmaps.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 dark:border-white/20 bg-white dark:bg-white/5 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:border-[#FF631C] hover:text-[#FF631C] transition"
            >
              <span>Explore All Products</span>
              <ArrowIcon />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {productList.map((prod, idx) => (
              <div
                key={prod.id}
                className="flex flex-col justify-between rounded-2xl border border-black/[0.08] dark:border-white/10 bg-[#FAFAFA] dark:bg-[#141417] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#FF631C]/40 hover:bg-white dark:hover:bg-[#1A1A20] hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/10">
                    <span className="text-xs font-bold text-[#FF631C]">0{idx + 1}</span>
                    <span className="rounded-full bg-white dark:bg-white/10 border border-black/10 px-2.5 py-0.5 text-[11px] font-semibold text-gray-700 dark:text-gray-200">
                      {prod.statusBadge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">{prod.name}</h3>
                  <p className="mt-1 text-xs font-semibold text-[#FF631C]">{prod.category}</p>
                  <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{prod.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/10">
                  <Link
                    to={prod.route}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF631C] hover:underline"
                  >
                    <span>View Product Details</span>
                    <ArrowIcon className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TARGET INDUSTRIES */}
      <section className="bg-[#F9F9FA] dark:bg-[#0E0E11] py-20 sm:py-24 border-t border-black/[0.06] dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <SectionLabel>Target Industries</SectionLabel>
            <h2 className="text-3xl font-semibold sm:text-4xl text-[#0B0B0D] dark:text-white">
              Built for industry-specific operational realities.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              We focus on solving genuine operational friction for healthcare providers, SMBs, sales teams, logistics, and tech ventures.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {targetIndustries.map((ind) => (
              <div
                key={ind.id}
                className="rounded-2xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-[#141417] p-6 sm:p-7 transition hover:border-[#FF631C]/40 hover:shadow-md"
              >
                <span className="text-xs font-bold text-[#FF631C]">{ind.number}</span>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">{ind.name}</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{ind.summary}</p>
                <div className="mt-4 border-t border-black/[0.06] dark:border-white/10 pt-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">Key Solutions:</p>
                  <ul className="mt-1.5 space-y-1">
                    {ind.solutions.slice(0, 2).map((s) => (
                      <li key={s} className="text-xs text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-[#FF631C]" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 dark:border-white/20 bg-white dark:bg-white/5 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:border-[#FF631C] hover:text-[#FF631C] transition"
            >
              View All Target Industry Profiles
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. STRUCTURED 5-PHASE DELIVERY PROCESS */}
      <section className="bg-white dark:bg-[#0B0B0D] py-20 sm:py-24 border-t border-black/[0.06] dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <SectionLabel>Structured Delivery Process</SectionLabel>
              <h2 className="text-3xl font-semibold sm:text-4xl text-[#0B0B0D] dark:text-white leading-tight">
                A 5-phase delivery model built for predictability.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Every project is structured to minimize client risk, ensure technical validation against real edge cases, and deliver documented, maintainable assets.
              </p>
              <div className="mt-8">
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#e05010] transition"
                >
                  <span>Explore Delivery Methodology</span>
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { number: '01', title: 'Discover', desc: 'Detailed review of operational workflows, technical dependencies, data sources, constraints, and success criteria.' },
                { number: '02', title: 'Design', desc: 'Defining technical architecture, clear project scope, explicit acceptance criteria, and delivery milestones.' },
                { number: '03', title: 'Build and Validate', desc: 'Developing automation, pipeline, or dashboard with comprehensive testing against edge cases and failure states.' },
                { number: '04', title: 'Deploy and Hand Over', desc: 'Releasing into the target environment complete with documentation, execution logs, and handover sessions.' },
                { number: '05', title: 'Support and Improve', desc: 'Ongoing monitoring, pipeline orchestration, maintenance, bug fixes, and continuous workflow enhancements.' },
              ].map((step) => (
                <div
                  key={step.number}
                  className="flex gap-4 rounded-xl border border-black/[0.08] dark:border-white/10 bg-[#FAFAFA] dark:bg-[#141417] p-5 transition hover:border-[#FF631C]/40"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FF631C]/10 text-xs font-bold text-[#FF631C]">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY ZESTBOTZ */}
      <section className="bg-[#F9F9FA] dark:bg-[#0E0E11] py-20 sm:py-24 border-t border-black/[0.06] dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
            <div>
              <SectionLabel>Our Perspective</SectionLabel>
              <h2 className="text-3xl font-semibold sm:text-4xl text-[#0B0B0D] dark:text-white leading-tight">
                The right solution starts with understanding your needs.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                We combine automation, AI, data engineering, and custom software under one engineering discipline so you don't have to manage multiple vendors or fragmented systems.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Business-First Thinking',
                  description:
                    'Begin with your goals, existing processes, and practical requirements rather than prescribing a predetermined tool.',
                },
                {
                  title: 'Connected Capabilities',
                  description:
                    'Consider automation, data, AI, and software together when the problem calls for an integrated end-to-end architecture.',
                },
                {
                  title: 'Purposeful Technology',
                  description:
                    'Choose technologies based on their relevance and measurable business outcomes rather than ephemeral industry hype.',
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-[#141417] p-5 sm:p-6 transition hover:border-[#FF631C]/30"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FF631C]/10 text-xs font-bold text-[#FF631C]">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <FAQSection id="faq" />

      {/* 9. FINAL CALL TO ACTION */}
      <section className="bg-white dark:bg-[#0B0B0D] py-16 sm:py-20 lg:py-24 border-t border-black/[0.06] dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div
            className="rounded-[2.2rem] bg-[#0B0B0D] p-8 sm:p-14 lg:p-16 text-white relative overflow-hidden text-center"
            style={{
              backgroundImage:
                'radial-gradient(ellipse at 50% 15%, rgba(255,99,28,0.25), transparent 50%), radial-gradient(ellipse at 50% 85%, rgba(245,161,108,0.12), transparent 50%)',
            }}
          >
            <div className="mx-auto max-w-3xl flex flex-col items-center">
              <SectionLabel>Let's Collaborate</SectionLabel>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl lg:text-[46px] leading-tight">
                Have a workflow to automate or data to connect?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
                Tell us about your business challenge. We evaluate feasibility and design practical solutions that simplify your daily operations.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/book-a-call"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 hover:bg-[#e05010] transition"
                >
                  Book a Discovery Call
                  <ArrowIcon />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:border-[#FF631C] hover:text-[#FF631C] transition"
                >
                  Send Us a Message
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
