'use client';
import { useState, useEffect } from 'react';

export default function DynamicImage({ query, alt, style, className }: { query: string, alt: string, style?: React.CSSProperties, className?: string }) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        // Fetch page summary from Wikipedia API which usually includes a thumbnail
        const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`);
        if (res.ok) {
          const data = await res.json();
          if (data.originalimage && data.originalimage.source) {
            setImageUrl(data.originalimage.source);
            return;
          }
        }
        // Fallback: A nice generic mountain landscape if Wikipedia doesn't have an image
        setImageUrl('https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg');
      } catch (_err) {
        setImageUrl('https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg');
      }
    };
    fetchImage();
  }, [query]);

  if (!imageUrl) {
    return <div className={className} style={{ ...style, backgroundColor: '#e2e8f0', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img 
      src={imageUrl} 
      alt={alt} 
      className={className}
      style={{ ...style, objectFit: 'cover' }}
      loading="lazy"
    />
  );
}
