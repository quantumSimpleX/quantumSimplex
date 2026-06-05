'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState, useMemo, Suspense } from 'react';
import { content, youtubeChannel } from '@/lib/data';
import type { ContentItem, ContentType, Theme } from '@/lib/data';

const typeLabels: Record<ContentItem['type'], string> = {
  video: 'Video', podcast: 'Podcast', article: 'Article', whitepaper: 'White Paper',
};

const themeConfig = [
  { theme: 'inspire' as Theme, lvl: 'LEVEL 01', name: 'Inspire', tagline: 'Change Mindset', color: 'c-aqua' },
  { theme: 'mobilize' as Theme, lvl: 'LEVEL 02', name: 'Mobilize', tagline: 'Change Behaviors', color: 'c-amethyst' },
  { theme: 'transform' as Theme, lvl: 'LEVEL 03', name: 'Transform', tagline: 'Change Operations', color: 'c-ink' },
];

function InsightsContent() {
  const searchParams = useSearchParams();
  const initialType = (searchParams.get('type') as ContentType | null) ?? 'all';

  const [typeFilter, setTypeFilter] = useState<ContentType | 'all'>(initialType);
  const [themeFilter, setThemeFilter] = useState<Theme | 'all'>('all');

  const filtered = useMemo(() => {
    return content.filter((c) => {
      const matchType = typeFilter === 'all' || c.type === typeFilter;
      const matchTheme = themeFilter === 'all' || c.theme === themeFilter;
      return matchType && matchTheme;
    });
  }, [typeFilter, themeFilter]);

  const hasAny = filtered.length > 0;

  return (
    <>
      {/* PAGE HERO */}
      <section className="qs-page-hero">
        <div className="qs-page-hero-inner">
          <span className="qs-page-hero-label">Thought Leadership</span>
          <h1 className="qs-page-hero-h">THE ARCHIVE</h1>
          <p className="qs-page-hero-lede">
            Two decades of public thinking on AI, machine learning, data science, and the human systems that make — or break — adoption.
          </p>
          <a href={youtubeChannel} target="_blank" rel="noopener noreferrer" className="qs-tl-channel-link">
            YouTube Channel →
          </a>
        </div>
      </section>

      {/* FILTERS */}
      <div className="qs-tl-filters">
        <div className="qs-filter-bar" style={{ gap: 16, flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {(['all', 'video', 'podcast', 'article', 'whitepaper'] as const).map((t) => (
              <button
                key={t}
                className={`qs-filter-btn${typeFilter === t ? ' is-active' : ''}`}
                onClick={() => setTypeFilter(t)}
              >
                {t === 'all' ? 'All types' : typeLabels[t as ContentType]}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {(['all', 'inspire', 'mobilize', 'transform'] as const).map((th) => (
              <button
                key={th}
                className={`qs-filter-btn qs-filter-btn-sm${themeFilter === th ? ' is-active' : ''}`}
                onClick={() => setThemeFilter(th)}
              >
                {th === 'all' ? 'All themes' : th.charAt(0).toUpperCase() + th.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ARCHIVE */}
      <div className="qs-archive" style={{ paddingTop: 0, paddingBottom: 80 }}>
        {!hasAny && (
          <p className="qs-archive-empty">No items match this filter.</p>
        )}
        {themeConfig.map(({ theme, lvl, name, tagline, color }) => {
          const items = filtered.filter((c) => c.theme === theme);
          if (items.length === 0) return null;
          return (
            <div key={theme} className="qs-archive-section" data-reveal="">
              <div className="qs-archive-section-head">
                <span className="qs-archive-lvl">{lvl}</span>
                <h2 className={`qs-archive-name ${color}`}>{name.toUpperCase()}</h2>
                <span className="qs-archive-tagline">{tagline}</span>
                <span className="qs-archive-count">{items.length}</span>
              </div>
              <ul className="qs-archive-list">
                {items.map((item) => (
                  <li key={item.url} className="qs-archive-row">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="qs-archive-link">
                      <span className={`qs-archive-type-mark type-${item.type}`} />
                      <span className={`qs-archive-type-label ${item.type}`}>{typeLabels[item.type]}</span>
                      <span className="qs-archive-title">{item.title}</span>
                      <span className="qs-archive-source">{item.source}</span>
                      <span className="qs-archive-year">{item.year ?? ''}</span>
                      <span className="qs-archive-arrow">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* CTA BANNER */}
      <section className="qs-cta-banner">
        <div className="qs-cta-inner">
          <div>
            <h2 className="qs-cta-h">Ready to go beyond the reading?</h2>
            <p className="qs-cta-sub">A 30-minute call. No commitment.</p>
          </div>
          <div className="qs-cta-buttons">
            <Link href="/engage" className="qs-btn-hero-primary">Engage →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default function InsightsPage() {
  return (
    <Suspense>
      <InsightsContent />
    </Suspense>
  );
}
