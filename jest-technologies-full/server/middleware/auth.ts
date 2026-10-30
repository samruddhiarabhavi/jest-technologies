import type { NextFunction, Request, Response } from 'express'
import jwt, { type JwtPayload } from 'jsonwebtoken'

export interface AuthedRequest extends Request {
  user?: JwtPayload | string
}

export default function protect(req: AuthedRequest, res: Response, next: NextFunction): void {
  const header = req.headers.authorization ?? ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : null
  if (!token || !process.env.JWT_SECRET) {
    res.status(401).json({ message: 'Not authorised.' })
    return
  }
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET)
    next()
  } catch {
    res.status(401).json({ message: 'Token invalid or expired.' })
  }
}
