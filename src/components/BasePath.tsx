'use client';

// Le basePath à utiliser pour les ressources publiques
export const basePath = process.env.NODE_ENV === 'production' ? '/texaco' : '';

// Fonction utilitaire pour ajouter le basePath à une URL
export function withBasePath(path: string): string {
  if (path.startsWith('http')) {
    return path; // Ne pas modifier les URLs absolues
  }
  return `${basePath}${path}`;
} 