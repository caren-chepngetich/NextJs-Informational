import React from 'react';
import Image from 'next/image'; 

const Navbar = () => {
  return (
    <nav 
      className="relative bg-cover bg-center h-16 bg-blue-800 bg-opacity-50 text-base text-white py-4 px-6 w-full flex items-center"
      style={{ backgroundImage: "url('/images/teachers.png')" }}
    >
      <div className="absolute inset-0 bg-blue-800 bg-opacity-50">

      </div>
      <div className="relative flex items-center w-full z-10">
        <div className="flex-shrink-0 ml-52 mt-10">
          <Image 
            src="/images/Ujuzi.png" 
            alt="Logo" 
            width={150}  
            height={50} 
            className="object-contain"
          />
        </div>
        <div className="flex gap-48 ml-80 mt-10 text-xl">
          <a href="#" className="text-yellow-400 font-bold hover:text-yellow-300">
            Home
          </a>
          <a href="#" className="hover:text-yellow-300">Our Services</a>
          <a href="#" className="hover:text-yellow-300">Our Team</a>
          <a href="#" className="hover:text-yellow-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
