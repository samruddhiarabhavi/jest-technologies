export type IndustryArtKind = 'pillars' | 'dots' | 'steps' | 'rings' | 'flow' | 'grid';

export interface Industry {
  id: string;
  name: string;
  blurb: string;
  art: IndustryArtKind;
}

export const industries: Industry[] = [
  { id: 'ecommerce', name: 'E-commerce', blurb: 'Turn product feeds and shopper data into always-on campaigns.', art: 'grid' },
  { id: 'saas', name: 'SaaS', blurb: 'Fill the funnel and shorten the path from trial to paid.', art: 'steps' },
  { id: 'agencies', name: 'Agencies', blurb: 'Run more client accounts without growing the team.', art: 'dots' },
  { id: 'consumer', name: 'Consumer Brands', blurb: 'Keep every channel on-voice and on-budget at scale.', art: 'rings' },
  { id: 'travel', name: 'Travel & Hospitality', blurb: 'Adjust offers and spend as demand shifts by the hour.', art: 'flow' },
  { id: 'nonprofit', name: 'Nonprofits', blurb: 'Reach donors with the right message and make every dollar count.', art: 'pillars' },
];
