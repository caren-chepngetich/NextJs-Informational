
import React from 'react';

const LandingPage = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/images/teachers.png')" }}
    >
      <div className="absolute inset-0 bg-blue-800 bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-6">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold">
            Get Started Today Discover
          </h1>
          <p className="text-4xl md:text-5xl font-bold">
            about CBC training and 
          </p>
          <p className="text-4xl md:text-5xl font-bold">
             management
          </p>
        </div>
        <p className="text-xl mb-16 mt-5">
          Sign Up to learn more and join the future of education.
        </p>
        <button className="border-2 border-yellow-400 bg-transparent text-yellow-400 px-6 py-3 font-semibold rounded-md hover:bg-yellow-500 hover:text-white transition text-3xl">
  GET STARTED
</button>

      </div>
    </div>
  );
};

export default LandingPage;




