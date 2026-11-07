import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { servicesList, company } from '../data/company.js'

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

export function Services() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-white text-[#0B0B0D]">
      {/* Hero Section */}
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
            Practical Engineering · 8 Core Disciplines
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[58px]">
            Targeted technology solutions built for{' '}
            <span className="text-[#FF631C]">operational reality.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            We partner with businesses to automate manual workflows, build reliable data pipelines, and develop custom software. We apply AI and automation where they bring practical value—never for novelty.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#services-catalog"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e05010] shadow-md shadow-orange-500/10"
            >
              Browse 8 Service Areas
              <ArrowIcon />
            </a>

            <Link
              to="/book-a-call"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#0B0B0D] transition hover:border-[#FF631C] hover:text-[#FF631C]"
            >
              Book a Discovery Call
              <ArrowIcon />
            </Link>
          </div>

          {/* Three Promises Pills */}
          <div className="mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 border-t border-black/10 pt-6">
            {company.promises.map((promise) => (
              <div key={promise.title} className="rounded-xl border border-black/[0.06] bg-white/70 p-4">
                <p className="text-base font-semibold text-[#0B0B0D]">{promise.title}</p>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Catalog */}
      <section id="services-catalog" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 bg-[#F9F9FA]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF631C]">
              Comprehensive Portfolio
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Eight specialized service categories.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Each discipline is designed with explicit technical scope, verifiable deliverables, and clear exception handling.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {servicesList.map((service) => (
              <article
                key={service.id}
                className="group flex flex-col justify-between rounded-3xl border border-black/[0.08] bg-white p-7 sm:p-9 transition duration-300 hover:-translate-y-1 hover:border-[#FF631C]/40 hover:shadow-[0_20px_50px_rgba(11,11,13,0.06)]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF631C]/10 text-sm font-bold text-[#FF631C]">
                      {service.number}
                    </span>
                    <div className="flex flex-wrap gap-1.5 justify-end">
                      {service.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black/[0.07] bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-[#0B0B0D] group-hover:text-[#FF631C] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {service.summary}
                  </p>

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Core Technologies
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-gray-100 px-2 py-0.5 text-[11.5px] text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-black/[0.06] flex items-center justify-between">
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF631C] transition hover:gap-3"
                  >
                    <span>Read Full Service Specification</span>
                    <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 bg-white border-t border-black/[0.06]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF631C]">
                How We Deliver
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Structured, transparent delivery without unnecessary complexity.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                Whether you need a targeted Python automation script or a full-scale healthcare data analytics model, we work through established engineering checkpoints with clear validation.
              </p>
              <div className="mt-6">
                <Link
                  to="/book-a-call"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0B0B0D] px-6 py-3 text-sm font-semibold text-white hover:bg-[#FF631C] transition"
                >
                  Schedule Initial Consultation
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  step: '01',
                  title: 'Process Mapping & Discovery',
                  desc: 'We map inputs, file structures, edge cases, and human touchpoints to confirm technical viability.',
                },
                {
                  step: '02',
                  title: 'Architecture & Pilot Prototype',
                  desc: 'A working prototype is developed and verified against sample or staging data before production rollout.',
                },
                {
                  step: '03',
                  title: 'Testing & Human Verification',
                  desc: 'We test retry mechanisms, error logging, and exception flows with approval gates intact.',
                },
                {
                  step: '04',
                  title: 'Production Handover & Monitoring',
                  desc: 'Scheduled execution, pipeline alerts, automated logging, and responsive maintenance support.',
                },
              ].map((phase) => (
                <div key={phase.step} className="rounded-2xl border border-black/[0.07] bg-[#FAFAFA] p-5 sm:p-6">
                  <span className="text-xs font-bold text-[#FF631C]">{phase.step}</span>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">{phase.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div
          className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] bg-[#0B0B0D] p-8 sm:p-12 lg:p-16 text-white relative"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 5% 10%, rgba(255,99,28,0.22), transparent 35%), radial-gradient(ellipse at 95% 90%, rgba(245,161,108,0.12), transparent 36%)',
          }}
        >
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF631C]">
              Let's Solve Your Operational Bottleneck
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Ready to automate work, connect your data, and improve decisions?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              Tell us about your existing process, file formats, or system challenges. We will evaluate feasibility and outline a practical solution.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#e05010] transition"
              >
                Start a Conversation
                <ArrowIcon />
              </Link>
              <Link
                to="/book-a-call"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:border-[#FF631C] hover:text-[#FF631C] transition"
              >
                Book Discovery Call
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
