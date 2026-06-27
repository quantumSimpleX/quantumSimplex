import type { ContentItem } from '@/lib/data';

const typeLabels: Record<ContentItem['type'], string> = {
  video: 'Video',
  podcast: 'Podcast',
  article: 'Article',
};

function youtubeId(url: string): string | null {
  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch) return watchMatch[1];
  const shortMatch = url.match(/youtu\.be\/([^?]+)/);
  if (shortMatch) return shortMatch[1];
  return null;
}

export default function ContentCard({ item }: { item: ContentItem }) {
  const ytId = item.type === 'video' ? youtubeId(item.url) : null;

  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="qs-content-card">
      <div className="qs-content-card-top">
        <span className={`qs-content-type ${item.type}`}>{typeLabels[item.type]}</span>
        {item.year && <span className="qs-content-year">{item.year}</span>}
      </div>
      {ytId ? (
        <img
          src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`}
          alt={item.title}
          className="qs-content-thumb"
        />
      ) : (
        <p className="qs-content-title">{item.title}</p>
      )}
      <div className="qs-content-source">
        <span>{item.source}</span>
        <span className="qs-content-arrow">→</span>
      </div>
    </a>
  );
}
