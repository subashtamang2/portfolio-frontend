import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTailwindcss, SiFigma } from "react-icons/si";

const SocialIcons = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-10 items-center mt-20">
      {/* FIND ME IN Section */}
      <div className="text-center">
        <h3 className="font-bold text-gray-700 mb-5">FIND ME IN</h3>
        <div className="flex justify-center flex-wrap gap-4 lg:gap-6">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-blue-500"
          >
            <FaFacebookF size={24} />
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-blue-600"
          >
            <FaLinkedinIn size={24} />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-700"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>

      {/* BEST SKILL ON Section */}
      <div className="text-center">
        <h3 className="font-bold text-gray-700 mb-5">BEST SKILL ON</h3>
        <div className="flex justify-center flex-wrap gap-4 lg:gap-6">
          {/* React */}
          <div className="bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-blue-400">
            <SiReact size={24} />
          </div>
          {/* Next.js */}
          <div className="bg-gray-700 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-600">
            <SiNextdotjs size={24} />
          </div>
          {/* Tailwind CSS */}
          <div className="bg-blue-400 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-blue-300">
            <SiTailwindcss size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
