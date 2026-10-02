import { Link } from 'react-router-dom'

const hero = {
  eyebrow: 'Shipping Impact',
  title: 'Agentic AI that moves from pilots to production',
  text: 'We build AI agents that plan, decide and act across your tools, so your team spends less time on repetitive work and more on decisions that matter.',
}

const stats = [
  ['60%', 'Less manual effort'],
  ['3x', 'Faster turnaround'],
  ['24/7', 'Always-on agents'],
  ['4-6 wks', 'Typical first release'],
]

const capabilities = [
  {
    title: 'Autonomous Task Agents',
    text: 'Agents that break a goal into steps, call your tools and finish the job without hand-holding.',
  },
  {
    title: 'Multi-Agent Workflows',
    text: 'Specialised agents that collaborate, hand off work and check each other before output reaches a human.',
  },
  {
    title: 'Knowledge & RAG Agents',
    text: 'Agents grounded in your documents, databases and wikis, so answers are accurate and traceable.',
  },
  {
    title: 'Tool & API Integration',
    text: 'Secure connections to your CRM, ERP, email, spreadsheets and internal systems.',
  },
  {
    title: 'Human-in-the-Loop Controls',
    text: 'Approval steps, audit logs and guardrails so you stay in control of every sensitive action.',
  },
  {
    title: 'Monitoring & Evaluation',
    text: 'Dashboards that track quality, cost and failures, so agents keep improving after launch.',
  },
]

const process = [
  ['Discover', 'We map your workflows and pick the use cases with the clearest return.'],
  ['Design', 'We define agent roles, tools, data access and guardrails.'],
  ['Build', 'We develop and test the agents against real scenarios from your business.'],
  ['Deploy & Improve', 'We launch, monitor results and keep tuning performance.'],
]

const useCases = [
  'Lead qualification and follow-ups',
  'Invoice and document processing',
  'Customer support triage',
  'Report generation and summaries',
  'Internal knowledge assistants',
  'Data entry and reconciliation',
]

export function AgenticAIPage() {
  return (
    <div className="bg-white text-[#1a1a1a]">
      {/* 1. Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-10 h-[420px] w-[420px] rounded-full bg-[#E8590C]/40 blur-[90px]"
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 sm:px-8 lg:px-10 lg:pt-32">
          <p className="text-sm font-semibold text-[#444]">{hero.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#444]">
            {hero.text}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-[#11101f] px-7 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#E8590C]"
            >
              Talk to us
            </Link>
            <Link
              to="/work"
              className="rounded-full border border-black/20 px-7 py-3 text-[15px] font-medium transition-colors hover:border-[#E8590C] hover:text-[#E8590C]"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats strip */}
      <section className="border-y border-black/10 bg-[#faf9f6]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 sm:px-8 lg:grid-cols-4 lg:px-10">
          {stats.map(([value, label]) => (
            <div key={label}>
              <p className="font-serif text-4xl text-[#E8590C]">{value}</p>
              <p className="mt-1 text-sm text-[#555]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Capabilities */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <h2 className="max-w-2xl font-serif text-3xl sm:text-4xl">
          What we build
        </h2>
        <p className="mt-4 max-w-2xl text-[#555]">
          Practical agents designed around your processes, not generic chatbots.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-black/10 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#E8590C]/50 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-6 text-[#555]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Process */}
      <section className="bg-[#faf9f6]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <h2 className="font-serif text-3xl sm:text-4xl">How we work</h2>

          <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map(([title, text], i) => (
              <li key={title}>
                <span className="font-serif text-5xl text-[#E8590C]/40">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-[#555]">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Use cases */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl">
              Where agents fit
            </h2>
            <p className="mt-4 max-w-md text-[#555]">
              Common places our clients start. We will help you find the one
              with the fastest payback.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {useCases.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg bg-[#f7f5fb] p-4 text-[15px]"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#E8590C]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="px-6 pb-20 sm:px-8 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#11101f] px-8 py-16 text-center text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#E8590C]/40 blur-[80px]"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-serif text-3xl sm:text-4xl">
              Ready to put AI agents to work?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Tell us about a workflow that slows your team down. We will show
              you what an agent could do with it.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-full bg-[#E8590C] px-8 py-3 text-[15px] font-medium text-white transition-colors hover:bg-white hover:text-[#11101f]"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}