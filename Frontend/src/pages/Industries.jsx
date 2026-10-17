
import { Link } from 'react-router-dom'

const industries = [
  {
    number: '01',
    eyebrow: 'HEALTHCARE',
    title: 'Healthcare & Revenue Cycle',
    description:
      'Healthcare administration involves information-heavy workflows, documentation, billing, and claims. Automation and data solutions can help teams organize repetitive tasks and streamline administrative processes.',
    challenges: [
      'Repetitive administrative workflows',
      'Healthcare billing and claims processes',
      'Managing and organizing operational data',
    ],
    approach:
      'Explore workflow automation, healthcare revenue cycle solutions, data processing, and AI-assisted tools for suitable administrative use cases.',
    services: [
      {
        label: 'Healthcare RCM',
        href: '/services/healthcare-page',
      },
      {
        label: 'Process Automation',
        href: '/services/process-workflow-page',
      },
      {
        label: 'AI Solutions',
        href: '/services/agentic-ai-page',
      },
    ],
    visual: 'healthcare',
  },
  {
    number: '02',
    eyebrow: 'ENTERPRISE OPERATIONS',
    title: 'Smarter Business Operations',
    description:
      'Business teams often work across recurring tasks, disconnected information, approvals, reports, and operational systems. The right technology can help make these workflows more structured and manageable.',
    challenges: [
      'Manual and repetitive business processes',
      'Information spread across systems',
      'Recurring reporting and data-handling tasks',
    ],
    approach:
      'Connect process automation, ERP solutions, data analytics, and software integrations to address specific operational requirements.',
    services: [
      {
        label: 'Process Automation',
        href: '/services/process-workflow-page',
      },
      {
        label: 'ERP Solutions',
        href: '/services/erp-page',
      },
      {
        label: 'Data Analytics',
        href: '/services/data-analytics',
      },
    ],
    visual: 'enterprise',
  },
  {
    number: '03',
    eyebrow: 'TECHNOLOGY & DIGITAL',
    title: 'Digital Products & Data',
    description:
      'Technology-driven businesses need digital experiences, useful data, and systems that support changing requirements. Software development and intelligent data solutions can help address these needs.',
    challenges: [
      'Building and improving digital experiences',
      'Collecting and processing web data',
      'Connecting applications with AI capabilities',
    ],
    approach:
      'Combine web development, web scraping, chatbot integration, and AI solutions to build around real product and business requirements.',
    services: [
      {
        label: 'Web Development',
        href: '/services/web-software-page',
      },
      {
        label: 'Web Scraping',
        href: '/services/web-scraping-page',
      },
      {
        label: 'Chatbot Integration',
        href: '/services/chatbot-page',
      },
    ],
    visual: 'technology',
  },
]

const principles = [
  {
    number: '01',
    title: 'Understand the context',
    description:
      'Learn how the business operates, where the friction occurs, and what needs to improve.',
  },
  {
    number: '02',
    title: 'Choose relevant technology',
    description:
      'Match the requirement with suitable automation, AI, analytics, or software capabilities.',
  },
  {
    number: '03',
    title: 'Build around the workflow',
    description:
      'Shape the solution around the intended users, existing processes, and business requirements.',
  },
]

function ArrowIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SectionLabel({ children }) {
  return (
    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#E8590C]">
      {children}
    </p>
  )
}

function IndustryVisual({ type }) {
  const content = {
    healthcare: {
      heading: 'Healthcare workflows',
      subheading: 'Administrative process overview',
      items: [
        { label: 'Information handling', number: '01' },
        { label: 'Billing & claims workflows', number: '02' },
        { label: 'Operational data', number: '03' },
      ],
    },
    enterprise: {
      heading: 'Business operations',
      subheading: 'Connected process overview',
      items: [
        { label: 'Recurring tasks', number: '01' },
        { label: 'Business systems', number: '02' },
        { label: 'Reporting & insights', number: '03' },
      ],
    },
    technology: {
      heading: 'Digital solutions',
      subheading: 'Product development overview',
      items: [
        { label: 'Data collection', number: '01' },
        { label: 'Application development', number: '02' },
        { label: 'AI integration', number: '03' },
      ],
    },
  }[type]

  return (
    <div className="relative">
      <div className="absolute inset-5 rounded-full bg-[#E8590C]/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[24px] border border-black/[0.08] bg-white p-5 shadow-[0_20px_60px_rgba(17,17,17,0.07)] sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E8590C]">
              Industry overview
            </p>
            <h3 className="mt-2 font-serif text-2xl tracking-tight text-[#111111]">
              {content.heading}
            </h3>
            <p className="mt-2 text-sm text-[#777777]">
              {content.subheading}
            </p>
          </div>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C]">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 19V5m0 14h16M8 15l3-4 3 2 5-7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="my-7 space-y-3">
          {content.items.map((item, index) => (
            <div
              key={item.number}
              className="flex items-center gap-3 rounded-xl border border-black/[0.07] bg-[#FAFAFA] p-3.5 transition hover:border-[#E8590C]/30"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-bold text-[#E8590C] shadow-sm">
                {item.number}
              </span>

              <span className="flex-1 text-sm font-medium text-[#333333]">
                {item.label}
              </span>

              <span
                className={`h-2 w-2 rounded-full ${
                  index === 0
                    ? 'bg-[#E8590C]'
                    : index === 1
                      ? 'bg-[#F5A16C]'
                      : 'bg-[#D7D7D7]'
                }`}
              />
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-[#111111] p-4 text-white">
          <p className="text-xs text-white/55">Potential focus areas</p>
          <p className="mt-2 text-sm leading-6">
            Automation <span className="text-[#F5A16C]">·</span> Data
            <span className="text-[#F5A16C]"> · </span>
            Software <span className="text-[#F5A16C]">·</span> AI
          </p>
        </div>

        <p className="mt-3 text-center text-[11px] text-[#888888]">
          Illustrative workflow — not a live dashboard
        </p>
      </div>
    </div>
  )
}

function IndustryCard({ industry, reverse = false }) {
  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={reverse ? 'lg:order-2' : ''}>
        <IndustryVisual type={industry.visual} />
      </div>

      <div className={reverse ? 'lg:order-1' : ''}>
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8590C]/10 text-sm font-bold text-[#E8590C]">
            {industry.number}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#777777]">
            {industry.eyebrow}
          </span>
        </div>

        <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
          {industry.title}
        </h2>

        <p className="mt-5 text-base leading-8 text-[#555555] sm:text-lg">
          {industry.description}
        </p>

        <div className="mt-7">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#222222]">
            Common challenges
          </h3>

          <ul className="mt-4 space-y-3">
            {industry.challenges.map((challenge) => (
              <li key={challenge} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8590C]" />
                <span className="text-sm leading-6 text-[#555555] sm:text-base">
                  {challenge}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 rounded-2xl border border-[#E8590C]/15 bg-[#E8590C]/[0.035] p-5 sm:p-6">
          <p className="text-sm font-semibold text-[#111111]">
            How our capabilities can help
          </p>
          <p className="mt-2 text-sm leading-7 text-[#555555]">
            {industry.approach}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {industry.services.map((service) => (
            <Link
              key={service.label}
              to={service.href}
              className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.09] bg-white px-3.5 py-2 text-xs font-medium text-[#444444] transition hover:border-[#E8590C]/40 hover:text-[#E8590C] sm:text-sm"
            >
              {service.label}
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Industries() {
  return (
    <main className="overflow-hidden bg-white text-[#111111]">
      {/* HERO */}
      <section
        className="relative"
        style={{
          background:
            'radial-gradient(ellipse at 8% 12%, rgba(232,89,12,0.12), transparent 36%), radial-gradient(ellipse at 95% 70%, rgba(245,161,108,0.12), transparent 34%)',
        }}
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E8590C]/20 bg-white/80 px-4 py-2 text-sm font-medium text-[#333333]">
              <span className="h-2 w-2 rounded-full bg-[#E8590C]" />
              Industries we serve
            </div>

            <h1 className="font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[62px]">
              Different industries.
              <br />
              <span className="text-[#E8590C]">
                Thoughtful technology solutions.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#555555] sm:text-lg">
              Every industry works in its own way. We explore how automation,
              AI, analytics, and software development can help address the
              specific workflows and challenges businesses face.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#industries"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E8590C] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c94c09]"
              >
                Explore industries
                <ArrowIcon className="h-4 w-4" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#111111] transition hover:border-[#E8590C] hover:text-[#E8590C]"
              >
                Discuss your requirements
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3 lg:mt-16">
            {[
              {
                number: '01',
                title: 'Healthcare',
                description: 'Administrative & revenue cycle workflows',
              },
              {
                number: '02',
                title: 'Enterprise operations',
                description: 'Processes, systems & business data',
              },
              {
                number: '03',
                title: 'Technology & digital',
                description: 'Applications, data & digital experiences',
              },
            ].map((item) => (
              <a
                key={item.number}
                href={`#industry-${item.number}`}
                className="group rounded-2xl border border-black/[0.08] bg-white/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#E8590C]/40 hover:shadow-[0_12px_35px_rgba(17,17,17,0.06)] sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#E8590C]">
                    {item.number}
                  </span>
                  <ArrowIcon className="h-4 w-4 text-[#999999] transition group-hover:translate-x-1 group-hover:text-[#E8590C]" />
                </div>

                <h2 className="mt-5 font-serif text-xl tracking-tight sm:text-2xl">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#666666]">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY SECTIONS */}
      <section id="industries" className="scroll-mt-24 bg-white">
        {industries.map((industry, index) => (
          <div
            key={industry.number}
            id={`industry-${industry.number}`}
            className={`scroll-mt-24 border-b border-black/[0.07] py-20 sm:py-24 lg:py-28 ${
              index === 1 ? 'bg-[#FAFAFA]' : 'bg-white'
            }`}
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
              <IndustryCard
                industry={industry}
                reverse={index === 1}
              />
            </div>
          </div>
        ))}
      </section>

      {/* CROSS-INDUSTRY CAPABILITIES */}
      <section className="bg-[#F5F5F5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Across our service areas</SectionLabel>
            <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              The technology depends on the challenge.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#555555] sm:text-lg">
              Industry requirements vary. Our service portfolio brings
              together several capabilities that can be considered according
              to the problem, existing systems, and desired outcome.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Automation',
                description:
                  'Address repetitive tasks and recurring business workflows.',
                href: '/services/process-workflow-page',
              },
              {
                title: 'AI solutions',
                description:
                  'Explore AI-driven approaches for suitable business tasks.',
                href: '/services/agentic-ai-page',
              },
              {
                title: 'Data & analytics',
                description:
                  'Collect, process, and interpret information.',
                href: '/services/data-analytics',
              },
              {
                title: 'Software development',
                description:
                  'Build applications and digital tools around requirements.',
                href: '/services/web-software-page',
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="group rounded-2xl border border-black/[0.08] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E8590C]/40 hover:shadow-[0_16px_40px_rgba(17,17,17,0.06)]"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8590C]/10 text-[#E8590C]">
                  <ArrowIcon className="h-5 w-5 -rotate-45 transition group-hover:rotate-0" />
                </div>

                <h3 className="font-serif text-xl tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#555555]">
                  {item.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#E8590C]">
                  Explore service
                  <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionLabel>Our approach</SectionLabel>
              <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
                Understand first. Then find the right fit.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#555555] sm:text-lg">
                Industry knowledge starts with listening. Understanding the
                workflow and its constraints helps identify where technology
                may be useful—and where a simpler approach may be enough.
              </p>
            </div>

            <div className="space-y-0">
              {principles.map((principle, index) => (
                <div
                  key={principle.number}
                  className={`flex gap-5 py-6 ${
                    index !== 0 ? 'border-t border-black/[0.08]' : 'pt-0'
                  }`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8590C]/10 text-sm font-bold text-[#E8590C]">
                    {principle.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#555555] sm:text-base">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div
          className="mx-auto max-w-7xl overflow-hidden rounded-[28px] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
          style={{
            background:
              'radial-gradient(ellipse at 5% 10%, rgba(232,89,12,0.24), transparent 35%), radial-gradient(ellipse at 95% 90%, rgba(245,161,108,0.14), transparent 36%), #111111',
          }}
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#F5A16C]">
                Your industry. Your requirements.
              </p>

              <h2 className="font-serif text-3xl leading-tight tracking-tight text-white sm:text-4xl lg:text-[48px]">
                Don't see your industry?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Every business has its own challenges. Tell us what you are
                trying to solve, and let's explore whether our services are
                the right fit for your needs.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#E8590C] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#f16a20]"
              >
                Discuss your needs
                <ArrowIcon className="h-4 w-4" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/[0.06]"
              >
                Explore our services
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
