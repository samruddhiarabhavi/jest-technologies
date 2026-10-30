import mongoose, { Schema, type InferSchemaType } from 'mongoose'

export const PROJECT_TYPES = ['Web Application', 'Mobile Application', 'AI / ML', 'Backend / API', 'Automation', 'Other'] as const
export type ProjectType = (typeof PROJECT_TYPES)[number]

const contactSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 160 },
    company: { type: String, trim: true, maxlength: 120, default: '' },
    projectType: { type: String, enum: [...PROJECT_TYPES], required: true },
    budget: { type: String, trim: true, maxlength: 60, default: '' },
    message: { type: String, required: true, trim: true, minlength: 10, maxlength: 3000 },
  },
  { timestamps: true },
)

export type ContactDoc = InferSchemaType<typeof contactSchema>
export default mongoose.model('Contact', contactSchema)
