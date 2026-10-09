export const SITE = {
  name: "JEST Policy CRM",
  short: "JEST",
  tagline: "Insurance operations, connected from lead to renewal.",
  email: "hello@jest.example", // TODO: replace with the real email
  demoUrl: "https://d15hwsom2ca8u8.cloudfront.net/login", // TODO: confirm with Vinit
};

export const NAV = [
  { label: "Platform", href: "/platform/" },
  { label: "How it works", href: "/how-it-works/" },
  { label: "Modules", href: "/modules/" },
  { label: "Solutions", href: "/solutions/" },
  { label: "Security", href: "/security/" },
];

export const STAGES = [
  { n: "01", name: "Lead", text: "A prospect reaches out by web form, referral, walk-in or phone. JEST captures the inquiry, assigns an owner and sets the next action." },
  { n: "02", name: "Qualification", text: "The sales team works through a checklist: product need, sum insured, insurer preference and budget. Unqualified leads are parked with a reason." },
  { n: "03", name: "Contact", text: "A qualified lead becomes a Contact with a full profile: personal details, KYC documents, relationship history and every linked policy." },
  { n: "04", name: "Policy", text: "Once a quote is accepted, the policy record holds insurer, product, cover details, premium schedule and documents. Endorsements are tracked against it." },
  { n: "05", name: "Renewal", text: "JEST surfaces policies 60, 30 and 7 days before expiry, sends reminders and tracks renewed, lapsed or moved." },
  { n: "06", name: "Claim", text: "A claim is registered against the policy, documents are collected, insurer submission is tracked and settlement is recorded." },
  { n: "07", name: "Retention", text: "On-time renewals and well-handled claims build long-term clients. JEST tracks cross-sell opportunities and engagement history." },
];

export const DIFFERENCES = [
  { icon: "Database", title: "Unified data model", text: "Every lead, contact, policy, renewal and claim lives in one model. No syncing, no duplication, no divergence between teams." },
  { icon: "Workflow", title: "Workflow automation", text: "Reminder sequences, task assignments, status triggers and escalation rules run automatically." },
  { icon: "BarChart3", title: "Operational reporting", text: "Reports that answer real questions: which leads are going cold, which renewals are at risk, what is our claim settlement rate." },
  { icon: "Users", title: "Role-based workspaces", text: "Sales, operations, accounts and compliance each get an interface matched to their actual job." },
  { icon: "ShieldCheck", title: "Built-in compliance controls", text: "Access controls, audit logs and document governance are part of the platform, not a workaround." },
  { icon: "MapPin", title: "India-first by design", text: "Designed for Indian insurance regulations, insurer relationships and operational realities." },
];

export type Module = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  intro: string;
  points: string[];
};

export const MODULES: Module[] = [
  {
    slug: "lead-management", icon: "Target", title: "Lead Management",
    short: "Capture, qualify and convert leads with a structured pipeline.",
    intro: "Every inquiry gets an owner and a next action, so no lead is forgotten between a phone call and a quote.",
    points: ["Capture leads from web forms, referrals, walk-ins and calls", "Assign each lead to a team member automatically", "Qualify with a structured checklist: need, sum insured, insurer, budget", "Park unqualified leads with a recorded reason", "Convert qualified leads into full Contact profiles"],
  },
  {
    slug: "policy-management", icon: "FileText", title: "Policy Management",
    short: "One record for every policy: issuance, endorsements and documents.",
    intro: "Insurer, product, cover details, premium schedule and documents stay attached to a single policy record.",
    points: ["Record insurer, product and cover details", "Keep the premium schedule with the policy", "Attach documents to the right record", "Track endorsements against the base policy", "See every policy linked to a contact in one view"],
  },
  {
    slug: "renewals", icon: "RefreshCw", title: "Renewals",
    short: "Proactive renewal reminders and lapse prevention workflows.",
    intro: "JEST flags policies before they expire and follows each one through to renewal, lapse or move.",
    points: ["Flags at 60, 30 and 7 days before expiry", "Reminders to the relationship manager and the client", "Status tracking: renewed, lapsed or moved", "Retention rate reported automatically", "At-risk renewals visible to managers"],
  },
  {
    slug: "claims", icon: "ShieldCheck", title: "Claims",
    short: "Coordinated claims tracking from registration to settlement.",
    intro: "Every step of a claim is logged, for the client and for audit.",
    points: ["Register a claim against the policy", "Collect and store claim documents", "Track insurer submission and queries", "Record the settlement", "Keep a full trail available for the client"],
  },
  {
    slug: "reporting", icon: "BarChart3", title: "Reporting",
    short: "Operational and financial reports across every module.",
    intro: "Because every module shares the same data, reports are consistent across sales, operations and accounts.",
    points: ["Lead pipeline and conversion reports", "Renewal and retention reports", "Claim settlement rate", "Reports for management, accounts and operations", "One source of truth, no spreadsheet merging"],
  },
];

export type Solution = { slug: string; icon: string; title: string; short: string; intro: string; points: string[] };

export const SOLUTIONS: Solution[] = [
  { slug: "management", icon: "Briefcase", title: "Management", short: "See pipeline, renewals and claims across the whole agency.", intro: "Principals and managers get one view of how the agency is performing, without asking for spreadsheets.", points: ["Agency-wide view of leads, policies and renewals", "Retention and claim settlement reporting", "Spot at-risk renewals early", "Know who owns every open task"] },
  { slug: "sales", icon: "Target", title: "Sales", short: "Work every lead with an owner and a next action.", intro: "Sales executives qualify, follow up and convert inside one pipeline.", points: ["Structured qualification checklist", "Follow-up tasks created automatically", "Full contact history before every call", "Leads that go cold are flagged"] },
  { slug: "renewals-retention", icon: "RefreshCw", title: "Renewals & Retention", short: "Prevent lapses and grow long-term relationships.", intro: "Renewal teams work from a clear queue, ordered by how close each policy is to expiry.", points: ["60, 30 and 7 day renewal flags", "Reminder sequences for clients", "Renewed, lapsed and moved tracking", "Cross-sell signals at contact level"] },
  { slug: "operations", icon: "Settings2", title: "Operations", short: "Issue policies and coordinate claims without lost context.", intro: "Operations teams handle issuance, endorsements and claims against the same record the sales team started.", points: ["Policy issuance with documents attached", "Endorsements tracked against the base policy", "Claim submission and query tracking", "Escalation rules for stuck items"] },
  { slug: "accounts-finance", icon: "Wallet", title: "Accounts & Finance", short: "Premium schedules and financial reports that reconcile.", intro: "Accounts teams read from the same data as everyone else, so figures match.", points: ["Premium schedules held on each policy", "Financial reports across modules", "Fewer manual reconciliations", "Audit trail for changes"] },
  { slug: "customer-service", icon: "Headphones", title: "Customer Service", short: "Answer any client question from a single profile.", intro: "Service representatives see the client's policies, documents, claims and history at a glance.", points: ["360-degree contact profile", "Every interaction logged", "Claim status ready to share", "Tasks and follow-ups assigned"] },
  { slug: "admin-compliance", icon: "Lock", title: "Admin & Compliance", short: "Access controls, audit logs and document governance.", intro: "Compliance is part of how the platform works, not something added afterwards.", points: ["Role-based access controls", "Audit logs of key actions", "Document governance", "Control over who sees what"] },
];

export const FAQS = [
  { q: "What is JEST Policy CRM?", a: "A CRM built for Indian insurance agencies and brokers. It manages the full lifecycle, from lead capture to renewal and claims, in one connected workspace." },
  { q: "Who is it for?", a: "Principals, sales managers, operations executives, accounts teams and customer service representatives at insurance agencies and brokerages." },
  { q: "How do renewals work?", a: "JEST flags policies 60, 30 and 7 days before expiry, sends reminders and tracks whether each one is renewed, lapsed or moved. Retention rate is reported automatically." },
  { q: "Can we track claims?", a: "Yes. A claim is registered against the policy, documents are collected, insurer submission is tracked and settlement is recorded, with a full trail." },
  { q: "Do different teams see different things?", a: "Yes. Sales, operations, accounts and compliance each get a workspace matched to their job, backed by role-based access controls." },
  { q: "How do I see it in action?", a: "Book a demo from the Contact page and the team will walk you through the platform." },
];
