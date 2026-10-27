import { Bot, Cloud, Database, Globe, PenTool, Smartphone, type LucideIcon } from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  points: string[];
  icon: LucideIcon;
}

export const services: Service[] = [
  { slug: 'web', title: 'Web Applications', summary: 'Fast, accessible platforms and portals built on modern frameworks.', detail: 'From customer portals to complex internal platforms, we build web applications that load quickly, work for everyone, and stay easy to change.', points: ['Single-page and server-rendered apps', 'Design systems and component libraries', 'Performance and accessibility audits'], icon: Globe },
  { slug: 'mobile', title: 'Mobile Apps', summary: 'Native-feeling iOS and Android apps that work even when the network does not.', detail: 'We ship cross-platform and native apps with offline support, secure sign-in, and release pipelines that make updates routine.', points: ['iOS, Android, and cross-platform', 'Offline-first data sync', 'App store release management'], icon: Smartphone },
  { slug: 'crm', title: 'CRM & Enterprise Systems', summary: 'Custom CRMs, workflow tools, and back-office systems shaped around how you work.', detail: 'We replace spreadsheets and rigid off-the-shelf tools with systems that model your process: leads, policies, orders, approvals, and reporting.', points: ['Workflow and approval engines', 'Role-based access and audit trails', 'Integrations with ERP, email, and payments'], icon: Database },
  { slug: 'ai', title: 'AI & Automation', summary: 'Assistants, classifiers, and automations that remove repetitive work.', detail: 'We identify the tasks that eat your team’s time and build reliable, measurable automations, with humans in the loop where it matters.', points: ['Support and knowledge assistants', 'Document and data extraction', 'Evaluation and monitoring of every model'], icon: Bot },
  { slug: 'cloud', title: 'Cloud & DevOps', summary: 'Secure infrastructure, automated pipelines, and calm releases.', detail: 'We design cloud architecture, automate delivery, and watch production so that shipping becomes a non-event and costs stay predictable.', points: ['Infrastructure as code', 'CI/CD and automated testing', 'Observability and on-call support'], icon: Cloud },
  { slug: 'design', title: 'UI/UX Design', summary: 'Research-led product design that makes complex software feel simple.', detail: 'We map user journeys, prototype quickly, and test with real people before engineering begins, so you build the right thing once.', points: ['User research and journey mapping', 'Interactive prototypes', 'Usability testing and iteration'], icon: PenTool },
];
