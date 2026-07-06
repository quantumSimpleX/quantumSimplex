import Link from 'next/link';
import SocialLinks from '@/components/SocialLinks';
import { about, content, youtubeChannel } from '@/lib/data';

const typeLabels: Record<string, string> = {
  video: 'Video', podcast: 'Podcast', article: 'Article',
};

export default function AboutPage() {
  const speaking = content.filter((c) => c.type === 'video');

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
                src="/images/portrait.jpg"
                alt={about.name}
                loading="eager"
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
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></svg>
                about.me ↗
              </a>
              <SocialLinks />
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

      {/* WHY QUANTUM SIMPLEX */}
      <section className="qs-abt-section qs-abt-section--alt">
        <div className="qs-abt-section-inner">
          <div className="qs-abt-section-head">
            <h2 className="qs-abt-section-h">WHY QUANTUM SIMPLEX</h2>
          </div>
          <p className="qs-why-intro">3 levels of service, 3 levels of explanation.</p>
          <div className="qs-why-levels">
            <div className="qs-why-level qs-why-level--image" data-reveal="" data-delay="1">
              <span className="qs-why-level-h c-aqua">Level 01</span>
              <div className="qs-why-level-body">
                <Link href="/services#level-1">
                  <img src="/images/Why-QS1.jpg" alt="Abstract visualization of quantum wave-particle duality" className="qs-why-level-img" loading="lazy" />
                </Link>
                <ul className="qs-why-level-list">
                  <li><strong>Quantum Physics:</strong> one of the most perplexing and counterintuitive scientific disciplines.</li>
                  <li><strong>The Simplex:</strong> the simplest possible polytope in any given dimension.</li>
                  <li><strong>Quantum Simplex:</strong> where we distill the most perplexing scientific topics into their simplest essence for business leaders.</li>
                </ul>
              </div>
            </div>
            <div className="qs-why-level qs-why-level--image" data-reveal="" data-delay="2">
              <span className="qs-why-level-h c-amethyst">Level 02</span>
              <div className="qs-why-level-body">
                <Link href="/services#level-2">
                  <img src="/images/Why-QS2.jpg" alt="Simplexes of increasing dimension, from a point to a tetrahedron" className="qs-why-level-img" loading="lazy" />
                </Link>
                <ul className="qs-why-level-list">
                  <li><strong>Quantum Mechanics:</strong> the subatomic reality of a seemingly impossible world that operates under principles of entanglement, wave-particle duality, etc., that defies common sense.</li>
                  <li><strong>The Simplex Algorithm:</strong> a popular linear programming algorithm that optimizes objectives under any number of linear constraints.</li>
                  <li><strong>Quantum Simplex:</strong> where we help companies optimize their AI to achieve the seemingly impossible 10x productivity under real business constraints.</li>
                </ul>
              </div>
            </div>
            <div className="qs-why-level qs-why-level--image" data-reveal="" data-delay="3">
              <span className="qs-why-level-h c-ink">Level 03</span>
              <div className="qs-why-level-body">
                <Link href="/services#level-3">
                  <img src="/images/Why-QS3.jpg" alt="Diagram of a probability simplex with coordinates summing to one" className="qs-why-level-img" loading="lazy" />
                </Link>
                <ul className="qs-why-level-list">
                  <li><strong>Quantum Computing:</strong> use qubits (quantum bits) exist in superposition until measurement collapses them into one observable state.</li>
                  <li><strong>A k-Simplex:</strong> a subspace with positive coordinates summing to 1, representing the infinite possibilities of all discrete probability distributions in (k+1)-dimensions.</li>
                  <li><strong>Quantum Simplex:</strong> where we help enterprises collapse the infinite possibilities of AI into a single actionable strategy with observable ROI.</li>
                </ul>
              </div>
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
