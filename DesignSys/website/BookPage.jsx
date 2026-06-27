/* global React */
function BookPage() {
  const { booking, about } = window.QSData;
  return (
    <main>
      {/* PAGE HERO */}
      <section className="qs-page-hero">
        <div className="qs-page-hero-inner">
          <span className="qs-page-hero-label">No commitment. Just a conversation.</span>
          <h1 className="qs-page-hero-h">ENGAGE</h1>
          <p className="qs-page-hero-lede">{booking.lede}</p>
          <div className="qs-book-steps">
            {booking.steps.map(s => (
              <div key={s.n} className="qs-book-step">
                <div className="qs-book-step-n">{s.n}</div>
                <h3 className="qs-book-step-t">{s.t}</h3>
                <p className="qs-book-step-d">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDAR + SIDEBAR */}
      <div className="qs-book-content">
        <div className="qs-calendar-wrap" data-reveal="">
          <iframe
            src={booking.url}
            title="Schedule a call with Dr. Michael Wu"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <aside className="qs-book-sidebar">
          <div className="qs-book-sidebar-block" data-reveal="" data-delay="1">
            <h3>What to expect</h3>
            <p>
              A direct conversation about where your organization is with AI, and where you want to go.
              No sales deck. No pitch. Just a diagnostic — plain words, honest assessment.
            </p>
          </div>
          <div className="qs-book-sidebar-block" data-reveal="" data-delay="2">
            <h3>Who you're talking to</h3>
            <p>
              {about.name} — {about.title}. Former Chief AI Scientist at PROS.
              Author of multiple books and research papers on AI, data science, and organizational behavior.
            </p>
            <a href={about.linkedin} target="_blank" rel="noreferrer">LinkedIn profile →</a>
          </div>
        </aside>
      </div>
    </main>
  );
}
window.BookPage = BookPage;
