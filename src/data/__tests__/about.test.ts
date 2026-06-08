import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('exports aboutMarkdown as a string', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.length).toBeGreaterThan(0);
  });

  it('contains the intro section', () => {
    expect(aboutMarkdown).toContain('# Intro');
    expect(aboutMarkdown).toContain('spatial transcriptomics');
    expect(aboutMarkdown).toContain('Houston, TX');
  });

  it('contains the current work section', () => {
    expect(aboutMarkdown).toContain("# What I'm Working On");
    expect(aboutMarkdown).toContain('MPN phenotype research');
    expect(aboutMarkdown).toContain('Variant analysis');
  });

  it('contains the hobbies section', () => {
    expect(aboutMarkdown).toContain('# Hobbies');
    expect(aboutMarkdown).toContain('goodreads.com');
    expect(aboutMarkdown).toContain('Japanese');
  });

  it('contains the interests section', () => {
    expect(aboutMarkdown).toContain('# Interests');
    expect(aboutMarkdown).toContain('Immunology');
    expect(aboutMarkdown).toContain('Spatial transcriptomics');
  });

  it('contains valid markdown links', () => {
    const linkRegex = /\[.+?\]\(.+?\)/g;
    const links = aboutMarkdown.match(linkRegex);

    expect(links).not.toBeNull();
    expect(links!.length).toBeGreaterThan(2);
  });

  it('contains properly formatted headers', () => {
    const headerRegex = /^#+ .+$/gm;
    const headers = aboutMarkdown.match(headerRegex);

    expect(headers).not.toBeNull();
    expect(headers!.length).toBeGreaterThan(3);
  });
});
