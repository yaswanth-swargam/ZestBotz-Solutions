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

export function DocumentAutomationPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const capabilities = [
    {
      title: 'PDF & Form Field Extraction',
      desc: 'Extracting key-value pairs, nested invoice tables, and handwritten form fields from digital PDFs, scanned images, and customer submissions.',
    },
    {
      title: 'OCR-Assisted Document Workflows',
      desc: 'Combining optical character recognition (OCR) with pre-processing (deskewing, binarization, noise removal) to maximize text recognition accuracy.',
    },
    {
      title: 'Automated Document Classification',
      desc: 'Identifying and segregating incoming attachments—such as distinguishing invoices from receipts, tax forms, or contracts—with automated tagging.',
    },
    {
      title: 'Data Validation & Mathematical Reconciliation',
      desc: 'Enforcing verification rules (e.g. verifying that item quantities multiplied by unit prices equal line totals, and match tax and grand totals).',
    },
    {
      title: 'Intelligent Routing & Database Staging',
      desc: 'Routing approved document payloads directly into target databases, accounting software, or ERP systems via automated APIs.',
    },
    {
      title: 'Exception Reporting & Human Review Queues',
      desc: 'Highlighting ambiguous fields, unreadable text, or calculation discrepancies in a dedicated human-in-the-loop review interface.',
    },
  ]

  const useCases = [
    {
      title: 'Vendor Invoice & Receipt Processing',
      desc: 'Ingesting multi-format supplier invoices, extracting line items, dates, and tax IDs, and staging structured records for accounts payable approval.',
    },
    {
      title: 'Customer Onboarding & KYC Documentation',
      desc: 'Extracting identity information from submitted application forms and verifying completeness before triggering compliance workflows.',
    },
    {
      title: 'Shipping Manifests & Logistics Bills of Lading',
      desc: 'Parsing complex tabular logistics manifests, cargo descriptions, and carrier references into inventory staging tables.',
    },
    {
      title: 'Insurance & Claims Intake Forms',
      desc: 'Digitizing scanned claim sheets, incident reports, and repair estimates with automatic field validation and discrepancy alerts.',
    },
  ]

  const deliverables = [
    'Complete document extraction pipeline with configured OCR engines',
    'Custom schema validation rules checking mathematical and field integrity',
    'Human-in-the-loop exception review interface or automated alerts',
    'Automated database and spreadsheet export connectors',
    'Document classification model with confidence score outputs',
    'Integration and deployment documentation with troubleshooting runbook',
  ]

  const technologies = [
    'Python (PyPDF / pdfplumber)',
    'OCR Technologies (Tesseract / Cloud OCR engines)',
    'OpenCV (Image Preprocessing)',
    'LLM Document Parsing',
    'Regex & Strict JSON Schema Validators',
    'Pandas & PostgreSQL',
    'REST APIs & Webhook Triggers',
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
            Service 08 · Document Processing & BPA
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[56px]">
            Document Processing and Business{' '}
            <span className="text-[#FF631C]">Process Automation.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Convert PDFs, invoices, forms, and scanned paperwork into structured, validated data records. We combine OCR, validation rules, and human-in-the-loop review queues to eliminate manual document data entry.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/book-a-call?service=Process%20%26%20Workflow%20Automation"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/10 hover:bg-[#e05010] transition"
            >
              Discuss Document Automation
              <ArrowIcon />
            </Link>
            <Link
              to="/contact?interest=Process%20%26%20Workflow%20Automation"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#0B0B0D] hover:border-[#FF631C] hover:text-[#FF631C] transition"
            >
              Send Sample Document Scope
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
                Paperwork and PDF attachments bottleneck administrative workflows.
              </h2>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>
                Every business receives vital operational data locked inside invoices, receipts, shipping manifests, and PDF applications. Because every vendor uses a different layout and font, standard rigid templates fail, forcing operational teams to manually transcribe values line by line.
              </p>
              <p>
                Manual document entry is slow, expensive, and inevitably leads to costly reconciliation errors when line totals or invoice numbers are entered incorrectly.
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
              OCR and schema validation with human supervisory oversight.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              We engineer intelligent document ingestion pipelines that automatically extract tables, key-value pairs, and dates. Extracted fields are rigorously validated against business rules, with uncertain values routed to a human review queue.
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
              Document workflows where automation eliminates manual friction.
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
                Measurable operational gains.
              </h2>
              <div className="mt-6 space-y-4 text-sm text-gray-600 leading-relaxed">
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Drastic reduction in manual re-typing effort</p>
                  <p className="mt-1 text-xs text-gray-600">Free accounts payable and administrative personnel to focus on discrepancy resolution rather than transcription.</p>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Automated mathematical validation</p>
                  <p className="mt-1 text-xs text-gray-600">Every calculated subtotal, tax rate, and grand total is verified before records are committed to accounting tables.</p>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Zero uninspected dark automation</p>
                  <p className="mt-1 text-xs text-gray-600">Whenever character recognition confidence falls below threshold, items route to human review queues.</p>
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
            Document processing technologies.
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
            Step-by-step document pipeline engineering.
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: 'Phase 1', title: 'Document Sample Audit', desc: 'Analyzing layout variations, image resolutions, table structures, and edge cases.' },
              { step: 'Phase 2', title: 'Pre-Processing & OCR', desc: 'Configuring image cleaning, text recognition, and field-extraction anchors.' },
              { step: 'Phase 3', title: 'Validation & Reconcile', desc: 'Implementing mathematical checks, master data lookups, and exception triggers.' },
              { step: 'Phase 4', title: 'Target Integration', desc: 'Deploying export connectors to your ERP, accounting system, or database with review queues.' },
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
              08 · Streamline Your Invoices and Forms
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Ready to automate document extraction and data entry?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              Send us representative samples of your invoices or forms. We will demonstrate how an OCR and validation pipeline extracts your data with verified accuracy.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book-a-call?service=Process%20%26%20Workflow%20Automation"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#e05010] transition"
              >
                Schedule Technical Review
                <ArrowIcon />
              </Link>
              <Link
                to="/contact?interest=Process%20%26%20Workflow%20Automation"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:border-[#FF631C] hover:text-[#FF631C] transition"
              >
                Submit Document Types
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DocumentAutomationPage
