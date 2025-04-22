'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const disciplines = [
  {
    id: 1,
    title: "Drift",
    subtitle: "Tunisia Drift Championship",
    description: "Le drift est un style de conduite où le pilote fait délibérément déraper sa voiture dans les virages. Notre équipe participe au Tunisia Drift Championship avec passion et expertise.",
    imageSrc: "https://source.unsplash.com/random/600x400/?drift,car",
    url: "/disciplines/drift"
  },
  {
    id: 2,
    title: "Twin Drift",
    subtitle: "Synchronisation Parfaite",
    description: "Le Twin Drift est une discipline où deux pilotes dérivent en parfaite synchronisation. Précision et coordination sont les maîtres mots de cette discipline spectaculaire.",
    imageSrc: "https://source.unsplash.com/random/600x400/?drift,race",
    url: "/disciplines/twin-drift"
  },
  {
    id: 3,
    title: "Course 1.6",
    subtitle: "Tunisia Challenge",
    description: "La Course 1.6 Tunisia Challenge met à l'épreuve les pilotes dans une compétition intense sur circuit. C'est un mélange de vitesse, d'agilité et de stratégie.",
    imageSrc: "https://source.unsplash.com/random/600x400/?circuit,race",
    url: "/disciplines/tunisia-challenge"
  },
  {
    id: 4,
    title: "Drag Race",
    subtitle: "Puissance Pure",
    description: "Le Drag Race est une course d'accélération sur courte distance. Nos pilotes et nos véhicules sont optimisés pour délivrer des performances explosives sur la ligne droite.",
    imageSrc: "https://source.unsplash.com/random/600x400/?dragrace",
    url: "/disciplines/drag-race"
  },
  {
    id: 5,
    title: "Karting",
    subtitle: "Formation et Performance",
    description: "Le Karting est souvent la porte d'entrée vers le sport automobile. Notre programme de karting forme les jeunes talents et participe également aux compétitions.",
    imageSrc: "https://source.unsplash.com/random/600x400/?karting",
    url: "/disciplines/karting"
  }
];

const DisciplineSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll('.discipline-card');
            cards?.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, 200 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gray-100" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nos Disciplines</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Texaco Racing Team excelle dans diverses disciplines de sports automobiles, chacune exigeant des compétences uniques et une préparation spécifique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {disciplines.map((discipline) => (
            <div 
              key={discipline.id}
              className="discipline-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 transform opacity-0 translate-y-10 hover:shadow-xl"
              style={{ transitionDelay: `${discipline.id * 100}ms` }}
            >
              <div className="relative h-56">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img 
                  src={discipline.imageSrc} 
                  alt={discipline.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-xl font-bold text-white">{discipline.title}</h3>
                  <p className="text-red-500">{discipline.subtitle}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{discipline.description}</p>
                <Link 
                  href={discipline.url}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .discipline-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default DisciplineSection; 