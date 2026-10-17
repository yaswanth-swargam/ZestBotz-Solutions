import { Link } from 'react-router-dom'

const services = [
  {
    id: 'ai-automation',
    number: '01',
    title: 'AI Automation & RPA',
    category: 'Core Service',
    description:
      'Reduce repetitive manual labor by deploying robotic process automation (RPA) and intelligent workflow triggers across everyday business operations.',
    features: [
      'Robotic Process Automation (RPA)',
      'Automated multi-system data entry',
      'Approval routing and exception alerts',
      'Scheduled background processing',
    ],
    href: '/services/process-workflow-page',
    tag: 'Efficiency & Speed',
  },
  {
    id: 'agentic-ai',
    number: '02',
    title: 'Agentic AI Solutions',
    category: 'Core Service',
    description:
      'Autonomous, goal-driven AI agents that reason, plan, and execute multi-step business tasks with built-in human-in-the-loop governance.',
    features: [
      'Multi-agent task orchestration',
      'LLM integration with business tools',
      'Automated research and summarization',
      'Human review and safety checkpoints',
    ],
    href: '/services/agentic-ai-page',
    tag: 'Autonomous Intelligence',
  },
  {
    id: 'data-engineering',
    number: '03',
    title: 'Data Engineering & Pipelines',
    category: 'Core Service',
    description:
      'Architect robust data pipelines, ETL/ELT workflows, and structured warehouses that transform fragmented business inputs into clean, reliable data assets.',
    features: [
      'Automated ETL/ELT pipeline design',
      'Data warehousing & schema modeling',
      'Cross-platform API & DB synchronization',
      'Data cleaning, validation & anomaly checks',
    ],
    href: '/services/data-analytics',
    tag: 'Data Architecture',
  },
  {
    id: 'healthcare-analytics',
    number: '04',
    title: 'Healthcare Analytics & RCM',
    category: 'Industry Specialty',
    description:
      'Streamline healthcare Revenue Cycle Management (RCM) workflows, insurance claims validation, denial root-cause analysis, and clinical administrative reporting.',
    features: [
      'Pre-submission claims scrubbing',
      'Automated insurance eligibility verification',
      'Denial management and appeal tracking',
      'Accounts receivable (AR) aging analytics',
    ],
    href: '/services/healthcare-page',
    tag: 'Healthcare Focus',
  },
  {
    id: 'power-bi',
    number: '05',
    title: 'Power BI & BI Dashboards',
    category: 'Core Service',
    description:
      'Interactive executive dashboards and drill-down reports built in Microsoft Power BI and modern BI suites for real-time operational decision-making.',
    features: [
      'Custom Power BI interactive dashboards',
      'Real-time KPI and financial tracking',
      'Automated scheduled report distribution',
      'Data modeling and DAX metric formulation',
    ],
    href: '/services/data-analytics',
    tag: 'Business Intelligence',
  },
  {
    id: 'custom-software',
    number: '06',
    title: 'Custom Software & Web Development',
    category: 'Core Service',
    description:
      'Full-stack web applications, business platforms, customer portals, and tailored digital experiences engineered for security, speed, and scalability.',
    features: [
      'Modern responsive web apps (React, Node)',
      'Secure REST & GraphQL API architecture',
      'Role-based access & admin control panels',
      'Cloud deployment and ongoing maintenance',
    ],
    href: '/services/web-software-page',
    tag: 'Full-Stack Engineering',
  },
  {
    id: 'web-scraping',
    number: '07',
    title: 'Web Scraping & Data Extraction',
    category: 'Specialized Service',
    description:
      'Automated, compliant web data harvesting that extracts pricing, market signals, business directories, and public records into clean structured datasets.',
    features: [
      'High-throughput web scraping pipelines',
      'Format normalization & deduplication',
      'Scheduled data feeds & delivery hooks',
      'Proxy rotation and reliability monitoring',
    ],
    href: '/services/web-scraping-page',
    tag: 'Market Intelligence',
  },
  {
    id: 'chatbot-integration',
    number: '08',
    title: 'Chatbot & Conversational AI',
    category: 'Specialized Service',
    description:
      'Smart customer-facing and internal assistant chatbots connected to company knowledge bases, ticketing systems, and live support routing.',
    features: [
      'RAG-powered conversational interfaces',
      '24/7 lead qualification and capture',
      'Seamless human agent escalation',
      'Multi-channel web & application integration',
    ],
    href: '/services/chatbot-page',
    tag: 'Customer Experience',
  },
  {
    id: 'erp-solutions',
    number: '09',
    title: 'Enterprise ERP Solutions',
    category: 'Enterprise Systems',
    description:
      'Integrated enterprise resource planning configurations connecting finance, inventory, human resources, and operations into a single operational hub.',
    features: [
      'Connected departmental workflows',
      'Inventory, procurement & supply visibility',
      'Workforce & HR process management',
      'Cross-system unified reporting',
    ],
    href: '/services/erp-page',
    tag: 'Enterprise Operations',
  },
]

export function Services() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* Hero */}
      <section
        className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 8% 12%, rgba(232,89,12,0.15), transparent 38%), radial-gradient(ellipse at 95% 75%, rgba(245,161,108,0.16), transparent 35%)',
        }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8590C]">
            Our Capabilities & Expertise
          </p>

          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[68px]">
            Comprehensive solutions for <br />
            <span className="text-[#E8590C]">modern, data-driven enterprises.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#555555] sm:text-lg">
            From autonomous AI agents and robotic process automation to end-to-end data engineering, Power BI business intelligence, healthcare analytics, and custom software development — we build purpose-driven systems that accelerate business growth.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#service-catalog"
              className="inline-flex items-center gap-2 rounded-full bg-[#E8590C] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c94b08]"
            >
              Browse all services
              <span aria-hidden="true">↓</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 px-7 py-3.5 text-sm font-semibold transition hover:border-[#E8590C] hover:text-[#E8590C]"
            >
              Consult with an engineer
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="service-catalog" className="scroll-mt-20 px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8590C]">
              Service Portfolio
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">
              Engineered for impact and measurable ROI.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#666666]">
              Every solution is shaped to solve real bottlenecks, integrate with your current tech stack, and deliver tangible efficiency.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="group flex flex-col justify-between rounded-2xl border border-black/[0.08] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#E8590C]/40 hover:shadow-xl hover:shadow-orange-950/5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl font-bold text-[#E8590C]">
                      {service.number}
                    </span>
                    <span className="rounded-full bg-[#F5F5F5] px-3 py-1 text-xs font-semibold text-[#555555]">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-2xl text-[#111111]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#555555]">
                    {service.description}
                  </p>

                  <div className="mt-6 border-t border-black/[0.06] pt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#777777]">
                      Key Highlights
                    </p>
                    <ul className="mt-3 space-y-2">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-xs leading-5 text-[#444444]">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8590C]" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-black/[0.06] pt-5">
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#E8590C] transition group-hover:gap-3"
                  >
                    Explore {service.title}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-24">
        <div
          className="mx-auto max-w-7xl overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-14 sm:py-20"
          style={{
            background:
              'radial-gradient(ellipse at 5% 10%, rgba(232,89,12,0.24), transparent 35%), radial-gradient(ellipse at 95% 90%, rgba(245,161,108,0.14), transparent 36%), #111111',
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5A16C]">
            Ready to upgrade your workflows?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            Let's build a customized solution for your business.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70">
            Reach out to our engineering and consulting team to discuss your process challenges, automation opportunities, and analytics goals.
          </p>

          <div className="mt-9 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#E8590C] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#c94b08]"
            >
              Schedule a Discovery Call
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
