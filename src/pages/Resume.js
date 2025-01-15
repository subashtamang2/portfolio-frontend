import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from React Icons

import ProfileImage from "../images/profile.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-4 py-4 shadow-md sticky top-0 z-50 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src={ProfileImage}
            alt="Logo"
            className="h-10 w-10 object-cover rounded-full"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <Link to="/" className="hover:text-pink-400">
            Home
          </Link>
          <Link to="/projects" className="hover:text-pink-400">
            Projects
          </Link>
          <Link to="/skills" className="hover:text-pink-400">
            Skills
          </Link>
          <Link to="/certifications" className="hover:text-pink-400">
            Certifications & Trainings
          </Link>
          <Link to="/contact" className="hover:text-pink-400">
            Contact
          </Link>
          {/* Download Resume Button moved to the end */}
          <a
            href="/resume.pdf" // Ensure the resume is in the public folder
            download="Subash_Resume.pdf" // Specify the file name for the download
            className="hover:text-pink-400"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-700 text-white flex flex-col space-y-4 px-6 py-4 rounded-md shadow-lg">
          <Link
            to="/"
            className="hover:text-pink-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="hover:text-pink-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className="hover:text-pink-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </Link>

          <Link
            to="/certifications"
            className="hover:text-pink-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Certifications & Trainings
          </Link>
          <Link
            to="/contact"
            className="hover:text-pink-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Mobile Download Resume Button moved to the end */}
          <a
            href="/resume.pdf"
            download="Subash_Resume.pdf"
            className="hover:text-pink-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
