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

export function ProcessWorkflowAutomationPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const capabilities = [
    {
      title: 'Python Scripting & Task Scheduling',
      desc: 'Robust standalone scripts and scheduled cron jobs executing repeatable processes on precise schedules without manual intervention.',
    },
    {
      title: 'Excel, CSV & PDF File Automation',
      desc: 'Programmatic parsing, cleaning, merging, and transformation of spreadsheets and tabular PDFs with complete column mapping and data verification.',
    },
    {
      title: 'Permitted Browser & Web Automation',
      desc: 'Headless or visible browser automation for web portals, vendor login sessions, form filling, and repetitive report downloads.',
    },
    {
      title: 'Desktop UI Automation (RPA)',
      desc: 'Automating legacy desktop software, ERP clients, and on-premises tools using controlled OS-level interactions.',
    },
    {
      title: 'Two-Way Data Reconciliation',
      desc: 'Comparing financial, inventory, or operational datasets across systems, highlighting unmatched records, duplicates, and variance thresholds.',
    },
    {
      title: 'Logging, Retries & Error Reporting',
      desc: 'Comprehensive execution logging with automatic retry policies for transient network drops and immediate email/webhook alerts on failures.',
    },
  ]

  const useCases = [
    {
      title: 'Daily Bank & Statement Reconciliation',
      desc: 'Downloading daily bank transactions, cross-referencing against internal ERP invoices, and generating discrepancy reports for finance teams.',
    },
    {
      title: 'Multi-Portal Order & Inventory Sync',
      desc: 'Updating product stock levels and pulling pending order manifests across e-commerce portals and proprietary warehouse systems.',
    },
    {
      title: 'Billing & Data Entry Workflows',
      desc: 'Extracting data from structured customer submissions and keying them into billing systems with input validation checks.',
    },
    {
      title: 'Scheduled Regulatory & Operational Exports',
      desc: 'Compiling weekly operational logs from databases, formatting into compliance spreadsheets, and delivering via SFTP/email.',
    },
  ]

  const deliverables = [
    'Clean, commented, version-controlled Python automation codebase',
    'Configured task scheduling (Cron / Windows Task Scheduler / Prefect)',
    'Detailed execution log files with timestamped operational steps',
    'Automated exception reporting via Email, Webhook, or Slack',
    'Data validation schemas guarding against corrupted inputs',
    'Comprehensive deployment and maintenance guide',
  ]

  const technologies = [
    'Python 3.x',
    'Pandas & NumPy',
    'OpenPyXL & XlsxWriter',
    'Selenium WebDriver',
    'PyAutoGUI & pywinauto',
    'Playwright',
    'Prefect & Cron',
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
            Service 02 · Scripting & RPA
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[56px]">
            Python and RPA <span className="text-[#FF631C]">Automation.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Eliminate repetitive manual tasks through dependable Python scripts, permitted browser automation, and desktop robotic process automation. Built with structured error handling, retries, and complete operational transparency.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/book-a-call?service=Process%20%26%20Workflow%20Automation"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/10 hover:bg-[#e05010] transition"
            >
              Discuss RPA Automation
              <ArrowIcon />
            </Link>
            <Link
              to="/contact?interest=Process%20%26%20Workflow%20Automation"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#0B0B0D] hover:border-[#FF631C] hover:text-[#FF631C] transition"
            >
              Request Automation Review
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
                High-friction manual tasks consume staff hours and introduce errors.
              </h2>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>
                In almost every business, critical processes still rely on manual data entry: an employee downloads a CSV from a vendor portal, copies rows into an internal Excel sheet, formats dates, checks for mismatches, and types values into another legacy software system.
              </p>
              <p>
                This manual cycle is tedious, expensive, and inevitably prone to typos, missed runs, and operational delays. Off-the-shelf heavyweight enterprise RPA platforms often impose restrictive annual licenses and complex infrastructure that small-to-medium teams do not need.
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
              Clean Python scripts and targeted desktop automation.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              We build lean, customized Python automations that operate directly on your data structures and interfaces. You retain full source code ownership without vendor lock-in. Every automation includes validation gates, retry mechanisms, and transparent execution logs.
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
              Repeatable workflows ready for automation.
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
                Expected operational gains.
              </h2>
              <div className="mt-6 space-y-4 text-sm text-gray-600 leading-relaxed">
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Drastic reduction in manual re-entry errors</p>
                  <p className="mt-1 text-xs text-gray-600">Deterministic code eliminates transposition errors, copy-paste truncation, and accidental formula overwrites.</p>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Predictable, timely execution</p>
                  <p className="mt-1 text-xs text-gray-600">Workflows run punctually at scheduled times—overnight, early mornings, or in response to file drops.</p>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Zero recurring proprietary RPA seat licenses</p>
                  <p className="mt-1 text-xs text-gray-600">Built entirely with open, industry-standard Python tooling that your internal IT team can own and maintain.</p>
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
            Robust Python ecosystem technologies.
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
            Step-by-step automation engineering.
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: 'Phase 1', title: 'Task Walkthrough', desc: 'Screen recording and step-by-step documentation of inputs, selectors, and edge cases.' },
              { step: 'Phase 2', title: 'Script Development', desc: 'Writing modular Python code with robust selectors, type checks, and validation rules.' },
              { step: 'Phase 3', title: 'Testing & Retries', desc: 'Simulating network timeouts, empty files, and format shifts with automated alerts.' },
              { step: 'Phase 4', title: 'Scheduled Deployment', desc: 'Production deployment to your server or cloud runner with logging active.' },
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
              08 · Automate Your Repetitive Tasks
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Have an Excel, CSV, or browser routine you want to automate?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              Walk us through the steps that take up your team's time. We will demonstrate how a Python script can handle it reliably.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book-a-call?service=Process%20%26%20Workflow%20Automation"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#e05010] transition"
              >
                Book Discovery Call
                <ArrowIcon />
              </Link>
              <Link
                to="/contact?interest=Process%20%26%20Workflow%20Automation"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:border-[#FF631C] hover:text-[#FF631C] transition"
              >
                Send Us Process Details
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProcessWorkflowAutomationPage
