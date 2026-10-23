import { BarChart3, Megaphone, PenLine, Search, Share2, Users, type LucideIcon } from 'lucide-react';

export type AgentVisualKind = 'bars' | 'radar' | 'lines' | 'checks' | 'chat' | 'analytics';

export interface Agent {
  id: string;
  name: string;
  description: string;
  status: 'Operational';
  icon: LucideIcon;
  visual: AgentVisualKind;
  metric: string;
}

export const agents: Agent[] = [
  { id: 'campaign', name: 'Campaign Agent', description: 'Plan, launch, and optimize campaigns across channels, shifting budget to what is working.', status: 'Operational', icon: Megaphone, visual: 'bars', metric: '2,400 budget shifts / day' },
  { id: 'content', name: 'Content Agent', description: 'Drafts on-brand copy, resizes creative, and prepares every asset for review.', status: 'Operational', icon: PenLine, visual: 'lines', metric: '12x faster asset production' },
  { id: 'seo', name: 'SEO Agent', description: 'Finds keyword gaps, fixes technical issues, and keeps every page climbing.', status: 'Operational', icon: Search, visual: 'checks', metric: '18k pages monitored daily' },
  { id: 'social', name: 'Social Agent', description: 'Schedules posts, replies to comments, and spots conversations worth joining.', status: 'Operational', icon: Share2, visual: 'chat', metric: '64% fewer manual replies' },
  { id: 'audience', name: 'Audience Agent', description: 'Builds and refreshes segments from real behavior, then personalizes every touchpoint.', status: 'Operational', icon: Users, visual: 'radar', metric: 'Segments refreshed hourly' },
  { id: 'analytics', name: 'Analytics Agent', description: 'Answers plain-language questions about performance and reports what matters.', status: 'Operational', icon: BarChart3, visual: 'analytics', metric: 'Answers in under 3 seconds' },
];
