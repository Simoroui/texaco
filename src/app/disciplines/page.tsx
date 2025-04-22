import React from 'react';
import Link from 'next/link';
import { withBasePath } from '@/components/BasePath';

const disciplines = [
  {
    id: 'drift',
    title: 'DRIFT MASTERS',
    subtitle: 'Tunisia Drift Championship',
    description: 'Découvrez l\'art du contrôle en dérapage avec notre équipe de champions.',
    imagePath: '/assets/images/drift.webp'
  },
  {
    id: 'twin-drift',
    title: 'TWIN DRIFT',
    subtitle: 'Maîtrise et Synchronisation',
    description: 'L\'ultime spectacle de précision où deux voitures dérivent en parfaite harmonie.',
    imagePath: '/assets/images/twin-drift.webp'
  },
  {
    id: 'tunisia-challenge',
    title: 'COURSE 1.6',
    subtitle: 'Tunisia Challenge',
    description: 'Préparez-vous pour la course la plus intense du championnat tunisien.',
    imagePath: '/assets/images/tunisia-challenge.webp'
  },
  {
    id: 'drag-race',
    title: 'DRAG RACE',
    subtitle: 'Puissance Pure',
    description: 'La vitesse à l\'état pur. Nos machines sont prêtes à dominer la ligne droite.',
    imagePath: '/assets/images/drag-race.webp'
  },
  {
    id: 'karting',
    title: 'KARTING',
    subtitle: 'Le Début du Parcours',
    description: 'Où tout commence. Formez-vous aux bases de la course avec notre équipe d\'experts.',
    imagePath: '/assets/images/karting.webp'
  }
];

export default function DisciplinesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Nos Disciplines</h1>
      <p className="text-xl text-center max-w-3xl mx-auto mb-16">
        Découvrez les différentes disciplines dans lesquelles l'équipe Texaco Racing Team excelle et compétitionne au niveau national et international.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {disciplines.map((discipline) => (
          <div key={discipline.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div 
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${withBasePath(discipline.imagePath)})` }}
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{discipline.title}</h2>
              <h3 className="text-lg text-red-600 mb-4">{discipline.subtitle}</h3>
              <p className="text-gray-700 mb-6">{discipline.description}</p>
              <Link 
                href={`/disciplines/${discipline.id}`}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-block"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 