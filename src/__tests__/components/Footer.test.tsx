import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Footer', () => {
  it('renders Services heading with Level 1, 2, 3 links', () => {
    render(<Footer />);
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument();
    expect(screen.getByText('Level 1 — Inspire')).toHaveAttribute('href', '/services#level-1');
    expect(screen.getByText('Level 2 — Mobilize')).toHaveAttribute('href', '/services#level-2');
    expect(screen.getByText('Level 3 — Transform')).toHaveAttribute('href', '/services#level-3');
  });

  it('renders Thought Leadership heading with a YouTube channel link', () => {
    render(<Footer />);
    expect(screen.getByRole('heading', { name: 'Thought Leadership' })).toBeInTheDocument();
    const yt = screen.getByText('YouTube channel');
    expect(yt.getAttribute('href')).toContain('youtube.com');
  });

  it('renders Connect heading with About, LinkedIn, Engage links', () => {
    render(<Footer />);
    expect(screen.getByRole('heading', { name: 'Connect' })).toBeInTheDocument();
    expect(screen.getByText(/About Dr\. Michael Wu/)).toHaveAttribute('href', '/about');
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('Engage')).toHaveAttribute('href', '/engage');
  });

  it('renders copyright text containing 2026 Quantum Simplex', () => {
    render(<Footer />);
    expect(screen.getByText(/2026 Quantum Simplex/)).toBeInTheDocument();
  });

  it('renders the version string v.2026.06', () => {
    render(<Footer />);
    expect(screen.getByText('v.2026.06')).toBeInTheDocument();
  });

  it('both logo images have alt="Quantum Simplex"', () => {
    render(<Footer />);
    const logos = screen.getAllByAltText('Quantum Simplex');
    expect(logos).toHaveLength(2);
  });

  it('LinkedIn external link has target="_blank"', () => {
    render(<Footer />);
    const linkedin = screen.getByText('LinkedIn');
    expect(linkedin).toHaveAttribute('target', '_blank');
  });
});
