"use client";
import React, { useState, ReactNode } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-cover bg-center h-16 bg-[#112475] bg-opacity-50 text-base text-white py-10 px-6 w-full flex font-sans items-center">
      <div className="absolute inset-0 bg-blue-800 bg-opacity-50"></div>
      <div className="relative flex items-center w-full z-10 justify-between">
        <div className="flex-shrink-0">
          <Image
            src="/images/ujuzilogo.png"
            alt="Logo"
            width={100}
            height={50}
            className="object-contain"
          />
        </div>

        <div className="hidden md:flex gap-40 mt-2 text-2xl mr-40">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#services">Our Services</NavLink>
          <NavLink href="#team">Our Team</NavLink>
          <NavLink href="#footer">Contact</NavLink>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-blue-800 bg-opacity-90 z-40 flex flex-col items-center justify-center">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-white focus:outline-none"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
          <MobileNavLink href="#services" onClick={() => setIsMenuOpen(false)}>Our Services</MobileNavLink>
          <MobileNavLink href="#team" onClick={() => setIsMenuOpen(false)}>Our Team</MobileNavLink>
          <MobileNavLink href="#footer" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: ReactNode; 
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <a href={href} className="text-yellow-400 font-bold hover:text-yellow-300">
      {children}
    </a>
  );
}

interface MobileNavLinkProps {
  href: string;
  children: ReactNode; 
  onClick: () => void;
}

function MobileNavLink({ href, children, onClick }: MobileNavLinkProps) {
  return (
    <a href={href} onClick={onClick} className="block px-3 py-4 text-2xl font-bold text-white hover:text-yellow-300">
      {children}
    </a>
  );
}

export default Navbar;
