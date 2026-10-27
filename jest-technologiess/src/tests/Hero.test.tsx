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

  it('renders the headline', () => {
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('We build software that keeps working long after launch.');
  });

  it('has working calls to action', () => {
    expect(screen.getByRole('link', { name: /request a proposal/i })).toHaveAttribute('href', '/contact');
    expect(screen.getByRole('link', { name: /see our work/i })).toHaveAttribute('href', '/projects');
  });
});
