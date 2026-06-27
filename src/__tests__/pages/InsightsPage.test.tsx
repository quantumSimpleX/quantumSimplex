import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter, useSearchParams } from 'next/navigation';
import InsightsPage from '@/app/insights/page';

const mockedUseRouter = vi.mocked(useRouter);
const mockedUseSearchParams = vi.mocked(useSearchParams);

function searchParamsStub(values: Record<string, string | null>) {
  return {
    get: (key: string) => values[key] ?? null,
    toString: () => '',
  } as any;
}

describe('InsightsPage', () => {
  let push: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    push = vi.fn();
    mockedUseRouter.mockReturnValue({ push, back: vi.fn(), refresh: vi.fn() } as any);
    mockedUseSearchParams.mockReturnValue(searchParamsStub({}));
  });

  it('renders the THOUGHT LEADERSHIP heading', () => {
    render(<InsightsPage />);
    expect(screen.getByRole('heading', { name: 'THOUGHT LEADERSHIP' })).toBeInTheDocument();
  });

  it('renders the 4 theme filter buttons', () => {
    render(<InsightsPage />);
    expect(screen.getByRole('button', { name: 'All topics' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Level 1 — Inspire' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Level 2 — Mobilize' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Level 3 — Transform' })).toBeInTheDocument();
  });

  it('renders the 4 type filter buttons', () => {
    render(<InsightsPage />);
    expect(screen.getByRole('button', { name: 'All formats' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Video' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Podcast' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Article' })).toBeInTheDocument();
  });

  it('All topics and All formats are active initially', () => {
    render(<InsightsPage />);
    expect(screen.getByRole('button', { name: 'All topics' }).className).toContain('is-active');
    expect(screen.getByRole('button', { name: 'All formats' }).className).toContain('is-active');
  });

  it('clicking the Video type filter calls router.push with ?type=video', async () => {
    const user = userEvent.setup();
    render(<InsightsPage />);
    await user.click(screen.getByRole('button', { name: 'Video' }));
    expect(push).toHaveBeenCalledWith('/insights?type=video', { scroll: false });
  });

  it('shows only video items when type=video', () => {
    mockedUseSearchParams.mockReturnValue(searchParamsStub({ type: 'video' }));
    const { container } = render(<InsightsPage />);
    const labels = Array.from(container.querySelectorAll('.qs-archive-type-label'));
    expect(labels.length).toBeGreaterThan(0);
    labels.forEach((l) => expect(l.textContent).toBe('Video'));
  });

  it('shows only inspire-theme articles when type=article and theme=inspire', () => {
    mockedUseSearchParams.mockReturnValue(
      searchParamsStub({ type: 'article', theme: 'inspire' })
    );
    const { container } = render(<InsightsPage />);
    const empty = container.querySelector('.qs-archive-empty');
    const sections = container.querySelectorAll('.qs-archive-section');
    const labels = Array.from(container.querySelectorAll('.qs-archive-type-label'));

    if (empty) {
      expect(empty.textContent).toBe('No items match this filter.');
    } else {
      // Only the inspire (LEVEL 01) section should be present, all items Article.
      expect(sections).toHaveLength(1);
      expect(container.querySelector('.qs-archive-lvl')?.textContent).toBe('LEVEL 01');
      labels.forEach((l) => expect(l.textContent).toBe('Article'));
    }
  });
});
