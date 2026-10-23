import { useEffect, useMemo, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { buildNetwork, nodePosition, type NodeKind } from '../animations/particles';
import { useMouseParallax } from '../hooks/useMouseParallax';

interface Props {
  className?: string;
  count?: number;
  seed?: number;
  labels?: boolean;
}

const COLOR: Record<NodeKind, string> = {
  agent: '#5CFFB1',
  payment: '#7AA9FF',
  txn: '#7AA9FF',
  account: '#C9C8C2',
  data: '#C9C8C2',
  workflow: '#5CFFB1',
};

/**
 * Marketing intelligence network. Node, edge and particle positions are written
 * straight to SVG attributes in one rAF loop (no React re-renders), and the loop
 * only runs while the graph is on screen.
 */
export default function NetworkGraph({ className = '', count = 18, seed = 11, labels = true }: Props) {
  const reduce = useReducedMotion();
  const net = useMemo(() => buildNetwork(count, seed), [count, seed]);
  const svgRef = useRef<SVGSVGElement>(null);
  const nodeEls = useRef<(SVGGElement | null)[]>([]);
  const edgeEls = useRef<(SVGLineElement | null)[]>([]);
  const partEls = useRef<(SVGCircleElement | null)[]>([]);
  const visible = useInView(svgRef, { amount: 0.05 });
  const parallax = useMouseParallax(28);

  useEffect(() => {
    if (!visible) return;
    const paint = (t: number) => {
      const pos = net.nodes.map((n) => nodePosition(n, t));
      pos.forEach((p, i) => nodeEls.current[i]?.setAttribute('transform', `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`));
      net.edges.forEach((e, i) => {
        const l = edgeEls.current[i];
        if (!l) return;
        l.setAttribute('x1', pos[e.a].x.toFixed(1));
        l.setAttribute('y1', pos[e.a].y.toFixed(1));
        l.setAttribute('x2', pos[e.b].x.toFixed(1));
        l.setAttribute('y2', pos[e.b].y.toFixed(1));
      });
      net.particles.forEach((p, i) => {
        const e = net.edges[p.edge];
        const prog = (t * p.speed + p.offset) % 1;
        const c = partEls.current[i];
        if (!c) return;
        c.setAttribute('cx', (pos[e.a].x + (pos[e.b].x - pos[e.a].x) * prog).toFixed(1));
        c.setAttribute('cy', (pos[e.a].y + (pos[e.b].y - pos[e.a].y) * prog).toFixed(1));
        c.setAttribute('opacity', String(Math.sin(prog * Math.PI)));
      });
    };
    if (reduce) {
      paint(0);
      return;
    }
    let raf = 0;
    const loop = (ms: number) => {
      paint(ms / 1000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [visible, reduce, net]);

  const base = net.nodes.map((n) => nodePosition(n, 0));

  return (
    <motion.div aria-hidden="true" className={`pointer-events-none ${className}`} style={{ x: parallax.x, y: parallax.y }}>
      <svg ref={svgRef} viewBox={`0 0 ${net.width} ${net.height}`} preserveAspectRatio="xMidYMid slice" className="h-full w-full scale-[1.06]">
        <g stroke="rgba(255,255,255,0.12)" strokeWidth="1">
          {net.edges.map((e, i) => (
            <line key={i} ref={(el) => (edgeEls.current[i] = el)} x1={base[e.a].x} y1={base[e.a].y} x2={base[e.b].x} y2={base[e.b].y} />
          ))}
        </g>
        {net.particles.map((_, i) => (
          <circle key={i} ref={(el) => (partEls.current[i] = el)} r="2.4" fill="#5CFFB1" opacity="0" style={{ filter: 'drop-shadow(0 0 4px #5CFFB1)' }} />
        ))}
        {net.nodes.map((n, i) => (
          <g key={n.id} ref={(el) => (nodeEls.current[i] = el)} transform={`translate(${base[i].x} ${base[i].y})`}>
            {n.kind === 'agent' && <circle r="9" fill="none" stroke={COLOR.agent} strokeOpacity=".5" className="node-pulse" style={{ animationDelay: `${(i % 6) * 0.5}s` }} />}
            <circle r={n.kind === 'agent' ? 5 : 3} fill={COLOR[n.kind]} style={{ filter: n.kind === 'agent' ? 'drop-shadow(0 0 6px rgba(92,255,177,.9))' : undefined }} />
            {labels && (n.kind === 'agent' || i % 4 === 1) && (
              <text x="12" y="4" fontSize="11" fill="#8A8A85" fontFamily="Inter, sans-serif">
                {n.label}
              </text>
            )}
          </g>
        ))}
      </svg>
    </motion.div>
  );
}
