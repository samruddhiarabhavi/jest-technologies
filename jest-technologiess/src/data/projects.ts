export type ProjectCategory = 'Web' | 'Mobile' | 'AI' | 'Cloud' | 'CRM';

export interface Project {
  slug: string;
  title: string;
  sector: string;
  category: ProjectCategory;
  year: string;
  summary: string;
  metric: string;
}

export const projectCategories: ('All' | ProjectCategory)[] = ['All', 'Web', 'Mobile', 'CRM', 'AI', 'Cloud'];

export const projects: Project[] = [
  { slug: 'policydesk', title: 'PolicyDesk CRM', sector: 'Insurance', category: 'CRM', year: '2026', summary: 'A policy, renewal, and claims CRM that gives agents one view of every customer.', metric: '42% faster claims handling' },
  { slug: 'parcelwise', title: 'Parcelwise Driver App', sector: 'Logistics', category: 'Mobile', year: '2025', summary: 'An offline-first driver app with route guidance, proof of delivery, and live status.', metric: '99.6% on-time scan rate' },
  { slug: 'clinova', title: 'Clinova Patient Portal', sector: 'Healthcare', category: 'Web', year: '2025', summary: 'A secure portal for bookings, records, and messaging across a multi-site clinic group.', metric: '3x faster patient onboarding' },
  { slug: 'ledgerlite', title: 'LedgerLite Cloud Migration', sector: 'Fintech', category: 'Cloud', year: '2024', summary: 'A move from a single server to an event-driven cloud platform with zero-downtime releases.', metric: '60% lower infrastructure cost' },
  { slug: 'sage-assist', title: 'Sage Assist', sector: 'Retail', category: 'AI', year: '2026', summary: 'A support assistant that answers order and returns questions and hands off when unsure.', metric: '58% of tickets resolved automatically' },
  { slug: 'atlas-learn', title: 'Atlas Learn', sector: 'Education', category: 'Mobile', year: '2024', summary: 'A learning app with offline lessons, progress sync, and teacher dashboards.', metric: '1.2M monthly learners' },
];
