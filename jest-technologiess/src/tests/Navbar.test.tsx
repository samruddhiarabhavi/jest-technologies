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
    ['Solutions', 'Platform', 'Industries', 'Resources'].forEach((l) => expect(nav.getByRole('link', { name: l })).toBeInTheDocument());
    expect(screen.getByRole('link', { name: /jest technologies home/i })).toBeInTheDocument();
  });

  it('shows Log in and Get Started', () => {
    setup();
    expect(screen.getByRole('link', { name: 'Log in' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /get started/i })).toHaveAttribute('href', '/contact');
  });

  it('navigates when a link is clicked', async () => {
    setup();
    await userEvent.click(within(screen.getByRole('navigation', { name: 'Primary' })).getByRole('link', { name: 'Platform' }));
    expect(screen.getByTestId('where')).toHaveTextContent('/platform');
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
