'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { nav } from '@/lib/data';

const darkHeroPages = ['/', '/about', '/services', '/insights', '/engage'];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
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

  const isOnDark = darkHeroPages.includes(pathname);
  const isDark = resolvedTheme === 'dark';
  const headerClass = `qs-header${isOnDark || scrolled ? ' on-dark' : ''}`;
  const logoSrc = isOnDark || scrolled || isDark ? '/assets/logo-white.svg' : '/assets/logo-black.svg';

  return (
    <>
      <header className={headerClass}>
        <Link href="/" className="qs-header-brand">
          <img src={logoSrc} alt="Quantum Simplex" />
        </Link>

        <nav className="qs-header-nav">
          {nav.map((item) => {
            const isActive = pathname === item.href;
            const isEngage = item.id === 'engage';
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`${isEngage ? 'qs-nav-engage' : ''}${isActive ? ' is-active' : ''}`}
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
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          )}
          <button
            className="qs-menu-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <nav className={`qs-mobile-nav${menuOpen ? ' is-open' : ''}`}>
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
