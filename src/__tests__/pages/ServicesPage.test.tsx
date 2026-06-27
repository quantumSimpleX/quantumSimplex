import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ServicesPage from '@/app/services/page';
import { services, booking } from '@/lib/data';

describe('ServicesPage', () => {
  beforeEach(() => {
    window.location.hash = '';
  });

  it('renders the THE SERVICES heading', () => {
    render(<ServicesPage />);
    expect(screen.getByRole('heading', { name: 'THE SERVICES' })).toBeInTheDocument();
  });

  it('renders level-1, level-2, level-3 sections', () => {
    const { container } = render(<ServicesPage />);
    expect(container.querySelector('#level-1')).not.toBeNull();
    expect(container.querySelector('#level-2')).not.toBeNull();
    expect(container.querySelector('#level-3')).not.toBeNull();
  });

  it('renders LEVEL 01, LEVEL 02, LEVEL 03', () => {
    render(<ServicesPage />);
    expect(screen.getByText('LEVEL 01')).toBeInTheDocument();
    expect(screen.getByText('LEVEL 02')).toBeInTheDocument();
    expect(screen.getByText('LEVEL 03')).toBeInTheDocument();
  });

  it('renders INSPIRE, MOBILIZE, TRANSFORM level names', () => {
    const { container } = render(<ServicesPage />);
    const names = Array.from(container.querySelectorAll('.qs-level-name')).map(
      (el) => el.textContent
    );
    expect(names).toEqual(['INSPIRE', 'MOBILIZE', 'TRANSFORM']);
  });

  it('each service renders its thread text', () => {
    render(<ServicesPage />);
    for (const s of services) {
      expect(screen.getByText(s.thread)).toBeInTheDocument();
    }
  });

  it('renders all offerings by name', () => {
    render(<ServicesPage />);
    for (const s of services) {
      for (const o of s.offerings) {
        expect(screen.getByText(o.name)).toBeInTheDocument();
      }
    }
  });

  it('renders the CTA banner with the booking headline', () => {
    render(<ServicesPage />);
    expect(screen.getByText(booking.headline)).toBeInTheDocument();
  });
});
