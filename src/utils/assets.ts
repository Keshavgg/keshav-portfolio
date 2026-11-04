/// <reference types="vite/client" />

/**
 * Universal Asset URL resolver
 * Ensures asset links (e.g. resume, docs, images) resolve properly across:
 * - GitHub Pages (subpath /keshav-portfolio/)
 * - Vercel / Custom domain (root /)
 * - Local Vite dev server
 */
export const getAssetUrl = (relativePath: string): string => {
  const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  const baseUrl = (import.meta as any).env?.BASE_URL || './';
  
  if (baseUrl === './') {
    return `./${cleanPath}`;
  }
  
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
};
