import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, act } from '@testing-library/react';
import FeaturedReel from '@/components/FeaturedReel';
import type { ContentItem } from '@/lib/data';

const items: ContentItem[] = [
  { type: 'video', title: 'One', source: 'Source One', year: 2025, url: 'https://www.youtube.com/watch?v=AAA111', theme: 'inspire' },
  { type: 'video', title: 'Two', source: 'Source Two', year: 2024, url: 'https://www.youtube.com/watch?v=BBB222', theme: 'mobilize' },
  { type: 'video', title: 'Three', source: 'Source Three', year: 2023, url: 'https://www.youtube.com/watch?v=CCC333', theme: 'transform' },
];

const n = items.length;

function activeIndices(container: HTMLElement): number[] {
  const all = Array.from(container.querySelectorAll('.qs-reel-item'));
  return all
    .map((el, i) => (el.classList.contains('qs-reel-item--active') ? i : -1))
    .filter((i) => i >= 0);
}

describe('FeaturedReel', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      vi.runOnlyPendingTimers();
    });
    vi.useRealTimers();
  });

  it('renders the reel container', () => {
    let container!: HTMLElement;
    act(() => {
      ({ container } = render(<FeaturedReel items={items} />));
    });
    expect(container.querySelector('.qs-featured-reel')).not.toBeNull();
  });

  it('renders every item tripled (each source appears 3 times)', () => {
    let container!: HTMLElement;
    act(() => {
      ({ container } = render(<FeaturedReel items={items} />));
    });
    const text = container.textContent ?? '';
    for (const item of items) {
      const occurrences = text.split(item.source).length - 1;
      expect(occurrences).toBe(3);
    }
  });

  it('initially marks the item at position n (middle set start) as active', () => {
    let container!: HTMLElement;
    act(() => {
      ({ container } = render(<FeaturedReel items={items} />));
    });
    const reelItems = container.querySelectorAll('.qs-reel-item');
    expect(reelItems[n].classList.contains('qs-reel-item--active')).toBe(true);
  });

  it('advances the active index after 2000ms', () => {
    let container!: HTMLElement;
    act(() => {
      ({ container } = render(<FeaturedReel items={items} />));
    });

    // activeI starts at 0 -> active reel positions are 0, n, 2n
    const before = activeIndices(container);
    expect(before).toContain(0);
    expect(before).toContain(n);

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    // activeI is now 1 -> active reel positions are 1, n+1, 2n+1
    const after = activeIndices(container);
    expect(after).toContain(1);
    expect(after).not.toContain(0);
  });
});
