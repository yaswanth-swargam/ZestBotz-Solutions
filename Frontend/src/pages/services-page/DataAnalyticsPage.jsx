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

export function DataAnalyticsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const capabilities = [
    {
      title: 'Operational KPI Definitions',
      desc: 'Collaborating with business leadership to formulate precise, unambiguous metric calculations and measurable performance targets.',
    },
    {
      title: 'Power BI Dashboard Design',
      desc: 'Building responsive, visually clear Power BI reports with intuitive navigation, role-based filters, and purposeful visual hierarchy.',
    },
    {
      title: 'Dimensional Reporting Data Models',
      desc: 'Constructing robust star schemas, calendar tables, and performant DAX measures optimized for rapid aggregation and drill-down analysis.',
    },
    {
      title: 'Drill-Down & Cohort Trend Analysis',
      desc: 'Enabling executives and operational managers to transition seamlessly from high-level summaries down to individual invoice, branch, or SKU lines.',
    },
    {
      title: 'Automated Gateway Refresh & Reports',
      desc: 'Configuring automated on-premises or cloud data gateway refreshes, scheduled PDF/email distributions, and threshold alert triggers.',
    },
    {
      title: 'Reconciliation & Metric Validation',
      desc: 'Executing rigorous data model reconciliation against audited source databases to ensure reports are 100% mathematically verifiable.',
    },
  ]

  const useCases = [
    {
      title: 'Executive Financial & Revenue Dashboards',
      desc: 'Real-time monitoring of gross margins, recurring revenue, department expenditure, and variance against quarterly budgets.',
    },
    {
      title: 'Sales & Conversion Pipeline Intelligence',
      desc: 'Tracking deal stage velocity, win/loss ratios, representative quotas, and cohort customer retention rates across cycles.',
    },
    {
      title: 'Operational Productivity & SLA Tracking',
      desc: 'Visualizing order fulfillment speeds, ticket resolution turnarounds, and technician utilization rates across regional branches.',
    },
    {
      title: 'Supply Chain & Inventory Aging Analytics',
      desc: 'Highlighting slow-moving stock, supplier lead time variability, and fulfillment bottlenecks across warehouse facilities.',
    },
  ]

  const deliverables = [
    'Fully authored Power BI (.pbix) files and published workspaces',
    'Documented DAX measure calculations and business logic definitions',
    'Clean dimensional star-schema data models in Power BI / Analysis Services',
    'Configured scheduled refresh gateways and automated alert rules',
    'Executive and operational user navigation training guide',
    'Source data reconciliation audit sign-off sheet',
  ]

  const technologies = [
    'Microsoft Power BI',
    'DAX (Data Analysis Expressions)',
    'Power Query & M Language',
    'SQL (PostgreSQL / SQL Server)',
    'Python (for advanced exploratory analytics)',
    'Excel Data Models & Power Pivot',
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
            Service 05 · Business Intelligence
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[56px]">
            Business Intelligence and <span className="text-[#FF631C]">Power BI Analytics.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Transform raw operational datasets into clear, validated Power BI dashboards. We engineer performant data models, establish unambiguous KPI definitions, and configure automated refreshes for confident decision-making.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/book-a-call?service=Data%20Analytics"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/10 hover:bg-[#e05010] transition"
            >
              Book a BI Dashboard Review
              <ArrowIcon />
            </Link>
            <Link
              to="/contact?interest=Data%20Analytics"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#0B0B0D] hover:border-[#FF631C] hover:text-[#FF631C] transition"
            >
              Submit Reporting Requirements
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
                Fragmented spreadsheets obscure real-time operational visibility.
              </h2>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>
                Many organizations spend hundreds of hours each month manually updating static spreadsheets, stitching together conflicting exports, and emailing screenshots of charts. By the time leadership receives the report, the numbers are already days or weeks out of date.
              </p>
              <p>
                Moreover, poorly structured dashboards built without dimensional modeling suffer from slow refresh times, confusing DAX formulas, and mismatched metrics between departments, leading to endless arguments over whose spreadsheet is correct.
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
              Engineered reporting data models and validated dashboards.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              We design Power BI solutions grounded in clean dimensional star schemas. We define verified calculation rules with your leadership, automate gateway data refreshes, and create intuitive interactive views with fast drill-down responsiveness.
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
              Actionable dashboards built around real business decisions.
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
                What we build and deliver.
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
                Practical reporting advantages.
              </h2>
              <div className="mt-6 space-y-4 text-sm text-gray-600 leading-relaxed">
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Drastic reduction in manual report compilation</p>
                  <p className="mt-1 text-xs text-gray-600">Free analysts from copying tables into PowerPoint; dashboards refresh on schedule with zero manual intervention.</p>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Consistent, audited KPI definitions</p>
                  <p className="mt-1 text-xs text-gray-600">Every metric is governed by codified DAX measures, ending internal discrepancies over formulas.</p>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Actionable root-cause drill-downs</p>
                  <p className="mt-1 text-xs text-gray-600">Spot a high-level variance and immediately click to investigate which accounts or regions drove the trend.</p>
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
            06 · Verified BI Tooling
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Modern analytics & reporting stack.
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
            From KPI workshop to automated dashboard deployment.
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: 'Phase 1', title: 'KPI Formulation', desc: 'Define metric formulas, granularity levels, filter dimensions, and target personas.' },
              { step: 'Phase 2', title: 'Data Modeling & DAX', desc: 'Construct clean star schemas, write performant measures, and optimize relationships.' },
              { step: 'Phase 3', title: 'UI/UX Visual Design', desc: 'Design intuitive visuals, interactive cards, bookmarks, and mobile-friendly viewports.' },
              { step: 'Phase 4', title: 'Validation & Gateways', desc: 'Reconcile totals against source ledgers and configure automated scheduled refresh.' },
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
              08 · Gain Operational Clarity
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Want dashboards that your leadership can truly rely on?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              Show us your current reporting spreadsheet or source database. We will demonstrate how a structured Power BI data model brings clarity to your operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book-a-call?service=Data%20Analytics"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#e05010] transition"
              >
                Schedule Dashboard Consultation
                <ArrowIcon />
              </Link>
              <Link
                to="/contact?interest=Data%20Analytics"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:border-[#FF631C] hover:text-[#FF631C] transition"
              >
                Share Reporting Goals
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DataAnalyticsPage
