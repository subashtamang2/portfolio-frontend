import React from 'react';

const Education = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto  px-4">
        <h2 className="text-4xl font-bold text-center mb-8">My Resume</h2>
        <div className="flex justify-center mb-12">
          <div className="text-center mx-4 py-2 px-4 border-b-2 border-red-500">Education</div>
          <div className="text-center mx-4 py-2 px-4 border-b-2 border-transparent">Professional Skills</div>
          <div className="text-center mx-4 py-2 px-4 border-b-2 border-transparent">Experience</div>
          <div className="text-center mx-4 py-2 px-4 border-b-2 border-transparent">Achievements</div>
        </div>

        <div className=' text-4xl font-bold flex justify-between mb-20'>
          <h2>Education Quality</h2>
          <h2>Job Experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mx-auto max-w-7xl">

          <div className="bg-gray-800 p-6 rounded-lg  ">
            <div className='flex justify-between'>
              <h3 className="text-xl font-semibold mt-10 ">Bachelor of Information Technology(BIT)</h3>
              <p className="text-red-500 font-bold">3.90/4</p>
            </div>


            <p className="text-gray-400">Texas College of Management & IT (2006 - 2010)</p>
            <p className='text-gray-400 my-10'>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.

            </p>

          </div>

          <div className="bg-gray-800 p-6 rounded-lg  ">
            <div className='flex justify-between'>
              <h3 className="text-xl font-semibold mt-10 ">Bachelor of Information Technology(BIT)</h3>
              <p className="text-red-500 font-bold">3.90/4</p>
            </div>


            <p className="text-gray-400">University of DVI (2006 - 2010)</p>
            <p className='text-gray-400 mt-10'>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.

            </p>

          </div>
          <div className="bg-gray-800 p-6 rounded-lg  ">
            <div className='flex justify-between'>
              <h3 className="text-xl font-semibold mt-10 ">Higher School Education</h3>
              <p className="text-red-500 font-bold">3.90/4</p>
            </div>


            <p className="text-gray-400">GoldenGate International College (2006 - 2010)</p>
            <p className='text-gray-400 mt-10'>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.

            </p>

          </div>
          <div className="bg-gray-800 p-6 rounded-lg  ">
            <div className='flex justify-between'>
              <h3 className="text-xl font-semibold mt-10 ">Bachelor of Information Technology(BIT)</h3>
              <p className="text-red-500 font-bold">3.90/4</p>
            </div>


            <p className="text-gray-400">University of DVI (2006 - 2010)</p>
            <p className='text-gray-400 mt-10'>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.

            </p>

          </div>

          <div className="bg-gray-800 p-6 rounded-lg  ">
            <div className='flex justify-between'>
              <h3 className="text-xl font-semibold mt-10 ">Secondary School Education</h3>
              <p className="text-red-500 font-bold">3.90/4</p>
            </div>


            <p className="text-gray-400">Sukute Secondary School (2006 - 2010)</p>
            <p className='text-gray-400 mt-10'>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.

            </p>

          </div>
          <div className="bg-gray-800 p-6 rounded-lg  ">
            <div className='flex justify-between'>
              <h3 className="text-xl font-semibold mt-10 ">Bachelor of Information Technology(BIT)</h3>
              <p className="text-red-500 font-bold">3.90/4</p>
            </div>


            <p className="text-gray-400">University of DVI (2006 - 2010)</p>
            <p className='text-gray-400 mt-10'>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.

            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;
