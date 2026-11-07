import { useEffect } from 'react'
import { Link } from 'react-router-dom'

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
      className="h-4 w-4 text-[#FF631C] shrink-0 mt-0.5"
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

export function WebScrapingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const capabilities = [
    {
      title: 'Authorized & Public Web Extraction',
      desc: 'Extracting data strictly from publicly accessible online directories, authorized partner portals, and transparent public sources in compliance with access controls.',
    },
    {
      title: 'Directory & Market Intelligence',
      desc: 'Systematic collection of company registries, professional directories, vendor catalogs, and market indicators.',
    },
    {
      title: 'Data Cleaning & Deduplication',
      desc: 'Automated post-processing pipelines that cleanse unformatted text, strip invalid characters, resolve duplicate records, and standardize schemas.',
    },
    {
      title: 'Normalization & Entity Resolution',
      desc: 'Unifying disparate address formats, phone number prefixes, industry codes, and currency fields into normalized data models.',
    },
    {
      title: 'Scheduled & Incremental Collection',
      desc: 'Configuring cron-triggered scraping pipelines that capture newly added or modified records without redundantly re-scraping historical pages.',
    },
    {
      title: 'Structured Output Delivery',
      desc: 'Delivering final datasets directly into PostgreSQL databases, AWS S3/Azure Blob storage, Google Sheets, or clean CSV/JSON/Parquet files.',
    },
  ]

  const useCases = [
    {
      title: 'B2B Prospect Research & Enrichment',
      desc: 'Compiling verified public company lists from industry directories, standardizing firmographic fields, and staging data for CRM imports.',
    },
    {
      title: 'Product & Pricing Market Tracking',
      desc: 'Tracking public catalog pricing, stock availability, and specification changes across authorized distributor websites.',
    },
    {
      title: 'Real Estate & Logistics Directory Aggregation',
      desc: 'Consolidating public property listings, warehouse locations, and municipal development notices into centralized research tables.',
    },
    {
      title: 'Job Market & Skill Demand Intelligence',
      desc: 'Aggregating public career board postings to track hiring trends, salary ranges, and evolving skill demands across industries.',
    },
  ]

  const deliverables = [
    'Clean, normalized dataset in CSV, JSON, Parquet, or SQL database format',
    'Custom Python crawler codebase with polite crawl delays and rate limiting',
    'Automated data validation and deduplication scripts',
    'Configured schedule for recurring or incremental data extraction',
    'Data dictionary defining all extracted schema fields and types',
    'Compliance and access assessment checklist',
  ]

  const technologies = [
    'Python',
    'Scrapy Framework',
    'BeautifulSoup4 & lxml',
    'Requests & HTTPX',
    'Selenium / Playwright (for dynamic rendering)',
    'Pandas',
    'PostgreSQL & SQLite',
  ]

  return (
    <main className="min-h-screen bg-white text-[#0B0B0D]">
      {/* Hero */}
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
            Service 03 · Data Extraction
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[56px]">
            Web Scraping and Business{' '}
            <span className="text-[#FF631C]">Data Extraction.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Turn fragmented public web sources and authorized directories into structured, normalized, and analysis-ready datasets. We build respectful, compliant crawlers designed for data integrity.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/book-a-call?service=Web%20Scraping%20%26%20Data%20Solutions"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/10 hover:bg-[#e05010] transition"
            >
              Discuss Data Extraction Needs
              <ArrowIcon />
            </Link>
            <Link
              to="/contact?interest=Web%20Scraping%20%26%20Data%20Solutions"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#0B0B0D] hover:border-[#FF631C] hover:text-[#FF631C] transition"
            >
              Submit Target Data Scope
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* 1. The Business Problem */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 bg-white border-b border-black/[0.06]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF631C]">
                01 · The Business Problem
              </p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl text-[#0B0B0D]">
                Valuable market information is trapped across HTML pages.
              </h2>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>
                Decision-makers, sales teams, and analysts frequently need data that lives scattered across public directories, supplier portals, and public regulatory registers. Manually browsing hundreds of pages to copy records into spreadsheets is slow, incomplete, and impossible to scale.
              </p>
              <p>
                Generic low-code scraping browser plugins frequently break on pagination, block requests due to aggressive concurrency, or dump messy, unvalidated data full of missing fields and duplicate entries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Proposed Solution */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 bg-[#F9F9FA]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF631C]">
              02 · The Solution
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Engineered data extraction with ethical compliance.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              We engineer custom Python crawlers utilizing Scrapy and BeautifulSoup that observe rate limits, handle session state, parse complex DOM trees, and run data through strict cleaning pipelines before delivering normalized tables to your data warehouse or spreadsheet.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="rounded-2xl border border-black/[0.07] bg-white p-6 shadow-sm hover:border-[#FF631C]/30 transition"
              >
                <span className="text-xs font-bold text-[#FF631C]">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{cap.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Practical Use Cases */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF631C]">
              03 · Practical Use Cases
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Real-world business data extraction scenarios.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {useCases.map((uc) => (
              <div key={uc.title} className="rounded-2xl border border-black/[0.08] bg-[#FAFAFA] p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-gray-900">{uc.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 & 5. Deliverables & Expected Benefits */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 bg-[#F9F9FA] border-t border-black/[0.06]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF631C]">
                04 · Capabilities & Deliverables
              </p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                What you receive upon project completion.
              </h2>
              <ul className="mt-6 space-y-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF631C]">
                05 · Realistic Benefits
              </p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                Practical advantages of custom extraction.
              </h2>
              <div className="mt-6 space-y-4 text-sm text-gray-600 leading-relaxed">
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Analysis-ready, structured output</p>
                  <p className="mt-1 text-xs text-gray-600">Zero time spent manually standardizing phone formats, removing HTML entities, or splitting names.</p>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Responsible, compliant collection</p>
                  <p className="mt-1 text-xs text-gray-600">We verify terms of service, robots.txt, and access constraints, utilizing respectful request rates.</p>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Scheduled refresh pipelines</p>
                  <p className="mt-1 text-xs text-gray-600">Never work with stale spreadsheets; receive fresh updates automatically on your required schedule.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Relevant Technologies */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 bg-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF631C]">
            06 · Verified Scraping Stack
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Production-grade data extraction technologies.
          </h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {technologies.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-black/[0.08] bg-gray-50 px-3.5 py-2 text-xs font-medium text-gray-800"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Implementation Approach */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 bg-[#F9F9FA] border-t border-black/[0.06]">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF631C]">
            07 · Implementation Roadmap
          </p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
            Compliance-first extraction lifecycle.
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: 'Phase 1', title: 'Target Feasibility & Ethics', desc: 'Evaluating robots.txt, terms of service, DOM layout, and rate limit requirements.' },
              { step: 'Phase 2', title: 'Parser & Schema Build', desc: 'Constructing robust XPath/CSS selectors with fallback mechanisms for layout variations.' },
              { step: 'Phase 3', title: 'Transformation Pipeline', desc: 'Implementing regex cleaning, deduplication, type casting, and schema validation.' },
              { step: 'Phase 4', title: 'Automated Export Staging', desc: 'Exporting directly into your database, S3 bucket, or configured recurring file drop.' },
            ].map((p) => (
              <div key={p.step} className="rounded-2xl border border-black/[0.08] bg-white p-6">
                <span className="text-xs font-bold text-[#FF631C]">{p.step}</span>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div
          className="mx-auto max-w-7xl rounded-3xl bg-[#0B0B0D] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 5% 10%, rgba(255,99,28,0.25), transparent 35%), radial-gradient(ellipse at 95% 90%, rgba(245,161,108,0.12), transparent 36%)',
          }}
        >
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF631C]">
              08 · Start Your Data Project
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Have a directory or public dataset you need extracted?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              Share the target website and required data points. We will assess technical feasibility, structure a sample extraction, and propose an efficient pipeline.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book-a-call?service=Web%20Scraping%20%26%20Data%20Solutions"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#e05010] transition"
              >
                Schedule Technical Review
                <ArrowIcon />
              </Link>
              <Link
                to="/contact?interest=Web%20Scraping%20%26%20Data%20Solutions"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:border-[#FF631C] hover:text-[#FF631C] transition"
              >
                Submit Project Details
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default WebScrapingPage
