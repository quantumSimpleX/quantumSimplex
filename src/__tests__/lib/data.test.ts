import { describe, it, expect } from 'vitest';
import {
  nav,
  about,
  services,
  content,
  booking,
  publications,
  youtubeChannel,
} from '@/lib/data';

describe('nav', () => {
  it('has exactly 4 items', () => {
    expect(nav).toHaveLength(4);
  });

  it('each item has id, label, href', () => {
    for (const item of nav) {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('label');
      expect(item).toHaveProperty('href');
    }
  });

  it('hrefs are /about, /services, /insights, /engage', () => {
    expect(nav.map((n) => n.href)).toEqual([
      '/about',
      '/services',
      '/insights',
      '/engage',
    ]);
  });
});

describe('about', () => {
  it('name is Dr. Michael Wu', () => {
    expect(about.name).toBe('Dr. Michael Wu');
  });

  it('linkedin is a LinkedIn URL', () => {
    expect(about.linkedin.startsWith('https://www.linkedin.com')).toBe(true);
  });
});

describe('services', () => {
  it('has exactly 3 items', () => {
    expect(services).toHaveLength(3);
  });

  it('levels are 1, 2, 3', () => {
    expect(services.map((s) => s.level)).toEqual([1, 2, 3]);
  });

  it('names are Inspire, Mobilize, Transform', () => {
    expect(services.map((s) => s.name)).toEqual([
      'Inspire',
      'Mobilize',
      'Transform',
    ]);
  });

  // KNOWN DATA BUG: Level 1 "Inspire" currently has only 1 offering.
  // The design prototype specifies 2 (Strategic Keynotes + Foundational Education).
  // This test asserts the CORRECT expectation (2) and is expected to FAIL for services[0]
  // until the data is fixed.
  it.each(services)('service "$name" has exactly 2 offerings', (service) => {
    expect(service.offerings).toHaveLength(2);
  });

  it('every offering has name, engagement, description', () => {
    for (const service of services) {
      for (const offering of service.offerings) {
        expect(typeof offering.name).toBe('string');
        expect(offering.name.length).toBeGreaterThan(0);
        expect(typeof offering.engagement).toBe('string');
        expect(typeof offering.description).toBe('string');
      }
    }
  });
});

describe('content', () => {
  it('is an array with at least 30 items', () => {
    expect(Array.isArray(content)).toBe(true);
    expect(content.length).toBeGreaterThanOrEqual(30);
  });

  it('every item has a valid type', () => {
    for (const item of content) {
      expect(['video', 'podcast', 'article']).toContain(item.type);
    }
  });

  it('every item has a non-empty title string', () => {
    for (const item of content) {
      expect(typeof item.title).toBe('string');
      expect(item.title.length).toBeGreaterThan(0);
    }
  });

  it('every item has a non-empty source string', () => {
    for (const item of content) {
      expect(typeof item.source).toBe('string');
      expect(item.source.length).toBeGreaterThan(0);
    }
  });

  it('every item url starts with https://', () => {
    for (const item of content) {
      expect(item.url.startsWith('https://')).toBe(true);
    }
  });

  it('every item has a valid theme', () => {
    for (const item of content) {
      expect(['inspire', 'mobilize', 'transform']).toContain(item.theme);
    }
  });

  it('every item year is a number or null', () => {
    for (const item of content) {
      expect(item.year === null || typeof item.year === 'number').toBe(true);
    }
  });

  it('contains at least one item of each type', () => {
    const types = new Set(content.map((c) => c.type));
    expect(types.has('video')).toBe(true);
    expect(types.has('podcast')).toBe(true);
    expect(types.has('article')).toBe(true);
  });

  it('contains at least one item of each theme', () => {
    const themes = new Set(content.map((c) => c.theme));
    expect(themes.has('inspire')).toBe(true);
    expect(themes.has('mobilize')).toBe(true);
    expect(themes.has('transform')).toBe(true);
  });
});

describe('booking', () => {
  it('url starts with https://', () => {
    expect(booking.url.startsWith('https://')).toBe(true);
  });

  it('steps has 3 items each with n, t, d', () => {
    expect(booking.steps).toHaveLength(3);
    for (const step of booking.steps) {
      expect(step).toHaveProperty('n');
      expect(step).toHaveProperty('t');
      expect(step).toHaveProperty('d');
    }
  });
});

describe('publications', () => {
  it('is an array of strings with at least 10 items', () => {
    expect(Array.isArray(publications)).toBe(true);
    expect(publications.length).toBeGreaterThanOrEqual(10);
    for (const p of publications) {
      expect(typeof p).toBe('string');
    }
  });
});

describe('youtubeChannel', () => {
  it('starts with https://www.youtube.com', () => {
    expect(youtubeChannel.startsWith('https://www.youtube.com')).toBe(true);
  });
});

describe('featured video IDs (from src/app/page.tsx)', () => {
  const featuredIds = [
    'hWG3tqdAsLo',
    'LyaJPa4-8QE',
    'd9PzY7O4GNM',
    'kjsDzf7kmPU',
    'ZvZM6I-ngcQ',
    'AcT8W6-j16Y',
  ];

  // If any of these IDs is missing from content, getFeatured() in page.tsx produces
  // `undefined`, which crashes FeaturedReel at runtime. These tests guard against that.
  it.each(featuredIds)('content contains an item for featured id %s', (id) => {
    expect(content.find((c) => c.url.includes(id))).toBeDefined();
  });
});
