import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="py-8 px-4 md:px-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-100">Explore</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-yellow-400 transition duration-300">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-yellow-400 transition duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-yellow-400 transition duration-300">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-100">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#blog" className="hover:text-yellow-400 transition duration-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#certifications" className="hover:text-yellow-400 transition duration-300">
                Certifications
              </a>
            </li>
            <li>
              <a href="#resume" className="hover:text-yellow-400 transition duration-300">
                Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-100">Contact</h3>
          <ul className="space-y-2">
            <li>Email: lamasubaah2@gmail.com</li>
            <li>Phone: +977-9765577682</li>
            <li>Location: Kathmandu, Nepal</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-100">Follow Me</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href="https://www.facebook.com/profile.php?id=100024965704794"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex justify-center items-center border border-white rounded-full bg-blue-700 text-white hover:bg-blue-600 transition duration-300"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/subash-tamang-7a751327a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex justify-center items-center border border-white rounded-full bg-blue-700 text-white hover:bg-blue-600 transition duration-300"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>

            <a
              href="https://www.instagram.com/tamangsubash387/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex justify-center items-center border border-white rounded-full bg-pink-600 text-white hover:bg-pink-500 transition duration-300"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-300 mt-10">
        © 2024 Subash Tamang. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
