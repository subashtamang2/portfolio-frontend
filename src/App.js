import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import ContactForm from "./pages/ContactForm";
import Footer from "./components/Footer";


const App = () => {
  // Create references for each section
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle scrolling
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Pass scrollToSection and references to Navbar */}
      <Navbar
        scrollToSection={scrollToSection}
        sections={{
          homeRef,
          projectsRef,
          skillsRef,
          certificationsRef,
          contactRef,
        }}
      />
      {/* Each section with its respective ref */}
      <div ref={homeRef} id="home">
        <Home />
      </div>
      <div ref={projectsRef} id="projects">
        <Projects />
      </div>
      <div ref={skillsRef} id="skills">
        <Skills />
      </div>
      <div ref={certificationsRef} id="certifications">
        <Certifications />
      </div>
      <div ref={contactRef} id="contact">
        <ContactForm />
      </div>
      <Footer />


    </>
  );
};

export default App;
