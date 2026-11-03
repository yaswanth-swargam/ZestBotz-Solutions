import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'

import contactRoutes from './routes/contactRoutes.js'
import careerRoutes from './routes/careerRoutes.js'
import bookingRoutes from './routes/bookingRoutes.js'
import zohoAuthRoutes from './routes/zohoAuthRoutes.js'
import transporter from './config/mailer.js'
const app = express()
const PORT = Number(process.env.PORT) || 5000
const isProd = process.env.NODE_ENV === 'production'

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'https:'],
        connectSrc: ["'self'"],
        fontSrc: ["'self'", 'data:'],
        objectSrc: ["'none'"],
        frameAncestors: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
      },
    },
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: false,
    },
    referrerPolicy: {
      policy: 'strict-origin-when-cross-origin',
    },
  })
)

// Permissions-Policy header for least-privilege defense
app.use((_req, res, next) => {
  res.setHeader(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=(), usb=(), vr=(), interest-cohort=()'
  )
  next()
})

const allowedOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(',').map((origin) => origin.trim())
  : [
      'https://zestbotz.com',
      'https://www.zestbotz.com',
      ...(!isProd ? ['http://localhost:5173', 'http://localhost:3000'] : []),
    ]

// app.use(
//   cors({
//     origin: process.env.CLIENT_URL || 'http://localhost:5173',
//   })
// )

const allowedOrigins = [
  'https://zest-botz-solutions-one.vercel.app',
  'http://localhost:5173',
]

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true)
      }

      console.error('CORS blocked origin:', origin)
      return callback(new Error('Not allowed by CORS'))
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
)

app.use(express.json({ limit: '20kb' }))

const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many submissions. Please try again later.',
  },
})

const availabilityLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 60,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many availability requests. Please try again later.',
  },
})

const bookingLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many bookings attempted. Please try again later.',
  },
})


app.get('/api/test-email', async (_req, res) => {
  try {
    await transporter.verify()

    res.json({
      success: true,
      message: 'SMTP connection verified successfully.',
    })
  } catch (error) {
    console.error('SMTP verification failed:', {
      message: error.message,
      code: error.code,
      command: error.command,
      responseCode: error.responseCode,
    })

    res.status(500).json({
      success: false,
      message: 'SMTP verification failed.',
      code: error.code,
    })
  }
})

app.get('/api/health', (_req, res) => {
  res.json({
    success: true,
    message: 'ZestBotz backend is running.',
    timestamp: new Date().toISOString(),
  })
}

app.get('/api/health', healthHandler)
app.get('/health', healthHandler)

app.use('/api/contact', formLimiter, contactRoutes)
app.use('/api/careers', formLimiter, careerRoutes)

app.use('/api/bookings', (req, res, next) => {
  if (req.method === 'GET' && (req.path === '/availability' || req.path === '/available-slots')) {
    return availabilityLimiter(req, res, next)
  }

  if (req.method === 'POST' && req.path === '/') {
    return bookingLimiter(req, res, next)
  }

  return next()
}, bookingRoutes)

app.use('/api/zoho', zohoAuthRoutes)

app.use((err, _req, res, _next) => {
  console.error('Server error:', err)

  res.status(500).json({
    success: false,
    message: 'An unexpected server error occurred.',
  })
})

app.listen(PORT, () => {
  console.log(`Backend service listening on port ${PORT}`)
})
