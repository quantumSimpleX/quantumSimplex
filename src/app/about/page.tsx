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
              <a href="https://about.me/michael_wu" target="_blank" rel="noopener noreferrer" className="qs-about-link qs-aboutme-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
                about.me ↗
              </a>
              <div className="qs-social-icons">
                <a href="https://www.linkedin.com/in/michaelwuphd" target="_blank" rel="noopener noreferrer" className="qs-social-icon" aria-label="LinkedIn" title="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://github.com/quantumSimpleX" target="_blank" rel="noopener noreferrer" className="qs-social-icon" aria-label="GitHub" title="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
                <a href="https://www.youtube.com/@quantsimplex" target="_blank" rel="noopener noreferrer" className="qs-social-icon" aria-label="YouTube" title="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
                </a>
                <a href="https://scholar.google.com/citations?user=8lMkEWMAAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer" className="qs-social-icon" aria-label="Google Scholar" title="Google Scholar">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>
                </a>
                <a href="https://x.com/mich8elwu" target="_blank" rel="noopener noreferrer" className="qs-social-icon" aria-label="X (Twitter)" title="X (Twitter)">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
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
