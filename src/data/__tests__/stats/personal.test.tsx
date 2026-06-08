import { describe, expect, it } from 'vitest';

import data from '../../stats/personal';

describe('personal stats data', () => {
  it('exports an array of stats', () => {
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
  });

  it('each stat has required properties', () => {
    for (const stat of data) {
      expect(stat).toHaveProperty('key');
      expect(stat).toHaveProperty('label');
      expect(typeof stat.label).toBe('string');
    }
  });

  it('has a current location stat', () => {
    const locationStat = data.find((s) => s.key === 'location');

    expect(locationStat).toBeDefined();
    expect(locationStat!.label).toBe('Current city');
    expect(locationStat!.value).toBe('Houston, TX');
  });

  it('has a current focus stat', () => {
    const focusStat = data.find((s) => s.key === 'focus');

    expect(focusStat).toBeDefined();
    expect(focusStat!.label).toBe('Current focus');
    expect(focusStat!.value).toBe('Bioinformatics');
  });

  it('has a GitHub repositories stat', () => {
    const githubStat = data.find((s) => s.key === 'github');

    expect(githubStat).toBeDefined();
    expect(githubStat!.label).toBe('Public GitHub repositories');
    expect(githubStat!.link).toContain('github.com/AEnyioko');
  });
});
