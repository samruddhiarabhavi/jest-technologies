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
    ['Product', 'Company', 'Resources', 'Legal'].forEach((h) => expect(screen.getByRole('heading', { name: h })).toBeInTheDocument());
  });

  it('gives every link a destination', () => {
    footerColumns.flatMap((c) => c.links).forEach((l) => {
      screen.getAllByRole('link', { name: l.label }).forEach((a) => expect(a).toHaveAttribute('href'));
    });
    expect(screen.getByRole('link', { name: 'Documentation' })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'Security' })).toHaveLength(2);
  });

  it('shows the copyright line', () => {
    expect(screen.getByText('© 2026 Jest Technologies. All rights reserved.')).toBeInTheDocument();
  });
});
