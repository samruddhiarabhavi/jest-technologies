export type PlatformTabId = 'agents' | 'campaigns' | 'automations' | 'analytics' | 'integrations';

export interface PlatformTab {
  id: PlatformTabId;
  label: string;
  title: string;
  body: string;
  points: string[];
}

export const platformTabs: PlatformTab[] = [
  { id: 'agents', label: 'Agents', title: 'Specialist agents that own the work', body: 'Six agents cover campaigns, content, SEO, social, audiences, and analytics. Each one has clear permissions and a full activity log.', points: ['Scoped access per agent', 'Human approval where you want it', 'Every action explained'] },
  { id: 'campaigns', label: 'Campaigns', title: 'Campaigns you can read and change', body: 'Describe a campaign in plain language or build it step by step. Jest Technologies launches it, adjusts it on live results, and hands off to people when needed.', points: ['Visual campaign builder', 'Versioned and testable', 'Multi-channel from one brief'] },
  { id: 'automations', label: 'Automations', title: 'Rules that act on their own', body: 'Turn recurring decisions into automations: pause a tired creative, shift budget, refresh a segment. Start in suggest mode, then switch to auto.', points: ['Suggest, approve, or auto-run', 'Budget limits you control', 'One-click rollback'] },
  { id: 'analytics', label: 'Analytics', title: 'Ask questions, get answers', body: 'Query your performance in plain language. See campaign health, channel results, and automation impact in one live view.', points: ['Natural-language queries', 'Live campaign metrics', 'Shareable reports'] },
  { id: 'integrations', label: 'Integrations', title: 'Connected to the tools you already use', body: 'Connect ad platforms, analytics, CRM, email, and ecommerce through secure, scoped connectors. No rip-and-replace.', points: ['Prebuilt connectors', 'Scoped, revocable credentials', 'Near-realtime sync'] },
];
