import 'dotenv/config'
import express, { type NextFunction, type Request, type Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import connectDB from './config/db.js'
import contactRoutes from './routes/contactRoutes.js'
import authRoutes from './routes/authRoutes.js'

const app = express()
app.set('trust proxy', 1) // Render sits behind a proxy
app.use(helmet())
app.use(cors({ origin: (process.env.CLIENT_URL ?? 'http://localhost:5173').split(',').map((s) => s.trim()) }))
app.use(express.json({ limit: '20kb' }))

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 20, standardHeaders: true, legacyHeaders: false })

app.get('/api/health', (_req: Request, res: Response) => { res.json({ ok: true }) })
app.use('/api/contact', limiter, contactRoutes)
app.use('/api/auth', limiter, authRoutes)

app.use((_req: Request, res: Response) => { res.status(404).json({ message: 'Not found' }) })
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err)
  res.status(500).json({ message: 'Server error. Please try again later.' })
})

const port = Number(process.env.PORT ?? 5000)
connectDB()
  .then(() => app.listen(port, () => console.log(`API running on port ${port}`)))
  .catch((err: unknown) => {
    console.error('Startup failed:', err instanceof Error ? err.message : err)
    process.exit(1)
  })
