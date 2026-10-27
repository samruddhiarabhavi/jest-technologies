export interface TestimonialData {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: TestimonialData[] = [
  { id: 't1', quote: 'Jest Technologies shipped our claims platform on schedule and it has barely needed a hotfix since.', name: 'Priya Nair', role: 'Chief Operating Officer', company: 'Northwind Insurance' },
  { id: 't2', quote: 'They behave like part of our own team. Honest estimates, clear updates, and no surprises at release.', name: 'Marcus Lee', role: 'VP, Product', company: 'Helix Logistics' },
  { id: 't3', quote: 'The new app cut our onboarding time by two thirds, and our staff actually enjoy using it.', name: 'Dr. Aisha Rahman', role: 'Director of Operations', company: 'Clinova Health' },
];
