/* global React */
function AboutPage({ onNav }) {
  const { about, content, youtubeChannel } = window.QSData;

  const speaking = content.filter(c => c.type === 'video');
  const majorPress = ['TechCrunch', 'ZDNet', 'CMSWire', 'The AI Journal', 'PhocusWire',
                      'Business Travel News', 'DevPro Journal', 'Information Age'];
  const writing = content.filter(c =>
    (c.type === 'article' && majorPress.some(s => c.source.startsWith(s))) ||
    c.type === 'whitepaper'
  );

  const typeLabel = { video: 'Video', podcast: 'Podcast', article: 'Article', whitepaper: 'White Paper' };

  return (
    <main>

      {/* HERO */}
      <section className="qs-page-hero">
        <div className="qs-page-hero-inner">
          <span className="qs-page-hero-label">About</span>
          <h1 className="qs-page-hero-h">DR.<br />MICHAEL<br />WU</h1>
          <p className="qs-page-hero-lede" style={{ maxWidth: 480 }}>
            {about.title}. The person organizations call when they need to move from AI anxiety to AI action.
          </p>
        </div>
      </section>

      {/* PROFILE */}
      <section className="qs-abt-profile">
        <div className="qs-abt-profile-inner">

          {/* Portrait + links */}
          <div className="qs-abt-portrait-col">
            <div className="qs-abt-portrait" data-reveal="">
              <img src="portrait.jpg" alt="Dr. Michael Wu"
                   style={{ position: 'absolute', inset: 0, width: '100%', height: '100%',
                            objectFit: 'cover', objectPosition: 'center 12%' }} />
            </div>
            <div className="qs-abt-portrait-links" data-reveal="" data-delay="1">
              <a className="qs-about-link" href={about.linkedin} target="_blank" rel="noreferrer">LinkedIn →</a>
              <a className="qs-about-link" href={youtubeChannel} target="_blank" rel="noreferrer">YouTube →</a>
            </div>
          </div>

          {/* Bio blocks */}
          <div className="qs-abt-bio">
            <div className="qs-abt-bio-block" data-reveal="">
              <span className="qs-abt-bio-eyebrow">Background</span>
              <p className="qs-abt-bio-p">
                Former Chief AI Scientist at PROS, where he led AI research, strategy, and product
                development for over a decade. His work sits at the intersection of machine learning,
                behavioral science, and enterprise decision-making.
              </p>
              <p className="qs-abt-bio-p">
                Twenty years of applied research have produced a body of work spanning community
                dynamics, gamification science, pricing optimization, and generative AI. The constant
                is a commitment to making hard technical ideas comprehensible — and actionable.
              </p>
            </div>
            <div className="qs-abt-bio-block" data-reveal="" data-delay="1">
              <span className="qs-abt-bio-eyebrow">What he does now</span>
              <p className="qs-abt-bio-p">
                He consults with organizations navigating AI transformation: helping executives build
                the mental models, behavioral changes, and operational redesigns needed to compete in
                an AI-native world.
              </p>
              <p className="qs-abt-bio-p">
                Three levels of engagement — Inspire, Mobilize, Transform — are sequential by
                design. You can't transform what you haven't mobilized. You can't mobilize what you
                haven't inspired.
              </p>
            </div>
            <div className="qs-abt-bio-block" data-reveal="" data-delay="2">
              <span className="qs-abt-bio-eyebrow">The approach</span>
              <p className="qs-abt-bio-p">
                Plain words for hard problems. No recommendation decks that collect dust.
                The output isn't a framework — it's a shift in how an organization thinks and
                moves. We earn the reader's attention by removing words, not adding them.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SPEAKING */}
      <section className="qs-abt-section">
        <div className="qs-abt-section-inner">
          <div className="qs-abt-section-head" data-reveal="">
            <h2 className="qs-abt-section-h">On stage</h2>
            <a className="qs-tl-channel-link" href={youtubeChannel} target="_blank" rel="noreferrer"
               style={{ marginLeft: 'auto' }}>
              All videos →
            </a>
          </div>
          <ul className="qs-archive-list" data-reveal="">
            {speaking.map((item, i) => (
              <li key={i} className="qs-archive-row">
                <a href={item.url} target="_blank" rel="noreferrer" className="qs-archive-link">
                  <span className={'qs-archive-type-mark type-' + item.type}></span>
                  <span className={'qs-archive-type-label ' + item.type}>{typeLabel[item.type]}</span>
                  <span className="qs-archive-title">{item.title}</span>
                  <span className="qs-archive-source">{item.source}</span>
                  {item.year && <span className="qs-archive-year">{item.year}</span>}
                  <span className="qs-archive-arrow">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WRITING */}
      <section className="qs-abt-section qs-abt-section--warm">
        <div className="qs-abt-section-inner">
          <div className="qs-abt-section-head" data-reveal="">
            <h2 className="qs-abt-section-h">In print</h2>
            <span className="qs-abt-section-count" style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)' }}>
              {writing.length} pieces
            </span>
          </div>
          <ul className="qs-archive-list" data-reveal="">
            {writing.map((item, i) => (
              <li key={i} className="qs-archive-row">
                <a href={item.url} target="_blank" rel="noreferrer" className="qs-archive-link">
                  <span className={'qs-archive-type-mark type-' + item.type}></span>
                  <span className={'qs-archive-type-label ' + item.type}>{typeLabel[item.type]}</span>
                  <span className="qs-archive-title">{item.title}</span>
                  <span className="qs-archive-source">{item.source}</span>
                  {item.year && <span className="qs-archive-year">{item.year}</span>}
                  <span className="qs-archive-arrow">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="qs-cta-banner">
        <div className="qs-cta-inner">
          <div data-reveal="">
            <h2 className="qs-cta-h">Work with Dr. Wu.</h2>
            <p className="qs-cta-sub">A 30-minute call. No commitment. Just plain words.</p>
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
window.AboutPage = AboutPage;
