import React from 'react';
import Link from 'next/link';
import { withBasePath } from '@/components/BasePath';

// Données fictives pour les disciplines
const disciplinesData = {
  'drift': {
    title: 'DRIFT MASTERS',
    subtitle: 'Tunisia Drift Championship',
    description: 'Découvrez l\'art du contrôle en dérapage avec notre équipe de champions.',
    imagePath: '/assets/images/drift.webp'
  },
  'twin-drift': {
    title: 'TWIN DRIFT',
    subtitle: 'Maîtrise et Synchronisation',
    description: 'L\'ultime spectacle de précision où deux voitures dérivent en parfaite harmonie.',
    imagePath: '/assets/images/twin-drift.webp'
  },
  'tunisia-challenge': {
    title: 'COURSE 1.6',
    subtitle: 'Tunisia Challenge',
    description: 'Préparez-vous pour la course la plus intense du championnat tunisien.',
    imagePath: '/assets/images/tunisia-challenge.webp'
  },
  'drag-race': {
    title: 'DRAG RACE',
    subtitle: 'Puissance Pure',
    description: 'La vitesse à l\'état pur. Nos machines sont prêtes à dominer la ligne droite.',
    imagePath: '/assets/images/drag-race.webp'
  },
  'karting': {
    title: 'KARTING',
    subtitle: 'Le Début du Parcours',
    description: 'Où tout commence. Formez-vous aux bases de la course avec notre équipe d\'experts.',
    imagePath: '/assets/images/karting.webp'
  }
};

// Cette fonction est nécessaire pour le mode export static de Next.js
export function generateStaticParams() {
  return Object.keys(disciplinesData).map(slug => ({
    slug
  }));
}

export default function DisciplinePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const discipline = disciplinesData[slug as keyof typeof disciplinesData];

  if (!discipline) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Discipline non trouvée</h1>
        <Link href="/disciplines">Retour aux disciplines</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-2">{discipline.title}</h1>
      <h2 className="text-2xl text-red-600 mb-6">{discipline.subtitle}</h2>
      <p className="mb-6">{discipline.description}</p>
      <Link href="/disciplines">Retour aux disciplines</Link>
    </div>
  );
} 