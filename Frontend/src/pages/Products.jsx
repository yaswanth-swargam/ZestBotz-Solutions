import { Link } from 'react-router-dom'

const products = [
  {
    number: '01',
    name: 'ZestRCM',
    category: 'Healthcare Technology',
    tagline: 'Bring clarity to healthcare revenue operations.',
    description:
      'A healthcare Revenue Cycle Management solution concept focused on claims visibility, denial analysis, billing workflows, and revenue-cycle insights.',
    features: [
      'Claims and billing visibility',
      'Denial analysis',
      'Revenue-cycle analytics',
      'Workflow automation',
    ],
    accent: '#E8590C',
    symbol: '✚',
  },
  {
    number: '02',
    name: 'SchoolOS',
    category: 'Education Technology',
    tagline: 'A smarter way to manage school operations.',
    description:
      'A school management platform concept designed to bring everyday academic and administrative workflows into one organized experience.',
    features: [
      'Student information management',
      'Academic administration',
      'Attendance and records',
      'School communication workflows',
    ],
    accent: '#2563EB',
    symbol: '▦',
  },
  {
    number: '03',
    name: 'ZestHR',
    category: 'Human Resources',
    tagline: 'Simplify the employee lifecycle.',
    description:
      'An HR management solution concept focused on organizing employee information, recruitment activities, and routine HR workflows.',
    features: [
      'Employee information management',
      'Recruitment workflows',
      'Leave and attendance tracking',
      'HR process automation',
    ],
    accent: '#7C3AED',
    symbol: '◎',
  },
]

export function Products() {
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
            Our Products
          </p>

          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[68px]">
            Purpose-built solutions.
            <br />
            <span className="text-[#E8590C]">Designed for impact.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#555555] sm:text-lg">
            Explore the ZestBotz product portfolio across healthcare,
            education, and human resources. Discover solutions designed to
            simplify workflows and support better business operations.
          </p>

          <a
            href="#product-list"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#E8590C] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c94b08]"
          >
            Explore our products
            <span aria-hidden="true">&darr;</span>
          </a>

          <div className="mt-14 grid max-w-3xl grid-cols-3 gap-4 border-t border-black/10 pt-6">
            {[
              ['01', 'Healthcare'],
              ['02', 'Education'],
              ['03', 'HR & People'],
            ].map(([number, label]) => (
              <div key={number}>
                <p className="font-serif text-2xl text-[#E8590C] sm:text-3xl">
                  {number}
                </p>
                <p className="mt-2 text-xs text-[#666666] sm:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product list */}
      <section
        id="product-list"
        className="scroll-mt-20 px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8590C]">
              The Product Suite
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Technology with a purpose.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#666666] sm:text-base">
              Different industries. Different challenges. A shared focus on
              making everyday work simpler and more efficient.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {products.map((product) => (
              <article
                key={product.name}
                className="group overflow-hidden rounded-3xl border border-black/[0.08] bg-white transition duration-300 hover:border-black/15 hover:shadow-xl hover:shadow-black/[0.04]"
              >
                <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                  {/* Product identity panel */}
                  <div
                    className="relative flex min-h-[280px] flex-col justify-between overflow-hidden p-7 sm:p-10 lg:min-h-[380px]"
                    style={{
                      backgroundImage: `radial-gradient(ellipse at 85% 15%, ${product.accent}24, transparent 48%), linear-gradient(135deg, #FAFAFA, #F4F4F4)`,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#666666]">
                        Product {product.number}
                      </span>
                      <span
                        className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs text-[#555555]"
                      >
                        {product.category}
                      </span>
                    </div>

                    <div className="relative mt-10">
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl text-white shadow-lg"
                        style={{ backgroundColor: product.accent }}
                        aria-hidden="true"
                      >
                        {product.symbol}
                      </div>

                      <h3 className="mt-6 font-serif text-4xl tracking-tight sm:text-5xl">
                        {product.name}
                      </h3>

                      <p className="mt-3 max-w-sm text-sm leading-7 text-[#555555]">
                        {product.tagline}
                      </p>
                    </div>

                    <div
                      className="pointer-events-none absolute -bottom-20 -right-12 h-56 w-56 rounded-full border-[35px] opacity-20 transition duration-500 group-hover:scale-110"
                      style={{ borderColor: product.accent }}
                    />
                  </div>

                  {/* Product details */}
                  <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                    <p className="text-sm leading-8 text-[#555555] sm:text-base">
                      {product.description}
                    </p>

                    <h4 className="mt-8 text-sm font-semibold">
                      Solution highlights
                    </h4>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {product.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 text-sm leading-6 text-[#555555]"
                        >
                          <span
                            className="mt-2 h-2 w-2 shrink-0 rounded-full"
                            style={{ backgroundColor: product.accent }}
                          />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="mt-9 border-t border-black/[0.08] pt-6">
                      <Link
                        to={`/contact?interest=${encodeURIComponent(product.name)}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold transition hover:gap-3"
                        style={{ color: product.accent }}
                      >
                        Enquire about {product.name}
                        <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-24"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 90% 80%, rgba(232,89,12,0.09), transparent 40%)',
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl border border-black/[0.08] bg-[#F8F7F5] p-7 sm:p-10 md:flex-row md:items-center md:justify-between lg:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8590C]">
              Let&apos;s talk
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              Looking for a solution for your business?
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#666666] sm:text-base">
              Tell us about your requirements. Our team can help you explore
              the right direction for your organization.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#E8590C]"
          >
            Talk to our team
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Products
