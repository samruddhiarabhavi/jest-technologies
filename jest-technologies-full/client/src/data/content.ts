import type { CaseStudyData, Pair, Project, Solution, StackGroup, Triple } from '../types'

export const techStrip: string[] = ['React', 'Node.js', 'Express', 'JavaScript', 'TypeScript', 'Python', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'AI/ML']

export const principles: Triple[] = [
  ['01', 'Understand', 'We understand the problem before choosing the technology.'],
  ['02', 'Engineer', 'We design scalable architecture and build reliable software.'],
  ['03', 'Evolve', 'We continuously improve products based on users, data and business goals.'],
]

export const solutions: Solution[] = [
  { n: '01', title: 'Web Applications', desc: 'Fast, secure platforms and dashboards your team and customers rely on every day.', tech: 'React · Next.js', glyph: 'web' },
  { n: '02', title: 'Mobile Applications', desc: 'Cross-platform apps with native-feel performance and offline-ready design.', tech: 'React Native', glyph: 'mobile' },
  { n: '03', title: 'AI & Machine Learning', desc: 'Prediction, automation and conversational features that create genuine value.', tech: 'Python · LLMs', glyph: 'ai' },
  { n: '04', title: 'Backend & APIs', desc: 'Clean, documented REST services built to scale and easy to integrate.', tech: 'Node.js · Express', glyph: 'api' },
  { n: '05', title: 'Business Automation', desc: 'Workflows, reminders and reports that replace repetitive manual work.', tech: 'Workflows · Webhooks', glyph: 'flow' },
  { n: '06', title: 'Cloud & DevOps', desc: 'Automated deployments, monitoring and infrastructure that stays reliable.', tech: 'AWS · Docker', glyph: 'cloud' },
]

export const journey: Pair[] = [
  ['IDEA', 'A rough problem, a spark, a goal worth solving.'],
  ['ARCHITECTURE', 'Systems, data models and a roadmap before the first line of code.'],
  ['EXPERIENCE', 'Interfaces that feel obvious to the people using them.'],
  ['ENGINEERING', 'Clean, tested, observable code shipped in small steps.'],
  ['INTELLIGENCE', 'Prediction and automation added where they genuinely help.'],
  ['PRODUCT', 'Live, measured and improving with every release.'],
]

// [name, what JEST uses it for, weight 1-5]
export const stack: StackGroup[] = [
  { cat: 'Frontend', items: [
    ['React', 'Component-driven interfaces, dashboards and design systems.', 5],
    ['Next.js', 'SEO-critical sites and server-rendered applications.', 4],
    ['JavaScript', 'The common language from browser to server.', 5],
    ['TypeScript', 'Type-safe codebases that stay maintainable as teams grow.', 4],
  ] },
  { cat: 'Backend', items: [
    ['Node.js', 'Event-driven services and real-time features.', 5],
    ['Express.js', 'Lean, well-structured REST APIs.', 5],
    ['Python', 'Data processing, automation and ML-backed services.', 4],
  ] },
  { cat: 'Database', items: [
    ['MongoDB', 'Flexible document data for fast-moving products.', 5],
    ['PostgreSQL', 'Relational data, reporting and strict consistency.', 4],
    ['Redis', 'Caching, queues and session speed.', 3],
  ] },
  { cat: 'AI', items: [
    ['Machine Learning', 'Prediction and classification built on your own data.', 4],
    ['Generative AI', 'Content, summaries and assistants with guardrails.', 3],
    ['LLMs', 'Grounded assistants that answer from your knowledge.', 3],
  ] },
  { cat: 'Cloud', items: [
    ['AWS', 'Hosting, storage and managed infrastructure.', 4],
    ['Docker', 'Identical environments from laptop to production.', 4],
    ['CI/CD', 'Automated tests and safe, repeatable releases.', 4],
  ] },
]

// PROJECTS: sample/concept case studies. Replace with real work and real details.
export const projects: Project[] = [
  { n: '01', name: 'HealthPredict', line: 'AI-powered healthcare prediction platform', industry: 'Healthcare', tech: 'React · Python · MongoDB', challenge: 'Clinicians needed early risk signals from scattered patient data.', solution: 'A prediction service with a clear dashboard that flags high-risk cases.', glyph: 'ai', tone: 'bg-accent-soft', span: 'md:col-span-4' },
  { n: '02', name: 'EstateFlow', line: 'Real-estate management platform', industry: 'Real Estate', tech: 'React · Node.js · PostgreSQL', challenge: 'Listings, tenants and payments lived in separate spreadsheets.', solution: 'One platform for properties, agreements and rent tracking.', glyph: 'web', tone: 'bg-mist', span: 'md:col-span-2' },
  { n: '03', name: 'TradeSim', line: 'Real-time trading simulation system', industry: 'FinTech', tech: 'Node.js · WebSockets · Redis', challenge: 'Learners had no safe place to practise with live market movement.', solution: 'A real-time simulator with virtual portfolios and instant fills.', glyph: 'chart', tone: 'bg-[#E4F1E8]', span: 'md:col-span-2' },
  { n: '04', name: 'InsightBoard', line: 'Business analytics dashboard', industry: 'Analytics', tech: 'React · Express · AWS', challenge: 'Leaders waited days for reports assembled by hand.', solution: 'Live dashboards fed by automated data pipelines.', glyph: 'cloud', tone: 'bg-[#FFF0C2]', span: 'md:col-span-4' },
  { n: '05', name: 'SmartCampus', line: 'Education management platform', industry: 'Education', tech: 'React Native · Node.js · MongoDB', challenge: 'Attendance, fees and notices ran across disconnected tools.', solution: 'A single app for students, faculty and administrators.', glyph: 'mobile', tone: 'bg-[#EAE4F7]', span: 'md:col-span-3' },
  { n: '06', name: 'AI Assistant', line: 'Conversational AI application', industry: 'Conversational AI', tech: 'Python · LLMs · React', challenge: 'Support teams repeated the same answers all day.', solution: 'A grounded assistant that answers from company knowledge.', glyph: 'chat', tone: 'bg-accent-soft', span: 'md:col-span-3' },
]

// CASE STUDY: sample metrics. Replace with measured results.
export const caseStudy: CaseStudyData = {
  name: 'HealthPredict',
  steps: [
    ['Challenge', 'Scattered patient records slowed down risk assessment.'],
    ['Architecture', 'React dashboard → Express API → Python ML service → MongoDB.'],
    ['Implementation', 'Automated data ingestion, a validated model and role-based access.'],
    ['Result', 'Faster decisions and a workflow clinicians trust.'],
  ],
  flow: ['React', 'Express API', 'ML Service', 'MongoDB'],
  metrics: [
    { to: 0, suffix: '%', label: 'Faster processing' },
    { to: 0, suffix: 'x', label: 'Improved workflow' },
    { to: 0, suffix: '%', label: 'System availability', decimals: 1 },
  ],
}

export const process: Triple[] = [
  ['01', 'Discover', 'Understand the problem, users and business objectives.'],
  ['02', 'Architect', 'Design the system architecture and technical roadmap.'],
  ['03', 'Build', 'Develop the product using modern engineering practices.'],
  ['04', 'Validate', 'Test performance, security, usability and reliability.'],
  ['05', 'Launch & Scale', 'Deploy, monitor and continuously improve.'],
]

export const why: Triple[] = [
  ['01', 'Engineering Before Hype', 'We choose technology based on the problem, not trends.'],
  ['02', 'Built To Scale', 'Architecture is designed with future growth in mind.'],
  ['03', 'Transparent Development', 'Clients understand what is being built and why.'],
  ['04', 'Product Thinking', 'We focus on outcomes, not just features.'],
  ['05', 'AI Where It Matters', 'AI is used when it creates genuine value.'],
  ['06', 'Long-Term Partnership', 'We build systems that can evolve with the business.'],
]
