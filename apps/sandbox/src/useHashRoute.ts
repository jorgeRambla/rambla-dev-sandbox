import { useEffect, useState } from 'react';

function getSlug(): string {
  const hash = window.location.hash.replace(/^#\/?/, '');
  const [path = ''] = hash.split('?');
  return path.replace(/\/$/, '');
}

export function useHashRoute(): string {
  const [slug, setSlug] = useState<string>(getSlug);

  useEffect(() => {
    const onChange = () => setSlug(getSlug());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return slug;
}
