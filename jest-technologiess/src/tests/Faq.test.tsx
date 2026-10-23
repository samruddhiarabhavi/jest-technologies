import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Faq, { faqItems } from '../components/Faq';

describe('FAQ accordion', () => {
  it('opens and closes items', async () => {
    render(<Faq />);
    const first = screen.getByRole('button', { name: faqItems[0].q });
    const second = screen.getByRole('button', { name: faqItems[1].q });
    expect(first).toHaveAttribute('aria-expanded', 'true');
    expect(second).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(second);
    expect(second).toHaveAttribute('aria-expanded', 'true');
    expect(first).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(second);
    expect(second).toHaveAttribute('aria-expanded', 'false');
  });
});
