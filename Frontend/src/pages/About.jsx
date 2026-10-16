
import { Link } from 'react-router-dom'

const companyFacts = [
  { label: 'Founded', value: '2024' },
  { label: 'Headquarters', value: 'Hyderabad, India' },
  { label: 'Company type', value: 'Privately held' },
  { label: 'Industry', value: 'IT Services & Consulting' },
]

const services = [
  {
    number: '01',
    title: 'Intelligent AI Automation',
    description:
      'Automate repetitive tasks and enterprise business processes with robotic process automation and workflow solutions.',
    tags: ['RPA', 'Workflow Automation'],
    href: '/services/process-workflow-page',
    ctaText: 'Explore Automation',
  },
  {
    number: '02',
    title: 'Agentic AI Systems',
    description:
      'Autonomous, goal-driven AI agents that plan, coordinate tools, and execute multi-step operational tasks safely.',
    tags: ['Agentic AI', 'AI Agents', 'LLM Tools'],
    href: '/services/agentic-ai-page',
    ctaText: 'Explore Agentic AI',
  },
  {
    number: '03',
    title: 'Data Engineering & Analytics',
    description:
      'Architect robust data pipelines, ETL workflows, and interactive Power BI executive reporting dashboards.',
    tags: ['Data Engineering', 'Power BI', 'Dashboards'],
    href: '/services/data-analytics',
    ctaText: 'Explore Data Solutions',
  },
  {
    number: '04',
    title: 'Healthcare Analytics & RCM',
    description:
      'Streamline revenue cycle management, pre-submission claims scrubbing, and healthcare administrative data workflows.',
    tags: ['Healthcare Analytics', 'RCM', 'Billing Workflows'],
    href: '/services/healthcare-page',
    ctaText: 'Explore Healthcare',
  },
  {
    number: '05',
    title: 'Custom Software Development',
    description:
      'Build scalable web applications, secure REST APIs, and bespoke digital platforms tailored to your business.',
    tags: ['Web Applications', 'Custom Software'],
    href: '/services/web-software-page',
    ctaText: 'Explore Software',
  },
  {
    number: '06',
    title: 'Web Scraping & Extraction',
    description:
      'Collect, structure, and integrate relevant web data to support competitive analysis and market decision-making.',
    tags: ['Data Extraction', 'Web Scraping'],
    href: '/services/web-scraping-page',
    ctaText: 'Explore Scraping',
  },
]

const principles = [
  {
    number: '01',
    title: 'Understand the problem',
    description:
      'Start with the business process, its challenges, and the outcome the team wants to achieve.',
  },
  {
    number: '02',
    title: 'Choose the right solution',
    description:
      'Match the problem with an appropriate combination of automation, software, data, and AI technologies.',
  },
  {
    number: '03',
    title: 'Build for practical use',
    description:
      'Focus on useful solutions that fit the workflow, support the people using them, and can evolve with business needs.',
  },
]

function SectionLabel({ children }) {
  return (
    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#E8590C]">
      {children}
    </p>
  )
}

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

function SparkIcon() {
  return (
    <svg
      className="h-5 w-5"
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

function ConnectedCapabilities() {
  const nodes = [
    { title: 'AI & ML', position: 'left-0 top-5' },
    { title: 'Automation', position: 'right-0 top-5' },
    { title: 'Data & Analytics', position: 'left-0 bottom-5' },
    { title: 'Software', position: 'right-0 bottom-5' },
  ]

  return (
    <div className="relative mx-auto w-full max-w-[490px]">
      <div className="absolute inset-8 rounded-full bg-[#E8590C]/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-black/[0.08] bg-white/80 p-5 shadow-[0_25px_80px_rgba(17,17,17,0.08)] backdrop-blur sm:p-7">
        <div className="mb-7 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E8590C]">
              ZestBotz Solutions
            </p>
            <p className="mt-1 text-sm text-[#555555]">
              Connected capabilities
            </p>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8590C]/10 text-[#E8590C]">
            <SparkIcon />
          </div>
        </div>

        <div className="relative flex min-h-[300px] items-center justify-center">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 420 300"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M210 150 85 55M210 150 335 55M210 150 85 245M210 150 335 245"
              stroke="#E8590C"
              strokeOpacity="0.28"
              strokeWidth="1.5"
              strokeDasharray="5 6"
            />
            <circle cx="210" cy="150" r="78" stroke="#E8590C" strokeOpacity="0.12" />
            <circle cx="210" cy="150" r="57" stroke="#E8590C" strokeOpacity="0.2" />
          </svg>

          <div className="absolute left-0 top-5 rounded-xl border border-black/[0.08] bg-white px-3 py-3 shadow-sm sm:px-4">
            <span className="text-xs font-semibold text-[#333333] sm:text-sm">
              AI & ML
            </span>
          </div>

          <div className="absolute right-0 top-5 rounded-xl border border-black/[0.08] bg-white px-3 py-3 shadow-sm sm:px-4">
            <span className="text-xs font-semibold text-[#333333] sm:text-sm">
              Automation
            </span>
          </div>

          <div className="absolute bottom-5 left-0 rounded-xl border border-black/[0.08] bg-white px-3 py-3 shadow-sm sm:px-4">
            <span className="text-xs font-semibold text-[#333333] sm:text-sm">
              Data & Analytics
            </span>
          </div>

          <div className="absolute bottom-5 right-0 rounded-xl border border-black/[0.08] bg-white px-3 py-3 shadow-sm sm:px-4">
            <span className="text-xs font-semibold text-[#333333] sm:text-sm">
              Software
            </span>
          </div>

          <div className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-[30px] border border-[#E8590C]/20 bg-white shadow-[0_12px_40px_rgba(232,89,12,0.14)]">
            <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8590C] text-white">
              <SparkIcon />
            </div>
            <span className="text-base font-bold tracking-tight text-[#111111]">
              ZestBotz
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#777777]">
              Smart solutions
            </span>
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-[#F5F5F5] p-4">
          <p className="text-sm leading-6 text-[#555555]">
            Bringing automation, data, AI, and software capabilities together
            around business needs.
          </p>
        </div>

        <p className="mt-3 text-center text-[11px] text-[#888888]">
          Illustrative overview of service areas
        </p>
      </div>
    </div>
  )
}

export default function About() {
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
              About ZestBotz Solutions
            </div>

            <h1 className="max-w-3xl font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[62px]">
              Pioneering the future of{' '}
              <span className="text-[#E8590C]">intelligent automation</span> and
              enterprise analytics.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#555555] sm:text-lg">
              ZestBotz Solutions is an IT services and consulting company
              focused on intelligent automation, AI, data, and software
              solutions. We help businesses explore smarter ways to manage
              processes, work with information, and improve their workflows.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E8590C] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c94c09]"
              >
                Explore our services
                <ArrowIcon className="h-4 w-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#111111] transition hover:border-[#E8590C] hover:text-[#E8590C]"
              >
                Get in touch
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#555555]">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E8590C]" />
                Intelligent automation
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E8590C]" />
                AI & analytics
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E8590C]" />
                Software solutions
              </span>
            </div>
          </div>

          <ConnectedCapabilities />
        </div>
      </section>

      {/* COMPANY AT A GLANCE */}
      <section className="border-y border-black/[0.06] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
          {companyFacts.map((fact, index) => (
            <div
              key={fact.label}
              className={`py-6 sm:px-6 sm:py-7 ${
                index !== 0 ? 'border-t border-black/[0.08] sm:border-t-0 sm:border-l' : ''
              } ${
                index === 2 ? 'sm:border-l-0 lg:border-l' : ''
              } ${
                index > 0 ? 'lg:border-l' : ''
              }`}
            >
              <p className="text-sm text-[#777777]">{fact.label}</p>
              <p className="mt-2 text-lg font-semibold tracking-tight text-[#111111] sm:text-xl">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
          <div>
            <SectionLabel>Who we are</SectionLabel>
            <h2 className="max-w-xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              Technology should solve real business problems.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#555555] sm:text-lg">
            <p>
              Founded in 2024 and headquartered in Hyderabad, Telangana,
              ZestBotz Solutions Pvt Ltd operates in IT services and consulting,
              with a focus on intelligent automation and analytics.
            </p>
            <p>
              Our service areas span robotic process automation, workflow
              automation, web scraping, web development, data analytics, and
              AI/ML. Together, these capabilities address different parts of a
              business technology challenge—from collecting information to
              automating tasks and building applications.
            </p>
            <p>
              Our focus is on understanding the problem first, identifying
              where technology can help, and exploring solutions that fit the
              needs of the business.
            </p>

            <div className="border-l-2 border-[#E8590C] py-1 pl-5">
              <p className="font-serif text-xl leading-8 text-[#111111] sm:text-2xl">
                Better workflows begin with the right questions, the right
                technology, and a clear purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[#F5F5F5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <SectionLabel>What we do</SectionLabel>
              <h2 className="max-w-2xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
                A connected set of capabilities for modern businesses.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[#555555] sm:text-lg lg:justify-self-end">
              From automating repetitive work to developing software and
              working with data, our service areas cover multiple business
              technology needs.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
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

                <h3 className="font-serif text-2xl tracking-tight text-[#111111]">
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
                  {service.ctaText || 'Learn more'}
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR FOCUS */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <SectionLabel>Our focus</SectionLabel>
            <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              Start with the challenge. Build around the need.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#555555] sm:text-lg">
              Every business has different workflows, systems, and priorities.
              Our approach starts with the situation at hand rather than
              assuming that one technology is the answer to every problem.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="rounded-2xl border border-black/[0.08] bg-white p-6 sm:p-8"
              >
                <p className="font-serif text-4xl text-[#E8590C]/70">
                  {principle.number}
                </p>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#555555]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY PROFILE */}
      <section className="bg-[#F5F5F5] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-10">
          <div>
            <SectionLabel>Company at a glance</SectionLabel>
            <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              Rooted in Hyderabad. Focused on technology.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#555555] sm:text-lg">
              ZestBotz Solutions Pvt Ltd is a privately held IT services and
              consulting company based in Hyderabad, Telangana, India.
              Its listed specialties include robotic process automation,
              web scraping, workflow automation, business process automation,
              AI, and machine learning.
            </p>

            <a
              href="https://www.youtube.com/@zestbotzsolutions"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#E8590C] transition hover:gap-3"
            >
              Explore our work on YouTube
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-2xl border border-black/[0.08] bg-white p-6 sm:p-8">
            <div className="space-y-0">
              {[
                ['Company', 'ZestBotz Solutions Pvt Ltd'],
                ['Founded', '2024'],
                ['Headquarters', 'Hyderabad, Telangana, India'],
                ['Industry', 'IT Services and IT Consulting'],
                ['Company type', 'Privately held'],
                ['LinkedIn-listed size', '11–50 employees'],
              ].map(([label, value], index) => (
                <div
                  key={label}
                  className={`flex flex-col gap-1 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6 ${
                    index !== 0 ? 'border-t border-black/[0.07]' : ''
                  }`}
                >
                  <span className="text-sm text-[#777777]">{label}</span>
                  <span className="text-sm font-semibold leading-6 text-[#222222] sm:max-w-[60%] sm:text-right">
                    {value}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs leading-5 text-[#888888]">
              Company profile details are based on the information provided
              on ZestBotz Solutions' LinkedIn company page.
            </p>
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
                Have a business challenge in mind?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Let's discuss your requirements and explore how automation,
                AI, data, or software development could support your goals.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#E8590C] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#f16a20]"
              >
                Talk to our team
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/[0.06]"
              >
                View all services
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
