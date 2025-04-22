import Link from 'next/link';
import { withBasePath } from '@/components/BasePath';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Texaco Racing Team</h1>
      <p className="text-xl text-center max-w-3xl mx-auto mb-16">
        Bienvenue sur le site officiel de l'équipe Texaco Racing Team. 
        Nous sommes une équipe passionnée de sports automobiles.
      </p>
      
      <h2 className="text-2xl font-bold mb-4">Découvrez nos disciplines :</h2>
      <ul className="space-y-2 mb-8">
        <li>
          <Link href="/disciplines/drift" className="text-blue-600 hover:underline">
            Drift Masters
          </Link>
        </li>
        <li>
          <Link href="/disciplines/twin-drift" className="text-blue-600 hover:underline">
            Twin Drift
          </Link>
        </li>
        <li>
          <Link href="/disciplines/tunisia-challenge" className="text-blue-600 hover:underline">
            Course 1.6 Tunisia Challenge
          </Link>
        </li>
        <li>
          <Link href="/disciplines/drag-race" className="text-blue-600 hover:underline">
            Drag Race
          </Link>
        </li>
        <li>
          <Link href="/disciplines/karting" className="text-blue-600 hover:underline">
            Karting
          </Link>
        </li>
      </ul>
      
      <div className="mt-8">
        <Link href="/test" className="text-blue-600 hover:underline">
          Page de test
        </Link>
      </div>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Images :</h2>
      <p>Image de Drift : <code>{withBasePath('/assets/images/drift.webp')}</code></p>
      <p>Image de Karting : <code>{withBasePath('/assets/images/karting.jpg')}</code></p>
    </div>
  );
}
