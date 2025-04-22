'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { withBasePath } from './BasePath';

const slides = [
  {
    id: 1,
    title: "DRIFT MASTERS",
    subtitle: "Tunisia Drift Championship",
    description: "Découvrez l'art du contrôle en dérapage avec notre équipe de champions.",
    cta: "Voir les compétitions",
    url: "/disciplines/drift",
    imageSrc: "/assets/images/drift.webp"
  },
  {
    id: 2,
    title: "TWIN DRIFT",
    subtitle: "Maîtrise et Synchronisation",
    description: "L'ultime spectacle de précision où deux voitures dérivent en parfaite harmonie.",
    cta: "Découvrir",
    url: "/disciplines/twin-drift",
    imageSrc: "/assets/images/twin-drift.jpg"
  },
  {
    id: 3,
    title: "COURSE 1.6",
    subtitle: "Tunisia Challenge",
    description: "Préparez-vous pour la course la plus intense du championnat tunisien.",
    cta: "En savoir plus",
    url: "/disciplines/tunisia-challenge",
    imageSrc: "/assets/images/tunisia-challenge.jpg"
  },
  {
    id: 4,
    title: "DRAG RACE",
    subtitle: "Puissance Pure",
    description: "La vitesse à l'état pur. Nos machines sont prêtes à dominer la ligne droite.",
    cta: "Voir les performances",
    url: "/disciplines/drag-race",
    imageSrc: "/assets/images/drag-race.jpg"
  },
  {
    id: 5,
    title: "KARTING",
    subtitle: "Le Début du Parcours",
    description: "Où tout commence. Formez-vous aux bases de la course avec notre équipe d'experts.",
    cta: "Rejoindre le programme",
    url: "/disciplines/karting",
    imageSrc: "/assets/images/karting.jpg"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const getBackgroundStyle = (slideIndex: number) => {
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${withBasePath(slides[slideIndex].imageSrc)}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  };

  return (
    <div className="relative h-screen">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={getBackgroundStyle(index)}
        >
          <div className="flex items-center justify-center h-full">
            <div className="container mx-auto px-6 text-center text-white">
              <h2 className="text-5xl md:text-6xl font-bold mb-2">{slide.title}</h2>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-red-500">{slide.subtitle}</h3>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">{slide.description}</p>
              <Link href={slide.url} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-red-600' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero; 