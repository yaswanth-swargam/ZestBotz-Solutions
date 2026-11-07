import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { servicesList } from '../data/company.js'

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

function SectionLabel({ children }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#FF631C]">
      {children}
    </p>
  )
}

export function Work() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-white text-[#0B0B0D]">
      {/* Hero */}
      <section
        className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 8% 12%, rgba(255,99,28,0.12), transparent 36%), radial-gradient(ellipse at 95% 70%, rgba(245,161,108,0.12), transparent 34%)',
        }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FF631C]/25 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FF631C]">
              <span className="h-2 w-2 rounded-full bg-[#FF631C]" />
              Engineering Standards & Case Studies
            </div>

            <h1 className="max-w-2xl text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[58px]">
              Practical engineering.{' '}
              <span className="text-[#FF631C]">Verifiable outcomes.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Explore our disciplined approach across intelligent automation, data engineering, healthcare analytics, and custom software. We focus on diagnosing the core operational friction before recommending or writing code.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/10 hover:bg-[#e05010] transition"
              >
                Explore Services
                <ArrowIcon />
              </Link>

              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#0B0B0D] hover:border-[#FF631C] hover:text-[#FF631C] transition"
              >
                Case Studies Policy
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Solution Framework Card */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[2rem] bg-[#FF631C]/10 blur-2xl" />

            <div className="relative rounded-[1.75rem] border border-black/[0.08] bg-white p-6 sm:p-8 shadow-xl">
              <div className="border-b border-black/[0.08] pb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF631C]">
                  Delivery Methodology
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-gray-900">
                  Four-Phase Engineering Cycle
                </h3>
              </div>

              <div className="space-y-3 py-6">
                {[
                  { step: '01', title: 'Understand', detail: 'Map inputs, business rules & exceptions', width: 'w-full' },
                  { step: '02', title: 'Design', detail: 'Specify architecture & validation constraints', width: 'w-[90%]' },
                  { step: '03', title: 'Build', detail: 'Develop modular code with automated assertions', width: 'w-[80%]' },
                  { step: '04', title: 'Improve', detail: 'Telemetry, logging & scheduled monitoring', width: 'w-[70%]' },
                ].map((item) => (
                  <div
                    key={item.step}
                    className={`relative ${item.width} rounded-xl border border-black/[0.07] bg-[#F8F8F8] p-3.5 transition hover:border-[#FF631C]/40 hover:bg-white`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FF631C]/10 text-xs font-bold text-[#FF631C]">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-gray-900">{item.title}</p>
                        <p className="text-[11px] text-gray-500">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="border-t border-black/[0.08] pt-4 text-xs leading-5 text-gray-500">
                Our standard solution development lifecycle. Every engagement incorporates strict validation checkpoints before production deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies commitment */}
      <section id="case-studies" className="scroll-mt-24 bg-[#F9F9FA] px-5 py-20 sm:px-8 lg:px-12 border-t border-black/[0.06]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Authentic Reporting Policy</SectionLabel>
            <h2 className="text-3xl font-semibold sm:text-4xl text-[#0B0B0D]">
              Real stories deserve verified facts.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              We do not fabricate client logos, invented ROI percentages, or hypothetical revenue statistics. Our case studies feature authorized, verified client engagements as they clear non-disclosure and approval milestones.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white shadow-md">
            <div className="grid md:grid-cols-[0.85fr_1.15fr]">
              <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-[#0B0B0D] p-8 text-white">
                <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#FF631C]/30 blur-3xl" />
                <div className="relative flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] text-2xl text-[#FF631C]">
                    <span>✦</span>
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#FF631C]">
                    Integrity Standard
                  </p>
                  <p className="mt-1 text-xl font-semibold">
                    Verified Engagements Only
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <span className="w-fit rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-semibold text-[#FF631C]">
                  Authentic Documentation
                </span>

                <h3 className="mt-4 text-2xl font-semibold sm:text-3xl text-gray-900">
                  Approved case studies published upon verification.
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  This repository showcases documented methodology and architectural patterns. Detailed customer case studies—including verified data on workflow reduction and error remediation—are released exclusively with client authorization.
                </p>

                <div className="mt-6 pt-4 border-t border-black/[0.06]">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FF631C] hover:underline"
                  >
                    <span>Discuss your operational challenge with us</span>
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Areas Grid */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel>Core Disciplines</SectionLabel>
              <h2 className="text-3xl font-semibold sm:text-4xl text-[#0B0B0D]">
                The technical capabilities behind our work.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF631C] hover:underline"
            >
              <span>View full service catalog</span>
              <ArrowIcon />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicesList.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="rounded-2xl border border-black/[0.08] bg-[#FAFAFA] p-6 flex flex-col justify-between hover:border-[#FF631C]/30 hover:bg-white transition"
              >
                <div>
                  <span className="text-xs font-bold text-[#FF631C]">{service.number}</span>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">{service.shortTitle}</h3>
                  <p className="mt-2 text-xs text-gray-600 leading-relaxed">{service.summary}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-black/[0.06]">
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF631C] hover:underline"
                  >
                    <span>View Details</span>
                    <ArrowIcon className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div
          className="mx-auto max-w-7xl rounded-3xl bg-[#0B0B0D] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 5% 10%, rgba(255,99,28,0.25), transparent 35%), radial-gradient(ellipse at 95% 90%, rgba(245,161,108,0.12), transparent 36%)',
          }}
        >
          <div className="max-w-2xl">
            <SectionLabel>Collaborate</SectionLabel>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Start your next project with a direct technical conversation.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
              Tell us about the bottleneck in your operations. We assess feasibility, suggest an appropriate architecture, and outline realistic milestones.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book-a-call"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#e05010] transition"
              >
                Schedule Technical Discovery
                <ArrowIcon />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:border-[#FF631C] hover:text-[#FF631C] transition"
              >
                Submit Project Details
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Work
