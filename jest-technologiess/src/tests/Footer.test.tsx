import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer, { footerColumns } from '../components/Footer';

describe('Footer', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
  });

  it('renders every column heading', () => {
    ['Company', 'Services', 'Head Office'].forEach((h) => expect(screen.getByRole('heading', { name: h })).toBeInTheDocument());
  });

  it('gives every link a destination', () => {
    footerColumns.flatMap((c) => c.links).forEach((l) => {
      screen.getAllByRole('link', { name: l.label }).forEach((a) => expect(a).toHaveAttribute('href'));
    });
    expect(screen.getByRole('link', { name: 'Careers' })).toHaveAttribute('href', '/careers');
    expect(screen.getByRole('link', { name: /hello@/ })).toHaveAttribute('href', expect.stringMatching(/^mailto:/));
  });

  it('shows the copyright line', () => {
    expect(screen.getByText('© 2026 Jest Technologies. All rights reserved.')).toBeInTheDocument();
  });
});
