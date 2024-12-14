import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons from React Icons
import ProfileImage from '../images/profile.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-4 py-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src={ProfileImage}
            alt="Logo"
            className="h-10 w-10 object-cover rounded-full"
          />
          <h1 className="text-xl font-bold">SUBASH</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-pink-500">Home</Link>
          <Link to="/features" className="hover:text-pink-500">Features</Link>
          <Link to="/about" className="hover:text-pink-500">About</Link>
          <Link to="/projects" className="hover:text-pink-500">Projects</Link>
          <Link to="/skills" className="hover:text-pink-500">Skills</Link>
          <Link to="/resume" className="hover:text-pink-500">Resume</Link>
          <Link to="/contact" className="hover:text-pink-500">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FiX className="h-6 w-6" /> // Close Icon from React Icons
          ) : (
            <FiMenu className="h-6 w-6" /> // Hamburger Menu Icon from React Icons
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white flex flex-col space-y-4 mt-4 px-4 py-4 rounded-md shadow-lg">
          <Link to="/" className="hover:text-pink-500" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/features" className="hover:text-pink-500" onClick={() => setIsMenuOpen(false)}>Features</Link>
          <Link to="/about" className="hover:text-pink-500" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/projects" className="hover:text-pink-500" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <Link to="/skills" className="hover:text-pink-500" onClick={() => setIsMenuOpen(false)}>Skills</Link>
          <Link to="/resume" className="hover:text-pink-500" onClick={() => setIsMenuOpen(false)}>Resume</Link>
          <Link to="/contact" className="hover:text-pink-500" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
