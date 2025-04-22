'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';

const sponsors = [
  {
    id: 1,
    name: "Texaco",
    logo: "https://via.placeholder.com/200x100?text=Texaco",
    description: "Notre sponsor principal, fournisseur d'huiles et de lubrifiants de haute performance."
  },
  {
    id: 2,
    name: "Motul",
    logo: "https://via.placeholder.com/200x100?text=Motul",
    description: "Partenaire technique pour les fluides de course et les lubrifiants spécialisés."
  },
  {
    id: 3,
    name: "Pirelli",
    logo: "https://via.placeholder.com/200x100?text=Pirelli",
    description: "Fournisseur officiel de pneumatiques pour toutes nos disciplines."
  },
  {
    id: 4,
    name: "NGK",
    logo: "https://via.placeholder.com/200x100?text=NGK",
    description: "Partenaire pour les systèmes d'allumage et les bougies."
  },
  {
    id: 5,
    name: "Sparco",
    logo: "https://via.placeholder.com/200x100?text=Sparco",
    description: "Équipement de sécurité et vêtements de compétition."
  },
  {
    id: 6,
    name: "HKS",
    logo: "https://via.placeholder.com/200x100?text=HKS",
    description: "Solutions de performance et pièces spéciales pour nos véhicules."
  }
];

const SponsorsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sponsors = sectionRef.current?.querySelectorAll('.sponsor-item');
            sponsors?.forEach((sponsor, index) => {
              setTimeout(() => {
                sponsor.classList.add('visible');
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.2 }
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
    <section className="py-20 bg-gray-900 text-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nos Sponsors</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Nos partenaires nous aident à poursuivre l'excellence et à atteindre de nouveaux sommets dans chaque compétition.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {sponsors.map((sponsor) => (
            <div 
              key={sponsor.id}
              className="sponsor-item text-center bg-gray-800 p-6 rounded-lg transition-all duration-500 transform opacity-0 translate-y-10 hover:bg-gray-700"
            >
              <img 
                src={sponsor.logo} 
                alt={`${sponsor.name} Logo`} 
                className="mx-auto mb-4 h-24 object-contain"
              />
              <h3 className="text-xl font-bold mb-2">{sponsor.name}</h3>
              <p className="text-gray-400">{sponsor.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="/sponsors"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Devenir sponsor
          </a>
        </div>
      </div>

      <style jsx global>{`
        .sponsor-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default SponsorsSection; 