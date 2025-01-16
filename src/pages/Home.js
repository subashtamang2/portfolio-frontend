import React from 'react';
import TypingEffect from '../components/TypingEffect';
import SocialIcons from '../components/SocialIcons';
import BgProfile from '../components/BgProfile';

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto max-w-7xl p-6 md:p-10 my-10 md:my-30">
      {/* BgProfile at the top for small screens */}
      <div className="order-1 md:order-2 flex justify-center ">
        <BgProfile />
      </div>

      {/* Content section */}
      <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
        <TypingEffect />
        <SocialIcons />
      </div>
    </div>
  );
};

export default Home;
