import { render, screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

describe('Dashboard', () => {
  beforeEach(() => {
    render(<Dashboard />);
  });

  it('shows all key metrics', () => {
    ['Campaign Health', 'Monthly Reach', 'Cost per Lead', 'Automation Rate', 'Active Agents'].forEach((t) => expect(screen.getByText(t)).toBeInTheDocument());
  });

  it('renders charts with accessible labels', () => {
    expect(screen.getByRole('img', { name: /line chart/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /bar chart/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /campaign health 94/i })).toBeInTheDocument();
  });

  it('renders the activity feed', () => {
    expect(screen.getByText('Agent activity')).toBeInTheDocument();
    expect(screen.getByText('Campaign Agent')).toBeInTheDocument();
  });
});
