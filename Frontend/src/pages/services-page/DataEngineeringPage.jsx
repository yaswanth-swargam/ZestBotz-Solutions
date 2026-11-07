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

export function DataEngineeringPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const capabilities = [
    {
      title: 'Automated Data Ingestion',
      desc: 'Ingesting data from vendor APIs, external partner SFTP drops, production databases, and streaming webhooks into centralized staging storage.',
    },
    {
      title: 'SQL & Python Data Transformations',
      desc: 'Writing modular, testable SQL and Python transformation models that clean, deduplicate, calculate metrics, and build business data marts.',
    },
    {
      title: 'Staging-to-Production Workflows',
      desc: 'Implementing multi-layer architectures (raw staging -> cleansed -> dimensional models) preventing unvalidated data from contaminating reporting tables.',
    },
    {
      title: 'Data Quality & Schema Validation',
      desc: 'Enforcing column type constraints, primary/foreign key integrity, null checks, and freshness SLAs before publishing datasets.',
    },
    {
      title: 'Pipeline Orchestration & Monitoring',
      desc: 'Coordinating complex multi-step data dependency graphs using Prefect and Cron, with automatic retries and execution telemetry.',
    },
    {
      title: 'Automated Data-Quality Alerts',
      desc: 'Immediate notifications via email, Slack, or webhook whenever row counts spike, schemas drift, or reconciliation checks fail.',
    },
  ]

  const useCases = [
    {
      title: 'Centralized Multi-System Data Staging',
      desc: 'Combining transactional data from CRM systems, e-commerce stores, billing platforms, and inventory databases into a single queryable warehouse.',
    },
    {
      title: 'Recurring Financial & Operational Marts',
      desc: 'Automating end-of-month and daily transactional rollups into dimensional star-schema models optimized for rapid Power BI dashboard queries.',
    },
    {
      title: 'API & Legacy Database Synchronization',
      desc: 'Building bidirectional or incremental sync jobs between on-premises SQL Server instances and modern cloud PostgreSQL databases.',
    },
    {
      title: 'Data Cleansing & Master Record Deduplication',
      desc: 'Running batch deduplication algorithms across customer and supplier records to maintain verified golden master data.',
    },
  ]

  const deliverables = [
    'Fully configured ETL / ELT pipeline codebase with modular models',
    'Documented dimensional schema models (star schema / staging layers)',
    'Automated data quality assertion test suite (dbt tests / Python assertions)',
    'Configured orchestration scheduler with failure notifications',
    'Data dictionary documenting table relationships, lineage, and refresh cadences',
    'Infrastructure setup guide and disaster recovery runbook',
  ]

  const technologies = [
    'Python & SQL',
    'PostgreSQL & SQL Server',
    'dbt Core (Data Build Tool)',
    'Airbyte (Ingestion Connectors)',
    'Prefect & Airflow concepts',
    'Pandas & SQLAlchemy',
    'Docker & Cloud Storage (Azure / AWS)',
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
            Service 04 · Data Engineering
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[56px]">
            Data Engineering and <span className="text-[#FF631C]">ETL/ELT Pipelines.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Connect, clean, validate, and integrate your operational data. We build reliable data ingestion pipelines, SQL transformations, and orchestrated workflows so your dashboards reflect one verified version of truth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/book-a-call?service=Data%20Analytics"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/10 hover:bg-[#e05010] transition"
            >
              Discuss Pipeline Architecture
              <ArrowIcon />
            </Link>
            <Link
              to="/contact?interest=Data%20Analytics"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#0B0B0D] hover:border-[#FF631C] hover:text-[#FF631C] transition"
            >
              Request Data Engineering Review
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
                Data silos and silent pipeline breaks undermine business trust.
              </h2>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>
                When business data resides in disconnected SaaS tools, operational databases, and loose spreadsheets, leaders get conflicting answers to fundamental questions: What was yesterday's actual revenue? Which claims are delayed? What inventory is in transit?
              </p>
              <p>
                Ad-hoc Excel macros and brittle scripts break without warning when schemas change, resulting in missing data, duplicate rows, and reports that leaders cannot trust during critical decision-making meetings.
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
              Engineered ETL/ELT pipelines with built-in quality assertions.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              We design modular, observable data pipelines that stage raw data, perform validated SQL/Python transformations, and publish reliable data marts. Automated test assertions verify every run before data reaches user dashboards.
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
              Proven pipeline architectures in operational environments.
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
                Concrete engineering deliverables.
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
                Sustainable data advantages.
              </h2>
              <div className="mt-6 space-y-4 text-sm text-gray-600 leading-relaxed">
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">One single source of verified truth</p>
                  <p className="mt-1 text-xs text-gray-600">Eliminate conflicting department metrics by unifying ingestion logic into transparent, version-controlled models.</p>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Immediate visibility into data anomalies</p>
                  <p className="mt-1 text-xs text-gray-600">Catch null values, truncated files, or API format changes before reports are delivered to leadership.</p>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Substantially faster dashboard refresh times</p>
                  <p className="mt-1 text-xs text-gray-600">Offload heavy aggregations from BI dashboards into optimized database views and indexed warehouse tables.</p>
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
            Established data engineering technologies.
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
            From data source audit to automated orchestration.
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: 'Phase 1', title: 'Data Audit & Lineage', desc: 'Catalog source schemas, refresh frequencies, volume constraints, and key business logic.' },
              { step: 'Phase 2', title: 'Staging & Pipeline Build', desc: 'Construct automated connectors and raw staging tables with schema guards.' },
              { step: 'Phase 3', title: 'Transformation & Tests', desc: 'Write dbt/SQL models with comprehensive automated primary key and null assertions.' },
              { step: 'Phase 4', title: 'Orchestration & SLAs', desc: 'Deploy scheduled workflows with automated execution logs and alerts on anomalies.' },
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
              08 · Unify Your Data Infrastructure
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Ready to replace manual exports with automated pipelines?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              Tell us about your data sources and current pain points. We will outline an architecture for clean, reliable data ingestion and transformation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book-a-call?service=Data%20Analytics"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#e05010] transition"
              >
                Schedule Pipeline Architecture Call
                <ArrowIcon />
              </Link>
              <Link
                to="/contact?interest=Data%20Analytics"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:border-[#FF631C] hover:text-[#FF631C] transition"
              >
                Submit Ingestion Scope
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DataEngineeringPage
