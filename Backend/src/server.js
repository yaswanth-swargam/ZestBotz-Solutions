
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'

import contactRoutes from './routes/contactRoutes.js'
import careerRoutes from './routes/careerRoutes.js'
import bookingRoutes from './routes/bookingRoutes.js'
import zohoAuthRoutes from './routes/zohoAuthRoutes.js'

const app = express()
const PORT = Number(process.env.PORT) || 5000

app.set('trust proxy', 1)

app.use(helmet())

const allowedOrigins = [
  'https://zest-botz-solutions-one.vercel.app',
  'http://localhost:5173',
  'https://zestbotz.com',
  'https://www.zestbotz.com',
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
    message: 'Too many booking submissions. Please try again later.',
  },
})

app.get('/api/health', (_req, res) => {
  res.json({
    success: true,
    message: 'ZestBotz backend is running.',
  })
})

app.use('/api/contact', formLimiter, contactRoutes)
app.use('/api/careers', formLimiter, careerRoutes)

app.use(
  '/api/bookings',
  (req, res, next) => {
    if (req.method === 'GET' && req.path === '/availability') {
      return availabilityLimiter(req, res, next)
    }

    if (req.method === 'POST' && req.path === '/') {
      return bookingLimiter(req, res, next)
    }

    return next()
  },
  bookingRoutes
)

app.use('/api/zoho', zohoAuthRoutes)

app.use((err, _req, res, _next) => {
  console.error('Server error:', err)

  res.status(500).json({
    success: false,
    message: 'An unexpected server error occurred.',
  })
})

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`)
})
