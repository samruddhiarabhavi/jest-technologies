export interface TestimonialData {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: TestimonialData[] = [
  { id: 't1', quote: 'Jest Technologies turned weeks of campaign busywork into growth loops that run every single day.', name: 'Maya Collins', role: 'Chief Marketing Officer', company: 'Lumen Retail' },
  { id: 't2', quote: 'Our team stopped resizing banners and started testing ideas. Launch time dropped from two weeks to three days.', name: 'Rohan Mehta', role: 'VP, Growth', company: 'Orbit Software' },
  { id: 't3', quote: 'Every automated change is explained and reversible, which is what finally got our legal team on board.', name: 'Sofia Alvarez', role: 'Head of Brand', company: 'Kindred Health' },
];
