const base = import.meta.env.BASE_URL;

export function withBase(path: string) {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:') || path.startsWith('#')) {
    return path;
  }

  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  return `${cleanBase}${cleanPath}`;
}
