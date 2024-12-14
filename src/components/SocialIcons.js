import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTailwindcss, SiFigma } from 'react-icons/si';

const SocialIcons = () => {
  return (
    <div className='mx-auto max-w-7xl my-32'>

      <div className='flex gap-40 mt-20'>

        <div>
          <h3 className=" font-bold text-gray-500 mb-5 ">FIND ME IN</h3>


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
  )
}

export default SocialIcons