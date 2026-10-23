import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Hero from '../sections/Hero';

describe('Hero', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );
  });

  it('renders the headline and badge', () => {
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Marketing campaigns, running on autopilot.');
    expect(screen.getByText('THE AUTONOMOUS MARKETING PLATFORM')).toBeInTheDocument();
  });

  it('renders clickable CTA buttons that link to the right pages', () => {
    expect(screen.getByRole('link', { name: /book a demo/i })).toHaveAttribute('href', '/contact');
    expect(screen.getByRole('link', { name: /explore platform/i })).toHaveAttribute('href', '/platform');
  });
});
