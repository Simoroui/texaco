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
    slug: slug
  }));
}

// Type pour les paramètres de page
type DisciplinePageProps = {
  params: {
    slug: string
  }
};

export default function DisciplinePage({ params }: DisciplinePageProps) {
  const { slug } = params;
  const discipline = disciplinesData[slug as keyof typeof disciplinesData];

  // Si la discipline n'existe pas, afficher une page d'erreur
  if (!discipline) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Discipline non trouvée</h1>
        <p className="mb-8">La discipline que vous recherchez n'existe pas.</p>
        <Link href="/disciplines" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Retour aux disciplines
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{discipline.title}</h1>
        <h2 className="text-xl md:text-2xl text-red-600 mb-6">{discipline.subtitle}</h2>
        
        <div className="w-full h-64 md:h-96 relative my-8 rounded-lg overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${withBasePath(discipline.imagePath)})` }}
          />
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">{discipline.description}</p>
          
          {/* Ajoutez ici plus de contenu spécifique à chaque discipline */}
          <h3 className="text-2xl font-semibold mt-8 mb-4">Événements à venir</h3>
          <p>Consultez notre calendrier des événements pour voir quand notre équipe participera aux prochaines compétitions.</p>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Nos pilotes</h3>
          <p>Découvrez les pilotes spécialisés dans cette discipline.</p>
          
          <div className="mt-8">
            <Link href="/disciplines" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Toutes les disciplines
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 