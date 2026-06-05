'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { about, youtubeChannel } from '@/lib/data';

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  function scrollToFilters() {
    const el = document.getElementById('filters');
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  return (
    <footer className="qs-footer">
      <div className="qs-footer-main">
        <div className="qs-footer-brand">
          <Link href="/" className="qs-footer-logo-link">
            <img
              src="/assets/logo-black.svg"
              alt="Quantum Simplex"
              className="qs-footer-logo qs-footer-logo--light"
            />
            <img
              src="/assets/logo-white.svg"
              alt="Quantum Simplex"
              className="qs-footer-logo qs-footer-logo--dark"
            />
          </Link>
          <p>AI Transformation Advisory.<br />Plain words. Real results.</p>
        </div>

        <div className="qs-footer-cols">
          <div className="qs-footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services#level-1">Level 1 — Inspire</Link></li>
              <li><Link href="/services#level-2">Level 2 — Mobilize</Link></li>
              <li><Link href="/services#level-3">Level 3 — Transform</Link></li>
            </ul>
          </div>
          <div className="qs-footer-col">
            <h4>Thought Leadership</h4>
            <ul>
              <li><a href={youtubeChannel} target="_blank" rel="noopener noreferrer">YouTube channel</a></li>
              <li><Link href="/insights?type=article" onClick={scrollToFilters}>Articles</Link></li>
              <li><Link href="/insights?type=podcast" onClick={scrollToFilters}>Podcasts</Link></li>
            </ul>
          </div>
          <div className="qs-footer-col">
            <h4>Connect</h4>
            <ul>
              <li><Link href="/about">About {about.name}</Link></li>
              <li><a href={about.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><Link href="/engage">Engage</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="qs-footer-bottom">
        <span>© 2026 Quantum Simplex. All rights reserved.</span>
        <span>v.2026.06</span>
      </div>
    </footer>
  );
}
