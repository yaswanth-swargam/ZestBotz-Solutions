import { useEffect, useMemo, useState } from 'react'

import { Link, useSearchParams } from 'react-router-dom'



import { API_BASE_URL } from '../config/api'

const API_URL = API_BASE_URL

const SERVICES = [

  'Discovery Call',

  'Agentic AI Solutions',

  'Process & Workflow Automation',

  'Web Scraping & Data Solutions',

  'ZestRCM',

  'ZestHR',

  'ZestSchool',

  'Other',

]



const TIMEZONE = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Kolkata'

async function parseApiResponse(response) {
  const contentType = response.headers.get('content-type') || ''
  const body = await response.text()

  let data
  if (contentType.includes('application/json')) {
    try {
      data = JSON.parse(body)
    } catch {
      throw new Error('The server returned invalid JSON. Please try again.')
    }
  } else {
    console.error('Non-JSON API response:', {
      url: response.url,
      status: response.status,
      contentType,
      body: body.slice(0, 300),
    })
    throw new Error(`Server returned an unexpected response (HTTP ${response.status}). Check the API route and backend URL.`)
  }

  if (!response.ok) {
    throw new Error(data?.message || `Request failed (HTTP ${response.status}).`)
  }

  return data
}



function getToday() {

  const parts = new Intl.DateTimeFormat('en-CA', {

    timeZone: TIMEZONE,

    year: 'numeric',

    month: '2-digit',

    day: '2-digit',

  }).formatToParts(new Date())



  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]))

  return `${values.year}-${values.month}-${values.day}`

}



function formatDate(date) {

  return new Intl.DateTimeFormat('en', {

    weekday: 'long',

    month: 'long',

    day: 'numeric',

    timeZone: 'UTC',

  }).format(new Date(`${date}T12:00:00Z`))

}



export default function BookingPage() {

  const [searchParams] = useSearchParams()



  const requestedService = searchParams.get('service')

  const initialService = SERVICES.find(

    (service) => service.toLowerCase() === requestedService?.toLowerCase()

  ) || 'Discovery Call'



  const today = useMemo(() => getToday(), [])



  const [service, setService] = useState(initialService)

  const [date, setDate] = useState(today)

  const [slots, setSlots] = useState([])

  const [selectedTime, setSelectedTime] = useState('')

  const [loadingSlots, setLoadingSlots] = useState(false)

  const [submitting, setSubmitting] = useState(false)

  const [error, setError] = useState('')

  const [booking, setBooking] = useState(null)



  const [form, setForm] = useState({

    name: '',

    email: '',

    company: '',

    message: '',

  })



  useEffect(() => {

    const controller = new AbortController()



    async function loadAvailability() {

      setLoadingSlots(true)

      setError('')

      setSlots([])

      setSelectedTime('')



      try {

        const params = new URLSearchParams({

          date,

          timezone: TIMEZONE,

        })



        const response = await fetch(

          `${API_URL}/api/bookings/availability?${params}`,

          { signal: controller.signal }

        )



        const data = await parseApiResponse(response)



        if (!response.ok || !data.success) {

          throw new Error(data.message || 'Could not load available times.')

        }



        setSlots(Array.isArray(data.slots) ? data.slots : [])

      } catch (err) {

        if (err.name !== 'AbortError') {

          setError(err.message || 'Could not load availability. Please try again.')

        }

      } finally {

        if (!controller.signal.aborted) setLoadingSlots(false)

      }

    }



    loadAvailability()

    return () => controller.abort()

  }, [date])



  function updateForm(event) {

    const { name, value } = event.target

    setForm((current) => ({ ...current, [name]: value }))

  }



  async function handleSubmit(event) {

    event.preventDefault()

    setError('')



    if (!selectedTime) {

      setError('Please choose an available time slot.')

      return

    }



    setSubmitting(true)



    try {

      const response = await fetch(`${API_URL}/api/bookings`, {

        method: 'POST',

        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify({

          ...form,

          service,

          date,

          time: selectedTime,

          timezone: TIMEZONE,

        }),

      })



      const data = await parseApiResponse(response)



      if (response.status === 202 && data.status === 'conference_pending') {

        setBooking({

          status: 'conference_pending',

          start: data.booking?.start,

          eventId: data.booking?.eventId,

          message: data.message,

        })

        return

      }



      if (!response.ok || !data.success) {

        throw new Error(data.message || 'Booking failed. Please try again.')

      }



      setBooking({

        status: data.status || 'confirmed',

        ...data.booking,

        message: data.message,

      })

    } catch (err) {

      setError(err.message || 'Something went wrong. Please try again.')

    } finally {

      setSubmitting(false)

    }

  }



  function resetBooking() {

    setBooking(null)

    setSelectedTime('')

    setForm({ name: '', email: '', company: '', message: '' })

  }



  return (

    <main className="min-h-screen bg-[#faf9f7] text-[#191919]">

      <header className="border-b border-black/5 bg-white/80">

        {/* <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">

          <Link to="/" className="text-xl font-extrabold tracking-tight">

            ZestBotz<span className="text-[#FF631C]">.</span>

          </Link>



          <Link

            to="/"

            className="text-sm font-medium text-gray-600 transition hover:text-[#FF631C]"

          >

            Back to website

          </Link>

        </div> */}

      </header>



      <section className="relative isolate overflow-hidden">

        <div className="pointer-events-none absolute -top-36 left-1/2 -z-10 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-[#FF631C]/10 blur-[100px]" />



        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">

          <div className="mx-auto mb-10 max-w-2xl text-center">

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#FF631C]">

              Let's talk possibilities

            </p>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">

              Book a <span className="text-[#FF631C]">discovery call.</span>

            </h1>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">

              Tell us what you're building or trying to improve. We'll explore

              how ZestBotz can help.

            </p>

          </div>



          {booking ? (

            <div className="mx-auto max-w-2xl rounded-3xl border border-black/5 bg-white p-7 shadow-xl shadow-black/5 sm:p-10">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF631C]/10 text-2xl text-[#FF631C]">

                {booking.status === 'confirmed' ? '✓' : '…'}

              </div>



              <h2 className="text-2xl font-bold">

                {booking.status === 'confirmed'

                  ? "You're booked!"

                  : 'Your booking needs a moment'}

              </h2>



              <p className="mt-3 leading-7 text-gray-600">

                {booking.status === 'confirmed'

                  ? 'Your booking was created. Check your calendar invitation for the meeting details.'

                  : booking.message ||

                    'The calendar event was created, but the meeting link is not ready yet. Please check your calendar before attempting another booking.'}

              </p>



              {booking.status === 'confirmed' && booking.start && (

                <div className="mt-6 rounded-2xl bg-gray-50 p-4 text-sm">

                  <p className="font-semibold">{service}</p>

                  <p className="mt-1 text-gray-600">

                    {new Date(booking.start).toLocaleString([], {

                      dateStyle: 'medium',

                      timeStyle: 'short',

                      timeZone: TIMEZONE,

                    })}{' '}

                    ({TIMEZONE})

                  </p>

                </div>

              )}



              {booking.status === 'confirmed' && booking.meetLink && (

                <a

                  href={booking.meetLink}

                  target="\_blank"

                  rel="noreferrer"

                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#FF631C] px-5 py-3.5 font-semibold text-white transition hover:bg-[#e85412] sm:w-auto"

                >

                  Open Zoho Meeting

                </a>

              )}



              <div className="mt-6">

                <Link

                  to="/"

                  className="text-sm font-semibold text-gray-600 hover:text-[#FF631C]"

                >

                  Return to website →

                </Link>

              </div>

            </div>

          ) : (

            <div className="grid overflow-hidden rounded-3xl border border-black/5 bg-white shadow-2xl shadow-black/[0.06] lg:grid-cols-[0.8fr_1.2fr]">

              <aside className="relative overflow-hidden bg-[#171717] p-7 text-white sm:p-10">

                <div className="pointer-events-none absolute -right-24 -top-20 h-64 w-64 rounded-full bg-[#FF631C]/25 blur-[80px]" />



                <div className="relative">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8B55]">

                    ZestBotz Solutions

                  </p>

                  <h2 className="mt-6 text-3xl font-bold leading-tight">

                    Good ideas start with a conversation.

                  </h2>

                  <p className="mt-4 leading-7 text-white/65">

                    Choose a time that works for you and let's discuss your

                    goals, challenges, and next steps.

                  </p>



                  <div className="mt-9 space-y-5 text-sm text-white/80">

                    <div className="flex items-center gap-3">

                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">

                        ◷

                      </span>

                      <div>

                        <p className="font-semibold text-white">30 minutes</p>

                        <p className="mt-1 text-white/50">Focused discussion</p>

                      </div>

                    </div>



                    <div className="flex items-center gap-3">

                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">

                        ↗

                      </span>

                      <div>

                        <p className="font-semibold text-white">Online meeting</p>

                        <p className="mt-1 text-white/50">Zoho Meeting invitation</p>

                      </div>

                    </div>



                    <div className="flex items-center gap-3">

                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">

                        ◉

                      </span>

                      <div>

                        <p className="font-semibold text-white">Your time zone</p>

                        <p className="mt-1 break-all text-white/50">{TIMEZONE}</p>

                      </div>

                    </div>

                  </div>



                  <div className="mt-12 border-t border-white/10 pt-5 text-xs leading-6 text-white/45">

                    No pressure. Just a conversation about what's possible.

                  </div>

                </div>

              </aside>



              <form onSubmit={handleSubmit} className="p-6 sm:p-10">

                <div>

                  <label htmlFor="service" className="mb-2 block text-sm font-semibold">

                    What would you like to discuss?

                  </label>

                  <select

                    id="service"

                    value={service}

                    onChange={(event) => setService(event.target.value)}

                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#FF631C] focus:ring-4 focus:ring-[#FF631C]/10"

                  >

                    {SERVICES.map((item) => (

                      <option key={item} value={item}>{item}</option>

                    ))}

                  </select>

                </div>



                <div className="mt-7">

                  <div className="flex flex-wrap items-end justify-between gap-3">

                    <div>

                      <h3 className="font-bold">Choose a date</h3>

                      <p className="mt-1 text-sm text-gray-500">

                        Available times update from our calendar.

                      </p>

                    </div>

                    <span className="text-xs text-gray-400">{TIMEZONE}</span>

                  </div>



                  <input

                    type="date"

                    value={date}

                    min={today}

                    onChange={(event) => setDate(event.target.value)}

                    required

                    className="mt-4 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#FF631C] focus:ring-4 focus:ring-[#FF631C]/10 sm:max-w-xs"

                  />



                  <div className="mt-5">

                    <p className="mb-3 text-sm font-semibold">

                      {date ? formatDate(date) : 'Select a date'}

                    </p>



                    {loadingSlots ? (

                      <div className="flex items-center gap-3 py-5 text-sm text-gray-500">

                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-gray-200 border-t-[#FF631C]" />

                        Checking availability…

                      </div>

                    ) : error && slots.length === 0 ? (

                      <p className="rounded-xl bg-red-50 p-4 text-sm text-red-700">

                        {error}

                      </p>

                    ) : slots.length === 0 ? (

                      <p className="rounded-xl bg-gray-50 p-4 text-sm leading-6 text-gray-500">

                        No available slots for this date. Please choose another date.

                      </p>

                    ) : (

                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">

                        {slots.map((slot) => (

                          <button

                            key={slot.time}

                            type="button"

                            onClick={() => setSelectedTime(slot.time)}

                            aria-pressed={selectedTime === slot.time}

                            className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${

                              selectedTime === slot.time

                                ? 'border-[#FF631C] bg-[#FF631C] text-white shadow-md shadow-[#FF631C]/20'

                                : 'border-gray-200 bg-white text-gray-700 hover:border-[#FF631C] hover:text-[#FF631C]'

                            }`}

                          >

                            {slot.label}

                          </button>

                        ))}

                      </div>

                    )}

                  </div>

                </div>



                <div className="my-8 border-t border-gray-100" />



                <h3 className="font-bold">Your details</h3>

                <p className="mt-1 text-sm text-gray-500">

                  So we know who we're meeting.

                </p>



                <div className="mt-5 grid gap-4 sm:grid-cols-2">

                  <div>

                    <label htmlFor="name" className="mb-2 block text-sm font-medium">

                      Full name *

                    </label>

                    <input

                      id="name"

                      name="name"

                      autoComplete="name"

                      required

                      maxLength={120}

                      value={form.name}

                      onChange={updateForm}

                      placeholder="Your name"

                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#FF631C] focus:ring-4 focus:ring-[#FF631C]/10"

                    />

                  </div>



                  <div>

                    <label htmlFor="email" className="mb-2 block text-sm font-medium">

                      Work email *

                    </label>

                    <input

                      id="email"

                      name="email"

                      type="email"

                      autoComplete="email"

                      required

                      maxLength={254}

                      value={form.email}

                      onChange={updateForm}

                      placeholder="you@company.com"

                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#FF631C] focus:ring-4 focus:ring-[#FF631C]/10"

                    />

                  </div>



                  <div className="sm:col-span-2">

                    <label htmlFor="company" className="mb-2 block text-sm font-medium">

                      Company <span className="font-normal text-gray-400">(optional)</span>

                    </label>

                    <input

                      id="company"

                      name="company"

                      autoComplete="organization"

                      maxLength={160}

                      value={form.company}

                      onChange={updateForm}

                      placeholder="Your company or organisation"

                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#FF631C] focus:ring-4 focus:ring-[#FF631C]/10"

                    />

                  </div>



                  <div className="sm:col-span-2">

                    <label htmlFor="message" className="mb-2 block text-sm font-medium">

                      Anything we should know? <span className="font-normal text-gray-400">(optional)</span>

                    </label>

                    <textarea

                      id="message"

                      name="message"

                      rows={3}

                      maxLength={2000}

                      value={form.message}

                      onChange={updateForm}

                      placeholder="Briefly tell us about your goals…"

                      className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#FF631C] focus:ring-4 focus:ring-[#FF631C]/10"

                    />

                  </div>

                </div>



                {error && (

                  <p role="alert" className="mt-5 rounded-xl bg-red-50 p-4 text-sm leading-6 text-red-700">

                    {error}

                  </p>

                )}



                <button

                  type="submit"

                  disabled={submitting || loadingSlots || !selectedTime}

                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF631C] px-5 py-4 font-bold text-white shadow-lg shadow-[#FF631C]/20 transition hover:bg-[#e85412] disabled:cursor-not-allowed disabled:opacity-50"

                >

                  {submitting ? 'Creating your booking…' : 'Confirm booking'}

                  {!submitting && <span aria-hidden="true">→</span>}

                </button>



                <p className="mt-4 text-center text-xs leading-5 text-gray-400">

                  Your time is checked again when you submit. A slot may be

                  taken by someone else before confirmation.

                </p>

              </form>

            </div>

          )}

        </div>

      </section>



      <footer className="border-t border-black/5 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">

          <p>© {new Date().getFullYear()} ZestBotz Solutions</p>

          <p>Thoughtful conversations. Smarter solutions.</p>

        </div>

      </footer>

    </main>

  )

}
