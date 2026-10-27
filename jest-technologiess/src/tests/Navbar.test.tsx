import { render, screen, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Where() {
  const { pathname } = useLocation();
  return <p data-testid="where">{pathname}</p>;
}
const setup = () =>
  render(
    <MemoryRouter>
      <Navbar />
      <Where />
    </MemoryRouter>,
  );

describe('Navbar', () => {
  it('renders the logo and primary links', () => {
    setup();
    const nav = within(screen.getByRole('navigation', { name: 'Primary' }));
    ['Home', 'About', 'Services', 'Projects', 'Insights', 'Careers', 'Contact'].forEach((l) => expect(nav.getByRole('link', { name: l })).toBeInTheDocument());
    expect(screen.getByRole('link', { name: /jest technologies home/i })).toBeInTheDocument();
  });

  it('shows the Request a Proposal call to action', () => {
    setup();
    expect(screen.getByRole('link', { name: /request a proposal/i })).toHaveAttribute('href', '/contact');
  });

  it('marks the current page', () => {
    setup();
    expect(within(screen.getByRole('navigation', { name: 'Primary' })).getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page');
  });

  it('navigates when a link is clicked', async () => {
    setup();
    await userEvent.click(within(screen.getByRole('navigation', { name: 'Primary' })).getByRole('link', { name: 'Services' }));
    expect(screen.getByTestId('where')).toHaveTextContent('/services');
  });

  it('opens and closes the mobile menu', async () => {
    setup();
    const toggle = screen.getByRole('button', { name: 'Open menu' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(toggle);
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Close menu' }));
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false');
    await waitFor(() => expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument());
  });

  it('closes the mobile menu on Escape', async () => {
    setup();
    await userEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    await userEvent.keyboard('{Escape}');
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument();
  });
});
