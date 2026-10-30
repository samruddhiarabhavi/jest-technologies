import { Router } from 'express'
import { createContact, listContacts } from '../controllers/contactController.js'
import protect from '../middleware/auth.js'

const router = Router()
router.post('/', createContact) // public: website form
router.get('/', protect, listContacts) // admin: read submissions
export default router
