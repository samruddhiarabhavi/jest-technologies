import type { NextFunction, Request, Response } from 'express'
import Contact, { PROJECT_TYPES, type ProjectType } from '../models/Contact.js'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

interface ContactBody {
  name?: unknown
  email?: unknown
  company?: unknown
  projectType?: unknown
  budget?: unknown
  message?: unknown
  website?: unknown
}

export async function createContact(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const b = (req.body ?? {}) as ContactBody
    // Honeypot: bots fill the hidden field. Pretend success, store nothing.
    if (b.website) {
      res.status(201).json({ ok: true })
      return
    }

    const name = String(b.name ?? '').trim()
    const email = String(b.email ?? '').trim()
    const message = String(b.message ?? '').trim()
    const projectType = String(b.projectType ?? '')

    if (name.length < 2) { res.status(400).json({ message: 'Please enter your name.' }); return }
    if (!EMAIL_RE.test(email)) { res.status(400).json({ message: 'Please enter a valid email address.' }); return }
    if (!(PROJECT_TYPES as readonly string[]).includes(projectType)) { res.status(400).json({ message: 'Please choose a project type.' }); return }
    if (message.length < 10) { res.status(400).json({ message: 'Please add a few more details in your message.' }); return }

    await Contact.create({
      name,
      email,
      company: String(b.company ?? ''),
      projectType: projectType as ProjectType,
      budget: String(b.budget ?? ''),
      message,
    })
    res.status(201).json({ ok: true })
  } catch (err) {
    next(err)
  }
}

// Admin only
export async function listContacts(_req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const items = await Contact.find().sort({ createdAt: -1 }).limit(200).lean()
    res.json(items)
  } catch (err) {
    next(err)
  }
}
