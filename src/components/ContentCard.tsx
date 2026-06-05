import type { ContentItem } from '@/lib/data';

const typeLabels: Record<ContentItem['type'], string> = {
  video: 'Video',
  podcast: 'Podcast',
  article: 'Article',
};

export default function ContentCard({ item }: { item: ContentItem }) {
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="qs-content-card">
      <div className="qs-content-card-top">
        <span className={`qs-content-type ${item.type}`}>{typeLabels[item.type]}</span>
        {item.year && <span className="qs-content-year">{item.year}</span>}
      </div>
      <p className="qs-content-title">{item.title}</p>
      <div className="qs-content-source">
        <span>{item.source}</span>
        <span className="qs-content-arrow">→</span>
      </div>
    </a>
  );
}
