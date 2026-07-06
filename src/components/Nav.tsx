'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { nav } from '@/lib/data';

const darkHeroPages = ['/', '/about', '/services', '/insights', '/engage'];

const QS_OUTER = 'M369.8,138.5c14.3,53.6,4,108.3-24.6,151.2l46.8,46.8l-54.4,54.8l-47.2-47.2c-16.3,10.3-34.1,18.7-54,24.2c-100.4,27-203.6-32.5-230.2-132.1C-20.3,136.1,39.3,33.3,139.7,6.4C239.7-20.2,342.8,38.9,369.8,138.5z';
const QS_INNER = 'M199.2,226.5l78.7-102.2l-74.8-67.4L91.3,124.3l80.2,102.3l-23,29.7l-38.2,47.6h75.2h75.2l-38.2-47.7L199.2,226.5z M135.8,123.3l57.8-34.8l-14.1,112.6l-50.8-64.8H183l1.6-13L135.8,123.3L135.8,123.3z M240.8,136.3l-49.5,64.3l14-111.9l38.4,34.6h-38.2l-1.6,13H240.8z M185.5,281.9h-29.1l9.4-11.7l0.1-0.1l0.1-0.1l19.5-25.1l19.5,25.1l0.1,0.1l0.1,0.1l9.4,11.7H185.5z';

function QSMark({ onDark }: { onDark: boolean }) {
  const outer = onDark ? '#FFFFFF' : '#0A0E14';
  const inner = onDark ? '#0A0E14' : '#FFFFFF';
  return (
    <svg
      viewBox="0 0 392 391.3"
      style={{ height: 44, width: 44, display: 'block', flexShrink: 0 }}
      aria-hidden="true"
    >
      <path fill={outer} d={QS_OUTER} />
      <path fill={inner} d={QS_INNER} />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="1.75" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="4" y2="12" /><line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="1.75" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isDark = mounted && resolvedTheme === 'dark';
  const isOnDark = darkHeroPages.includes(pathname);
  const darkHeader = isDark || (isOnDark && !scrolled);
  const headerClass = `qs-header${darkHeader ? ' on-dark' : ''}`;

  return (
    <>
      <header className={headerClass}>
        <Link href="/" className="qs-header-brand">
          <QSMark onDark={darkHeader} />
          <span className="qs-header-wordmark">
            <span className="w-row" style={{ transform: 'translateY(7px)' }}>
              <span className="w-main">UANTUM</span>
            </span>
            <span className="w-row" style={{ paddingLeft: '16px' }}>
              <span className="w-main">SIMPLE</span>
              <span className="w-x" style={{ fontSize: '28px', letterSpacing: '0.8px' }}>X</span>
            </span>
          </span>
        </Link>

        <nav className="qs-header-nav">
          {nav.map((item) => {
            const isActive = pathname === item.href;
            const isEngage = item.id === 'engage';
            return (
              <Link
                key={item.id}
                href={item.href}
                className={[isEngage ? 'qs-nav-engage' : '', isActive ? 'is-active' : ''].filter(Boolean).join(' ')}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="qs-header-controls">
          {mounted && (
            <button
              className="qs-theme-toggle"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          )}
          <button
            className="qs-menu-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="qs-mobile-nav"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <nav id="qs-mobile-nav" className={`qs-mobile-nav${menuOpen ? ' is-open' : ''}`} aria-label="Mobile">
        {nav.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={item.id === 'engage' ? 'qs-mobile-engage' : ''}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
