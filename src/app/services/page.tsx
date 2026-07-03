'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { services, booking } from '@/lib/data';

const levelColors = ['c-aqua', 'c-amethyst', 'c-ink'];
const levelBgs = ['qs-bg-inspire', 'qs-bg-mobilize', 'qs-bg-transform'];

export default function ServicesPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const timer = setTimeout(() => {
      const el = document.querySelector(hash);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* PAGE HERO */}
      <section className="qs-page-hero">
        <div className="qs-page-hero-inner">
          <span className="qs-page-hero-label">AI Transformation — Three levels</span>
          <h1 className="qs-page-hero-h">THE SERVICES</h1>
          <p className="qs-page-hero-lede">
            Three sequential levels. Each one unlocks the next. You can't mobilize what you haven't inspired. You can't transform what you haven't mobilized.
          </p>
        </div>
      </section>

      {/* SERVICE LEVELS */}
      {services.map((s, i) => (
        <section key={s.level} id={`level-${s.level}`} className={`qs-level ${levelBgs[i]}`}>
          <div className="qs-level-inner">
            <div className="qs-level-header">
              <div className="qs-level-badge" data-reveal="">
                <span className="qs-level-num">LEVEL {String(s.level).padStart(2, '0')}</span>
                <div className={`qs-level-name ${levelColors[i]}`}>{s.name.toUpperCase()}</div>
                <span className="qs-level-tagline">{s.tagline}</span>
              </div>
              <p className="qs-level-thread" data-reveal="" data-delay="1">{s.thread}</p>
            </div>
            <div className="qs-offerings">
              {s.offerings.map((o, oi) => (
                <div key={o.name} className="qs-offering" data-reveal="" data-delay={String(oi + 1)}>
                  <div className="qs-offering-top">
                    <h3 className="qs-offering-name">{o.name}</h3>
                    <span className="qs-offering-engagement">{o.engagement}</span>
                  </div>
                  <p className="qs-offering-desc">{o.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA BANNER */}
      <section className="qs-cta-banner">
        <div className="qs-cta-inner">
          <div>
            <h2 className="qs-cta-h">{booking.headline}</h2>
            <p className="qs-cta-sub">{booking.lede}</p>
          </div>
          <div className="qs-cta-buttons">
            <Link href="/engage" className="qs-btn-hero-primary">Engage →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
