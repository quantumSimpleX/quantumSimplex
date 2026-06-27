import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContentCard from '@/components/ContentCard';
import type { ContentItem } from '@/lib/data';

const videoItem: ContentItem = {
  type: 'video',
  title: 'A Great Talk',
  source: 'Some Conference',
  year: 2025,
  url: 'https://www.youtube.com/watch?v=ABC123',
  theme: 'inspire',
};

const articleItem: ContentItem = {
  type: 'article',
  title: 'A Written Piece',
  source: 'CMSWire',
  year: null,
  url: 'https://example.com/article',
  theme: 'mobilize',
};

const podcastItem: ContentItem = {
  type: 'podcast',
  title: 'A Spoken Episode',
  source: 'Some Podcast',
  year: 2024,
  url: 'https://open.spotify.com/episode/xyz',
  theme: 'transform',
};

describe('ContentCard', () => {
  it('renders a link with href matching the item url', () => {
    const { container } = render(<ContentCard item={videoItem} />);
    const link = container.querySelector('a');
    expect(link).toHaveAttribute('href', videoItem.url);
  });

  it('shows the Video type label', () => {
    render(<ContentCard item={videoItem} />);
    expect(screen.getByText('Video')).toBeInTheDocument();
  });

  it('shows the Podcast type label', () => {
    render(<ContentCard item={podcastItem} />);
    expect(screen.getByText('Podcast')).toBeInTheDocument();
  });

  it('shows the Article type label', () => {
    render(<ContentCard item={articleItem} />);
    expect(screen.getByText('Article')).toBeInTheDocument();
  });

  it('shows item.year when present', () => {
    render(<ContentCard item={videoItem} />);
    expect(screen.getByText('2025')).toBeInTheDocument();
  });

  it('does not render a year element when year is null', () => {
    const { container } = render(<ContentCard item={articleItem} />);
    expect(container.querySelector('.qs-content-year')).toBeNull();
  });

  it('renders a YouTube thumbnail img for a video with ?v= URL', () => {
    const { container } = render(<ContentCard item={videoItem} />);
    const img = container.querySelector('img');
    expect(img).not.toBeNull();
    expect(img?.getAttribute('src')).toContain('ABC123');
  });

  it('renders the title as a <p> (no thumbnail) for a non-video item', () => {
    const { container } = render(<ContentCard item={articleItem} />);
    expect(container.querySelector('img')).toBeNull();
    const title = container.querySelector('p.qs-content-title');
    expect(title).not.toBeNull();
    expect(title?.textContent).toBe(articleItem.title);
  });

  it('has target="_blank" and rel="noopener noreferrer"', () => {
    const { container } = render(<ContentCard item={videoItem} />);
    const link = container.querySelector('a');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the source name', () => {
    render(<ContentCard item={articleItem} />);
    expect(screen.getByText('CMSWire')).toBeInTheDocument();
  });
});
