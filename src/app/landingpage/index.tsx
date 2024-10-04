// "use client";
// import React from 'react';
// import Image from 'next/image';

// const LandingPage = () => {
//   return (
//     <div>
//       <div>
//       <Image src="/images/teachers.png" alt="Landing Image" layout="fill" objectFit="cover" />
//       </div>

//       <div className="absolute inset-0 bg-blue-800 bg-opacity-50 flex flex-col justify-center items-center text-center text-white  sm:p-6 md:p-8 lg:p-12">
//         <div className="flex flex-col items-center space-y-2 sm:space-y-4">
//           <h1 className="text-3xl w-4/5 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
//             Get Started Today Discover about CBC training and management
//           </h1>
//         </div>
//         <p className="text-3xl sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 md:mb-16 mt-4 sm:mt-5 max-w-2xl">
//         Join us to learn more about the future of education.
//         </p>
//         <button className="border-2 border-yellow-400 bg-transparent text-yellow-400 px-4 sm:px-6 py-2 sm:py-3 font-semibold rounded-md hover:bg-yellow-500 hover:text-white transition text-lg sm:text-xl md:text-2xl lg:text-3xl">
//           GET STARTED
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

"use client";
import React from 'react';
import Image from 'next/image';
const LandingPage = () => {
  return (
    <div id='home' className='mb-[750px]'>
      <div>
      <Image src="/images/teachers.png" alt="Landing Image" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute inset-0 bg-primary-blue bg-opacity-70 flex flex-col justify-center items-center text-center text-white  sm:p-6 md:p-8 lg:p-12">
        <div className="flex flex-col items-center space-y-2 sm:space-y-4">
          <h1 className="text-3xl w-4/5 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            Get Started Today Discover about CBC training and management
          </h1>
        </div>
        <p className="text-3xl sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 md:mb-16 mt-4 sm:mt-5 max-w-2xl">
        Join us to learn more about the future of education.
        </p>
        <button className="border-2 border-primary-amber bg-transparent text-primary-amber px-4 sm:px-6 py-2 sm:py-3 font-semibold rounded-md hover:bg-yellow-500 hover:text-white transition text-lg sm:text-xl md:text-2xl lg:text-3xl">
          GET STARTED
        </button>
      </div>
    </div>
  );
};
export default LandingPage;