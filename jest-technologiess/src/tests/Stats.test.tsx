import { render, screen } from '@testing-library/react';
import StatCounter from '../components/StatCounter';
import StatsBand from '../sections/StatsBand';
import { aboutStats } from '../data/company';

describe('Statistics', () => {
  it('renders every company statistic with its label', () => {
    render(<StatsBand />);
    aboutStats.forEach((s) => expect(screen.getByText(s.label)).toBeInTheDocument());
    expect(screen.getAllByText('85+').length).toBeGreaterThan(0);
  });

  it('shows the final value immediately with reduced motion', () => {
    render(<StatCounter value={1200} label="Users" />);
    expect(screen.getByText('1,200')).toBeInTheDocument();
  });
});
