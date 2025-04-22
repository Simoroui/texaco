import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const disciplines = [
  {
    id: 1,
    title: "Drift",
    subtitle: "Tunisia Drift Championship",
    description: "Le drift est un style de conduite automobile où le pilote contrôle délibérément la perte d'adhérence des roues arrière dans un virage, tout en maintenant le contrôle et en parcourant l'ensemble du virage. Notre équipe Texaco Racing excelle dans cette discipline technique qui nécessite précision, maîtrise et audace.",
    skills: ["Contrôle de la voiture en dérapage", "Précision dans les trajectoires", "Maintien d'angle élevé", "Proximité avec les obstacles"],
    imageSrc: "https://source.unsplash.com/random/1200x600/?drift,car",
    url: "/disciplines/drift"
  },
  {
    id: 2,
    title: "Twin Drift",
    subtitle: "Synchronisation Parfaite",
    description: "Le Twin Drift pousse l'art du drift encore plus loin en mettant en scène deux pilotes qui dérivent en parfaite synchronisation. Cette discipline spectaculaire demande une coordination exceptionnelle entre les pilotes qui doivent maintenir des trajectoires identiques tout en conservant une proximité impressionnante.",
    skills: ["Coordination entre pilotes", "Communication non verbale", "Conscience spatiale", "Adaptabilité instantanée"],
    imageSrc: "https://source.unsplash.com/random/1200x600/?drift,race",
    url: "/disciplines/twin-drift"
  },
  {
    id: 3,
    title: "Course 1.6",
    subtitle: "Tunisia Challenge",
    description: "La Course 1.6 Tunisia Challenge est une compétition nationale qui met en vedette des voitures de cylindrée 1.6L sur circuit fermé. Cette course exigeante teste l'habileté des pilotes sur différents types de tracés, où chaque milliseconde compte pour la victoire.",
    skills: ["Pilotage de précision", "Gestion tactique de course", "Optimisation des trajectoires", "Dépassements stratégiques"],
    imageSrc: "https://source.unsplash.com/random/1200x600/?circuit,race",
    url: "/disciplines/tunisia-challenge"
  },
  {
    id: 4,
    title: "Drag Race",
    subtitle: "Puissance Pure",
    description: "Le Drag Race est une discipline d'accélération pure où deux voitures s'affrontent sur une ligne droite de 400 mètres (quarter mile). C'est un test brutal de puissance moteur, de préparation mécanique et de réflexes du pilote au départ.",
    skills: ["Réaction au départ", "Changements de vitesse parfaits", "Maîtrise de la puissance", "Préparation mécanique pointue"],
    imageSrc: "https://source.unsplash.com/random/1200x600/?dragrace",
    url: "/disciplines/drag-race"
  },
  {
    id: 5,
    title: "Karting",
    subtitle: "Formation et Performance",
    description: "Le Karting est à la fois un tremplin pour les jeunes talents et une discipline compétitive à part entière. Notre programme de karting forme la prochaine génération de pilotes tout en participant aux championnats nationaux avec des pilotes confirmés.",
    skills: ["Techniques de pilotage fondamentales", "Compréhension des dynamiques de course", "Développement de réflexes rapides", "Esprit d'équipe"],
    imageSrc: "https://source.unsplash.com/random/1200x600/?karting",
    url: "/disciplines/karting"
  }
];

export default function DisciplinesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="relative h-96 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <img 
          src="https://source.unsplash.com/random/1600x900/?racing,motorsport" 
          alt="Course automobile" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold mb-4">Nos Disciplines</h1>
            <p className="text-xl max-w-2xl">
              Texaco Racing Team excelle dans multiples disciplines des sports automobiles.
              Découvrez nos spécialités et nos performances dans chaque catégorie.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-16">
          {disciplines.map((discipline) => (
            <div key={discipline.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={discipline.imageSrc} 
                    alt={discipline.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h2 className="text-3xl font-bold mb-2">{discipline.title}</h2>
                  <p className="text-red-600 text-lg mb-4">{discipline.subtitle}</p>
                  <p className="text-gray-700 mb-6">{discipline.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Compétences clés :</h3>
                    <ul className="space-y-2">
                      {discipline.skills.map((skill, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-red-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={discipline.url}
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition-colors duration-300"
                  >
                    Découvrir notre équipe {discipline.title}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 