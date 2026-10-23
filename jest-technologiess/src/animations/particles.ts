export type NodeKind = 'agent' | 'account' | 'txn' | 'payment' | 'data' | 'workflow';

export interface NetNode {
  id: number;
  kind: NodeKind;
  label: string;
  bx: number;
  by: number;
  ax: number;
  ay: number;
  speed: number;
  phase: number;
}
export interface NetEdge {
  a: number;
  b: number;
}
export interface Particle {
  edge: number;
  speed: number;
  offset: number;
}
export interface Network {
  width: number;
  height: number;
  nodes: NetNode[];
  edges: NetEdge[];
  particles: Particle[];
}

const KINDS: NodeKind[] = ['account', 'txn', 'payment', 'data', 'workflow'];
const AGENT_LABELS = ['Campaign Agent', 'Content Agent', 'SEO Agent', 'Social Agent', 'Audience Agent', 'Analytics Agent'];

function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Deterministic marketing-network layout: jittered grid, nearest-neighbour edges, travelling particles. */
export function buildNetwork(count = 18, seed = 11, width = 1200, height = 700): Network {
  const rand = rng(seed);
  const cols = 6;
  const rows = Math.ceil(count / cols);
  let agentCount = 0;
  const nodes: NetNode[] = Array.from({ length: count }, (_, i) => {
    const c = i % cols;
    const r = Math.floor(i / cols);
    const isAgent = i % 3 === 0;
    const kind: NodeKind = isAgent ? 'agent' : KINDS[Math.floor(rand() * KINDS.length)];
    const label = isAgent
      ? AGENT_LABELS[agentCount++ % AGENT_LABELS.length]
      : kind === 'account'
        ? `LEAD-${1000 + Math.floor(rand() * 8999)}`
        : kind === 'txn'
          ? `CLK ${Math.floor(rand() * 65535).toString(16).toUpperCase().padStart(4, '0')}`
          : kind === 'payment'
            ? 'Ad spend'
            : kind === 'data'
              ? 'Analytics feed'
              : 'Campaign';
    return {
      id: i,
      kind,
      label,
      bx: ((c + 0.5 + (rand() - 0.5) * 0.7) / cols) * width,
      by: ((r + 0.5 + (rand() - 0.5) * 0.7) / rows) * height,
      ax: 8 + rand() * 18,
      ay: 8 + rand() * 18,
      speed: 0.25 + rand() * 0.35,
      phase: rand() * Math.PI * 2,
    };
  });

  const seen = new Set<string>();
  const edges: NetEdge[] = [];
  nodes.forEach((n) => {
    nodes
      .filter((m) => m.id !== n.id)
      .map((m) => ({ m, d: Math.hypot(m.bx - n.bx, m.by - n.by) }))
      .sort((p, q) => p.d - q.d)
      .slice(0, 2)
      .forEach(({ m }) => {
        const key = n.id < m.id ? `${n.id}-${m.id}` : `${m.id}-${n.id}`;
        if (!seen.has(key)) {
          seen.add(key);
          edges.push({ a: n.id, b: m.id });
        }
      });
  });

  const particles: Particle[] = edges
    .map((_, i) => ({ edge: i, speed: 0.1 + (i % 5) * 0.035, offset: rand() }))
    .filter((_, i) => i % 2 === 0);

  return { width, height, nodes, edges, particles };
}

export function nodePosition(n: NetNode, t: number) {
  return { x: n.bx + Math.sin(t * n.speed + n.phase) * n.ax, y: n.by + Math.cos(t * n.speed * 0.8 + n.phase) * n.ay };
}
