import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AgentCard from '../components/AgentCard';
import { agents } from '../data/agents';

describe('AgentCard', () => {
  it('displays name, description and status', () => {
    render(<AgentCard agent={agents[0]} />);
    expect(screen.getByRole('heading', { name: 'Campaign Agent' })).toBeInTheDocument();
    expect(screen.getByText(/plan, launch, and optimize campaigns/i)).toBeInTheDocument();
    expect(screen.getByText('Operational')).toBeInTheDocument();
  });

  it('renders all six agents with correct names', () => {
    expect(agents.map((a) => a.name)).toEqual(['Campaign Agent', 'Content Agent', 'SEO Agent', 'Social Agent', 'Audience Agent', 'Analytics Agent']);
  });

  it('activates its animation on hover and keyboard focus', async () => {
    render(<AgentCard agent={agents[1]} />);
    const card = screen.getByRole('article');
    expect(card).toHaveAttribute('data-active', 'false');
    await userEvent.hover(card);
    await waitFor(() => expect(card).toHaveAttribute('data-active', 'true'));
    await userEvent.unhover(card);
    await waitFor(() => expect(card).toHaveAttribute('data-active', 'false'));
    await userEvent.tab();
    expect(card).toHaveFocus();
    await waitFor(() => expect(card).toHaveAttribute('data-active', 'true'));
  });
});
