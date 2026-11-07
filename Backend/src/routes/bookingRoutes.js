
// import { Router } from 'express'
// import rateLimit from 'express-rate-limit'
// import { DateTime } from 'luxon'
// import {
//   getZohoCalendars,
//   getZohoEvents,
//   zohoCalendarRequest,
// } from '../config/zohoCalendar.js'
// import transporter from '../config/mailer.js'

// const router = Router()

// const availabilityLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   limit: 60,
//   standardHeaders: 'draft-7',
//   legacyHeaders: false,
//   message: {
//     success: false,
//     message: 'Too many availability requests. Please try again later.',
//   },
// })

// const bookingLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   limit: 10,
//   standardHeaders: 'draft-7',
//   legacyHeaders: false,
//   message: {
//     success: false,
//     message: 'Too many booking submissions. Please try again later.',
//   },
// })

// const SERVICES = [
//   'Discovery Call',
//   'Agentic AI Solutions',
//   'Process & Workflow Automation',
//   'Web Scraping & Data Solutions',
//   'ZestRCM',
//   'ZestHR',
//   'ZestSchool',
//   'Other',
// ]

// const DEFAULT_TIMEZONE = 'Asia/Kolkata'
// const SLOT_MINUTES = 30
// const START_HOUR = 9
// const END_HOUR = 22

// function validDate(value, timezone) {
//   const parsed = DateTime.fromISO(value, { zone: timezone })
//   return parsed.isValid && parsed.toISODate() === value
// }

// function getEventStart(event) {
//   const value =
//     event.dateandtime?.start ||
//     event.start ||
//     event.start_time ||
//     event.startTime

//   if (!value) return null

//   if (typeof value === 'number') {
//     return DateTime.fromMillis(value, { zone: 'utc' })
//   }

//   // Zoho Calendar can return compact UTC date-time strings.
//   if (/^\d{8}T\d{6}Z?$/.test(value)) {
//     const normalized = value.endsWith('Z') ? value : `${value}Z`
//     return DateTime.fromFormat(normalized, "yyyyMMdd'T'HHmmss'Z'", {
//       zone: 'utc',
//     })
//   }

//   return DateTime.fromISO(value, { setZone: true })
// }

// function getEventEnd(event) {
//   const value =
//     event.dateandtime?.end ||
//     event.end ||
//     event.end_time ||
//     event.endTime

//   if (!value) return null

//   if (typeof value === 'number') {
//     return DateTime.fromMillis(value, { zone: 'utc' })
//   }

//   if (/^\d{8}T\d{6}Z?$/.test(value)) {
//     const normalized = value.endsWith('Z') ? value : `${value}Z`
//     return DateTime.fromFormat(normalized, "yyyyMMdd'T'HHmmss'Z'", {
//       zone: 'utc',
//     })
//   }

//   return DateTime.fromISO(value, { setZone: true })
// }

// async function getSupportCalendar() {
//   const result = await getZohoCalendars()
//   const calendars = result.calendars

//   if (!Array.isArray(calendars) || calendars.length === 0) {
//     throw new Error('No Zoho calendars were returned.')
//   }

//   const calendar =
//     calendars.find(
//       (item) =>
//         item.name?.toLowerCase() === 'support' ||
//         item.uid === process.env.ZOHO_CALENDAR_UID ||
//         item.id === process.env.ZOHO_CALENDAR_ID
//     ) || null

//   if (!calendar?.uid) {
//     throw new Error(
//       'Support calendar not found. Check ZOHO_CALENDAR_UID and your Zoho calendar configuration.'
//     )
//   }

//   return calendar
// }

// async function getEventsForDay(calendar, date, timezone) {
//   const dayStart = DateTime.fromISO(date, { zone: timezone }).startOf('day')
//   const dayEnd = dayStart.plus({ days: 1 })

//   const result = await getZohoEvents(
//     calendar.uid,
//     dayStart.toUTC().toFormat("yyyyMMdd'T'HHmmss'Z'"),
//     dayEnd.toUTC().toFormat("yyyyMMdd'T'HHmmss'Z'")
//   )

//   return Array.isArray(result.events) ? result.events : []
// }

// function overlaps(start, end, otherStart, otherEnd) {
//   return start < otherEnd && end > otherStart
// }

// function buildSlots(date, timezone, events) {
//   const dayStart = DateTime.fromISO(date, { zone: timezone }).startOf('day')
//   const now = DateTime.now().setZone(timezone)
//   const slots = []

//   for (
//     let minutes = START_HOUR * 60;
//     minutes + SLOT_MINUTES <= END_HOUR * 60;
//     minutes += SLOT_MINUTES
//   ) {
//     const start = dayStart.plus({ minutes })
//     const end = start.plus({ minutes: SLOT_MINUTES })

//     if (start <= now) continue

//     const busy = events.some((event) => {
//       const eventStart = getEventStart(event)
//       const eventEnd = getEventEnd(event)

//       if (!eventStart?.isValid || !eventEnd?.isValid) return false

//       return overlaps(
//         start.toMillis(),
//         end.toMillis(),
//         eventStart.toMillis(),
//         eventEnd.toMillis()
//       )
//     })

//     if (!busy) {
//       slots.push({
//         time: start.toFormat('HH:mm'),
//         label: start.toFormat('h:mm a'),
//       })
//     }
//   }

//   return slots
// }

// function extractMeetingLink(event) {
//   return (
//     event?.conference_data?.meetingdata?.meeting_link ||
//     event?.conference_data?.meeting_link ||
//     event?.app_data?.meetingdata?.meetinglink ||
//     event?.meeting_link ||
//     event?.meetingLink ||
//     null
//   )
// }

// function formatZohoDateTime(dateTime) {
//   return dateTime.toUTC().toFormat("yyyyMMdd'T'HHmmss'Z'")
// }

// // GET /api/bookings/availability?date=YYYY-MM-DD&timezone=Asia/Kolkata
// router.get('/availability', availabilityLimiter, async (req, res) => {
//   try {
//     const date = req.query.date
//     const timezone = req.query.timezone || DEFAULT_TIMEZONE

//     if (typeof date !== 'string' || !DateTime.now().setZone(timezone).isValid) {
//       return res.status(400).json({
//         success: false,
//         message: 'Please provide a valid date and timezone.',
//       })
//     }

//     if (!validDate(date, timezone)) {
//       return res.status(400).json({
//         success: false,
//         message: 'Invalid date. Use YYYY-MM-DD.',
//       })
//     }

//     const selectedDay = DateTime.fromISO(date, { zone: timezone }).startOf('day')
//     const today = DateTime.now().setZone(timezone).startOf('day')

//     if (selectedDay < today) {
//       return res.json({ success: true, slots: [] })
//     }

//     const calendar = await getSupportCalendar()
//     const events = await getEventsForDay(calendar, date, timezone)
//     const slots = buildSlots(date, timezone, events)

//     return res.json({
//       success: true,
//       date,
//       timezone,
//       slots,
//     })
//   } catch (error) {
//     console.error('Booking availability error:', error.message)

//     return res.status(500).json({
//       success: false,
//       message: 'Unable to load availability. Please check the backend logs.',
//     })
//   }
// })

// // POST /api/bookings
// router.post('/', bookingLimiter, async (req, res) => {
//   try {
//     const { name, email, company = '', message = '', service, date, time } =
//       req.body

//     const timezone = req.body.timezone || DEFAULT_TIMEZONE

//     if (
//       typeof name !== 'string' ||
//       !name.trim() ||
//       typeof email !== 'string' ||
//       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
//       typeof service !== 'string' ||
//       !SERVICES.includes(service) ||
//       typeof date !== 'string' ||
//       typeof time !== 'string' ||
//       !/^\d{2}:\d{2}$/.test(time) ||
//       !DateTime.now().setZone(timezone).isValid ||
//       !validDate(date, timezone)
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: 'Please provide valid booking details.',
//       })
//     }

//     if (
//       typeof company !== 'string' ||
//       typeof message !== 'string' ||
//       name.trim().length > 120 ||
//       email.length > 254 ||
//       company.length > 160 ||
//       message.length > 2000
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: 'One or more fields exceed the allowed length.',
//       })
//     }

//     const start = DateTime.fromISO(`${date}T${time}`, { zone: timezone })
//     const end = start.plus({ minutes: SLOT_MINUTES })

//     if (
//       !start.isValid ||
//       start.toFormat('HH:mm') !== time ||
//       start.hour < START_HOUR ||
//       end.hour > END_HOUR ||
//       (end.hour === END_HOUR && end.minute > 0) ||
//       start <= DateTime.now().setZone(timezone)
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: 'That time is invalid or no longer available.',
//       })
//     }

//     const calendar = await getSupportCalendar()
//     const events = await getEventsForDay(calendar, date, timezone)

//     const isBusy = events.some((event) => {
//       const eventStart = getEventStart(event)
//       const eventEnd = getEventEnd(event)

//       if (!eventStart?.isValid || !eventEnd?.isValid) return false

//       return overlaps(
//         start.toMillis(),
//         end.toMillis(),
//         eventStart.toMillis(),
//         eventEnd.toMillis()
//       )
//     })

//     if (isBusy) {
//       return res.status(409).json({
//         success: false,
//         message: 'That slot has just been booked. Please choose another time.',
//       })
//     }

//     const eventData = {
//       title: `${service} — ${name.trim()}`,
//       dateandtime: {
//         timezone,
//         start: formatZohoDateTime(start),
//         end: formatZohoDateTime(end),
//       },
//       isallday: false,
//       isprivate: false,
//       description: [
//         `Service: ${service}`,
//         `Name: ${name.trim()}`,
//         `Email: ${email.trim()}`,
//         `Company: ${company.trim() || 'Not provided'}`,
//         `Message: ${message.trim() || 'Not provided'}`,
//       ].join('\n'),
//       attendees: [
//   {
//     email: email.trim(),
//     permission: 1,
//     attendance: 1,
//   },
// ],
//       notify_attendee: 1,
//       transparency: 0,
//       conference: 'zmeeting',
//     }

//     const result = await zohoCalendarRequest(
//       `/calendars/${calendar.uid}/events?eventdata=${encodeURIComponent(
//         JSON.stringify(eventData)
//       )}`,
//       { method: 'POST' }
//     )

//     const event = result.events?.[0] || result.event || null

//     if (!event) {
//       console.error('Unexpected Zoho event response:', result)

//       return res.status(502).json({
//         success: false,
//         message: 'Zoho did not return the created event. Check your calendar before retrying.',
//       })
//     }

//     const meetLink = extractMeetingLink(event)

    
//     if (!meetLink) {
//       return res.status(202).json({
//         success: false,
//         status: 'conference_pending',
//         message:
//           'The calendar event was created, but Zoho did not return a meeting link. Please check your calendar before attempting another booking.',
//         booking: {
//           eventId: event.id,
//           start: start.toISO(),
//         },
//       })
//     }


//     const recipients = [
//   email.trim(),
//   process.env.TEAM_EMAIL,
//   'support@zestbotz.com',
// ].filter(Boolean)

// await transporter.sendMail({
//   from: process.env.EMAIL_USER,
//   to: recipients,
//   subject: `Booking Confirmation: ${service}`,
//   text: `
// Booking confirmed!

// Name: ${name.trim()}
// Email: ${email.trim()}
// Company: ${company.trim() || 'Not provided'}
// Service: ${service}
// Date: ${date}
// Time: ${start.toFormat('h:mm a')} (IST)
// Meeting link: ${meetLink}
// Message: ${message.trim() || 'Not provided'}
//   `,
// })

//     return res.status(201).json({
//       success: true,
//       status: 'confirmed',
//       message: 'Your booking has been created successfully.',
//       booking: {
//         eventId: event.id,
//         start: start.toISO(),
//         service,
//         meetLink,
//       },
//     })
//   } catch (error) {
//     console.error('Booking creation error:', error.message)

//     return res.status(500).json({
//       success: false,
//       message: 'Unable to create your booking. Please check the backend logs and calendar before retrying.',
//     })
//   }
// })

// export default router




import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import { DateTime } from 'luxon'
import {
  getZohoCalendars,
  getZohoEvents,
  zohoCalendarRequest,
} from '../config/zohoCalendar.js'
import { sendTransactionalEmail } from '../services/emailService.js'

const router = Router()

const availabilityLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 60,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
})

const bookingLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
})

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

const DEFAULT_TIMEZONE = 'Asia/Kolkata'
const SLOT_MINUTES = 30
const START_HOUR = 9
const END_HOUR = 22

function validDate(value, timezone) {
  const parsed = DateTime.fromISO(value, { zone: timezone })
  return parsed.isValid && parsed.toISODate() === value
}

function getEventStart(event) {
  const value =
    event.dateandtime?.start ||
    event.start ||
    event.start_time ||
    event.startTime

  if (!value) return null

  if (typeof value === 'number') {
    return DateTime.fromMillis(value, { zone: 'utc' })
  }

  if (/^\d{8}T\d{6}Z?$/.test(value)) {
    const normalized = value.endsWith('Z') ? value : `${value}Z`

    return DateTime.fromFormat(
      normalized,
      "yyyyMMdd'T'HHmmss'Z'",
      { zone: 'utc' }
    )
  }

  return DateTime.fromISO(value, { setZone: true })
}

function getEventEnd(event) {
  const value =
    event.dateandtime?.end ||
    event.end ||
    event.end_time ||
    event.endTime

  if (!value) return null

  if (typeof value === 'number') {
    return DateTime.fromMillis(value, { zone: 'utc' })
  }

  if (/^\d{8}T\d{6}Z?$/.test(value)) {
    const normalized = value.endsWith('Z') ? value : `${value}Z`

    return DateTime.fromFormat(
      normalized,
      "yyyyMMdd'T'HHmmss'Z'",
      { zone: 'utc' }
    )
  }

  return DateTime.fromISO(value, { setZone: true })
}

async function getSupportCalendar() {
  const result = await getZohoCalendars()
  const calendars = result.calendars

  if (!Array.isArray(calendars) || calendars.length === 0) {
    throw new Error('No Zoho calendars were returned.')
  }

  const calendar =
    calendars.find(
      (item) =>
        item.name?.toLowerCase() === 'support' ||
        item.uid === process.env.ZOHO_CALENDAR_UID ||
        item.id === process.env.ZOHO_CALENDAR_ID
    ) || null

  if (!calendar?.uid) {
    throw new Error('Support calendar not found. Check Zoho configuration.')
  }

  return calendar
}

async function getEventsForDay(calendar, date, timezone) {
  const dayStart = DateTime.fromISO(date, { zone: timezone }).startOf('day')
  const dayEnd = dayStart.plus({ days: 1 })

  const result = await getZohoEvents(
    calendar.uid,
    dayStart.toUTC().toFormat("yyyyMMdd'T'HHmmss'Z'"),
    dayEnd.toUTC().toFormat("yyyyMMdd'T'HHmmss'Z'")
  )

  return Array.isArray(result.events) ? result.events : []
}

function overlaps(start, end, otherStart, otherEnd) {
  return start < otherEnd && end > otherStart
}

function buildSlots(date, timezone, events) {
  const dayStart = DateTime.fromISO(date, { zone: timezone }).startOf('day')
  const now = DateTime.now().setZone(timezone)
  const slots = []

  for (
    let minutes = START_HOUR * 60;
    minutes + SLOT_MINUTES <= END_HOUR * 60;
    minutes += SLOT_MINUTES
  ) {
    const start = dayStart.plus({ minutes })
    const end = start.plus({ minutes: SLOT_MINUTES })

    if (start <= now) continue

    const busy = events.some((event) => {
      const eventStart = getEventStart(event)
      const eventEnd = getEventEnd(event)

      if (!eventStart?.isValid || !eventEnd?.isValid) return false

      return overlaps(
        start.toMillis(),
        end.toMillis(),
        eventStart.toMillis(),
        eventEnd.toMillis()
      )
    })

    if (!busy) {
      slots.push({
        time: start.toFormat('HH:mm'),
        label: start.toFormat('h:mm a'),
      })
    }
  }

  return slots
}

function extractMeetingLink(event) {
  return (
    event?.conference_data?.meetingdata?.meeting_link ||
    event?.conference_data?.meeting_link ||
    event?.app_data?.meetingdata?.meetinglink ||
    event?.meeting_link ||
    event?.meetingLink ||
    null
  )
}

function formatZohoDateTime(dateTime) {
  return dateTime.toUTC().toFormat("yyyyMMdd'T'HHmmss'Z'")
}

// GET /api/bookings/availability
router.get('/availability', availabilityLimiter, async (req, res) => {
  try {
    const date = req.query.date
    const timezone = req.query.timezone || DEFAULT_TIMEZONE

    if (
      typeof date !== 'string' ||
      !DateTime.now().setZone(timezone).isValid
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid date and timezone.',
      })
    }

    if (!validDate(date, timezone)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid date. Use YYYY-MM-DD.',
      })
    }

    const selectedDay = DateTime.fromISO(date, { zone: timezone }).startOf('day')
    const today = DateTime.now().setZone(timezone).startOf('day')

    if (selectedDay < today) {
      return res.json({ success: true, slots: [] })
    }

    const calendar = await getSupportCalendar()
    const events = await getEventsForDay(calendar, date, timezone)
    const slots = buildSlots(date, timezone, events)

    return res.json({
      success: true,
      date,
      timezone,
      slots,
    })
  } catch (error) {
    console.error('Booking availability error:', error.message)

    return res.status(500).json({
      success: false,
      message: 'Unable to load availability. Please check backend logs.',
    })
  }
})

// POST /api/bookings
router.post('/', bookingLimiter, async (req, res) => {
  try {
    const {
      name,
      email,
      company = '',
      message = '',
      service,
      date,
      time,
    } = req.body

    const timezone = req.body.timezone || DEFAULT_TIMEZONE

    if (
      typeof name !== 'string' ||
      !name.trim() ||
      typeof email !== 'string' ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof service !== 'string' ||
      !SERVICES.includes(service) ||
      typeof date !== 'string' ||
      typeof time !== 'string' ||
      !/^\d{2}:\d{2}$/.test(time) ||
      !DateTime.now().setZone(timezone).isValid ||
      !validDate(date, timezone)
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please provide valid booking details.',
      })
    }

    if (
      typeof company !== 'string' ||
      typeof message !== 'string' ||
      name.trim().length > 120 ||
      email.length > 254 ||
      company.length > 160 ||
      message.length > 2000
    ) {
      return res.status(400).json({
        success: false,
        message: 'One or more fields exceed the allowed length.',
      })
    }

    const start = DateTime.fromISO(`${date}T${time}`, { zone: timezone })
    const end = start.plus({ minutes: SLOT_MINUTES })

    if (
      !start.isValid ||
      start.toFormat('HH:mm') !== time ||
      start.hour < START_HOUR ||
      end.hour > END_HOUR ||
      (end.hour === END_HOUR && end.minute > 0) ||
      start <= DateTime.now().setZone(timezone)
    ) {
      return res.status(400).json({
        success: false,
        message: 'That time is invalid or no longer available.',
      })
    }

    const calendar = await getSupportCalendar()
    const events = await getEventsForDay(calendar, date, timezone)

    const isBusy = events.some((event) => {
      const eventStart = getEventStart(event)
      const eventEnd = getEventEnd(event)

      if (!eventStart?.isValid || !eventEnd?.isValid) return false

      return overlaps(
        start.toMillis(),
        end.toMillis(),
        eventStart.toMillis(),
        eventEnd.toMillis()
      )
    })

    if (isBusy) {
      return res.status(409).json({
        success: false,
        message: 'That slot has just been booked. Please choose another time.',
      })
    }

    const eventData = {
      title: `${service} — ${name.trim()}`,
      dateandtime: {
        timezone,
        start: formatZohoDateTime(start),
        end: formatZohoDateTime(end),
      },
      isallday: false,
      isprivate: false,
      description: [
        `Service: ${service}`,
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Company: ${company.trim() || 'Not provided'}`,
        `Message: ${message.trim() || 'Not provided'}`,
      ].join('\n'),
      attendees: [
        {
          email: email.trim(),
          permission: 1,
          attendance: 1,
        },
      ],
      notify_attendee: 1,
      transparency: 0,
      conference: 'zmeeting',
    }

    // Zoho Calendar event creation remains unchanged.
    const result = await zohoCalendarRequest(
      `/calendars/${calendar.uid}/events?eventdata=${encodeURIComponent(
        JSON.stringify(eventData)
      )}`,
      { method: 'POST' }
    )

    const event = result.events?.[0] || result.event || null

    if (!event) {
      console.error('Unexpected Zoho event response:', result)

      return res.status(502).json({
        success: false,
        message: 'Zoho did not return the created event. Check your calendar before retrying.',
      })
    }

    const meetLink = extractMeetingLink(event)

    if (!meetLink) {
      return res.status(202).json({
        success: false,
        status: 'conference_pending',
        message:
          'The calendar event was created, but Zoho did not return a meeting link. Please check your calendar before attempting another booking.',
        booking: {
          eventId: event.id,
          start: start.toISO(),
        },
      })
    }

    const bookingEmailText = `
Booking confirmed!

Name: ${name.trim()}
Email: ${email.trim()}
Company: ${company.trim() || 'Not provided'}
Service: ${service}
Date: ${date}
Time: ${start.toFormat('h:mm a')} (${timezone})
Meeting link: ${meetLink}
Message: ${message.trim() || 'Not provided'}
    `.trim()

    const teamRecipients = [
      process.env.TEAM_EMAIL,
      process.env.CONTACT_EMAIL,
      process.env.BREVO_SENDER_EMAIL,
      'support@zestbotz.com',
    ]
      .filter((value) => typeof value === 'string' && value.trim())
      .filter(
        (value, index, values) =>
          values.findIndex(
            (item) => item.toLowerCase() === value.toLowerCase()
          ) === index
      )

    // Send customer and team emails independently.
    // Email failure must not undo an already-created calendar booking.
    const emailResults = await Promise.allSettled([
      sendTransactionalEmail({
        to: email.trim(),
        subject: `Your ${service} is confirmed — ZestBotz Solutions`,
        text: bookingEmailText,
      }),
      ...(teamRecipients.length
        ? [
            sendTransactionalEmail({
              to: teamRecipients,
              replyTo: email.trim(),
              subject: `New booking: ${service} — ${name.trim()}`,
              text: bookingEmailText,
            }),
          ]
        : []),
    ])

    const failedEmailCount = emailResults.filter(
      (result) => result.status === 'rejected'
    ).length

    if (failedEmailCount > 0) {
      console.error('Booking created, but Brevo emails failed:', {
        failedEmailCount,
        errors: emailResults
          .filter((result) => result.status === 'rejected')
          .map((result) => ({
            message: result.reason?.message,
            status: result.reason?.status,
            brevoResponse: result.reason?.brevoResponse,
          })),
      })
    }

    return res.status(201).json({
      success: true,
      status: 'confirmed',
      message: 'Your booking has been created successfully.',
      emailNotifications: failedEmailCount === 0 ? 'accepted' : 'pending',
      booking: {
        eventId: event.id,
        start: start.toISO(),
        service,
        meetLink,
      },
    })
  } catch (error) {
    console.error('Booking creation error:', error.message)

    return res.status(500).json({
      success: false,
      message: 'Unable to create your booking. Please check the backend logs and calendar before retrying.',
    })
  }
})

export default router