import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import EmailLink from '../../Contact/EmailLink';

describe('EmailLink', () => {
  it('renders the primary contact email', () => {
    render(<EmailLink />);

    expect(screen.getByText('aenyioko090')).toBeInTheDocument();
    expect(screen.getByText('@gmail.com')).toBeInTheDocument();
  });

  it('renders as a mailto link', () => {
    render(<EmailLink />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'mailto:aenyioko090@gmail.com');
  });
});
