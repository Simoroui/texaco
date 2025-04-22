import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const sponsorLevels = [
  {
    id: 1,
    name: "Platine",
    price: "Contactez-nous",
    features: [
      "Logo principal sur toutes les voitures",
      "Logo de grande taille sur les combinaisons",
      "Bannières exclusives sur les événements",
      "Mention dans toutes les communications",
      "Accès VIP à tous les événements",
      "Journée complète avec l'équipe",
      "Utilisation commerciale des images",
      "Présence sur tous les supports médiatiques"
    ],
    recommended: true
  },
  {
    id: 2,
    name: "Or",
    price: "Contactez-nous",
    features: [
      "Logo secondaire sur toutes les voitures",
      "Logo sur les combinaisons",
      "Bannières sur les événements",
      "Mention dans les communications principales",
      "Accès VIP à 5 événements au choix",
      "Demi-journée avec l'équipe",
      "Utilisation limitée des images"
    ],
    recommended: false
  },
  {
    id: 3,
    name: "Argent",
    price: "Contactez-nous",
    features: [
      "Logo sur certaines voitures",
      "Logo sur les vêtements de l'équipe",
      "Présence visuelle sur les événements",
      "Mention dans certaines communications",
      "Accès VIP à 2 événements au choix",
      "Photos avec l'équipe"
    ],
    recommended: false
  },
  {
    id: 4,
    name: "Bronze",
    price: "Contactez-nous",
    features: [
      "Logo sur une voiture",
      "Mention sur le site web",
      "Présence dans les documents officiels",
      "Invitation aux événements principaux",
      "Certificat de partenariat officiel"
    ],
    recommended: false
  }
];

const sponsors = [
  {
    id: 1,
    name: "Texaco",
    logo: "https://via.placeholder.com/300x200?text=Texaco",
    level: "Platine",
    description: "Notre sponsor principal et partenaire historique, Texaco fournit des huiles et lubrifiants de haute performance essentiels à nos victoires."
  },
  {
    id: 2,
    name: "Motul",
    logo: "https://via.placeholder.com/300x200?text=Motul",
    level: "Or",
    description: "Partenaire technique pour les fluides de course et les lubrifiants spécialisés, Motul nous accompagne dans tous nos défis techniques."
  },
  {
    id: 3,
    name: "Pirelli",
    logo: "https://via.placeholder.com/300x200?text=Pirelli",
    level: "Or",
    description: "Fournisseur officiel de pneumatiques pour toutes nos disciplines, Pirelli nous offre adhérence et fiabilité sur tous les terrains."
  },
  {
    id: 4,
    name: "NGK",
    logo: "https://via.placeholder.com/300x200?text=NGK",
    level: "Argent",
    description: "Partenaire pour les systèmes d'allumage et les bougies, NGK garantit des performances optimales de nos moteurs."
  },
  {
    id: 5,
    name: "Sparco",
    logo: "https://via.placeholder.com/300x200?text=Sparco",
    level: "Argent",
    description: "Équipement de sécurité et vêtements de compétition, Sparco assure la protection de nos pilotes dans toutes les conditions."
  },
  {
    id: 6,
    name: "HKS",
    logo: "https://via.placeholder.com/300x200?text=HKS",
    level: "Bronze",
    description: "Solutions de performance et pièces spéciales pour nos véhicules, HKS nous permet de repousser les limites de nos machines."
  }
];

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="relative h-80 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <img 
          src="https://source.unsplash.com/random/1600x900/?racing,sponsor" 
          alt="Sponsors" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold mb-4">Nos Sponsors</h1>
            <p className="text-xl max-w-2xl">
              Découvrez les partenaires qui nous accompagnent vers le succès 
              et comment vous pouvez rejoindre la famille Texaco Racing Team.
            </p>
          </div>
        </div>
      </div>
      
      {/* Sponsors actuels */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nos Partenaires</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous sommes fiers de collaborer avec ces entreprises de renommée qui partagent notre passion pour l'excellence et la performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="p-8 flex items-center justify-center bg-gray-100">
                <img 
                  src={sponsor.logo} 
                  alt={`${sponsor.name} Logo`} 
                  className="h-40 object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">{sponsor.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    sponsor.level === 'Platine' ? 'bg-purple-100 text-purple-800' :
                    sponsor.level === 'Or' ? 'bg-yellow-100 text-yellow-800' :
                    sponsor.level === 'Argent' ? 'bg-gray-100 text-gray-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {sponsor.level}
                  </span>
                </div>
                <p className="text-gray-600">{sponsor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Devenir sponsor */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Devenir Sponsor</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Associez votre marque à l'excellence et à la passion. 
              Texaco Racing Team vous offre une visibilité exceptionnelle 
              et un retour sur investissement tangible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorLevels.map((level) => (
              <div 
                key={level.id} 
                className={`bg-gray-800 rounded-lg overflow-hidden ${
                  level.recommended ? 'border-2 border-red-600 transform scale-105 relative z-10' : ''
                }`}
              >
                {level.recommended && (
                  <div className="bg-red-600 text-white text-center py-2 font-semibold">
                    RECOMMANDÉ
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-center">{level.name}</h3>
                  <div className="text-center mb-6">
                    <span className="text-lg font-medium text-gray-300">{level.price}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {level.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href="/contact"
                    className={`block text-center py-3 px-6 rounded-lg transition duration-300 ${
                      level.recommended 
                        ? 'bg-red-600 hover:bg-red-700 text-white' 
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                    }`}
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Nous proposons également des solutions personnalisées adaptées à vos objectifs et à votre budget.
              Notre équipe est prête à discuter de la meilleure façon de mettre en valeur votre marque.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              Demander une offre personnalisée
            </Link>
          </div>
        </div>
      </div>
      
      {/* Avantages */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Pourquoi nous sponsoriser?</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Au-delà de la simple visibilité, un partenariat avec Texaco Racing Team vous offre des avantages concrets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Visibilité Marketing</h3>
            <p className="text-gray-600">
              Exposition de votre marque lors des compétitions nationales et internationales, 
              touchant un public passionné et engagé. Présence sur nos supports de communication 
              et réseaux sociaux avec une portée significative.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Réseau et Relations</h3>
            <p className="text-gray-600">
              Accès à un réseau d'affaires exclusif, comprenant d'autres sponsors et partenaires. 
              Opportunités de networking lors d'événements VIP et de rencontres professionnelles 
              autour des compétitions.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Image de Marque</h3>
            <p className="text-gray-600">
              Association de votre entreprise aux valeurs du sport automobile : 
              performance, innovation, excellence et esprit d'équipe. Renforcement 
              de votre image auprès d'un public ciblé et passionné.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 