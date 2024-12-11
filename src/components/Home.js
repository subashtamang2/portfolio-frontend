import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTailwindcss, SiFigma } from 'react-icons/si';
import BgProfile from '../images/bg-profile.png'
import Features from './Features';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Skills from './Skills';


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-gray-900 text-white ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-white mb-4">WELCOME TO MY WORLD</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-pink-500">Subash Tamang</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            a Professional Coder.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-8">
            I use animation as a third dimension by which to simplify experiences and guiding through each and every interaction.
            I'm not adding motion just to spruce things up, but doing it in ways that.
          </p>

          <div className='flex gap-40'>

            <div>
              <h3 className=" font-bold text-gray-500 mb-4">FIND ME IN</h3>


              <div className="flex justify-center space-x-6 mb-8">

                <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                  <FaFacebookF size={20} />
                </a>
                <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                  <FaTwitter size={20} />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                  <FaLinkedinIn size={20} />
                </a>
                <a href="https://github.com" className='text-white hover:text-green-300'>
                  <FaGithub size={20} />
                </a>
              </div>


            </div>

            <div>
              <h3 className=" font-bold text-gray-500 mb-4">BEST SKILL ON</h3>
              <div className="flex justify-center space-x-8">
                <SiReact size={20} className="text-gray-400 hover:text-white" />
                <SiNextdotjs size={20} className="text-gray-400 hover:text-white" />
                <SiTailwindcss size={20} className="text-gray-400 hover:text-white" />
                <SiFigma size={20} className="text-gray-400 hover:text-white" />
              </div>
            </div>

          </div>

        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={BgProfile}
            alt="subash"
            className="w-80 h-80 object-cover rounded-full mx-auto"
          />
        </div>
      </div>
      <Features />
      <Projects />
      <Resume />
      <Skills />
      <Contact />

    </div>
  );
};

export default Home;
