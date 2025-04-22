'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const galleryItems = [
  {
    id: 1,
    type: 'image',
    title: 'Drift Championship 2023',
    category: 'Drift',
    src: 'https://source.unsplash.com/random/800x600/?drift,car,1',
    description: 'Leila Mansour en action lors du Tunisia Drift Championship 2023'
  },
  {
    id: 2,
    type: 'image',
    title: 'Tunisia Challenge',
    category: 'Course 1.6',
    src: 'https://source.unsplash.com/random/800x600/?racing,car,1',
    description: 'Amir Ben Salem sur le circuit de Monastir lors du Tunisia Challenge'
  },
  {
    id: 3,
    type: 'image',
    title: 'Twin Drift Spectacle',
    category: 'Twin Drift',
    src: 'https://source.unsplash.com/random/800x600/?drift,car,2',
    description: 'Leila Mansour et Walid Kammoun en parfaite synchronisation'
  },
  {
    id: 4,
    type: 'image',
    title: 'Drag Race Finals',
    category: 'Drag Race',
    src: 'https://source.unsplash.com/random/800x600/?dragrace,1',
    description: 'Sofien Mejri lors de la finale nationale de Drag Race'
  },
  {
    id: 5,
    type: 'image',
    title: 'Karting Junior Cup',
    category: 'Karting',
    src: 'https://source.unsplash.com/random/800x600/?karting,1',
    description: 'Rima Haddad dominant la compétition junior de karting'
  },
  {
    id: 6,
    type: 'image',
    title: 'Podium Tunisia Challenge',
    category: 'Course 1.6',
    src: 'https://source.unsplash.com/random/800x600/?podium,racing,1',
    description: 'L\'équipe célébrant une victoire au Tunisia Challenge'
  },
  {
    id: 7,
    type: 'image',
    title: 'Préparation Technique',
    category: 'Technique',
    src: 'https://source.unsplash.com/random/800x600/?mechanic,car,1',
    description: 'Notre équipe technique en pleine préparation avant une course'
  },
  {
    id: 8,
    type: 'image',
    title: 'Drift Training Session',
    category: 'Drift',
    src: 'https://source.unsplash.com/random/800x600/?drift,car,3',
    description: 'Session d\'entraînement de drift sur le circuit de Sousse'
  },
  {
    id: 9,
    type: 'image',
    title: 'Team Meeting',
    category: 'Équipe',
    src: 'https://source.unsplash.com/random/800x600/?team,racing,1',
    description: 'Réunion stratégique de l\'équipe avant une compétition importante'
  },
  {
    id: 10,
    type: 'image',
    title: 'Karting Championship',
    category: 'Karting',
    src: 'https://source.unsplash.com/random/800x600/?karting,2',
    description: 'Notre équipe de karting lors du championnat national'
  },
  {
    id: 11,
    type: 'image',
    title: 'Drag Race Start',
    category: 'Drag Race',
    src: 'https://source.unsplash.com/random/800x600/?dragrace,2',
    description: 'Départ explosif lors d\'une compétition de Drag Race'
  },
  {
    id: 12,
    type: 'image',
    title: 'Team Celebration',
    category: 'Équipe',
    src: 'https://source.unsplash.com/random/800x600/?celebration,racing,1',
    description: 'Célébration d\'une saison réussie avec toute l\'équipe Texaco Racing'
  },
];

// Catégories uniques pour les filtres
const categories = ['Tous', ...new Set(galleryItems.map(item => item.category))];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [modalItem, setModalItem] = useState(null);

  const filteredItems = selectedCategory === 'Tous' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (item) => {
    setModalItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="relative h-80 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <img 
          src="https://source.unsplash.com/random/1600x900/?racing,gallery" 
          alt="Galerie d'images de course" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold mb-4">Galerie</h1>
            <p className="text-xl max-w-2xl">
              Découvrez les moments forts de Texaco Racing Team à travers notre collection de photos de compétition.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        {/* Filtres de catégorie */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Grille de galerie */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => openModal(item)}
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal pour afficher l'image en grand */}
      {modalItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-2 hover:bg-red-700 transition-colors duration-300"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <img 
              src={modalItem.src} 
              alt={modalItem.title} 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            
            <div className="bg-white p-6 rounded-b-lg">
              <h3 className="text-2xl font-bold mb-2">{modalItem.title}</h3>
              <p className="text-red-600 mb-4">{modalItem.category}</p>
              <p className="text-gray-700">{modalItem.description}</p>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
} 