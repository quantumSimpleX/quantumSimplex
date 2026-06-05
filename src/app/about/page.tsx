import Link from 'next/link';
import { about, content, youtubeChannel } from '@/lib/data';

const typeLabels: Record<string, string> = {
  video: 'Video', podcast: 'Podcast', article: 'Article',
};

const majorPress = new Set(['TechCrunch', 'ZDNet', 'CMSWire', 'The AI Journal', 'PhocusWire', 'Business Travel News', 'DevPro Journal', 'Information Age']);

export default function AboutPage() {
  const speaking = content.filter((c) => c.type === 'video');
  const writing = content.filter(
    (c) => c.type === 'article' && majorPress.has(c.source)
  );

  return (
    <>
      {/* PAGE HERO */}
      <section className="qs-page-hero">
        <div className="qs-page-hero-inner">
          <span className="qs-page-hero-label">About</span>
          <h1 className="qs-page-hero-h">DR. MICHAEL WU</h1>
          <p className="qs-page-hero-lede" style={{ maxWidth: 480 }}>
            {about.title} — and the person organizations call when they need to move from AI anxiety to AI action.
          </p>
        </div>
      </section>

      {/* PROFILE */}
      <section className="qs-abt-profile">
        <div className="qs-abt-profile-inner">
          <div className="qs-abt-portrait-col">
            <div className="qs-abt-portrait">
              <img
                src="/portrait.jpg"
                alt={about.name}
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center 12%',
                  zIndex: 1,
                }}
              />
            </div>
            <div className="qs-abt-portrait-links">
              <a href={about.linkedin} target="_blank" rel="noopener noreferrer" className="qs-about-link">LinkedIn ↗</a>
              <a href={youtubeChannel} target="_blank" rel="noopener noreferrer" className="qs-about-link">YouTube ↗</a>
            </div>
          </div>

          <div className="qs-abt-bio">
            <div className="qs-abt-bio-block" data-reveal="">
              <span className="qs-abt-bio-eyebrow">Background</span>
              <p className="qs-abt-bio-p">
                Former Chief AI Scientist at PROS. Two decades of research and practice at the intersection of AI, data science, and human behavior — from the mathematics of machine learning to the psychology of adoption.
              </p>
            </div>
            <div className="qs-abt-bio-block" data-reveal="" data-delay="1">
              <span className="qs-abt-bio-eyebrow">What he does now</span>
              <p className="qs-abt-bio-p">
                Advises leadership teams at the inflection point where AI stops being an experiment and starts being an operational reality. Keynote speaker. Advisory engagements. Workforce transformation programs.
              </p>
              <p className="qs-abt-bio-p">
                {about.bio}
              </p>
            </div>
            <div className="qs-abt-bio-block" data-reveal="" data-delay="2">
              <span className="qs-abt-bio-eyebrow">The approach</span>
              <p className="qs-abt-bio-p">
                Three sequential levels: Inspire the mindset, Mobilize the behaviors, Transform the operations. In that order. Every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKING ARCHIVE */}
      <section className="qs-abt-section">
        <div className="qs-abt-section-inner">
          <div className="qs-abt-section-head">
            <h2 className="qs-abt-section-h">SPEAKING</h2>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)' }}>{speaking.length} videos</span>
          </div>
          <ul className="qs-archive-list">
            {speaking.map((item) => (
              <li key={item.url} className="qs-archive-row">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="qs-archive-link">
                  <span className={`qs-archive-type-mark type-${item.type}`} />
                  <span className={`qs-archive-type-label ${item.type}`}>{typeLabels[item.type]}</span>
                  <span className="qs-archive-title">{item.title}</span>
                  <span className="qs-archive-source">{item.source}</span>
                  {item.year && <span className="qs-archive-year">{item.year}</span>}
                  <span className="qs-archive-arrow">→</span>
                </a>
              </li>
            ))}
          </ul>
          <a href={youtubeChannel} target="_blank" rel="noopener noreferrer" className="qs-tl-channel-link" style={{ marginTop: 24, display: 'inline-flex' }}>
            All videos on YouTube →
          </a>
        </div>
      </section>

      {/* WRITING ARCHIVE */}
      <section className="qs-abt-section qs-abt-section--warm">
        <div className="qs-abt-section-inner">
          <div className="qs-abt-section-head">
            <h2 className="qs-abt-section-h">WRITING</h2>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)' }}>{writing.length} pieces</span>
          </div>
          <ul className="qs-archive-list">
            {writing.map((item) => (
              <li key={item.url} className="qs-archive-row">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="qs-archive-link">
                  <span className={`qs-archive-type-mark type-${item.type}`} />
                  <span className={`qs-archive-type-label ${item.type}`}>{typeLabels[item.type]}</span>
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

      {/* CTA BANNER */}
      <section className="qs-cta-banner">
        <div className="qs-cta-inner">
          <div>
            <h2 className="qs-cta-h">Work with Dr. Wu.</h2>
            <p className="qs-cta-sub">A 30-minute call. No commitment. Just plain words.</p>
          </div>
          <div className="qs-cta-buttons">
            <Link href="/engage" className="qs-btn-hero-primary">Engage →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
