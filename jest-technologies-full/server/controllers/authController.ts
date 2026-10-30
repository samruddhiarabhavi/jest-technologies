import crypto from 'crypto'
import type { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

// Compare via hashes so length differences don't leak and comparison is constant-time.
const safeEqual = (a: unknown, b: unknown): boolean => {
  const ha = crypto.createHash('sha256').update(String(a)).digest()
  const hb = crypto.createHash('sha256').update(String(b)).digest()
  return crypto.timingSafeEqual(ha, hb)
}

export function login(req: Request, res: Response): void {
  const { ADMIN_EMAIL, ADMIN_PASSWORD, JWT_SECRET } = process.env
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !JWT_SECRET) {
    res.status(503).json({ message: 'Admin login is not configured.' })
    return
  }
  const { email = '', password = '' } = (req.body ?? {}) as { email?: unknown; password?: unknown }
  const emailOk = safeEqual(email, ADMIN_EMAIL)
  const passOk = safeEqual(password, ADMIN_PASSWORD)
  if (!(emailOk && passOk)) {
    res.status(401).json({ message: 'Invalid credentials.' })
    return
  }
  const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '8h' })
  res.json({ token })
}
