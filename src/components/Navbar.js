import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from React Icons
import ProfileImage from "../images/profile.jpg";

const Navbar = ({ scrollToSection, sections }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-4 py-4 shadow-md sticky top-0 z-50 bg-white max-h-screen">
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
          <button
            onClick={() => scrollToSection(sections.homeRef)}
            className="hover:text-pink-400"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(sections.projectsRef)}
            className="hover:text-pink-400"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection(sections.skillsRef)}
            className="hover:text-pink-400"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection(sections.certificationsRef)}
            className="hover:text-pink-400"
          >
            Certifications & Trainings
          </button>
          <button
            onClick={() => scrollToSection(sections.contactRef)}
            className="hover:text-pink-400"
          >
            Contact
          </button>

          {/* Resume Download */}
          <a
            href="/assets/cv.pdf" // Path to the CV file in the public folder
            download="Subash_Tamang_CV.pdf" // Specify the name of the downloaded file
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Download CV
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
          <button
            onClick={() => {
              scrollToSection(sections.homeRef);
              setIsMenuOpen(false);
            }}
            className="hover:text-pink-400"
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToSection(sections.projectsRef);
              setIsMenuOpen(false);
            }}
            className="hover:text-pink-400"
          >
            Projects
          </button>
          <button
            onClick={() => {
              scrollToSection(sections.skillsRef);
              setIsMenuOpen(false);
            }}
            className="hover:text-pink-400"
          >
            Skills
          </button>
          <button
            onClick={() => {
              scrollToSection(sections.certificationsRef);
              setIsMenuOpen(false);
            }}
            className="hover:text-pink-400"
          >
            Certifications & Trainings
          </button>
          <button
            onClick={() => {
              scrollToSection(sections.contactRef);
              setIsMenuOpen(false);
            }}
            className="hover:text-pink-400"
          >
            Contact
          </button>
          {/* Resume Download */}
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
