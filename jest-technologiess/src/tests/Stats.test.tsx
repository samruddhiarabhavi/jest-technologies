import { render, screen } from '@testing-library/react';
import Problem from '../sections/Problem';
import StatCounter from '../components/StatCounter';

describe('Statistics', () => {
  it('renders the three headline statistics and labels', () => {
    render(<Problem />);
    expect(screen.getAllByText('68%').length).toBeGreaterThan(0);
    expect(screen.getAllByText('3.6x').length).toBeGreaterThan(0);
    expect(screen.getAllByText('$1.9B').length).toBeGreaterThan(0);
    expect(screen.getByText('Less manual campaign work')).toBeInTheDocument();
    expect(screen.getByText('Faster from launch to learning')).toBeInTheDocument();
    expect(screen.getByText('Ad spend intelligently optimized')).toBeInTheDocument();
  });

  it('exposes the final value to assistive tech and shows it with reduced motion', () => {
    render(<StatCounter value={1200} label="Accounts" />);
    expect(screen.getAllByText('1200').length).toBeGreaterThan(0);
    expect(screen.getByText('1,200')).toBeInTheDocument();
  });
});
