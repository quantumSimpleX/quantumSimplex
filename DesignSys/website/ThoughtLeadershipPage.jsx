/* global React */
function ThoughtLeadershipPage({ onNav }) {
  const { content, youtubeChannel } = window.QSData;
  const [typeFilter, setTypeFilter] = React.useState('all');
  const [themeFilter, setThemeFilter] = React.useState('all');

  const types = ['all', 'video', 'podcast', 'article', 'whitepaper'];
  const themes = [
    { id: 'all',       label: 'All topics' },
    { id: 'inspire',   label: 'Level 1 — Inspire',   color: 'c-aqua' },
    { id: 'mobilize',  label: 'Level 2 — Mobilize',  color: 'c-amethyst' },
    { id: 'transform', label: 'Level 3 — Transform',  color: 'c-ink' },
  ];

  const themeConfig = {
    inspire:   { label: 'INSPIRE',   tagline: 'Change Mindset', color: 'c-aqua',     lvl: 'LEVEL 01' },
    mobilize:  { label: 'MOBILIZE',  tagline: 'Change Behaviors', color: 'c-amethyst', lvl: 'LEVEL 02' },
    transform: { label: 'TRANSFORM', tagline: 'Change Operations', color: 'c-ink',      lvl: 'LEVEL 03' },
  };

  const typeLabel = { video: 'Video', podcast: 'Podcast', article: 'Article', whitepaper: 'White Paper' };

  const filtered = content.filter(c =>
    (typeFilter === 'all' || c.type === typeFilter) &&
    (themeFilter === 'all' || c.theme === themeFilter)
  );

  // Group by theme for the archive view
  const grouped = ['inspire', 'mobilize', 'transform']
    .map(theme => ({
      theme,
      items: filtered.filter(c => c.theme === theme),
    }))
    .filter(g => g.items.length > 0);

  return (
    <main>
      {/* PAGE HERO */}
      <section className="qs-page-hero">
        <div className="qs-page-hero-inner">
          <span className="qs-page-hero-label">The Archive</span>
          <h1 className="qs-page-hero-h">THOUGHT<br />LEADERSHIP</h1>
          <p className="qs-page-hero-lede">
            Keynotes, podcasts, articles, and white papers.
            Organized by the three levels of AI transformation.
          </p>
          <a className="qs-tl-channel-link" href={youtubeChannel} target="_blank" rel="noreferrer">
            All videos on YouTube →
          </a>
        </div>
      </section>

      {/* FILTER BARS */}
      <div className="qs-tl-filters">
        <div className="qs-filter-bar">
          {themes.map(t => (
            <button key={t.id}
                    className={'qs-filter-btn' + (themeFilter === t.id ? ' is-active' : '')}
                    onClick={() => setThemeFilter(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="qs-filter-bar" style={{ paddingTop: 12, paddingBottom: 0 }}>
          {types.map(t => (
            <button key={t}
                    className={'qs-filter-btn qs-filter-btn-sm' + (typeFilter === t ? ' is-active' : '')}
                    onClick={() => setTypeFilter(t)}>
              {t === 'all' ? 'All formats' : typeLabel[t]}
            </button>
          ))}
        </div>
      </div>

      {/* ARCHIVE */}
      <div className="qs-archive" style={{ paddingBottom: 80 }}>
        {grouped.length === 0 && (
          <div className="qs-archive-empty">No items match this filter.</div>
        )}
        {grouped.map(({ theme, items }) => {
          const cfg = themeConfig[theme];
          return (
            <div key={theme} className="qs-archive-section" data-reveal="">
              <div className="qs-archive-section-head">
                <span className="qs-archive-lvl">{cfg.lvl}</span>
                <h2 className={'qs-archive-name ' + cfg.color}>{cfg.label}</h2>
                <span className="qs-archive-tagline">{cfg.tagline}</span>
                <span className="qs-archive-count">{items.length} items</span>
              </div>
              <ul className="qs-archive-list">
                {items.map((item, i) => (
                  <li key={i} className="qs-archive-row">
                    <a href={item.url} target="_blank" rel="noreferrer" className="qs-archive-link">
                      <span className={'qs-archive-type-mark type-' + item.type}></span>
                      <span className={'qs-archive-type-label ' + item.type}>
                        {typeLabel[item.type]}
                      </span>
                      <span className="qs-archive-title">{item.title}</span>
                      <span className="qs-archive-source">{item.source}</span>
                      {item.year && <span className="qs-archive-year">{item.year}</span>}
                      <span className="qs-archive-arrow">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <section className="qs-cta-banner">
        <div className="qs-cta-inner">
          <div data-reveal="">
            <h2 className="qs-cta-h">Ready to talk AI?</h2>
            <p className="qs-cta-sub">30 minutes. No agenda. Just plain words.</p>
          </div>
          <div className="qs-cta-buttons">
            <button className="qs-btn-hero-primary" onClick={() => onNav('engage')}>
              Engage →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
window.ThoughtLeadershipPage = ThoughtLeadershipPage;
