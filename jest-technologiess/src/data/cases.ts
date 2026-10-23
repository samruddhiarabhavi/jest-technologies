export interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  title: string;
  summary: string;
  stat: { value: number; suffix: string; decimals: number; label: string };
}

export const cases: CaseStudy[] = [
  { id: 'lumen', company: 'Lumen Retail', industry: 'E-commerce', title: 'Cutting acquisition cost across 14 channels', summary: 'Lumen replaced weekly manual budget reviews with agents that rebalance spend every few hours and retire tired creative automatically.', stat: { value: 41, suffix: '%', decimals: 0, label: 'Lower cost per acquisition' } },
  { id: 'orbit', company: 'Orbit Software', industry: 'SaaS', title: 'Turning trial signups into pipeline', summary: 'Orbit used audience and content agents to personalize nurture flows by behavior, then measured pipeline instead of clicks.', stat: { value: 3.2, suffix: 'x', decimals: 1, label: 'Pipeline per marketing dollar' } },
  { id: 'kindred', company: 'Kindred Health', industry: 'Healthcare', title: 'Launching compliant campaigns in days', summary: 'Kindred added brand and policy guardrails so every message is checked before it goes live, with a full audit trail.', stat: { value: 70, suffix: '%', decimals: 0, label: 'Less time spent on reporting' } },
];
