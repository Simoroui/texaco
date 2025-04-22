'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-red-700 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="font-bold text-xl">TEXACO RACING TEAM</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Accueil
          </Link>
          <Link href="/disciplines" className="hover:text-gray-300 transition-colors">
            Disciplines
          </Link>
          <Link href="/team" className="hover:text-gray-300 transition-colors">
            Notre Équipe
          </Link>
          <Link href="/gallery" className="hover:text-gray-300 transition-colors">
            Galerie
          </Link>
          <Link href="/sponsors" className="hover:text-gray-300 transition-colors">
            Sponsors
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-red-800 mt-2 p-4 rounded">
          <div className="flex flex-col space-y-3">
            <Link href="/" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>
              Accueil
            </Link>
            <Link href="/disciplines" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>
              Disciplines
            </Link>
            <Link href="/team" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>
              Notre Équipe
            </Link>
            <Link href="/gallery" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>
              Galerie
            </Link>
            <Link href="/sponsors" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>
              Sponsors
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 