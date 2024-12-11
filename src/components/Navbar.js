import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from '../images/profile.jpg'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-4 py-8 shadow-lg sticky top-0 z-50">
      <div className="container  mx-auto  flex items-center justify-between ">
        <div className="flex items-center space-x-4">
          <img
            src={ProfileImage} // Update the path to your logo
            alt="Logo"
            className="h-10 w-10 object-cover rounded-full"
          />
          <h1 className="text-xl font-bold">SUBASH</h1>
        </div>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-pink-500">Home</Link>
          <Link to="/features" className='hover:text-pink-500'>Features</Link>
          <Link to="/about" className="hover:text-pink-500">About</Link>
          <Link to="/projects" className="hover:text-pink-500">Projects</Link>
          <Link to="/skills" className="hover:text-pink-500">Skills</Link>
          <Link to="/resume" className="hover:text-pink-500">Resume</Link>
          <Link to="/contact" className="hover:text-pink-500">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
