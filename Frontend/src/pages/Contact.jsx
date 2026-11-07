
import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { School, Sparkles, CheckCircle2 } from 'lucide-react'

const interests = [
  'SchoolOS (School Operations Platform)',
  'ZestHR (Human Resources)',
  'ZestRCM (Healthcare RCM)',
  'AI & Agentic AI',
  'Process & Workflow Automation',
  'Web Scraping & Data Solutions',
  'Web & Software Development',
  'Data Analytics',
  'ERP Solutions',
  'Chatbot Integration',
  'Other',
]

export function Contact() {
  const [searchParams] = useSearchParams()

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  })

  useEffect(() => {
    const rawInterest = searchParams.get('interest')
    if (rawInterest) {
      const lower = rawInterest.toLowerCase()
      if (lower.includes('schoolos') || lower.includes('school')) {
        setForm((prev) => ({
          ...prev,
          interest: 'SchoolOS (School Operations Platform)',
          message: prev.message || 'Hello ZestBotz team, I would like to enquire about SchoolOS for our school/institution. We are interested in the automated WhatsApp parent alerts, physical perimeter gate passes, and constructive academic analytics.',
        }))
      } else if (lower.includes('rcm')) {
        setForm((prev) => ({
          ...prev,
          interest: 'ZestRCM (Healthcare RCM)',
        }))
      } else if (lower.includes('hr')) {
        setForm((prev) => ({
          ...prev,
          interest: 'ZestHR (Human Resources)',
        }))
      } else {
        const found = interests.find((item) => item.toLowerCase().includes(lower))
        if (found) {
          setForm((prev) => ({ ...prev, interest: found }))
        }
      }
    }
  }, [searchParams])

  const [status, setStatus] = useState({
    loading: false,
    type: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setStatus({
      loading: true,
      type: '',
      message: '',
    })

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send enquiry.')
      }

      setStatus({
        loading: false,
        type: 'success',
        message: 'Thank you! Your enquiry has been sent successfully.',
      })

      setForm({
        name: '',
        email: '',
        company: '',
        interest: '',
        message: '',
      })
    } catch (error) {
      setStatus({
        loading: false,
        type: 'error',
        message:
          error.message ||
          'Unable to send your enquiry. Please try again later.',
      })
    }
  }

  const inputClass =
    'w-full rounded-xl border border-black/15 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#E8590C] focus:ring-2 focus:ring-[#E8590C]/10'

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* Hero */}
      <section
        className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 8% 12%, rgba(232,89,12,0.12), transparent 36%), radial-gradient(ellipse at 95% 70%, rgba(245,161,108,0.12), transparent 34%)',
        }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8590C]">
            Contact Us
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[62px]">
            Get in <span className="text-[#E8590C]">Touch</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#555555] sm:text-lg">
            Reach out to us for inquiries, partnerships, or to discuss how
            ZestBotz can help with your business needs.
          </p>
        </div>
      </section>

      {/* Contact form and details */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          {/* Form */}
          <div>
            <h2 className="text-2xl sm:text-3xl">
              Send us a message
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#666666]">
              Tell us a little about your requirements and we’ll have the
              information ready for a conversation.
            </p>

            {form.interest.includes('SchoolOS') && (
              <div className="mt-5 p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 flex items-start gap-3">
                <School className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <div className="text-xs sm:text-sm">
                  <p className="font-semibold text-blue-950">
                    Enquiring about ZestBotz SchoolOS™ (B2B SaaS)
                  </p>
                  <p className="mt-0.5 text-blue-800">
                    Looking for a school demonstration, live WhatsApp parent alerts, perimeter gate pass safety, or custom pricing for CBSE / ICSE institutions? We will prepare tailored materials for your school.
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <Link
                      to="/products#schoolos"
                      className="font-medium text-blue-700 underline hover:text-blue-900"
                    >
                      ← Back to SchoolOS Overview
                    </Link>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Full name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    maxLength={120}
                    autoComplete="name"
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Work email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                    autoComplete="email"
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  maxLength={200}
                  autoComplete="organization"
                  placeholder="Company name (optional)"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="mb-2 block text-sm font-medium"
                >
                  Area of interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select an area</option>
                  {interests.map((interest) => (
                    <option key={interest} value={interest}>
                      {interest}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  How can we help? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  maxLength={5000}
                  rows={5}
                  placeholder="Tell us about your project or requirements..."
                  className={`${inputClass} resize-y`}
                />
              </div>

              {/* Submission feedback */}
              {status.message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl px-4 py-3 text-sm leading-6 ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-700'
                      : 'bg-red-50 text-red-700'
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className="inline-flex items-center gap-2 rounded-full bg-[#E8590C] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c94b08] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status.loading ? 'Sending...' : 'Send enquiry'}
                {!status.loading && (
                  <span aria-hidden="true"></span>
                )}
              </button>

              <p className="text-xs leading-6 text-[#777777]">
                Your enquiry will be sent securely to our team. We’ll get
                back to you as soon as possible.
              </p>
            </form>
          </div>

          {/* Contact information */}
          <aside className="h-fit rounded-2xl border border-black/[0.08] bg-[#F7F7F7] p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl">
              Contact Information
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#666666]">
              Have a question or an idea? Get in touch with our team.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8590C]/10 text-lg text-[#E8590C]">
                  @
                </span>
                <div>
                  <h3 className="text-sm font-semibold">Email</h3>
                  <a
                    href="mailto:support@zestbotz.com"
                    className="mt-1 inline-block text-sm text-[#666666] transition hover:text-[#E8590C]"
                  >
                  support@zestbotz.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8590C]/10 text-lg text-[#E8590C]">
                  ↗
                </span>
                <div>
                  <h3 className="text-sm font-semibold">Website</h3>
                  <a
                    href="https://www.zestbotz.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-sm text-[#666666] transition hover:text-[#E8590C]"
                  >
                    www.zestbotz.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8590C]/10 text-lg text-[#E8590C]">
                  ▶
                </span>
                <div>
                  <h3 className="text-sm font-semibold">YouTube</h3>
                  <a
                    href="https://www.youtube.com/@zestbotzsolutions"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-sm text-[#666666] transition hover:text-[#E8590C]"
                  >
                    ZestBotz Solutions
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8590C]/10 text-lg text-[#E8590C]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.1.55 4.15 1.6 5.96L.07 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.44h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.42-8.43ZM12.06 21.8a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.74.98 1-3.65-.24-.38a9.87 9.87 0 1 1 8.39 4.65Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.49-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.48.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  </span>
  <div>
    <h3 className="text-sm font-semibold">Whatsapp</h3>
    <a
      href="https://wa.me/917973645912"
      target="_blank"
      className="mt-1 inline-block text-sm text-[#666666] transition hover:text-[#E8590C]"
    >
      +91 7973645912
    </a>
  </div>
</div>
            </div>

            <div className="mt-8 border-t border-black/10 pt-6">
              <p className="text-sm leading-7 text-[#666666]">
                Interested in AI, automation, analytics, or software
                development? Share your requirements and start a conversation
                with us.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default Contact
