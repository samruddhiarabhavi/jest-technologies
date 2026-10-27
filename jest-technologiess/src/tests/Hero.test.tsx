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
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Software built to outlast the launch.');
    expect(screen.getByText('ENGINEERING-LED SOFTWARE COMPANY')).toBeInTheDocument();
  });

  it('renders clickable CTA buttons that link to the right pages', () => {
    expect(screen.getByRole('link', { name: /request a proposal/i })).toHaveAttribute('href', '/contact');
    expect(screen.getByRole('link', { name: /see our work/i })).toHaveAttribute('href', '/projects');
  });
});
