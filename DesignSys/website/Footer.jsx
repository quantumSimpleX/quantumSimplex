/* global React */
function Footer({ onNav }) {
  const { about, youtubeChannel } = window.QSData;

  // Navigate to a specific services level.
  // Uses sessionStorage for cross-page nav (picked up by ServicesPage on mount).
  // Falls back to a direct scroll if ServicesPage was already mounted (session not consumed).
  function navToLevel(level) {
    sessionStorage.setItem('qs-scroll', level);
    onNav('services');
    setTimeout(function() {
      if (sessionStorage.getItem('qs-scroll') === level) {
        // ServicesPage didn't re-mount — we're already there, scroll directly
        sessionStorage.removeItem('qs-scroll');
        var el = document.getElementById(level);
        if (el) {
          var top = el.getBoundingClientRect().top + window.scrollY - 88;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      }
    }, 200);
  }

  return (
    <footer className="qs-footer">
      <div className="qs-footer-main">
        <div className="qs-footer-brand">
          <a href="#" onClick={e => { e.preventDefault(); onNav('home'); }} style={{ display: 'inline-block' }}>
            <img src="../assets/logo-black.svg" className="qs-footer-logo qs-footer-logo--light" alt="Quantum Simplex" />
            <img src="../assets/logo-white.svg" className="qs-footer-logo qs-footer-logo--dark"  alt="Quantum Simplex" />
          </a>
        </div>
        <div className="qs-footer-cols">
          <div className="qs-footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#" onClick={e => { e.preventDefault(); navToLevel('level-1'); }}>Level 1 — Inspire</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); navToLevel('level-2'); }}>Level 2 — Mobilize</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); navToLevel('level-3'); }}>Level 3 — Transform</a></li>
            </ul>
          </div>
          <div className="qs-footer-col">
            <h4>Thought Leadership</h4>
            <ul>
              <li><a href={youtubeChannel} target="_blank" rel="noreferrer">YouTube channel</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); onNav('insights'); }}>Articles</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); onNav('insights'); }}>Podcasts</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); onNav('insights'); }}>White papers</a></li>
            </ul>
          </div>
          <div className="qs-footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="#" onClick={e => { e.preventDefault(); onNav('about'); }}>About Dr. Wu</a></li>
              <li><a href={about.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); onNav('engage'); }}>Engage</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="qs-footer-bottom">
        <span>© 2026 Quantum Simplex</span>
        <span>v.2026.06</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
