import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const teamMembers = [
  {
    id: 1,
    name: "Mohamed Karim",
    role: "Directeur d'Équipe",
    bio: "Plus de 15 ans d'expérience dans les sports automobiles. A mené l'équipe à 5 titres nationaux. Expert en stratégie de course et en développement des talents.",
    disciplines: ["Direction", "Stratégie"],
    photo: "https://source.unsplash.com/random/300x300/?man,portrait"
  },
  {
    id: 2,
    name: "Leila Mansour",
    role: "Pilote - Drift",
    bio: "Championne nationale de drift 2022. Connue pour son style agressif et sa précision technique. A commencé sa carrière en karting avant de se spécialiser en drift.",
    disciplines: ["Drift", "Twin Drift"],
    photo: "https://source.unsplash.com/random/300x300/?woman,portrait"
  },
  {
    id: 3,
    name: "Amir Ben Salem",
    role: "Pilote - Course 1.6",
    bio: "Trois fois vainqueur du Tunisia Challenge. Un talent remarquable pour les dépassements. Formé sur les circuits européens avant de rejoindre Texaco Racing Team.",
    disciplines: ["Course 1.6", "Endurance"],
    photo: "https://source.unsplash.com/random/300x300/?man,portrait,2"
  },
  {
    id: 4,
    name: "Yasmine Trabelsi",
    role: "Ingénieur en Chef",
    bio: "Spécialiste en optimisation de moteur et aérodynamique. Diplômée en ingénierie mécanique de l'École Polytechnique de Tunis. A travaillé pour plusieurs écuries avant de rejoindre Texaco Racing.",
    disciplines: ["Ingénierie", "R&D"],
    photo: "https://source.unsplash.com/random/300x300/?woman,portrait,2"
  },
  {
    id: 5,
    name: "Sofien Mejri",
    role: "Pilote - Drag Race",
    bio: "Recordman national sur le quart de mile. Expert en préparation de moteurs haute performance et en techniques de départ.",
    disciplines: ["Drag Race"],
    photo: "https://source.unsplash.com/random/300x300/?man,portrait,3"
  },
  {
    id: 6,
    name: "Nadia El Feki",
    role: "Coordinatrice d'Équipe",
    bio: "Responsable de la logistique et de la coordination entre les différentes sections de l'équipe. Son organisation impeccable permet à l'équipe de fonctionner sans accroc.",
    disciplines: ["Administration", "Logistique"],
    photo: "https://source.unsplash.com/random/300x300/?woman,portrait,3"
  },
  {
    id: 7,
    name: "Tarak Bouslama",
    role: "Mécanicien en Chef",
    bio: "25 ans d'expérience en mécanique de compétition. Sa connaissance approfondie des moteurs est un atout majeur pour l'équipe dans toutes les disciplines.",
    disciplines: ["Mécanique", "Préparation"],
    photo: "https://source.unsplash.com/random/300x300/?man,portrait,4"
  },
  {
    id: 8,
    name: "Rima Haddad",
    role: "Pilote - Karting",
    bio: "Jeune prodige du karting et double championne nationale juniors. Elle représente l'avenir de Texaco Racing et progresse rapidement vers les catégories supérieures.",
    disciplines: ["Karting", "Développement"],
    photo: "https://source.unsplash.com/random/300x300/?woman,portrait,4"
  },
  {
    id: 9,
    name: "Walid Kammoun",
    role: "Pilote - Twin Drift",
    bio: "Partenaire de drift de Leila Mansour. Leur synchronisation est légendaire, leur permettant de remporter plusieurs titres en Twin Drift au niveau régional.",
    disciplines: ["Drift", "Twin Drift"],
    photo: "https://source.unsplash.com/random/300x300/?man,portrait,5"
  }
];

// Groupes par rôle
const roleGroups = {
  "Direction": teamMembers.filter(member => 
    member.role.includes("Directeur") || member.role.includes("Coordinatrice")),
  "Pilotes": teamMembers.filter(member => 
    member.role.includes("Pilote")),
  "Technique": teamMembers.filter(member => 
    member.role.includes("Ingénieur") || member.role.includes("Mécanicien"))
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="relative h-96 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <img 
          src="https://source.unsplash.com/random/1600x900/?team,racing" 
          alt="Équipe de course" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold mb-4">Notre Équipe</h1>
            <p className="text-xl max-w-2xl">
              Une équipe de passionnés unis par l'amour de la course et l'excellence technique.
              Découvrez les talents qui font de Texaco Racing Team une référence dans le sport automobile tunisien.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        {Object.entries(roleGroups).map(([groupName, members]) => (
          <div key={groupName} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="border-b-4 border-red-600 pb-2">{groupName}</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member) => (
                <div 
                  key={member.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-80">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                      <p className="text-red-500 font-semibold">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{member.bio}</p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">DISCIPLINES:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.disciplines.map((discipline, index) => (
                          <span 
                            key={index}
                            className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                          >
                            {discipline}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <Footer />
    </div>
  );
} 