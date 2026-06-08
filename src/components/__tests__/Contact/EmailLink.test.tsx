import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import EmailLink from '../../Contact/EmailLink';

describe('EmailLink', () => {
  it('renders the primary contact email', () => {
    render(<EmailLink />);

    expect(screen.getByText('chibuzor.a.enyioko')).toBeInTheDocument();
    expect(screen.getByText('@uth.tmc.edu')).toBeInTheDocument();
  });

  it('renders as a mailto link', () => {
    render(<EmailLink />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute(
      'href',
      'mailto:chibuzor.a.enyioko@uth.tmc.edu',
    );
  });
});
