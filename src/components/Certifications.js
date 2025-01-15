import React from 'react';

// Example certificates array (replace with your actual certificates data)
const certifications = [
  {
    title: "MERN Stack Developer Certification",
    description: "Completed a comprehensive course covering the MERN stack (MongoDB, Express.js, React.js, Node.js).",
    imageUrl: "../images/certificate.png", // Replace with your certificate image path
    link: "https://www.mindrisers.com.np/certificate/validate/MR-80338-MS" // Replace with the link to your certificate or course page
  },
  {
    title: "React JS Workshop Certificate",
    description: "Attended a workshop focusing on React.js, its core principles, and advanced concepts.",
    imageUrl: "../images/dursikshya-certificate.jpg", // Replace with your certificate image path
    link: "https://drive.google.com/file/d/1D53NBLqbQq804NFjFOnmj7_mDp_M1sMZ/view?usp=sharing" // Replace with the link to your certificate or course page
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Certifications & Trainings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-4">{cert.description}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
