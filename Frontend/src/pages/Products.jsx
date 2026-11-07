import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import {
  SchoolOSModal,
  DEFAULT_SCHOOLOS_DEPLOYED_URL,
} from '../components/SchoolOSModal'
import {
  Sparkles,
  ExternalLink,
  ShieldCheck,
  MessageSquare,
  Lock,
  ArrowRight,
  School,
} from 'lucide-react'

// Product Suite Order strictly per requirements: 1. SchoolOS, 2. ZestHR, 3. ZestRCM
const products = [
  {
    number: '01',
    name: 'SchoolOS',
    route: '/products/zestSchool',
    isFlagship: true,
    status: 'Concept / Development Roadmap',
    badge: 'Planned SaaS Roadmap',
    statusBadge: 'Concept / Roadmap Prototype',
    category: 'Education Technology • Multi-Tenant SaaS',
    tagline: 'Planned school operations and administration platform for Indian schools.',
    description:
      'A planned school management SaaS platform engineered around Indian school administration workflows (CBSE / ICSE / State Boards). Designed to combine student records, attendance tracking, automated WhatsApp alerts, physical perimeter gate passes, and non-toxic constructive growth analytics.',
    features: [
      'Strict multi-tenant data isolation design (school_id)',
      'Automated WhatsApp parent alerts for attendance and circulars',
      'Perimeter student safety gate pass workflow with guard verification',
      'Constructive academic growth metrics and mastery bands',
      'Interactive sandbox prototype with multiple pre-configured test roles',
      'High-throughput architecture designed for scalable school administration',
    ],
    accent: '#2563EB',
    symbol: '▦',
    deployedUrl: DEFAULT_SCHOOLOS_DEPLOYED_URL,
  },
  {
    number: '02',
    name: 'ZestHR',
    route: '/products/zestHR',
    status: 'Product-Page Concept',
    statusBadge: 'Product-Page Concept',
    category: 'Human Resources & People Operations',
    tagline: 'Structured employee records and routine people workflows.',
    description:
      'A product-page concept exploring streamlined employee profiles, leave request reviews, attendance tracking, and internal onboarding task checklists for growing small and medium-sized teams.',
    features: [
      'Employee directory and department records design',
      'Leave application and approval workflow structure',
      'Attendance summary and tracking views',
      'Standardized internal HR reporting templates',
    ],
    accent: '#7C3AED',
    symbol: '◎',
  },
  {
    number: '03',
    name: 'ZestRCM Analytics',
    route: '/products/zestRCM',
    status: 'Prototype / In Development',
    statusBadge: 'Working Prototype',
    category: 'Healthcare Technology & Revenue Operations',
    tagline: 'Operational visibility for healthcare revenue cycle workflows.',
    description:
      'An RCM analytics prototype designed for healthcare billing agencies, independent clinics, and revenue operations teams. Focuses on claims status tracking, denial categorization, AR aging, and payment trend models without exposing confidential patient health information.',
    features: [
      'Claims, payments, and adjustment reporting models',
      'Denial category breakdown and root-cause indicators',
      'Accounts receivable aging trends and missing-data alerts',
      'Automated reconciliation models for posted remittances',
    ],
    accent: '#FF631C',
    symbol: '✚',
  },
]

export function Products() {
  const [searchParams] = useSearchParams()
  const [isSchoolOSModalOpen, setIsSchoolOSModalOpen] = useState(false)
  const [modalInitialTab, setModalInitialTab] = useState('overview')

  useEffect(() => {
    window.scrollTo(0, 0)
    const enquireParam = searchParams.get('enquire')
    const modalParam = searchParams.get('modal')
    if (
      enquireParam?.toLowerCase() === 'schoolos' ||
      modalParam?.toLowerCase() === 'schoolos'
    ) {
      setModalInitialTab('enquire')
      setIsSchoolOSModalOpen(true)
    }
  }, [searchParams])

  const openSchoolOSModal = (tab = 'overview') => {
    setModalInitialTab(tab)
    setIsSchoolOSModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-white text-[#0B0B0D]">
      {/* SchoolOS Detailed Modal */}
      <SchoolOSModal
        isOpen={isSchoolOSModalOpen}
        onClose={() => setIsSchoolOSModalOpen(false)}
        initialTab={modalInitialTab}
      />

      {/* Hero */}
      <section
        className="relative overflow-hidden px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 8% 12%, rgba(255,99,28,0.14), transparent 38%), radial-gradient(ellipse at 95% 75%, rgba(37,99,235,0.12), transparent 35%)',
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold uppercase tracking-wider text-[#FF631C]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Portfolio</span>
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[62px]">
            Purpose-built solutions.{' '}
            <span className="text-[#FF631C]">Transparent progress.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Explore the ZestBotz product portfolio across school administration, human resources, and healthcare operations. Every product is presented according to its verified implementation status.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#product-list"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF631C] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/10 hover:bg-[#e05010] transition"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-12 grid max-w-3xl grid-cols-3 gap-4 border-t border-black/10 pt-6">
            {[
              ['01', 'SchoolOS Platform', 'Planned SaaS Roadmap'],
              ['02', 'ZestHR Concept', 'Product-Page Concept'],
              ['03', 'ZestRCM Analytics', 'Prototype in Development'],
            ].map(([number, label, status]) => (
              <div key={number}>
                <p className="text-xl text-[#FF631C] sm:text-2xl font-bold">
                  {number}
                </p>
                <p className="mt-1 text-xs text-gray-900 font-semibold">
                  {label}
                </p>
                <p className="text-[11px] text-gray-500">
                  {status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product list */}
      <section
        id="product-list"
        className="scroll-mt-20 px-6 py-20 sm:px-8 lg:px-10 bg-[#F9F9FA]"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF631C]">
              Product Overview
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Targeted solutions with clear engineering roadmaps.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              We distinguish clearly between implemented functionality, working prototypes, and conceptual roadmap demonstrations.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {products.map((product) => {
              const isSchoolOS = product.name === 'SchoolOS'

              return (
                <article
                  key={product.name}
                  id={product.name.toLowerCase()}
                  className="group overflow-hidden rounded-3xl border border-black/[0.08] bg-white transition duration-300 hover:border-black/15 hover:shadow-xl hover:shadow-black/[0.04]"
                >
                  <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                    {/* Identity panel */}
                    <div
                      className="relative flex min-h-[300px] flex-col justify-between overflow-hidden p-7 sm:p-10 lg:min-h-[420px]"
                      style={{
                        backgroundImage: `radial-gradient(ellipse at 85% 15%, ${product.accent}24, transparent 48%), linear-gradient(135deg, #FAFAFA, #F4F4F4)`,
                      }}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF631C]">
                          Product {product.number}
                        </span>

                        <div className="flex items-center gap-1.5 flex-wrap justify-end">
                          <span className="rounded-full bg-white/90 border border-black/10 px-2.5 py-0.5 text-[11px] font-semibold text-gray-700 shadow-xs">
                            {product.statusBadge}
                          </span>
                        </div>
                      </div>

                      <div className="relative mt-8">
                        <div
                          className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl text-white shadow-md"
                          style={{ backgroundColor: product.accent }}
                          aria-hidden="true"
                        >
                          {product.symbol}
                        </div>

                        <h3 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                          {product.name}
                        </h3>

                        <p className="mt-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {product.category}
                        </p>

                        <p className="mt-3 max-w-sm text-sm leading-6 text-gray-700 font-medium">
                          {product.tagline}
                        </p>

                        {isSchoolOS && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                              <MessageSquare className="w-3 h-3 text-blue-600" /> WhatsApp Alerts
                            </span>
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-100 text-emerald-800">
                              <ShieldCheck className="w-3 h-3 text-emerald-600" /> Gate Pass Safety
                            </span>
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800">
                              <Lock className="w-3 h-3 text-purple-600" /> Multi-Tenant
                            </span>
                          </div>
                        )}
                      </div>

                      <div
                        className="pointer-events-none absolute -bottom-20 -right-12 h-56 w-56 rounded-full border-[35px] opacity-15 transition duration-500 group-hover:scale-110"
                        style={{ borderColor: product.accent }}
                      />
                    </div>

                    {/* Details panel */}
                    <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12 bg-white">
                      <div>
                        <div className="inline-flex items-center gap-2 rounded-md bg-amber-50 border border-amber-200/80 px-2.5 py-1 text-[11.5px] font-medium text-amber-900">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                          <span>Status: {product.status}</span>
                        </div>

                        <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                          {product.description}
                        </p>

                        <h4 className="mt-6 text-xs font-bold uppercase tracking-wider text-gray-900">
                          Architecture & Planned Highlights
                        </h4>

                        <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                          {product.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-start gap-2 text-xs sm:text-sm leading-5 text-gray-600"
                            >
                              <span
                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{ backgroundColor: product.accent }}
                              />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="mt-8 border-t border-black/[0.08] pt-6 flex flex-wrap items-center gap-3 justify-between">
                        {isSchoolOS ? (
                          <div className="flex flex-wrap items-center gap-2.5">
                            <button
                              type="button"
                              onClick={() => openSchoolOSModal('overview')}
                              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-blue-500 shadow-xs"
                            >
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>Explore Prototype Overview</span>
                            </button>

                            <Link
                              to={product.route}
                              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#FF631C] px-3 py-2 transition"
                            >
                              <span>View Product Details</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        ) : (
                          <div className="flex items-center gap-4">
                            <Link
                              to={product.route}
                              className="inline-flex items-center gap-2 rounded-xl bg-[#0B0B0D] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-[#FF631C]"
                            >
                              <span>View Dedicated Page</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        )}

                        <Link
                          to={`/contact?interest=${encodeURIComponent(product.name)}`}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-600 hover:text-[#FF631C] transition"
                        >
                          <span>Enquire about {product.name}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 sm:px-8 lg:px-10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl border border-black/[0.08] bg-[#FAFAFA] p-7 sm:p-10 md:flex-row md:items-center md:justify-between lg:p-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF631C]">
              Custom Software Inquiries
            </p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl text-gray-900">
              Need a custom solution for your school or enterprise?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
              We design and engineer bespoke software applications, internal portals, and automated data workflows around your exact business requirements.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#0B0B0D] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#FF631C]"
          >
            Talk to Our Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Products
