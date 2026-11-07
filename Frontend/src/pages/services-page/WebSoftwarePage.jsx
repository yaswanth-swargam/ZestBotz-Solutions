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

export function WebSoftwarePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const capabilities = [
    {
      title: 'Custom Web Applications & SaaS',
      desc: 'Building responsive, performant full-stack web applications tailored specifically around your unique business rules and customer workflows.',
    },
    {
      title: 'Internal Operational Portals',
      desc: 'Developing secure employee workspaces, task managers, and process tracking tools that consolidate disconnected team activities.',
    },
    {
      title: 'Administration Panels & Backoffices',
      desc: 'Building administrative dashboards with role-based permissions (RBAC), audit trails, and granular user/tenant management.',
    },
    {
      title: 'Upload, Batch Processing & Validation Interfaces',
      desc: 'Creating user-friendly web portals where staff or clients upload bulk spreadsheets, trigger backend verification scripts, and review error tables.',
    },
    {
      title: 'Database-Backed Application Architectures',
      desc: 'Designing relational schemas in PostgreSQL and SQL Server with strict foreign keys, indexing, and migration version control.',
    },
    {
      title: 'REST API & Microservice Development',
      desc: 'Engineering documented, versioned RESTful APIs with JWT authentication, rate limiting, and third-party webhook integrations.',
    },
  ]

  const useCases = [
    {
      title: 'Customer Self-Service & Enquiry Portals',
      desc: 'Empowering clients to submit documentation, track ticket statuses, and view billing history securely without back-and-forth emails.',
    },
    {
      title: 'Operational Dispatch & Workflow Dashboards',
      desc: 'A unified internal panel for coordinating service assignments, tracking milestone completions, and collecting field team updates.',
    },
    {
      title: 'Specialized SaaS Product Prototypes (MVPs)',
      desc: 'Translating proprietary domain methodologies into working multi-tenant web platforms ready for customer validation and pilot trials.',
    },
    {
      title: 'Legacy Spreadsheet-to-Web Migrations',
      desc: 'Converting multi-tab, error-prone desktop spreadsheets into secure, multi-user web databases with permission controls.',
    },
  ]

  const deliverables = [
    'Clean, maintainable frontend and backend source code repository',
    'Responsive user interface tested across mobile, tablet, and desktop',
    'Documented REST API endpoints with interactive Swagger/OpenAPI schemas',
    'Normalized database schema with automated migration scripts',
    'Configured role-based authentication and security middleware',
    'Docker containerization and production deployment runbook',
  ]

  const technologies = [
    'React.js & Next.js',
    'Tailwind CSS',
    'Node.js & Express / Fastify',
    'Python (FastAPI / Django)',
    'PostgreSQL & SQLite',
    'Docker',
    'REST APIs, Webhooks & JWT',
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
            Service 07 · Custom Engineering
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[56px]">
            Custom Software and <span className="text-[#FF631C]">SaaS Development.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Build custom web applications, internal operational portals, and administrative platforms around your exact workflows. Clean architecture, robust database models, and role-based access control.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/book-a-call?service=Other"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/10 hover:bg-[#e05010] transition"
            >
              Discuss Your Application Needs
              <ArrowIcon />
            </Link>
            <Link
              to="/contact?interest=Web%20%26%20Software%20Development"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#0B0B0D] hover:border-[#FF631C] hover:text-[#FF631C] transition"
            >
              Submit Project Specifications
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
                Off-the-shelf software rarely fits specialized business workflows.
              </h2>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>
                Companies frequently outgrow generic SaaS products that force them to adapt their operations to rigid third-party interfaces. Essential workflows end up split between spreadsheets, email attachments, and manual workarounds.
              </p>
              <p>
                Meanwhile, attempting to patch multiple disjointed tools creates security vulnerabilities, lacks unified role-based permissions, and leaves teams without a centralized administrative record of operational activity.
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
              Purpose-built web applications and internal portals.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              We design and develop custom software tailored specifically around your business rules, data schemas, and user permissions. Built with modern React and Python/Node backends, our applications are secure, responsive, and maintainable.
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
              Custom applications built for practical operations.
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
                Advantages of custom software ownership.
              </h2>
              <div className="mt-6 space-y-4 text-sm text-gray-600 leading-relaxed">
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Full source code & IP ownership</p>
                  <p className="mt-1 text-xs text-gray-600">You own the application, codebase, and database outright without perpetual per-seat vendor pricing.</p>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Engineered to match your exact business logic</p>
                  <p className="mt-1 text-xs text-gray-600">No compromises or forced workarounds; every form field, status state, and export matches your process.</p>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Modern, responsive, accessible interfaces</p>
                  <p className="mt-1 text-xs text-gray-600">Built using modern component libraries and tested across mobile, tablet, and desktop screens.</p>
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
            06 · Verified Tech Stack
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Reliable, modern full-stack technologies.
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
            Structured development methodology.
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: 'Phase 1', title: 'Scope & Architecture', desc: 'Define user roles, database entities, screen wireframes, and API boundaries.' },
              { step: 'Phase 2', title: 'Data Schema & Backend', desc: 'Build relational models, migrations, authentication middleware, and core endpoints.' },
              { step: 'Phase 3', title: 'UI/UX & Integration', desc: 'Develop responsive React components, forms, validation messages, and state handling.' },
              { step: 'Phase 4', title: 'Testing & Handover', desc: 'Perform integration testing, staging verification, security checks, and client handover.' },
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
              08 · Build Your Custom Application
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Ready to create software tailored around your business?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              Schedule a technical discovery session with our software engineers. We review your workflow requirements and outline a clean architecture.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book-a-call?service=Other"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#e05010] transition"
              >
                Schedule Technical Discovery
                <ArrowIcon />
              </Link>
              <Link
                to="/contact?interest=Web%20%26%20Software%20Development"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:border-[#FF631C] hover:text-[#FF631C] transition"
              >
                Send Us Project Scope
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default WebSoftwarePage
