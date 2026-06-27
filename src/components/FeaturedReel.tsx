'use client';

import { useState, useEffect, useRef } from 'react';
import ContentCard from './ContentCard';
import type { ContentItem } from '@/lib/data';

const CARD_W = 320;
const GAP = 34;
const STEP = CARD_W + GAP;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FeaturedReel({ items }: { items: ContentItem[] }) {
  const n = items.length;
  const [order, setOrder] = useState(items);
  // Start at the middle set so the first and last items have neighbours on both sides
  const [idx, setIdx] = useState(n);
  const [snapping, setSnapping] = useState(false);
  const [containerW, setContainerW] = useState(0);
  const reelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOrder(shuffle(items));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const el = reelRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setContainerW(e.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Wait 2s, snap forward one card
  useEffect(() => {
    if (snapping) return;
    const t = setTimeout(() => {
      setSnapping(true);
      setIdx(i => i + 1);
    }, 2000);
    return () => clearTimeout(t);
  }, [idx, snapping]);

  // After 200ms snap, end transition; when we reach the third set, silently reset to middle set
  useEffect(() => {
    if (!snapping) return;
    const t = setTimeout(() => {
      setSnapping(false);
      setIdx(i => (i >= 2 * n ? n : i));
    }, 200);
    return () => clearTimeout(t);
  }, [snapping, n]);

  const centerOffset = containerW > 0 ? containerW / 2 - CARD_W / 2 : 56;
  const translateX = centerOffset - idx * STEP;
  const activeI = idx % n;

  // Three copies: [end-wrap | active set | forward-wrap]
  const tripled = [...order, ...order, ...order];

  return (
    <div className="qs-featured-reel" ref={reelRef}>
      <div
        className="qs-featured-track"
        style={{
          transform: `translateX(${translateX}px)`,
          transition: snapping ? 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
        }}
      >
        {tripled.map((item, i) => (
          <div
            key={`${item.url}-${i}`}
            className={`qs-reel-item${i % n === activeI ? ' qs-reel-item--active' : ''}`}
          >
            <ContentCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
