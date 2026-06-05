'use client';

import { useEffect } from 'react';

export default function RevealProvider() {
  useEffect(() => {
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
      document.querySelectorAll('[data-reveal]:not([data-rv-seen])').forEach((el) => {
        el.setAttribute('data-rv-seen', '');
        observer.observe(el);
      });
    };

    scan();

    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
