import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';
import { about, booking } from '@/lib/data';

describe('HomePage', () => {
  it('renders the INSPIRE./MOBILIZE./TRANSFORM. hero headline', () => {
    render(<HomePage />);
    expect(screen.getByText(/INSPIRE\./)).toBeInTheDocument();
    expect(screen.getByText(/MOBILIZE\./)).toBeInTheDocument();
    expect(screen.getByText(/TRANSFORM\./)).toBeInTheDocument();
  });

  it('renders all 3 service names in the sequence strip', () => {
    const { container } = render(<HomePage />);
    const names = Array.from(
      container.querySelectorAll('.qs-sequence-name')
    ).map((el) => el.textContent);
    expect(names).toEqual(['INSPIRE', 'MOBILIZE', 'TRANSFORM']);
  });

  it('renders "As seen in" in the publications strip', () => {
    render(<HomePage />);
    expect(screen.getByText('As seen in')).toBeInTheDocument();
  });

  it('renders about.name in the about teaser heading', () => {
    render(<HomePage />);
    // The name also appears in the hero lede, so target the about-teaser heading specifically.
    expect(screen.getByRole('heading', { name: 'DR. MICHAEL WU' })).toBeInTheDocument();
  });

  it('renders the FEATURED VIDEOS. heading', () => {
    render(<HomePage />);
    expect(screen.getByText('FEATURED VIDEOS.')).toBeInTheDocument();
  });

  it('renders the booking headline in the CTA banner', () => {
    render(<HomePage />);
    expect(screen.getByText(booking.headline)).toBeInTheDocument();
  });
});
