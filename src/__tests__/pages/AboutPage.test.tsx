import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutPage from '@/app/about/page';
import { about, content } from '@/lib/data';

describe('AboutPage', () => {
  it('renders the DR. MICHAEL WU heading', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: 'DR. MICHAEL WU' })).toBeInTheDocument();
  });

  it('renders the SPEAKING heading', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: 'SPEAKING' })).toBeInTheDocument();
  });

  it('renders the WHY QUANTUM SIMPLEX heading', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: 'WHY QUANTUM SIMPLEX' })).toBeInTheDocument();
  });

  it('renders the portrait image with alt=about.name', () => {
    render(<AboutPage />);
    const portrait = screen.getByAltText(about.name);
    expect(portrait.tagName).toBe('IMG');
    expect(portrait).toHaveAttribute('src', '/images/portrait.jpg');
  });

  it('all speaking items link to their video URLs', () => {
    const { container } = render(<AboutPage />);
    const videoUrls = new Set(content.filter((c) => c.type === 'video').map((c) => c.url));
    const sections = [...container.querySelectorAll('.qs-abt-section')];
    const speakingSection = sections.find((section) => section.textContent?.includes('SPEAKING'));
    expect(speakingSection).toBeDefined();
    const links = speakingSection!.querySelectorAll('.qs-archive-link');
    expect(links.length).toBe(videoUrls.size);
    links.forEach((link) => {
      expect(videoUrls.has(link.getAttribute('href')!)).toBe(true);
    });
  });

  it('renders all three why Quantum Simplex levels', () => {
    render(<AboutPage />);
    expect(screen.getByText('Level 01')).toBeInTheDocument();
    expect(screen.getByText('Level 02')).toBeInTheDocument();
    expect(screen.getByText('Level 03')).toBeInTheDocument();
  });

  it('has an external LinkedIn link', () => {
    render(<AboutPage />);
    const linkedin = screen.getByLabelText('LinkedIn');
    expect(linkedin.getAttribute('href')).toContain('linkedin.com');
    expect(linkedin).toHaveAttribute('target', '_blank');
  });
});
