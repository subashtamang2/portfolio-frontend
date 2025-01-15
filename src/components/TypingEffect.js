import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypingEffect = () => {
  const [typeEffect] = useTypewriter({
    words: ["  Web Developer", "  Graphic Designer", "WordPress Designer"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="">
      <div className="App ">
        {/* Container for the text */}

        <div className="flex flex-col space-y-6 mx-auto max-w-7xl  ">

          {/* Static text */}
          <h2 className="text-5xl font-semibold mb-4">Hi, I'm Subash Tamang</h2>

          {/* Typing effect */}
          <h2 className="text-4xl">
            <span style={{ fontWeight: 'bold', color: 'red' }}>{typeEffect}</span>
            <Cursor cursorColor="black" /> {/* Blinking cursor */}
          </h2>
          <h4 className="text-xl"> a dedicated and curious individual passionate about technology and innovation. I enjoy learning new skills, solving problems, and contributing to impactful projects.</h4>



        </div>
      </div>
    </div>
  );
}

export default TypingEffect;
