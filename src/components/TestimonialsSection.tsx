'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Faire partie de l'équipe Texaco Racing est une expérience extraordinaire. Les huiles et lubrifiants Texaco donnent à ma voiture une performance exceptionnelle sur tous les circuits.",
    author: "Mehdi Khalsi",
    role: "Pilote de Drift",
    avatar: "https://source.unsplash.com/random/100x100/?man,portrait,1"
  },
  {
    id: 2,
    quote: "Le support technique de l'équipe Texaco Racing est incomparable. Leur expertise en maintenance et en préparation a été cruciale pour mes victoires.",
    author: "Sonia Ben Ammar",
    role: "Pilote de Tunisia Challenge",
    avatar: "https://source.unsplash.com/random/100x100/?woman,portrait,1"
  },
  {
    id: 3,
    quote: "Notre partenariat avec Texaco Racing Team nous a permis de démontrer l'excellence de nos produits dans les conditions les plus exigeantes. Leur professionnalisme est remarquable.",
    author: "Ahmed Farhat",
    role: "Directeur Marketing - Sponsor",
    avatar: "https://source.unsplash.com/random/100x100/?man,portrait,2"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Témoignages</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 absolute top-0 left-0 right-0 translate-x-8'
                }`}
              >
                <div className="bg-gray-100 p-8 rounded-lg shadow-lg relative">
                  <svg 
                    className="absolute top-4 left-4 w-10 h-10 text-red-500 opacity-20" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  <p className="text-gray-700 text-lg mb-6 italic relative z-10">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.author}</h4>
                      <p className="text-red-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-red-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 