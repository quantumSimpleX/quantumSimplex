/* global React */
function ServicesPage({ onNav }) {
  const { services, booking } = window.QSData;
  const colors = ['c-aqua', 'c-amethyst', 'c-ink'];

  // Scroll to a specific level if requested via sessionStorage
  React.useEffect(() => {
    const target = sessionStorage.getItem('qs-scroll');
    if (target) {
      sessionStorage.removeItem('qs-scroll');
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 88;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 120);
    }
  }, []);

  return (
    <main>
      <section className="qs-page-hero">
        <div className="qs-page-hero-inner">
          <span className="qs-page-hero-label">AI Transformation — Three levels</span>
          <h1 className="qs-page-hero-h">THE<br />SERVICES</h1>
          <p className="qs-page-hero-lede">
            Three levels, sequential by design. You can't transform what you haven't mobilized.
            You can't mobilize what you haven't inspired. Start wherever your organization actually is.
          </p>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.level} id={`level-${s.level}`} className="qs-level">
          <div className="qs-level-inner">
            <div className="qs-level-header" data-reveal="">
              <div className="qs-level-badge">
                <span className="qs-level-num">LEVEL {String(s.level).padStart(2, '0')}</span>
                <h2 className={'qs-level-name ' + colors[i]}>{s.name.toUpperCase()}</h2>
                <span className="qs-level-tagline">{s.tagline}</span>
              </div>
              <div>
                <p className="qs-level-thread">{s.thread}</p>
              </div>
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

      {/* CTA */}
      <section className="qs-cta-banner">
        <div className="qs-cta-inner">
          <div data-reveal="">
            <h2 className="qs-cta-h">{booking.headline}</h2>
            <p className="qs-cta-sub">{booking.lede}</p>
          </div>
          <div className="qs-cta-buttons">
            <button className="qs-btn-hero-primary" onClick={() => onNav('engage')}>
              Engage →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
window.ServicesPage = ServicesPage;
