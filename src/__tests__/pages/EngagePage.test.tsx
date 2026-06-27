import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import EngagePage from '@/app/engage/page';
import { booking, about } from '@/lib/data';

describe('EngagePage', () => {
  it("renders the LET'S TALK. heading", () => {
    render(<EngagePage />);
    expect(screen.getByRole('heading', { name: /let's talk/i })).toBeInTheDocument();
  });

  it('renders the 3 booking step numbers', () => {
    render(<EngagePage />);
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
  });

  it('renders all 3 step titles', () => {
    render(<EngagePage />);
    for (const step of booking.steps) {
      expect(screen.getByText(step.t)).toBeInTheDocument();
    }
  });

  it('renders an iframe with src=booking.url', () => {
    const { container } = render(<EngagePage />);
    const iframe = container.querySelector('iframe');
    expect(iframe).not.toBeNull();
    expect(iframe).toHaveAttribute('src', booking.url);
  });

  it('the iframe has a white background style', () => {
    const { container } = render(<EngagePage />);
    const iframe = container.querySelector('iframe');
    expect(iframe).toHaveStyle({ background: 'white' });
  });

  it('renders the "What to expect" sidebar heading', () => {
    render(<EngagePage />);
    expect(screen.getByRole('heading', { name: 'What to expect' })).toBeInTheDocument();
  });

  it("renders the \"Who you're talking to\" sidebar heading", () => {
    render(<EngagePage />);
    expect(screen.getByRole('heading', { name: "Who you're talking to" })).toBeInTheDocument();
  });

  it('renders about.name in the sidebar', () => {
    render(<EngagePage />);
    expect(screen.getByText(/Dr\. Michael Wu/)).toBeInTheDocument();
  });

  it('renders an external LinkedIn link', () => {
    render(<EngagePage />);
    const linkedin = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedin).toHaveAttribute('href', about.linkedin);
    expect(linkedin).toHaveAttribute('target', '_blank');
  });
});
