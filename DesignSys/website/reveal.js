/* =========================================================
   Quantum Simplex — Scroll Reveal
   Watches for [data-reveal] elements and adds [data-visible]
   when they enter the viewport. Works with React's DOM
   updates via MutationObserver — no component changes needed
   beyond adding data-reveal / data-delay="N" attrs.
   ========================================================= */
(function () {
  'use strict';

  // Fallback: skip animation entirely
  if (typeof IntersectionObserver === 'undefined') {
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.setAttribute('data-visible', '');
    });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.setAttribute('data-visible', '');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -28px 0px' });

  function observeEl(el) {
    if (el._rvSeen) return;
    el._rvSeen = true;
    io.observe(el);
  }

  function scanDOM() {
    document.querySelectorAll('[data-reveal]').forEach(observeEl);
  }

  // Pick up elements React adds after navigation
  var mo = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      m.addedNodes.forEach(function (node) {
        if (node.nodeType !== 1) return;
        if (node.hasAttribute && node.hasAttribute('data-reveal')) observeEl(node);
        if (node.querySelectorAll) node.querySelectorAll('[data-reveal]').forEach(observeEl);
      });
    });
  });

  function init() {
    mo.observe(document.body, { childList: true, subtree: true });
    scanDOM();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Catch anything React painted before the observer was ready
  setTimeout(scanDOM, 80);
  setTimeout(scanDOM, 300);
})();
