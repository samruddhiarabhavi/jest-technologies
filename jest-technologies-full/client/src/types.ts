export type GlyphKind = 'web' | 'mobile' | 'ai' | 'api' | 'flow' | 'cloud' | 'chart' | 'chat'

export type Pair = [string, string]
export type Triple = [string, string, string]

export interface SiteInfo {
  name: string
  tagline: string
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
  instagram: string
}

export interface Stat {
  value?: number
  suffix?: string
  text?: string
  label: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

export interface Solution {
  n: string
  title: string
  desc: string
  tech: string
  glyph: GlyphKind
}

/** [name, what JEST uses it for, weight 1-5] */
export type StackItem = [name: string, use: string, weight: number]
export interface StackGroup {
  cat: string
  items: StackItem[]
}

export interface Project {
  n: string
  name: string
  line: string
  industry: string
  tech: string
  challenge: string
  solution: string
  glyph: GlyphKind
  tone: string
  span: string
}

export interface Metric {
  to: number
  suffix: string
  label: string
  decimals?: number
}

export interface CaseStudyData {
  name: string
  steps: Pair[]
  flow: string[]
  metrics: Metric[]
}

export interface ContactPayload {
  name: string
  email: string
  company?: string
  projectType: string
  budget?: string
  message: string
  website?: string
}
