import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutPage from '@/app/about/page';
import { about, content } from '@/lib/data';

const majorPress = new Set([
  'TechCrunch', 'ZDNet', 'CMSWire', 'The AI Journal', 'PhocusWire',
  'Business Travel News', 'DevPro Journal', 'Information Age',
]);

describe('AboutPage', () => {
  it('renders the DR. MICHAEL WU heading', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: 'DR. MICHAEL WU' })).toBeInTheDocument();
  });

  it('renders the SPEAKING heading', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: 'SPEAKING' })).toBeInTheDocument();
  });

  it('renders the WRITING heading', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: 'WRITING' })).toBeInTheDocument();
  });

  it('renders the portrait image with alt=about.name', () => {
    render(<AboutPage />);
    const portrait = screen.getByAltText(about.name);
    expect(portrait.tagName).toBe('IMG');
    expect(portrait).toHaveAttribute('src', '/portrait.jpg');
  });

  it('all speaking items link to their video URLs', () => {
    const { container } = render(<AboutPage />);
    const videoUrls = new Set(content.filter((c) => c.type === 'video').map((c) => c.url));
    const speakingSection = container.querySelector('.qs-abt-section');
    const links = speakingSection!.querySelectorAll('.qs-archive-link');
    expect(links.length).toBe(videoUrls.size);
    links.forEach((link) => {
      expect(videoUrls.has(link.getAttribute('href')!)).toBe(true);
    });
  });

  it('writing items are all articles from the major-press set', () => {
    render(<AboutPage />);
    const expectedWriting = content.filter(
      (c) => c.type === 'article' && majorPress.has(c.source)
    );
    expect(expectedWriting.length).toBeGreaterThan(0);
    for (const item of expectedWriting) {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    }
  });

  it('has an external LinkedIn link', () => {
    render(<AboutPage />);
    const linkedin = screen.getByLabelText('LinkedIn');
    expect(linkedin.getAttribute('href')).toContain('linkedin.com');
    expect(linkedin).toHaveAttribute('target', '_blank');
  });
});
