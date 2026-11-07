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

export function AgenticAIPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const capabilities = [
    {
      title: 'Workflow Mapping & Orchestration',
      desc: 'Deconstructing multi-step business processes into deterministic sequences, triggering agent actions only where semantic comprehension is required.',
    },
    {
      title: 'Document Classification & Summarization',
      desc: 'Classifying unstructured emails, forms, and documents into strict JSON structures with confidence scoring and automated tagging.',
    },
    {
      title: 'Intelligent Routing & API Execution',
      desc: 'Routing extracted business payloads to internal REST endpoints, databases, or ERPs through verified API contracts.',
    },
    {
      title: 'Browser & Desktop Task Automation',
      desc: 'Automating web portal submissions, vendor dashboard lookups, and legacy screen interactions with programmatic reliability.',
    },
    {
      title: 'Execution Logs & Audit Trails',
      desc: 'Maintaining transparent, tamper-evident logs of every agent action, prompt input, payload output, and execution timestamp.',
    },
    {
      title: 'Human-in-the-Loop Approvals & Exceptions',
      desc: 'Routing low-confidence predictions or high-value decisions to human review queues before permanent state changes occur.',
    },
  ]

  const useCases = [
    {
      title: 'Customer Operations & Triage',
      desc: 'Categorizing high-volume support requests, extracting reference IDs, drafting context-aware responses, and escalating complex queries to specialists.',
    },
    {
      title: 'Invoice & PO Verification',
      desc: 'Cross-referencing incoming supplier invoices against purchase orders and vendor master files with automated discrepancy flags.',
    },
    {
      title: 'Vendor Onboarding & Compliance',
      desc: 'Validating registration certificates, tax IDs, and vendor agreements against regulatory lists with automated status updates.',
    },
    {
      title: 'Internal Knowledge Retrieval',
      desc: 'Assisting operations teams by querying authorized operational manuals, standard operating procedures (SOPs), and internal policy documents.',
    },
  ]

  const deliverables = [
    'Complete workflow topology diagram & exception specification',
    'Custom AI agent workers with strict JSON schema outputs',
    'Human review and approval dashboard or Slack/Teams notifications',
    'Secure execution logs with full payload traceability',
    'Error-handling, retry mechanisms, and rate-limit safeguards',
    'Deployment documentation and operational runbooks',
  ]

  const technologies = [
    'Python',
    'FastAPI',
    'LLM Integration (Claude, OpenAI, Local models)',
    'LangChain / LlamaIndex (when required)',
    'PostgreSQL / Redis',
    'Docker',
    'REST APIs & Webhooks',
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
            Service 01 · Intelligent Automation
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[56px]">
            AI Agents and Intelligent{' '}
            <span className="text-[#FF631C]">Workflow Automation.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Connect language models and automated tasks directly to your operational workflows. We use AI where it provides genuine value—combined with strict deterministic rules, human approvals, and full execution logging.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/book-a-call?service=Agentic%20AI%20Solutions"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/10 hover:bg-[#e05010] transition"
            >
              Book Workflow Discovery Call
              <ArrowIcon />
            </Link>
            <Link
              to="/contact?interest=AI%20%26%20Agentic%20AI"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#0B0B0D] hover:border-[#FF631C] hover:text-[#FF631C] transition"
            >
              Submit Requirements
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
                Unstructured work slows down core business operations.
              </h2>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>
                Modern businesses handle thousands of emails, documents, customer messages, and system alerts daily. Because these inputs arrive in unstructured formats, teams spend countless hours manually reading, classifying, copying, and re-keying data between disparate software tools.
              </p>
              <p>
                Standard automation rules break whenever formatting shifts slightly. Meanwhile, relying on unchecked generative AI introduces hallucinations and security risks. Businesses need dependable automation that handles semantic variability without sacrificing operational control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Proposed Solution & Architecture */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 bg-[#F9F9FA]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF631C]">
              02 · The Solution
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Pragmatic AI agents bounded by deterministic guardrails.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              We design intelligent automation systems where AI is applied strictly where it shines—comprehending language and structuring chaotic data. Downstream business logic, database queries, and notifications remain strictly deterministic and auditable.
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
              Where intelligent automation drives genuine operational value.
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
            {/* Deliverables */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF631C]">
                04 · Capabilities & Deliverables
              </p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                What you receive upon completion.
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

            {/* Benefits */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF631C]">
                05 · Realistic Benefits
              </p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                Practical operational advantages.
              </h2>
              <div className="mt-6 space-y-4 text-sm text-gray-600 leading-relaxed">
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Reduced manual data handling</p>
                  <p className="mt-1 text-xs text-gray-600">Reassign operational staff from repetitive copy-pasting to customer-facing or high-value decisions.</p>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Consistent process compliance</p>
                  <p className="mt-1 text-xs text-gray-600">Systematic execution of rules and verification steps without accidental oversight during peak volumes.</p>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="font-semibold text-gray-900">Continuous human supervisory control</p>
                  <p className="mt-1 text-xs text-gray-600">Explicit approval gates ensure business managers retain complete veto authority over critical actions.</p>
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
            06 · Verified Technology Stack
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Modern, maintainable tooling.
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
            How we bring an agent from concept to production.
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: 'Phase 1', title: 'Workflow Audit', desc: 'Map documents, trigger events, data targets, and acceptable error bounds.' },
              { step: 'Phase 2', title: 'Prototype & Schema', desc: 'Establish prompt chains, strict JSON validation schemas, and sandboxed tests.' },
              { step: 'Phase 3', title: 'Integration & Review', desc: 'Connect internal APIs, notifications, and human approval queues.' },
              { step: 'Phase 4', title: 'Deployment & Logs', desc: 'Production deployment with full execution telemetry, retries, and monitoring.' },
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
              08 · Let's Discuss Your Workflow
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Explore how AI automation can streamline your recurring processes.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              Schedule a discovery consultation with our technical team. We evaluate your manual touchpoints and design an automation strategy tailored to your architecture.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book-a-call?service=Agentic%20AI%20Solutions"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#e05010] transition"
              >
                Book a 30-Min Discovery Call
                <ArrowIcon />
              </Link>
              <Link
                to="/contact?interest=AI%20%26%20Agentic%20AI"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:border-[#FF631C] hover:text-[#FF631C] transition"
              >
                Send Us a Message
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AgenticAIPage
