import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-20">


      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold text-pink-500 mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#about" className="hover:text-white">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold text-pink-500 mb-4">
            Resources
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#blog" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#certifications" className="hover:text-white">
                Certifications
              </a>
            </li>
            <li>
              <a href="#resume" className="hover:text-white">
                Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold text-pink-500 mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: lamasubaah2@gmail.com</li>
            <li>Phone: +977-9765577682</li>
            <li>Location: Kathmandu, Nepal</li>
          </ul>
        </div>

        {/* column 4 */}
        <div>
          <h3 className="text-lg font-semibold text-pink-500 mb-4">
            Follow Me
          </h3>
          <div className="flex gap-6 mt-4 md:mt-0">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center bg-gray-700 hover:bg-blue-600 rounded-full"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center bg-gray-700 hover:bg-blue-400 rounded-full"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center bg-gray-700 hover:bg-blue-700 rounded-full"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center bg-gray-700 hover:bg-pink-500 rounded-full"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>

        </div>





      </div>




      {/* Bottom Section */}
      <div className="text-center text-gray-500 mt-10">
        © 2024 Subash Tamang. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
