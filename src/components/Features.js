import React from 'react';
import { FaAlignJustify, FaMobileAlt, FaLaptopCode, FaSearch, FaPencilRuler, FaGlobe } from 'react-icons/fa'; // Import icons

const FeatureCard = ({ icon, title, description }) => {
  return (



    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">


      <div className="text-red-500 mb-8 mt-10">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-8">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>

  );
};


const Features = () => {

  const features = [
    {
      icon: < FaAlignJustify size={60} />,
      title: 'Business Strategy',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequatur eum repellendus ad.',
    },
    {
      icon: <FaLaptopCode size={60} />,
      title: 'App Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequatur eum repellendus ad.',
    },
    {
      icon: <FaSearch size={60} />,
      title: 'SEO Optimization',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequatur eum repellendus ad.',
    },
    {
      icon: <FaMobileAlt size={60} />,
      title: 'Mobile Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequatur eum repellendus ad.',
    },
    {
      icon: <FaPencilRuler size={60} />,
      title: 'UX Design',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequatur eum repellendus ad.',
    },
    {
      icon: <FaGlobe size={60} />,
      title: 'Hosting Websites',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequatur eum repellendus ad.',
    }
  ];

  return (
    <div className="bg-charcoal py-12 px-6">
      <h2 className="text-5xl mx-auto max-w-7xl font-bold text-white mb-20 ">What I Do</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
