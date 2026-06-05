import Link from 'next/link';
import ContentCard from '@/components/ContentCard';
import { services, content, about, booking, publications, youtubeChannel } from '@/lib/data';
import type { ContentItem } from '@/lib/data';

const sequenceColors = [
  { name: 'n-aqua', tag: 't-aqua' },
  { name: 'n-amethyst', tag: 't-amethyst' },
  { name: 'n-white', tag: 't-white' },
];

function getFeatured(): ContentItem[] {
  const themes = ['inspire', 'mobilize', 'transform'] as const;
  return themes.map((theme) => {
    const preferred = content.find((c) => c.theme === theme && (c.type === 'video' || c.type === 'podcast'));
    return preferred ?? content.find((c) => c.theme === theme)!;
  });
}

export default function HomePage() {
  const featured = getFeatured();

  return (
    <>
      {/* HERO */}
      <section className="qs-hero">
        <img src="/assets/icon-black.svg" alt="" className="qs-hero-watermark" aria-hidden />
        <div className="qs-hero-inner">
          <div className="qs-hero-content">
            <span className="qs-hero-label">AI Transformation Advisory</span>
            <h1 className="qs-hero-h">INSPIRE.<br />MOBILIZE.<br />TRANSFORM.</h1>
            <p className="qs-hero-hook">
              Most organizations don't have an AI problem. They have a clarity problem.
            </p>
            <p className="qs-hero-lede">
              Dr. Michael Wu helps leadership teams cut through the noise — and build the internal capability to act on what actually matters.
            </p>
            <div className="qs-hero-ctas">
              <Link href="/engage" className="qs-btn-hero-primary">Engage →</Link>
              <Link href="/services" className="qs-btn-hero-ghost">Explore services</Link>
            </div>
          </div>
          <div className="qs-hero-stats">
            <div className="qs-hero-stat">
              <div className="qs-hero-stat-n">20+</div>
              <div className="qs-hero-stat-label">Years at the intersection of AI and human behavior</div>
            </div>
            <div className="qs-hero-stat">
              <div className="qs-hero-stat-n">100+</div>
              <div className="qs-hero-stat-label">Keynotes and executive sessions delivered</div>
            </div>
            <div className="qs-hero-stat">
              <div className="qs-hero-stat-n">3</div>
              <div className="qs-hero-stat-label">Sequential levels of AI transformation</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEQUENCE STRIP */}
      <section className="qs-sequence">
        <div className="qs-sequence-inner">
          {services.map((s, i) => (
            <Link
              key={s.level}
              href={`/services#level-${s.level}`}
              className="qs-sequence-item"
              data-reveal=""
              data-delay={String(i + 1)}
            >
              <span className="qs-sequence-lvl">LEVEL {String(s.level).padStart(2, '0')}</span>
              <div className={`qs-sequence-name ${sequenceColors[i].name}`}>{s.name.toUpperCase()}</div>
              <span className={`qs-sequence-tag ${sequenceColors[i].tag}`}>{s.tagline}</span>
              <p className="qs-sequence-thread">{s.thread}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* PUBLICATIONS STRIP */}
      <div className="qs-pubs">
        <div className="qs-pubs-inner">
          <span className="qs-pubs-label">As seen in</span>
          <ul className="qs-pubs-list">
            {publications.map((p) => (
              <li key={p} className="qs-pubs-item">{p}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* ABOUT TEASER */}
      <section className="qs-about">
        <div className="qs-about-inner">
          <div data-reveal="">
            <span className="qs-about-label">About</span>
            <h2 className="qs-about-name">{about.name.toUpperCase()}</h2>
            <span className="qs-about-title">{about.title}</span>
            <div className="qs-about-links">
              <a href={about.linkedin} target="_blank" rel="noopener noreferrer" className="qs-about-link">LinkedIn ↗</a>
              <a href={youtubeChannel} target="_blank" rel="noopener noreferrer" className="qs-about-link">YouTube ↗</a>
            </div>
          </div>
          <div data-reveal="" data-delay="1">
            <p className="qs-about-bio">{about.bio}</p>
          </div>
        </div>
      </section>

      {/* FEATURED THOUGHT LEADERSHIP */}
      <section className="qs-featured">
        <div className="qs-featured-head">
          <h2 className="qs-featured-h">FEATURED THINKING</h2>
          <Link href="/insights" className="qs-btn qs-btn-secondary">View all →</Link>
        </div>
        <div className="qs-featured-grid">
          {featured.map((item) => (
            <ContentCard key={item.url} item={item} />
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="qs-cta-banner">
        <div className="qs-cta-inner">
          <div>
            <h2 className="qs-cta-h">{booking.headline}</h2>
            <p className="qs-cta-sub">{booking.lede}</p>
          </div>
          <div className="qs-cta-buttons">
            <Link href="/engage" className="qs-btn-hero-primary">Schedule now →</Link>
            <Link href="/services" className="qs-btn-hero-ghost">See the services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
