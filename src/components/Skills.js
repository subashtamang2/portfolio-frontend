import React from 'react';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'Photoshop', level: 50 },
  { name: 'React', level: 90 },

  { name: 'Javascript', level: 70 },
  { name: 'Typescript', level: 50 },
  { name: 'Next Js', level: 40 },
  { name: 'HTML5', level: 100 },
  { name: 'Figma', level: 45 },
  { name: 'CSS3', level: 80 },
  { name: 'Wordpress', level: 75 },
  { name: 'Tailwind CSS', level: 90 },
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="container mx-auto max-w-7xl px-4 py-12">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-12">
        My Skills
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="p-4 bg-gray-900 rounded-lg shadow-md">
            {/* Skill Name */}
            <h3 className="text-lg font-semibold text-white mb-2">
              {skill.name}
            </h3>
            {/* Progress Bar Container */}
            <div className="relative w-full bg-gray-800 rounded-full h-6 overflow-hidden">
              {/* Animated Progress Bar */}
              <div
                className={`absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ease-out`}
                style={{ width: inView ? `${skill.level}%` : '0%' }}
              ></div>
              {/* Skill Level Percentage */}
              <span
                className={`absolute right-0 top-0 text-white px-2 text-sm font-semibold transition-all duration-1000 ease-out`}
                style={{
                  opacity: inView ? 1 : 0,
                  right: inView ? '4px' : '100%',
                  transitionDelay: '1s',
                }}
              >
                {skill.level}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
