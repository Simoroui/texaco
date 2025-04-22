'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';

const teamMembers = [
  {
    id: 1,
    name: "Mohamed Karim",
    role: "Directeur d'Équipe",
    bio: "Plus de 15 ans d'expérience dans les sports automobiles. A mené l'équipe à 5 titres nationaux.",
    photo: "https://source.unsplash.com/random/300x300/?man,portrait"
  },
  {
    id: 2,
    name: "Leila Mansour",
    role: "Pilote - Drift",
    bio: "Championne nationale de drift 2022. Connue pour son style agressif et sa précision technique.",
    photo: "https://source.unsplash.com/random/300x300/?woman,portrait"
  },
  {
    id: 3,
    name: "Amir Ben Salem",
    role: "Pilote - Course 1.6",
    bio: "Trois fois vainqueur du Tunisia Challenge. Un talent remarquable pour les dépassements.",
    photo: "https://source.unsplash.com/random/300x300/?man,portrait,2"
  },
  {
    id: 4,
    name: "Yasmine Trabelsi",
    role: "Ingénieur en Chef",
    bio: "Spécialiste en optimisation de moteur et aérodynamique. Diplômée en ingénierie mécanique.",
    photo: "https://source.unsplash.com/random/300x300/?woman,portrait,2"
  }
];

const TeamSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const members = sectionRef.current?.querySelectorAll('.team-member');
            members?.forEach((member, index) => {
              setTimeout(() => {
                member.classList.add('visible');
              }, 150 * index);
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
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Notre Équipe</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Rencontrez les talentueux membres de l'équipe Texaco Racing qui font de nous des champions sur tous les circuits.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="team-member text-center transition-all duration-500 transform opacity-0 translate-y-10"
            >
              <div className="relative mb-4 overflow-hidden rounded-full shadow-lg group">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-64 h-64 object-cover mx-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex space-x-3">
                    <a href="#" className="text-white hover:text-gray-200">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12.07C22 6.53 17.47 2 12 2S2 6.53 2 12.07c0 4.96 3.67 9.07 8.5 9.93v-7h-2.5v-2.93h2.5V9.93c0-2.47 1.47-3.83 3.73-3.83 1.07 0 2.27.2 2.27.2v2.47h-1.27c-1.26 0-1.63.78-1.63 1.57v1.9h2.8l-.47 2.93h-2.33v7c4.83-.93 8.5-5.04 8.5-9.93z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-gray-200">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.902 4.902 0 0 0-1.772 1.153A4.902 4.902 0 0 0 2.525 5.45c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.284 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 0 0 1.153 1.772 4.902 4.902 0 0 0 1.772 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 0 0 1.772-1.153 4.902 4.902 0 0 0 1.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 0 0-1.153-1.772 4.902 4.902 0 0 0-1.772-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.987.01 4.042.058.976.045 1.505.207 1.858.344.466.181.8.398 1.15.748.35.35.566.684.748 1.15.136.353.299.882.344 1.857.048 1.055.058 1.372.058 4.042s-.01 2.987-.058 4.042c-.045.976-.208 1.504-.344 1.857-.182.466-.398.8-.748 1.15-.35.35-.684.567-1.15.748-.353.137-.882.3-1.857.345-1.055.047-1.373.058-4.042.058s-2.987-.01-4.042-.058c-.976-.045-1.504-.208-1.858-.345-.465-.181-.8-.398-1.15-.748-.35-.35-.566-.684-.748-1.15-.136-.353-.3-.881-.344-1.857-.048-1.055-.058-1.372-.058-4.042s.01-2.987.058-4.042c.045-.975.208-1.504.344-1.858.182-.465.398-.8.748-1.15.35-.35.685-.566 1.15-.748.354-.136.882-.3 1.858-.344 1.055-.048 1.372-.058 4.042-.058z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-red-600 font-semibold mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/team"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Voir toute l'équipe
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .team-member.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default TeamSection; 