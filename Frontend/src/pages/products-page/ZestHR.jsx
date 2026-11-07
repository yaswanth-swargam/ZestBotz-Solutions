
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  FileCheck2,
  HeartHandshake,
  LayoutDashboard,
  LockKeyhole,
  Menu,
  Users,
  UserRoundPlus,
  Workflow,
  X,
} from 'lucide-react'

const features = [
  {
    number: '01',
    icon: Users,
    title: 'Employee Management',
    description:
      'Organize employee profiles, contact information, departments, job roles, and employment records in a structured workspace.',
    tags: ['Employee profiles', 'Department records'],
  },
  {
    number: '02',
    icon: CalendarDays,
    title: 'Attendance Management',
    description:
      'Create a more consistent approach to maintaining attendance records and reviewing attendance patterns.',
    tags: ['Attendance records', 'Daily tracking'],
  },
  {
    number: '03',
    icon: ClipboardList,
    title: 'Leave Management',
    description:
      'Structure leave requests, manager reviews, approval steps, and leave records around your organization’s processes.',
    tags: ['Leave requests', 'Approval processes'],
  },
  {
    number: '04',
    icon: UserRoundPlus,
    title: 'Employee Onboarding',
    description:
      'Organize joining checklists, document collection, and the tasks involved in welcoming new team members.',
    tags: ['Joining checklists', 'Documentation'],
  },
  {
    number: '05',
    icon: BarChart3,
    title: 'HR Reports & Analytics',
    description:
      'Explore ways to organize workforce summaries, attendance trends, leave information, and HR reporting.',
    tags: ['Workforce reporting', 'HR insights'],
  },
  {
    number: '06',
    icon: Workflow,
    title: 'HR Workflow Automation',
    description:
      'Identify repetitive administrative tasks that could be streamlined through notifications, approvals, and digital workflows.',
    tags: ['Routine tasks', 'Workflow planning'],
  },
]

const challenges = [
  {
    icon: FileCheck2,
    title: 'Scattered employee records',
    description:
      'Employee information spread across documents and spreadsheets can make records harder to maintain.',
  },
  {
    icon: CalendarDays,
    title: 'Manual attendance and leave',
    description:
      'Maintaining attendance, leave requests, and related records manually can add to everyday administration.',
  },
  {
    icon: UserRoundPlus,
    title: 'Unstructured onboarding',
    description:
      'Joining documents, checklists, and responsibilities need a clear process to stay organized.',
  },
  {
    icon: Workflow,
    title: 'Repetitive HR tasks',
    description:
      'Routine updates, approvals, and reporting can distract teams from employee support and planning.',
  },
]

const benefits = [
  {
    icon: ClipboardList,
    title: 'Organized HR records',
    description:
      'Create a consistent structure for employee information and everyday people operations.',
  },
  {
    icon: Workflow,
    title: 'More consistent processes',
    description:
      'Define repeatable steps for leave requests, onboarding, and routine administration.',
  },
  {
    icon: BarChart3,
    title: 'Clearer operational visibility',
    description:
      'Explore structured reporting approaches for reviewing HR activity and workforce information.',
  },
  {
    icon: HeartHandshake,
    title: 'People-focused HR',
    description:
      'Make space for employee support by identifying opportunities to simplify administrative work.',
  },
]

const audiences = [
  {
    icon: HeartHandshake,
    title: 'Startups',
    description:
      'Establish organized employee records and repeatable HR processes as your team takes shape.',
  },
  {
    icon: Users,
    title: 'Small businesses',
    description:
      'Explore a structured approach to employee information, attendance, and leave administration.',
  },
  {
    icon: Workflow,
    title: 'Growing companies',
    description:
      'Consider centralized HR workflows as departments, roles, and responsibilities expand.',
  },
  {
    icon: LayoutDashboard,
    title: 'HR teams',
    description:
      'Identify opportunities to reduce reliance on disconnected spreadsheets and manual processes.',
  },
]

const workflowSteps = [
  {
    number: '01',
    icon: LayoutDashboard,
    title: 'Set up your workspace',
    description:
      'Define company details, departments, employee information, and the HR processes relevant to your organization.',
  },
  {
    number: '02',
    icon: Workflow,
    title: 'Organize HR operations',
    description:
      'Plan how employee records, attendance, leave, onboarding, and recurring administrative tasks fit together.',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Review and improve',
    description:
      'Identify the workforce information and reporting views that would help your team understand its HR operations.',
  },
]

const faqs = [
  {
    question: 'What is ZestHR?',
    answer:
      'ZestHR is a proposed HR management product concept from ZestBotz. It is intended to address employee information, attendance, leave management, onboarding, and everyday HR workflows.',
  },
  {
    question: 'Which businesses is ZestHR designed for?',
    answer:
      'The concept is intended for startups, small and medium-sized businesses, growing companies, and HR teams looking for more structured people operations.',
  },
  {
    question: 'Can ZestHR manage attendance and leave?',
    answer:
      'Attendance and leave management are proposed areas of the product. Contact ZestBotz to confirm current availability and discuss the requirements your organization needs.',
  },
  {
    question: 'Can HR workflows be automated?',
    answer:
      'Workflow automation is a proposed area for ZestHR. Specific automation capabilities and integrations depend on the product implementation and scope.',
  },
  {
    question: 'How can my business discuss a demo?',
    answer:
      'Use the contact link on this page to share your organization’s requirements. The ZestBotz team can discuss the product concept, availability, and possible next steps.',
  },
  {
    question: 'Is ZestHR currently available?',
    answer:
      'This page presents ZestHR as a product concept and does not claim that a production HR system is currently available. Contact ZestBotz for the latest availability and development status.',
  },
]

function SectionLabel({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-700 dark:border-[#FF631C]/30 dark:bg-[#FF631C]/10 dark:text-[#FF8B57]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#FF631C]" />
      {children}
    </div>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div
      className={
        centered
          ? 'mx-auto mb-12 max-w-2xl text-center'
          : 'mb-10 max-w-2xl'
      }
    >
      {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}

      <h2 className="text-3xl font-semibold tracking-tight text-[#202020] dark:text-white sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

function ProductCTA({ children = 'Request a Demo', className = '' }) {
  return (
    <Link
      to="/contact?interest=ZestHR"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#FF631C] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#E95617] focus:outline-none focus:ring-4 focus:ring-orange-200 ${className}`}
    >
      {children}
      <ArrowRight size={16} />
    </Link>
  )
}

function ProductWorkflowPreview() {
  const [activeTab, setActiveTab] = useState('Employee records')

  const tabs = [
    'Employee records',
    'Attendance & leave',
    'Onboarding',
    'HR reporting',
  ]

  const previews = {
    'Employee records': {
      icon: Users,
      title: 'Employee information',
      description:
        'A proposed structure for maintaining employee-related information.',
      items: [
        ['Employee profile', 'Contact and employment information'],
        ['Department details', 'Team and role information'],
        ['Employment records', 'Relevant employee documentation'],
      ],
    },
    'Attendance & leave': {
      icon: CalendarDays,
      title: 'Attendance and leave',
      description:
        'A proposed workflow for organizing attendance and leave administration.',
      items: [
        ['Attendance records', 'Review records for the relevant period'],
        ['Leave requests', 'Capture requests for manager review'],
        ['Approval process', 'Define review and decision steps'],
      ],
    },
    Onboarding: {
      icon: UserRoundPlus,
      title: 'Employee onboarding',
      description:
        'A proposed checklist structure for coordinating new-joiner activities.',
      items: [
        ['Joining documentation', 'Identify required employee documents'],
        ['Onboarding checklist', 'Organize joining activities'],
        ['Task ownership', 'Define responsibilities for each step'],
      ],
    },
    'HR reporting': {
      icon: BarChart3,
      title: 'HR reports and analytics',
      description:
        'A proposed structure for identifying and organizing HR reporting needs.',
      items: [
        ['Workforce overview', 'Define relevant workforce summaries'],
        ['Attendance reporting', 'Identify useful attendance information'],
        ['Leave reporting', 'Organize leave records for review'],
      ],
    },
  }

  const selected = previews[activeTab]
  const ActiveIcon = selected.icon

  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <div className="pointer-events-none absolute -inset-5 rounded-[36px] bg-gradient-to-br from-orange-100/80 via-orange-50/50 to-transparent blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#141417] shadow-[0_24px_80px_-36px_rgba(100,65,35,0.28)]">
        <div className="flex items-center justify-between gap-3 border-b border-gray-100 dark:border-white/10 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-[#E95617]">
              <Users size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">ZestHR</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                HR workspace concept
              </p>
            </div>
          </div>

          <span className="rounded-full border border-orange-100 dark:border-[#FF631C]/30 bg-orange-50 dark:bg-[#FF631C]/10 px-3 py-1.5 text-xs font-medium text-orange-700 dark:text-[#FF8B57]">
            Concept preview
          </span>
        </div>

        <div className="p-4 sm:p-6">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-gray-400">
            Proposed workspace
          </p>

          <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
            Organize everyday HR operations
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
            Explore how the proposed areas could be organized without
            representing live employee data or implemented functionality.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 border-b border-gray-100 dark:border-white/10 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
                className={`rounded-lg px-3 py-2 text-xs font-medium transition ${
                  activeTab === tab
                    ? 'bg-orange-100 text-orange-800 dark:bg-[#FF631C] dark:text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="pt-5">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#FF631C]">
                <ActiveIcon size={20} />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {selected.title}
                </h4>
                <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                  {selected.description}
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {selected.items.map(([title, description], index) => (
                <div
                  key={title}
                  className="flex items-start gap-3 rounded-xl border border-gray-100 dark:border-white/10 p-3 sm:p-4 bg-white dark:bg-[#16161A]"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-sm font-semibold text-orange-700">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
                      {title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                      {description}
                    </p>
                  </div>

                  <ArrowRight
                    className="mt-1 shrink-0 text-gray-300"
                    size={15}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-[#0E0E11] px-4 py-3 sm:px-6">
          <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
            Conceptual workflow only. No live employee records, operational
            metrics, connected HR database, or active workflows are shown.
          </p>
        </div>
      </div>
    </div>
  )
}

function FAQItem({ question, answer, open, onClick }) {
  return (
    <div className="border-b border-gray-200 dark:border-white/10">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-sm font-semibold text-[#202020] dark:text-white sm:text-base">
          {question}
        </span>

        <ChevronDown
          size={18}
          className={`shrink-0 text-gray-500 transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <p className="max-w-3xl pb-5 text-sm leading-7 text-gray-600 dark:text-gray-300">
          {answer}
        </p>
      )}
    </div>
  )
}

export function ZestHR() {
  const [openFaq, setOpenFaq] = useState(0)



  return (
    <main className="overflow-hidden bg-white dark:bg-[#0B0B0D] text-[#171717] dark:text-gray-100">
      {/* Hero */}
      <section className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 8% 12%, rgba(255,99,28,0.14), transparent 38%), radial-gradient(ellipse at 95% 75%, rgba(255,99,28,0.07), transparent 35%)',
          }}
        />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div>
            <SectionLabel>Human Resources · Product Concept</SectionLabel>

            <h1 className="max-w-3xl text-4xl leading-[1.12] tracking-tight text-[#171717] dark:text-white sm:text-5xl lg:text-[62px]">
              Your people.
              <br />
              Your processes.
              <br />
              <span className="text-[#E8590C] dark:text-[#FF631C]">One smarter HR platform.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#555555] dark:text-gray-300 sm:text-lg">
              Simplify employee management, organize everyday HR operations,
              and explore a more structured approach to managing your team
              with ZestHR.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ProductCTA>Discuss ZestHR</ProductCTA>

              <a
                href="#features"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-gray-200 dark:border-white/15 bg-white dark:bg-[#16161A] px-6 py-3.5 text-sm font-semibold text-gray-700 dark:text-gray-200 transition hover:border-orange-200 dark:hover:border-[#FF631C] hover:bg-orange-50 dark:hover:bg-[#FF631C]/10"
              >
                Explore features
                <ArrowDownRight size={16} />
              </a>
            </div>

            <p className="mt-6 max-w-lg text-xs leading-6 text-gray-500">
              ZestHR is presented as a proposed product concept. Current
              availability and implementation details should be confirmed
              with ZestBotz.
            </p>
          </div>

          <ProductWorkflowPreview />
        </div>
      </section>

      {/* Challenges */}
      <section className="border-t border-gray-100 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The everyday HR challenge"
            title="HR shouldn't be a daily administrative burden."
            description="Employee information, attendance, leave, and onboarding can involve disconnected records and repetitive tasks. A structured digital approach can help organizations plan these processes more consistently."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {challenges.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-950/[0.04] sm:p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#FF631C]">
                  <Icon size={21} />
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Challenge 0{index + 1}
                </p>

                <h3 className="mt-2 text-base font-semibold text-[#202020]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="scroll-mt-24 bg-[#FAF9F7] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            centered
            eyebrow="Proposed capabilities"
            title="A more organized approach to HR."
            description="Explore the functional areas envisioned for ZestHR. These describe proposed capabilities, not a claim that each feature is already implemented."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ number, icon: Icon, title, description, tags }) => (
              <article
                key={title}
                className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-950/[0.04] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#FF631C] transition group-hover:bg-[#FF631C] group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <span className="text-xs font-semibold tracking-widest text-gray-300">
                    {number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[#202020]">
                  {title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                  {description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 border-t border-gray-100 pt-4">
                  <span className="text-xs font-medium text-orange-700">
                    Proposed capability
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section
        id="how-it-works"
        className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How it could work"
            title="Three steps toward more structured HR."
            description="A proposed approach to organizing people operations around the needs of your organization."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {workflowSteps.map(({ number, icon: Icon, title, description }, index) => (
              <article
                key={number}
                className="relative rounded-2xl border border-gray-200 bg-white p-6 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#FF631C]">
                    <Icon size={22} />
                  </div>

                  <span className="text-sm font-semibold tracking-widest text-orange-300">
                    {number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[#202020]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {description}
                </p>

                {index < workflowSteps.length - 1 && (
                  <ArrowRight
                    size={18}
                    className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-orange-400 md:block"
                  />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        id="benefits"
        className="scroll-mt-24 bg-[#171717] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionLabel>Designed around people</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              Give your HR team more time for people.
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-300">
              ZestHR explores how organized information and clearly defined
              processes could help teams approach everyday HR administration
              more consistently.
            </p>

            <ProductCTA className="mt-8">
              Discuss your requirements
            </ProductCTA>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF631C]/15 text-orange-300">
                  <Icon size={21} />
                </div>

                <h3 className="mt-5 text-base font-semibold">{title}</h3>

                <p className="mt-3 text-sm leading-7 text-gray-300">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Who it is for"
            title="HR needs change as businesses grow."
            description="ZestHR is being explored with different organizational needs in mind. The right scope depends on your team's requirements."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-gray-200 p-5 transition hover:border-orange-200 hover:bg-orange-50/30 sm:p-6"
              >
                <Icon size={23} className="text-[#FF631C]" />

                <h3 className="mt-5 text-lg font-semibold text-[#202020]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Preview */}
      <section className="bg-[#FAF9F7] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Explore the concept"
              title="A workspace organized around everyday HR tasks."
              description="Select a category in the preview to explore a proposed way of structuring the relevant workflow. It is a design illustration, not a functioning HR application."
            />

            <div className="space-y-4">
              {[
                'Employee information and records',
                'Attendance and leave processes',
                'New-employee onboarding',
                'Workforce reporting requirements',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#FF631C]"
                  />
                  <p className="text-sm leading-6 text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-xl border border-orange-200 bg-orange-50 p-4">
              <p className="text-sm font-semibold text-orange-900">
                Concept preview only
              </p>
              <p className="mt-2 text-sm leading-6 text-orange-800">
                This preview contains no employee metrics, real employee
                records, live analytics, or connected HR data.
              </p>
            </div>
          </div>

          <ProductWorkflowPreview />
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Questions about ZestHR?"
              description="Learn about the proposed product direction and how to discuss your organization's HR requirements with ZestBotz."
            />

            <ProductCTA>Contact ZestBotz</ProductCTA>
          </div>

          <div>
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                open={openFaq === index}
                onClick={() =>
                  setOpenFaq(openFaq === index ? -1 : index)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 overflow-hidden rounded-3xl bg-[#171717] p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
          <div className="max-w-2xl">
            <SectionLabel>Let's talk possibilities</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Ready to simplify your HR operations?
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
              Tell us about your organization and the HR processes you want
              to improve. Let's discuss whether the ZestHR concept fits
              your needs.
            </p>
          </div>

          <ProductCTA className="shrink-0 self-start lg:self-center">
            Talk to ZestBotz
          </ProductCTA>
        </div>
      </section>
    </main>
  )
}

export default ZestHR
