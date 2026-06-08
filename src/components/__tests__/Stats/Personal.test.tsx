import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Personal from '../../Stats/Personal';

describe('Personal', () => {
  it('renders the personal stats table', () => {
    render(<Personal />);

    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('displays current city', () => {
    render(<Personal />);

    expect(screen.getByText('Current city')).toBeInTheDocument();
    expect(screen.getByText('Houston, TX')).toBeInTheDocument();
  });

  it('displays current focus', () => {
    render(<Personal />);

    expect(screen.getByText('Current focus')).toBeInTheDocument();
    expect(screen.getByText('Bioinformatics')).toBeInTheDocument();
  });

  it('has a link for public GitHub repositories', () => {
    render(<Personal />);

    const link = screen.getByRole('link', { name: /9/i });
    expect(link).toHaveAttribute(
      'href',
      'https://github.com/AEnyioko?tab=repositories',
    );
  });
});
