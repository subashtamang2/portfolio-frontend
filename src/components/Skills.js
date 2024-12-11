import React from 'react';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'Photoshop', level: 100 },
  { name: 'React', level: 90 },
  { name: 'Adobe XD', level: 60 },
  { name: 'Javascript', level: 70 },
  { name: 'Design', level: 95 },


  { name: 'HTML5', level: 100 },
  { name: 'Figma', level: 95 },
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
    <div ref={ref} className="container mx-auto max-w-7xl px-4 py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <h3 className='text-3xl font-bold'>Design Skill</h3>
        <h3 className='text-3xl font-bold'>Development Skill</h3>
        {skills.map((skill, index) => (
          <div key={index}>

            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <div className="relative w-full bg-gray-800 rounded h-6 overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ease-out`}
                style={{ width: inView ? `${skill.level}%` : '0%' }}
              ></div>
              <span
                className={`absolute right-0 top-0 text-white px-2 text-sm font-semibold transition-all duration-1000 ease-out`}
                style={{ opacity: inView ? 1 : 0, right: inView ? '4px' : '100%', transitionDelay: '1s' }}
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
