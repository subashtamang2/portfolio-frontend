import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa'; // Import the icons

const projects = [
  {
    title: "SOCIAL MEDIA CLONE",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    imageUrl: "path-to-your-image",
    githubLink: "#",
    liveDemo: "#"
  },
  {
    title: "E-COMMERCE WEBSITE",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    imageUrl: "path-to-your-image",
    githubLink: "#",
    liveDemo: "#"
  },
  {
    title: "CHATTING APP",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    imageUrl: "path-to-your-image",
    githubLink: "#",
    liveDemo: "#"
  },
  {
    title: "SOCIAL MEDIA CLONE",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    imageUrl: "path-to-your-image",
    githubLink: "#",
    liveDemo: "#"
  },
  {
    title: "E-COMMERCE WEBSITE",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    imageUrl: "path-to-your-image",
    githubLink: "#",
    liveDemo: "#"
  },
  {
    title: "CHATTING APP",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    imageUrl: "path-to-your-image",
    githubLink: "#",
    liveDemo: "#"
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={project.imageUrl} alt={project.title} className="rounded-md mb-4 w-full h-48 object-cover" />

            <div className='flex justify-between'>
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              </div>

              <div className="flex items-center gap-5">
                <a href={project.githubLink} className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                  <FaGithub size={24} /> {/* GitHub icon */}
                </a>
                <a href={project.liveDemo} className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                  <FaGlobe size={24} /> {/* Globe icon */}
                </a>
              </div>
            </div>
            <p className="text-gray-400 mb-4">{project.description}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
