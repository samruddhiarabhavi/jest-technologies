import { render, screen } from '@testing-library/react';
import ClientNotes from '../sections/ClientNotes';
import { testimonials } from '../data/testimonials';

describe('Client notes', () => {
  it('shows every testimonial with its author and company', () => {
    render(<ClientNotes />);
    expect(screen.getAllByRole('blockquote')).toHaveLength(testimonials.length);
    testimonials.forEach((t) => expect(screen.getByText(t.name)).toBeInTheDocument());
  });
});
