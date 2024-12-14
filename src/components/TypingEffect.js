import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypingEffect = () => {
  const [typeEffect] = useTypewriter({
    words: ["  Web Developer", " React Enthusiast", "  Graphic Designer", "WordPress Designer"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="">
      <div className="App ">
        {/* Container for the text */}

        <div className="flex flex-col space-y-6 mx-auto max-w-7xl  mt-32">
          <h1 className="text-2xl font-bold">WELCOME TO MY WORLD</h1>
          {/* Static text */}
          <h2 className="text-5xl font-semibold mb-4">Hi, I'm Subash Tamang</h2>

          {/* Typing effect */}
          <h2 className="text-4xl">
            <span style={{ fontWeight: 'bold', color: 'green' }}>{typeEffect}</span>
            <Cursor cursorColor="black" /> {/* Blinking cursor */}
          </h2>
          <h4 className="text-xl">I use animation as a third dimension by which to simplify experiences and guiding through each and every interaction.
            I'm not adding motion just to spruce things up, but doing it in ways that.</h4>



        </div>
      </div>
    </div>
  );
}

export default TypingEffect;
