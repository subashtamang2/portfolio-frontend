import React from "react";

const projectData = [
  {
    id: 1,
    title: "EduMeeting portal",
    description: " Edu meeting is a web-based platform for educational institutions,built with MongoDb,Express.js,React.js,and Node.js. it offers features like Upcoming Meetings to view schedules,Meeting Details for event specifics,Courses section,Apply Now for student applications, and Contact Us for support. The p[latform also includes an Admin Panel designed for managing courses efficiently.",
    techStack: ["React.js", "MongoDB", 'Node.js', 'Express.js', 'Tailwind CSS'],
    image: "/images/dynamicedu-portal.png",
    liveDemo: "https://my-project-jf3b.vercel.app/",
    sourceCode: "https://github.com/SubashLama123/my-project",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description: "Designed and developed an interactive personal portfolio to showcase projects,Skills,Resume and Contact.Built using React.js and Tailwind CSS Ui for a modern and responsive design.",
    techStack: ["React.js", "tailwind CSS", 'Javascript'],
    image: "/images/portfolio.png",
    liveDemo: "project2-live-link",
    sourceCode: "https://github.com/SubashLama123/portfolio-frontend",
  },
  {
    id: 3,
    title: "Comming SOON",
    description: "A brief description of Project 3. Highlight the tools used and challenges solved.",
    techStack: ["Tailwind CSS"],
    image: "project3-thumbnail.jpg",
    liveDemo: "project3-live-link",
    sourceCode: "project3-source-code-link",
  },
  // Add more projects here as needed
];

const Projects = () => {
  return (
    <div className="bg-gray-100 py-10 mx-auto max-w-7xl">
      <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={project.image}
              alt={`${project.title} Thumbnail`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  View Live
                </a>
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-500 text-white text-sm px-4 py-2 rounded hover:bg-gray-600 transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
