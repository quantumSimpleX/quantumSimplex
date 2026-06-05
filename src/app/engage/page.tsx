import { booking, about } from '@/lib/data';

export default function EngagePage() {
  return (
    <>
      {/* PAGE HERO with steps */}
      <section className="qs-page-hero">
        <div className="qs-page-hero-inner">
          <span className="qs-page-hero-label">Engage</span>
          <h1 className="qs-page-hero-h">LET'S TALK.</h1>
          <p className="qs-page-hero-lede">{booking.lede}</p>

          <div className="qs-book-steps">
            {booking.steps.map((step) => (
              <div key={step.n} className="qs-book-step">
                <div className="qs-book-step-n">{step.n}</div>
                <h3 className="qs-book-step-t">{step.t}</h3>
                <p className="qs-book-step-d">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDAR + SIDEBAR */}
      <div className="qs-book-content">
        <div className="qs-calendar-wrap">
          <iframe
            src={booking.url}
            title="Schedule a call with Dr. Michael Wu"
            style={{ background: 'white' }}
          />
        </div>

        <aside className="qs-book-sidebar">
          <div className="qs-book-sidebar-block" data-reveal="" data-delay="1">
            <h3>What to expect</h3>
            <p>
              A diagnostic conversation — not a sales call. We'll listen to where you are, ask a few sharp questions, and give you a plain-language read on where to start and whether we're the right fit.
            </p>
          </div>
          <div className="qs-book-sidebar-block" data-reveal="" data-delay="2">
            <h3>Who you're talking to</h3>
            <p>
              {about.name}. {about.title}. {about.bio}
            </p>
            <a href={about.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn →
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
