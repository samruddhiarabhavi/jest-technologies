import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Testimonials from '../sections/Testimonials';

describe('Testimonials', () => {
  beforeEach(() => {
    render(<Testimonials />);
  });

  it('shows the first testimonial to assistive tech', () => {
    expect(screen.getByRole('group', { name: '1 of 3' })).toHaveTextContent('Maya Collins');
    expect(screen.getByRole('group', { name: '1 of 3' })).toHaveTextContent('Lumen Retail');
    expect(screen.queryByRole('group', { name: '2 of 3' })).not.toBeInTheDocument();
  });

  it('changes slide with the dots', async () => {
    await userEvent.click(screen.getByRole('button', { name: 'Show testimonial 2' }));
    expect(screen.getByRole('button', { name: 'Show testimonial 2' })).toHaveAttribute('aria-current', 'true');
    expect(screen.getByRole('group', { name: '2 of 3' })).toBeInTheDocument();
  });

  it('wraps around with next and previous', async () => {
    await userEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }));
    expect(screen.getByRole('group', { name: '3 of 3' })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Next testimonial' }));
    expect(screen.getByRole('group', { name: '1 of 3' })).toBeInTheDocument();
  });
});
