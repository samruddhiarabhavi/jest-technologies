import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Platform from '../sections/Platform';

describe('Platform tabs', () => {
  beforeEach(() => {
    render(<Platform />);
  });

  it('renders five tabs with Agents selected first', () => {
    const tabs = screen.getAllByRole('tab');
    expect(tabs.map((t) => t.textContent)).toEqual(['Agents', 'Campaigns', 'Automations', 'Analytics', 'Integrations']);
    expect(screen.getByRole('tab', { name: 'Agents' })).toHaveAttribute('aria-selected', 'true');
  });

  it('switches content when a tab is clicked', async () => {
    await userEvent.click(screen.getByRole('tab', { name: 'Campaigns' }));
    expect(screen.getByRole('tab', { name: 'Campaigns' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: 'Agents' })).toHaveAttribute('aria-selected', 'false');
    expect(screen.getByRole('tabpanel')).toHaveTextContent(/campaigns you can read and change/i);
  });

  it('supports arrow-key navigation', async () => {
    screen.getByRole('tab', { name: 'Agents' }).focus();
    await userEvent.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Campaigns' })).toHaveAttribute('aria-selected', 'true');
  });
});
