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

function SectionLabel({ children }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#FF631C]">
      {children}
    </p>
  )
}

export function Industries() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const industriesDetailed = [
    {
      number: '01',
      title: 'Healthcare Providers & Revenue Cycle Organizations',
      shortName: 'Healthcare & RCM',
      badge: 'Priority Sector',
      description:
        'Healthcare administration involves high-volume billing records, complex payer rules, and frequent claim denials. We engineer specialized claims reporting models, denial categorization dashboards, and automated remittance reconciliation.',
      challenges: [
        'High administrative overhead verifying coverage and pre-billing formats',
        'Complex denial codes (CARC/RARC) causing revenue leakage and delayed appeals',
        'Aging accounts receivable scattered across clearinghouse reports and EHRs',
      ],
      solutions: [
        { name: 'Healthcare Analytics & RCM Dashboards', href: '/services/healthcare-analytics-rcm' },
        { name: 'Denial Categorization & Root-Cause Models', href: '/products/zestRCM' },
        { name: 'Python Remittance Reconciliation Scripts', href: '/services/python-rpa-automation' },
      ],
    },
    {
      number: '02',
      title: 'Small and Medium-Sized Businesses (SMBs)',
      shortName: 'Small & Medium Business',
      badge: 'Core Focus',
      description:
        'Growing businesses require streamlined operations without the excessive cost or complexity of enterprise platforms. We build accessible Python automations, clean Power BI dashboards, and lightweight custom tools.',
      challenges: [
        'Repetitive copy-pasting across disconnected spreadsheets and software',
        'Lack of real-time visibility into weekly revenue, expenses, and margins',
        'Limited engineering budget for full-time custom software teams',
      ],
      solutions: [
        { name: 'Python & RPA Routine Task Automation', href: '/services/python-rpa-automation' },
        { name: 'Business Intelligence & Power BI Reporting', href: '/services/business-intelligence' },
        { name: 'Custom Internal Web Portals', href: '/services/custom-software-development' },
      ],
    },
    {
      number: '03',
      title: 'Sales, Marketing & Commercial Teams',
      shortName: 'Sales & Marketing',
      badge: 'Market Intelligence',
      description:
        'High-performing sales teams need accurate market intelligence and structured prospect data. We build compliant, scheduled web extraction pipelines that research directories, normalize records, and feed clean leads into CRM databases.',
      challenges: [
        'Time-consuming manual research across public registries and industry portals',
        'Duplicate records, inconsistent company formats, and outdated contact fields',
        'Tracking public competitor pricing and product availability manually',
      ],
      solutions: [
        { name: 'Web Scraping & Business Data Extraction', href: '/services/web-scraping-data-extraction' },
        { name: 'Automated Data Cleansing & Normalization', href: '/services/data-engineering' },
        { name: 'Commercial Pipeline Analytics Dashboards', href: '/services/business-intelligence' },
      ],
    },
    {
      number: '04',
      title: 'Logistics & Supply Chain Operations',
      shortName: 'Logistics & Operations',
      badge: 'Workflow Efficiency',
      description:
        'Logistics operations handle thousands of shipping manifests, bills of lading, and carrier invoices daily. We engineer document extraction workflows and automated file-reconciliation scripts to eliminate tracking delays.',
      challenges: [
        'Manual data transcription from carrier PDFs, manifests, and invoices',
        'Reconciling partner shipment logs with internal warehouse inventory tables',
        'Delayed identification of discrepancies, weight variances, and extra surcharges',
      ],
      solutions: [
        { name: 'Document Processing & Form OCR Pipelines', href: '/services/document-automation' },
        { name: 'Automated Exception Alerts & Discrepancy Checks', href: '/services/python-rpa-automation' },
        { name: 'Data Engineering & Inventory Staging', href: '/services/data-engineering' },
      ],
    },
    {
      number: '05',
      title: 'Technology & Service Companies',
      shortName: 'Technology & Services',
      badge: 'Scale & Architecture',
      description:
        'Fast-growing tech companies and service providers need robust backend data pipelines, custom admin portals, and AI agent capabilities integrated with existing APIs.',
      challenges: [
        'Scaling multi-system data transformation and warehouse synchronization',
        'Need for tailored customer portals, billing panels, or administrative consoles',
        'Safely embedding language models with strict approval gates and execution logs',
      ],
      solutions: [
        { name: 'Data Engineering & dbt/SQL Transformations', href: '/services/data-engineering' },
        { name: 'AI Agents & Intelligent Workflow Automation', href: '/services/ai-automation' },
        { name: 'Full-Stack Custom Web Application Engineering', href: '/services/custom-software-development' },
      ],
    },
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
            Five Focused Customer Sectors
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[58px]">
            Targeted technology for{' '}
            <span className="text-[#FF631C]">real-world industry workflows.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Every sector faces distinct operational friction. We apply automation, data engineering, and custom software where they make direct business sense—prioritizing healthcare RCM, Python automation, authorized data extraction, and reliable data pipelines.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#industries-list"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/10 hover:bg-[#e05010] transition"
            >
              Explore 5 Sectors
              <ArrowIcon />
            </a>
            <Link
              to="/book-a-call"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#0B0B0D] hover:border-[#FF631C] hover:text-[#FF631C] transition"
            >
              Book Industry Consultation
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Detailed List */}
      <section id="industries-list" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 bg-[#F9F9FA]">
        <div className="mx-auto max-w-7xl space-y-12">
          {industriesDetailed.map((ind) => (
            <article
              key={ind.number}
              className="rounded-3xl border border-black/[0.08] bg-white p-7 sm:p-10 lg:p-12 shadow-sm transition hover:border-[#FF631C]/30"
            >
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-[#FF631C] bg-[#FF631C]/10 px-2.5 py-1 rounded-md">
                      SECTOR {ind.number}
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                      {ind.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight">
                    {ind.title}
                  </h2>

                  <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {ind.description}
                  </p>

                  <div className="mt-6">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Common Operational Challenges:
                    </h3>
                    <ul className="mt-2.5 space-y-2">
                      {ind.challenges.map((c) => (
                        <li key={c} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                          <CheckIcon />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border border-black/[0.06] bg-[#FAFAFA] p-6 sm:p-7 flex flex-col justify-between h-full">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF631C]">
                      Targeted Solutions:
                    </h4>
                    <div className="mt-4 space-y-3">
                      {ind.solutions.map((sol) => (
                        <Link
                          key={sol.name}
                          to={sol.href}
                          className="group flex items-center justify-between rounded-xl border border-black/[0.06] bg-white p-3.5 text-xs sm:text-sm font-semibold text-gray-900 hover:border-[#FF631C]/40 hover:text-[#FF631C] transition shadow-xs"
                        >
                          <span>{sol.name}</span>
                          <ArrowIcon className="h-4 w-4 text-gray-400 group-hover:text-[#FF631C] group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/[0.06]">
                    <Link
                      to={`/contact?interest=${encodeURIComponent(ind.shortName)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF631C] hover:underline"
                    >
                      <span>Discuss a project in {ind.shortName} →</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 bg-white">
        <div
          className="mx-auto max-w-7xl rounded-3xl bg-[#0B0B0D] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 5% 10%, rgba(255,99,28,0.25), transparent 35%), radial-gradient(ellipse at 95% 90%, rgba(245,161,108,0.12), transparent 36%)',
          }}
        >
          <div className="max-w-2xl">
            <SectionLabel>Collaborate With Us</SectionLabel>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Don't see your specific sector listed?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
              Our core capabilities—process automation, web data extraction, data engineering, and custom software—apply wherever operational workflows require reliability and structure.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book-a-call"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#e05010] transition"
              >
                Schedule Technical Discovery
                <ArrowIcon />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:border-[#FF631C] hover:text-[#FF631C] transition"
              >
                Contact Our Team
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Industries
