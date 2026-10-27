export interface Post {
  slug: string;
  title: string;
  category: string;
  date: string;
  read: string;
  excerpt: string;
  body: string[];
}

export const posts: Post[] = [
  { slug: 'why-we-review-every-change', title: 'Why we code-review every single change', category: 'Engineering', date: 'Oct 12, 2026', read: '5 min read', excerpt: 'Review is the cheapest quality tool we have, and the fastest way to share knowledge.', body: ['Every change at Jest Technologies is reviewed by a second engineer before it merges. That sounds slow, but a good review takes minutes and prevents days of rework.', 'Review is also how junior engineers learn the codebase and how seniors stay honest. We keep changes small so reviews stay quick, and we measure review time as carefully as build time.'] },
  { slug: 'monolith-or-microservices', title: 'Monolith or microservices? A practical guide', category: 'Architecture', date: 'Oct 2, 2026', read: '7 min read', excerpt: 'Most products should start simpler than they think. Here is how to know when to split.', body: ['Microservices solve organisational problems as much as technical ones. If one small team owns the product, a well-structured monolith is usually faster to build and easier to run.', 'Split a service out when a clear boundary, a scaling need, or an independent team justifies the added operational cost, not before.'] },
  { slug: 'shipping-ai-features', title: 'A practical guide to shipping AI features', category: 'AI', date: 'Sep 24, 2026', read: '6 min read', excerpt: 'The model is the easy part. Evaluation, fallbacks, and monitoring decide whether it works.', body: ['Before building an AI feature, define what a good answer looks like and build a test set that reflects real usage. Without it, every change is a guess.', 'Plan for failure: show confidence, give people an easy way to correct or escalate, and monitor quality continuously after launch.'] },
  { slug: 'offline-first-mobile', title: 'Designing offline-first mobile apps', category: 'Mobile', date: 'Sep 14, 2026', read: '6 min read', excerpt: 'Networks drop. Good apps keep working and sync quietly when the connection returns.', body: ['Offline-first means the app treats local storage as the source of truth and syncs in the background. Users keep working, and nothing is lost.', 'The hard part is conflicts. Decide early which changes win, make sync visible but unobtrusive, and test on slow and flaky networks, not just fast Wi-Fi.'] },
  { slug: 'cloud-costs-under-control', title: 'Keeping cloud costs under control without slowing teams', category: 'Cloud', date: 'Aug 30, 2026', read: '5 min read', excerpt: 'Visibility, tagging, and a few sensible defaults beat annual cost-cutting drives.', body: ['Cloud bills grow quietly. Start by tagging every resource to a team and product so costs have an owner.', 'Then set budgets and alerts, right-size on a schedule, and turn off what is idle. Small, regular habits keep spend predictable.'] },
  { slug: 'what-a-good-proposal-includes', title: 'What a good software proposal includes', category: 'Delivery', date: 'Aug 18, 2026', read: '4 min read', excerpt: 'Scope, assumptions, risks, and how we will work together matter more than the price line.', body: ['A useful proposal explains what will be built, what will not, and which assumptions the estimate depends on.', 'It should also name the team, the milestones, and the risks, so both sides know how surprises will be handled before they happen.'] },
];
