
import { Link } from 'react-router-dom'

const services = [
  {
    number: '01',
    title: 'Process & AI Automation',
    description:
      'Reduce repetitive manual toil and streamline enterprise operations through RPA and intelligent workflow automation.',
    tags: ['AI Automation', 'RPA', 'Workflows'],
    href: '/services/process-workflow-page',
    ctaText: 'Explore AI Automation',
  },
  {
    number: '02',
    title: 'Agentic AI Solutions',
    description:
      'Deploy autonomous, multi-step AI agents designed to handle research, data orchestration, and smart task execution.',
    tags: ['Agentic AI', 'AI Agents', 'LLM Tools'],
    href: '/services/agentic-ai-page',
    ctaText: 'Discover Agentic AI',
  },
  {
    number: '03',
    title: 'Data Engineering & Pipelines',
    description:
      'Architect resilient ETL pipelines, automated ingestion, and data warehouses that transform raw inputs into trustworthy data.',
    tags: ['Data Engineering', 'ETL Pipelines', 'SQL/Python'],
    href: '/services/data-analytics',
    ctaText: 'View Data Engineering',
  },
  {
    number: '04',
    title: 'Healthcare Analytics & RCM',
    description:
      'Optimize revenue cycle workflows, automated claims scrubbing, denial resolution, and clinical administrative reporting.',
    tags: ['Healthcare Analytics', 'RCM', 'Claims Scrubbing'],
    href: '/services/healthcare-page',
    ctaText: 'Explore Healthcare Analytics',
  },
  {
    number: '05',
    title: 'Power BI & BI Dashboards',
    description:
      'Turn business data into intuitive, real-time executive Power BI dashboards that guide rapid, informed decisions.',
    tags: ['Power BI', 'Interactive Dashboards', 'KPIs'],
    href: '/services/data-analytics',
    ctaText: 'View Power BI Solutions',
  },
  {
    number: '06',
    title: 'Custom Software Development',
    description:
      'Engineer robust full-stack web applications, secure APIs, and bespoke software systems built for scale.',
    tags: ['Custom Software', 'React & Node', 'Web Apps'],
    href: '/services/web-software-page',
    ctaText: 'Explore Custom Software',
  },
  {
    number: '07',
    title: 'Web Scraping & Data Extraction',
    description:
      'Collect, normalize, and extract public web information into clean datasets for competitive intelligence and research.',
    tags: ['Web Scraping', 'Data Extraction'],
    href: '/services/web-scraping-page',
    ctaText: 'Explore Web Scraping',
  },
  {
    number: '08',
    title: 'Chatbot & Conversational AI',
    description:
      'Integrate 24/7 intelligent chatbots connected to your company knowledge base with seamless human support escalation.',
    tags: ['Chatbots', 'Conversational AI'],
    href: '/services/chatbot-page',
    ctaText: 'Explore Chatbots',
  },
]

const workflow = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Explore your existing workflow, identify pain points, and understand the outcome you need.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Identify an appropriate approach across automation, AI, software, and data.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Develop a solution around your requirements, systems, and intended use.',
  },
  {
    number: '04',
    title: 'Improve',
    description:
      'Review the solution and identify opportunities to refine the workflow over time.',
  },
]

const capabilities = [
  {
    title: 'Automate repetitive work',
    description:
      'Reduce manual steps in recurring tasks and make business processes more structured.',
    icon: 'workflow',
  },
  {
    title: 'Work smarter with data',
    description:
      'Collect, organize, and analyze information to make it more useful for business decisions.',
    icon: 'database',
  },
  {
    title: 'Build digital experiences',
    description:
      'Create websites, applications, and conversational interfaces around user needs.',
    icon: 'code',
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

function SparkIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CapabilityIcon({ type }) {
  const paths = {
    workflow: (
      <>
        <rect x="3.5" y="4" width="6" height="6" rx="1.5" />
        <rect x="14.5" y="14" width="6" height="6" rx="1.5" />
        <path d="M9.5 7h3a2 2 0 0 1 2 2v5M14.5 17h-3a2 2 0 0 1-2-2v-2" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
      </>
    ),
    code: (
      <>
        <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
      </>
    ),
  }

  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[type]}
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

function HeroVisual() {
  const steps = [
    { number: '01', label: 'Collect information', width: 'w-full' },
    { number: '02', label: 'Process & automate', width: 'w-[88%]' },
    { number: '03', label: 'Deliver insights', width: 'w-[76%]' },
  ]

  return (
    <div className="relative mx-auto w-full max-w-[510px]">
      <div className="absolute inset-8 rounded-full bg-[#E8590C]/10 blur-3xl" />

      <div className="relative rounded-[28px] border border-black/[0.08] bg-white/85 p-5 shadow-[0_25px_80px_rgba(17,17,17,0.09)] backdrop-blur sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E8590C]">
              ZestBotz Solutions
            </p>
            <h2 className="mt-2 font-serif text-2xl tracking-tight text-[#111111] sm:text-3xl">
              Smarter ways to work.
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#777777]">
              Automation, AI, data & software
            </p>
          </div>

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8590C] text-white">
            <SparkIcon className="h-6 w-6" />
          </div>
        </div>

        <div className="my-7 rounded-2xl border border-black/[0.06] bg-[#FAFAFA] p-4 sm:p-5">
          <div className="mb-5 flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-[#222222]">
              A connected workflow
            </p>
            <span className="rounded-full border border-[#E8590C]/20 bg-[#E8590C]/5 px-3 py-1 text-[11px] font-medium text-[#E8590C]">
              Illustrative
            </span>
          </div>

          <div className="space-y-3">
            {steps.map((step, index) => (
              <div key={step.number}>
                <div
                  className={`flex ${step.width} items-center gap-3 rounded-xl border border-black/[0.07] bg-white p-3.5`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E8590C]/10 text-xs font-bold text-[#E8590C]">
                    {step.number}
                  </span>
                  <span className="text-sm font-medium text-[#333333]">
                    {step.label}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <div className="ml-7 h-4 border-l border-dashed border-[#E8590C]/50" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-[#111111] p-4 text-white">
            <p className="text-xs text-white/60">Technology</p>
            <p className="mt-2 text-sm font-semibold">AI & Automation</p>
          </div>
          <div className="rounded-xl bg-[#F5F5F5] p-4">
            <p className="text-xs text-[#777777]">Business focus</p>
            <p className="mt-2 text-sm font-semibold text-[#222222]">
              Practical solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Home() {
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
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-10 lg:py-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E8590C]/20 bg-white/80 px-4 py-2 text-sm font-medium text-[#333333]">
              <span className="h-2 w-2 rounded-full bg-[#E8590C]" />
              AI · Automation · Analytics
            </div>

            <h1 className="max-w-3xl font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[62px]">
              Transforming workflows through{' '}
              <span className="text-[#E8590C]">
                AI-driven automation
              </span>{' '}
              and analytics.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#555555] sm:text-lg">
              We bring together intelligent automation, AI, data solutions,
              and software development to help businesses approach everyday
              challenges in smarter ways.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E8590C] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c94c09]"
              >
                Explore our services
                <ArrowIcon className="h-4 w-4" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#111111] transition hover:border-[#E8590C] hover:text-[#E8590C]"
              >
                Talk to our team
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#555555]">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E8590C]" />
                Process automation
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E8590C]" />
                AI & data
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E8590C]" />
                Software solutions
              </span>
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="border-y border-black/[0.06] bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-10">
          <div>
            <SectionLabel>Meet ZestBotz</SectionLabel>
            <h2 className="max-w-xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              Technology with a purpose.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#555555] sm:text-lg">
              ZestBotz Solutions Pvt Ltd is an IT services and consulting
              company founded in 2024 and headquartered in Hyderabad,
              Telangana. Our listed specialties span robotic process
              automation, workflow automation, web scraping, web development,
              data analytics, AI, and machine learning.
            </p>

            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#E8590C] transition hover:gap-3"
            >
              Get to know us
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="scroll-mt-24 bg-[#F5F5F5] py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <SectionLabel>What we do</SectionLabel>
              <h2 className="max-w-2xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
                Solutions for the way businesses work.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-[#555555] sm:text-lg lg:justify-self-end">
              Explore our service areas across automation, AI, software,
              data, enterprise systems, and healthcare workflows.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.number}
                className="group flex h-full flex-col rounded-2xl border border-black/[0.08] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E8590C]/40 hover:shadow-[0_16px_45px_rgba(17,17,17,0.07)] sm:p-7"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8590C]/10 text-sm font-bold text-[#E8590C]">
                    {service.number}
                  </span>

                  <ArrowIcon className="h-5 w-5 text-[#999999] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E8590C]" />
                </div>

                <h3 className="font-serif text-2xl leading-snug tracking-tight text-[#111111]">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 text-base leading-7 text-[#555555]">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/[0.08] bg-[#FAFAFA] px-3 py-1.5 text-xs font-medium text-[#555555]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={service.href}
                  className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#E8590C] transition hover:gap-3"
                >
                  {service.ctaText || 'Explore service'}
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold text-[#111111] transition hover:border-[#E8590C] hover:text-[#E8590C]"
            >
              Explore all services
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BUSINESS CHALLENGES */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <SectionLabel>Where technology helps</SectionLabel>
            <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              Solve the problem, not just the task.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#555555] sm:text-lg">
              The right technology depends on the challenge. These are some
              of the areas where automation, data, AI, and software
              capabilities can be useful.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="rounded-2xl border border-black/[0.08] bg-white p-6 transition duration-300 hover:border-[#E8590C]/40 hover:shadow-[0_16px_45px_rgba(17,17,17,0.05)] sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8590C]/10 text-[#E8590C]">
                  <CapabilityIcon type={capability.icon} />
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#E8590C]">
                  0{index + 1}
                </p>

                <h3 className="mt-3 font-serif text-2xl tracking-tight">
                  {capability.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-[#555555]">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[#F5F5F5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionLabel>How we approach challenges</SectionLabel>
              <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
                From business needs to practical solutions.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#555555] sm:text-lg">
                Good solutions start with understanding the existing
                workflow. A structured approach helps connect business
                requirements with the right technology.
              </p>

              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#E8590C] transition hover:gap-3"
              >
                Learn about ZestBotz
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-0">
              {workflow.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative flex gap-5 pb-8 ${
                    index !== workflow.length - 1 ? '' : 'pb-0'
                  }`}
                >
                  {index !== workflow.length - 1 && (
                    <div className="absolute bottom-0 left-[21px] top-12 w-px bg-[#E8590C]/20" />
                  )}

                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E8590C]/20 bg-white text-sm font-bold text-[#E8590C]">
                    {step.number}
                  </div>

                  <div className="pt-1">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-base leading-7 text-[#555555]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY ZESTBOTZ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="rounded-[28px] border border-black/[0.07] bg-white p-7 sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
              <div>
                <SectionLabel>Our perspective</SectionLabel>
                <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
                  The right solution starts with understanding your needs.
                </h2>
              </div>

              <div className="space-y-5">
                {[
                  {
                    title: 'Business-first thinking',
                    description:
                      'Begin with your goals, existing processes, and practical requirements.',
                  },
                  {
                    title: 'Connected capabilities',
                    description:
                      'Consider automation, data, AI, and software together when the problem calls for it.',
                  },
                  {
                    title: 'Purposeful technology',
                    description:
                      'Choose technologies based on their relevance to the problem rather than trends alone.',
                  },
                ].map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8590C]/10 text-sm font-bold text-[#E8590C]">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-[#111111]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-[#555555] sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE OUR WORK */}
      <section className="bg-[#F5F5F5] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
          <div>
            <SectionLabel>Explore ZestBotz</SectionLabel>
            <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              Get to know our work and our company.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#555555]">
              Discover more about ZestBotz Solutions, explore our service
              areas, and see the content shared on our official YouTube
              channel.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#111111] ring-1 ring-black/10 transition hover:ring-[#E8590C]"
            >
              About ZestBotz
              <ArrowIcon className="h-4 w-4" />
            </Link>

            <a
              href="https://www.youtube.com/@zestbotzsolutions"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#111111] ring-1 ring-black/10 transition hover:ring-[#E8590C]"
            >
              Visit our YouTube
              <ArrowIcon className="h-4 w-4" />
            </a>
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
                Let's work together
              </p>

              <h2 className="font-serif text-3xl leading-tight tracking-tight text-white sm:text-4xl lg:text-[48px]">
                Have a workflow to improve or an idea to build?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Tell us about your business challenge. Let's explore how
                automation, AI, analytics, or software development could
                support your goals.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#E8590C] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#f16a20]"
              >
                Contact our team
                <ArrowIcon className="h-4 w-4" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/[0.06]"
              >
                View our services
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
