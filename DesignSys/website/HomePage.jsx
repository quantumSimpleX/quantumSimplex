/* global React */
function ContentCard({ item }) {
  return (
    <a className="qs-content-card" href={item.url} target="_blank" rel="noreferrer">
      <div className="qs-content-card-top">
        <span className={'qs-content-type ' + item.type}>{item.type}</span>
        {item.year && <span className="qs-content-year">{item.year}</span>}
      </div>
      <h3 className="qs-content-title">{item.title}</h3>
      <div className="qs-content-source">
        <span>{item.source}</span>
        <span className="qs-content-arrow">→</span>
      </div>
    </a>
  );
}

function HomePage({ onNav }) {
  const { services, content, about, booking, youtubeChannel, publications } = window.QSData;

  // Pick 3 featured items — one from each theme, preferring video/podcast
  const featured = ['inspire', 'mobilize', 'transform'].map(theme =>
    content.find(c => c.theme === theme && (c.type === 'video' || c.type === 'podcast')) ||
    content.find(c => c.theme === theme)
  ).filter(Boolean);

  return (
    <main>
      {/* HERO */}
      <section className="qs-hero">
        <img className="qs-hero-watermark" src="../assets/icon-black.svg" alt="" />
        <div className="qs-hero-inner">
          <div className="qs-hero-text">
            <span className="qs-hero-label">AI Transformation Advisory</span>
            <h1 className="qs-hero-h">
              INSPIRE.<br />MOBILIZE.<br />TRANSFORM.
            </h1>
            <p className="qs-hero-hook">
              You can't transform what you haven't mobilized.<br />
              You can't mobilize what you haven't inspired.
            </p>
            <p className="qs-hero-lede">
              Three levels of AI transformation, sequential by design.
              Start where your organization actually is.
            </p>
            <div className="qs-hero-ctas">
              <button className="qs-btn-hero-primary" onClick={() => onNav('engage')}>
                Engage →
              </button>
              <button className="qs-btn-hero-ghost" onClick={() => onNav('services')}>
                Explore services
              </button>
            </div>
          </div>
          <div className="qs-hero-stats">
            <div className="qs-hero-stat">
              <div className="qs-hero-stat-n">3</div>
              <div className="qs-hero-stat-label">Levels. Sequential by design.</div>
            </div>
            <div className="qs-hero-stat">
              <div className="qs-hero-stat-n">20+</div>
              <div className="qs-hero-stat-label">Years of AI research and practice.</div>
            </div>
            <div className="qs-hero-stat">
              <div className="qs-hero-stat-n">0</div>
              <div className="qs-hero-stat-label">Recommendation decks that collect dust.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEQUENCE STRIP */}
      <section className="qs-sequence">
        <div className="qs-sequence-inner">
          {services.map((s, i) => (
            <div key={s.level} className="qs-sequence-item"
                 onClick={() => { sessionStorage.setItem('qs-scroll', `level-${s.level}`); onNav('services'); }}
                 style={{ cursor: 'pointer' }}
                 data-reveal="" data-delay={String(i + 1)}>
              <span className="qs-sequence-lvl">LEVEL {s.level}</span>
              <div className={'qs-sequence-name ' + (i===0?'n-aqua':i===1?'n-amethyst':'n-white')}>
                {s.name.toUpperCase()}
              </div>
              <span className={'qs-sequence-tag ' + (i===0?'t-aqua':i===1?'t-amethyst':'t-white')}>
                {s.tagline}
              </span>
              <p className="qs-sequence-thread">{s.thread}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PUBLICATIONS STRIP */}
      <div className="qs-pubs" data-reveal="">
        <div className="qs-pubs-inner">
          <span className="qs-pubs-label">As seen in</span>
          <ul className="qs-pubs-list">
            {publications.map((p, i) => (
              <li key={i} className="qs-pubs-item">{p}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* ABOUT */}
      <section className="qs-about">
        <div className="qs-about-inner">
          <div data-reveal="">
            <span className="qs-about-label">Who is behind this</span>
            <h2 className="qs-about-name">{about.name}</h2>
            <span className="qs-about-title">{about.title}</span>
            <div className="qs-about-links">
              <a className="qs-about-link" href={about.linkedin} target="_blank" rel="noreferrer">LinkedIn →</a>
              <a className="qs-about-link" href={youtubeChannel} target="_blank" rel="noreferrer">YouTube →</a>
            </div>
          </div>
          <div data-reveal="" data-delay="1">
            <p className="qs-about-bio">{about.bio}</p>
          </div>
        </div>
      </section>

      {/* FEATURED THOUGHT LEADERSHIP */}
      <section className="qs-featured">
        <div className="qs-featured-head" data-reveal="">
          <h2 className="qs-featured-h">Recent thought leadership</h2>
          <button className="qs-btn qs-btn-secondary" onClick={() => onNav('insights')}>
            View all →
          </button>
        </div>
        <div className="qs-featured-grid">
          {featured.map((item, i) => (
            <div key={i} data-reveal="" data-delay={String(i + 1)}>
              <ContentCard item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="qs-cta-banner">
        <div className="qs-cta-inner">
          <div data-reveal="">
            <h2 className="qs-cta-h">{booking.headline}</h2>
            <p className="qs-cta-sub">{booking.lede}</p>
          </div>
          <div className="qs-cta-buttons">
            <button className="qs-btn-hero-primary" onClick={() => onNav('engage')}>
              Schedule now →
            </button>
            <button className="qs-btn-hero-ghost" onClick={() => onNav('services')}>
              See the services
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
window.HomePage = HomePage;
window.ContentCard = ContentCard;
