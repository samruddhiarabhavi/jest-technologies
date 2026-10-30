import type { Pair, SiteInfo, Stat, Testimonial } from '../types'

// Edit this file to update contact details, navigation, stats and testimonials.

export const site: SiteInfo = {
  name: 'JEST Technologies',
  tagline: 'Engineering digital products for the next generation.',
  email: 'hello@jesttechnologies.in', // TODO: replace
  phone: '+91 00000 00000', // TODO: replace
  location: 'India', // TODO: replace with city / state
  linkedin: 'https://www.linkedin.com/', // TODO: company page URL
  github: 'https://github.com/', // TODO: organisation URL
  instagram: 'https://www.instagram.com/', // TODO: profile URL
}

export const nav: Pair[] = [
  ['Home', '/#home'],
  ['Solutions', '/#solutions'],
  ['Technologies', '/#technologies'],
  ['Projects', '/#projects'],
  ['Process', '/#process'],
  ['About', '/#about'],
  ['Contact', '/#contact'],
]

// STATS: example numbers. Replace with REAL figures before launch, or remove the section.
export const stats: Stat[] = [
  { value: 50, suffix: '+', label: 'Projects' },
  { value: 15, suffix: '+', label: 'Technologies' },
  { value: 10, suffix: '+', label: 'Industries' },
  { text: '24/7', label: 'System Thinking' },
]

// TESTIMONIALS: placeholders. Replace with real client quotes (with permission) before launch.
export const testimonials: Testimonial[] = [
  {
    quote: 'They asked the right questions before writing any code. What they delivered fits how our team actually works.',
    name: 'Client Name',
    role: 'Founder',
    company: 'Company One',
  },
  {
    quote: 'Clear updates every week and no surprises. The product launched on time and has been stable since.',
    name: 'Client Name',
    role: 'Operations Head',
    company: 'Company Two',
  },
  {
    quote: 'The architecture they chose let us add new features quickly without rewriting anything.',
    name: 'Client Name',
    role: 'Product Manager',
    company: 'Company Three',
  },
]

export const projectTypes: string[] = ['Web Application', 'Mobile Application', 'AI / ML', 'Backend / API', 'Automation', 'Other']
export const budgets: string[] = ['Under ₹1 lakh', '₹1–3 lakh', '₹3–10 lakh', '₹10 lakh+', 'Not sure yet']
