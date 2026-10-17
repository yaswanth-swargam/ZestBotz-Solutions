import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'

import contactRoutes from './routes/contactRoutes.js'
import careerRoutes from './routes/careerRoutes.js'

const app = express()
const PORT = Number(process.env.PORT) || 5000

// Security headers
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
)

// CORS configuration supporting local dev, preview URLs, and production domains
const configuredOrigins = (process.env.CLIENT_URL || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean)

const allowedOrigins = new Set([
  'http://localhost:5173',
  'http://localhost:4173',
  'http://localhost:3000',
  'https://zestbotz-solutions.vercel.app',
  ...configuredOrigins,
])

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, server-to-server)
      if (!origin) return callback(null, true)

      if (
        allowedOrigins.has(origin) ||
        /^https:\/\/zestbotz[a-zA-Z0-9-]*\.vercel\.app$/.test(origin)
      ) {
        return callback(null, true)
      }

      callback(new Error(`CORS blocked for origin: ${origin}`))
    },
    credentials: true,
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

app.get('/api/health', (_req, res) => {
  res.json({
    success: true,
    message: 'ZestBotz backend is running.',
  })
})

app.use('/api/contact', formLimiter, contactRoutes)
app.use('/api/careers', formLimiter, careerRoutes)

app.use((err, _req, res, _next) => {
  console.error('Server error:', err.message)

  res.status(500).json({
    success: false,
    message: 'An unexpected server error occurred.',
  })
})

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`)
})