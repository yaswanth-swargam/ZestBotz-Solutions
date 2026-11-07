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

export function HealthCarePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const capabilities = [
    {
      title: 'Claims, Payment & Adjustment Reporting',
      desc: 'Aggregating billing files and payment remittances into structured reporting tables to track billed amounts, contractual adjustments, and net collections.',
    },
    {
      title: 'Denial Analysis & Categorization',
      desc: 'Classifying claim rejections and denials by CARC/RARC codes, payer groups, and billing provider to support prioritized appeal workflows.',
    },
    {
      title: 'RCM KPI Dashboards',
      desc: 'Providing billing managers with operational visibility into Days in AR, Clean Claim Rates, Net Collection Ratios, and initial denial percentages.',
    },
    {
      title: 'Payment & Revenue Trend Monitoring',
      desc: 'Visualizing month-over-month reimbursement velocity, payer mix shifts, and underpayment patterns across clinical specialties.',
    },
    {
      title: 'Missing-Data & Formatting Alerts',
      desc: 'Pre-submission validation rules scanning billing records for missing modifier codes, invalid NPI numbers, or blank policy IDs.',
    },
    {
      title: 'Authorized Ingestion & Reconciliation',
      desc: 'Securely staging de-identified billing extracts and electronic remittance advice (ERA 835) data with complete financial ledger reconciliation.',
    },
  ]

  const useCases = [
    {
      title: 'Medical Billing Company Operational Overview',
      desc: 'Enabling third-party medical billing agencies to track collection metrics and outstanding aging buckets across dozens of client practices in one unified console.',
    },
    {
      title: 'Payer Denial Root-Cause Remediation',
      desc: 'Isolating recurring authorization, timely filing, and medical necessity denials from specific commercial payers to address upstream documentation issues.',
    },
    {
      title: 'AR Aging & Follow-Up Prioritization',
      desc: 'Categorizing aging accounts receivable into 0-30, 31-60, 61-90, and 90+ day bands and routing high-dollar unresolved claims to senior billers.',
    },
    {
      title: 'Deposit Reconciliation & Ledger Balancing',
      desc: 'Cross-referencing bank deposit summaries against posted electronic remittance advice (ERA) records to detect unposted or unmatched payments.',
    },
  ]

  const deliverables = [
    'RCM Executive KPI dashboard in Power BI or interactive web dashboard',
    'Denial categorization reporting model with CARC/RARC code mapping',
    'Automated pre-billing missing-data check scripts',
    'Accounts receivable aging bucket distribution and drill-down views',
    'Payment posting and adjustment reconciliation ledger reports',
    'Comprehensive data dictionary covering healthcare revenue calculations',
  ]

  const technologies = [
    'Python & Pandas',
    'SQL (PostgreSQL / SQL Server)',
    'Power BI & DAX Modeling',
    'EDI 835 / 837 Data Parsing Concepts',
    'Recharts & Interactive Frontend Views',
    'De-identification & Masking Frameworks',
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
            Service 06 · Healthcare Analytics
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[56px]">
            Healthcare Analytics and Revenue Cycle{' '}
            <span className="text-[#FF631C]">Management (RCM).</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Operational visibility for healthcare billing and revenue operations. We engineer claims analytics, denial reporting models, AR tracking, and automated reconciliation using strictly authorized, de-identified datasets.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/book-a-call?service=Healthcare%20RCM"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/10 hover:bg-[#e05010] transition"
            >
              Discuss RCM Analytics Needs
              <ArrowIcon />
            </Link>
            <Link
              to="/products/zestRCM"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#0B0B0D] hover:border-[#FF631C] hover:text-[#FF631C] transition"
            >
              View ZestRCM Prototype
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
                Complex payer rules and fragmented billing files delay reimbursement.
              </h2>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>
                Healthcare providers and medical billing companies navigate thousands of changing payer guidelines, complex fee schedules, and confusing denial remark codes. When claims are rejected or underpaid, billing teams struggle to quickly pinpoint the underlying cause.
              </p>
              <p>
                Without unified analytical reporting, aging receivables grow unchecked in 90+ day buckets, revenue leaks through unposted adjustments, and leadership lacks clear visibility into collection performance across payers and clinics.
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
              Validated RCM analytics and automated denial classification.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              We structure your billing and remittance data into purpose-built analytics models. Teams gain immediate visibility into denial root causes, payment trends, and high-priority accounts receivable—operating exclusively with authorized, masked, and privacy-compliant data pipelines.
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
              Real-world healthcare revenue cycle workflows.
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
                Measurable revenue cycle improvements.
              </h2>
              <div className="mt-6 space-y-4 text-sm text-gray-600 leading-relaxed">
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Faster identification of recurring denial trends</p>
                  <p className="mt-1 text-xs text-gray-600">Spot systemic billing issues (e.g. missing modifiers or prior-auth discrepancies) before hundreds of claims are rejected.</p>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Focused, prioritized follow-up lists</p>
                  <p className="mt-1 text-xs text-gray-600">Give collectors actionable worklists prioritized by balance size, filing deadline, and recovery probability.</p>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Privacy-compliant data handling</p>
                  <p className="mt-1 text-xs text-gray-600">Strict adherence to authorized data handling protocols—never exposing patient names or identifiable clinical notes.</p>
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
            06 · Verified Tooling
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Healthcare data analytics stack.
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
            Step-by-step revenue cycle data integration.
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: 'Phase 1', title: 'Data Audit & Governance', desc: 'Identify input formats (CSV, 835, clearinghouse exports) and verify data authorization.' },
              { step: 'Phase 2', title: 'De-identification & Ingest', desc: 'Implement automated data masking, schema mapping, and secure staging tables.' },
              { step: 'Phase 3', title: 'RCM Metrics & Modeling', desc: 'Calculate net collection rates, denial categories, aging bands, and adjustments.' },
              { step: 'Phase 4', title: 'Dashboard Deployment', desc: 'Deliver interactive dashboards, automated refresh rules, and collector worklist views.' },
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
              08 · Improve Revenue Cycle Visibility
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Looking for clearer reporting on your healthcare claims and denials?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              Contact our team to discuss your clearinghouse reports, billing exports, and analytical goals. We evaluate your data structure and build tailored RCM dashboards.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book-a-call?service=Healthcare%20RCM"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#e05010] transition"
              >
                Book Discovery Consultation
                <ArrowIcon />
              </Link>
              <Link
                to="/contact?interest=ZestRCM%20(Healthcare%20RCM)"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:border-[#FF631C] hover:text-[#FF631C] transition"
              >
                Send Us Project Requirements
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HealthCarePage
