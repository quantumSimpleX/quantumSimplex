'use client';

import { useEffect } from 'react';

export default function RevealProvider() {
  useEffect(() => {
    const seen = new WeakSet<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute('data-visible', '');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: '0px 0px -28px 0px' }
    );

    const scan = () => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        observer.observe(el);
      });
    };

    // Defer the initial scan by one frame so React hydration finishes
    // before we mutate data-rv-seen on server-rendered elements.
    const raf = requestAnimationFrame(scan);

    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
