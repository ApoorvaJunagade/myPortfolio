import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const elRef = useRef(null); // Reference to span where typing appears

  useEffect(() => {
    const typed = new Typed(elRef.current, {
      strings: ['FullStack Developer', 'React Enthusiast',],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    // Clean up the Typed instance
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div style={styles.Hero}>
      <h1>Hello, I'm Apoorva Junagade</h1>
      <h2><span ref={elRef}></span></h2>

      <p> A Full Stack Developer with 2 years of experience in the IT industry. I’ve completed a Full Stack Development course from Skill Academy and built several projects using HTML, CSS, JavaScript, React.js, Node.js, and MongoDB.
        With a strong foundation in both frontend and backend technologies, I’m now looking for the best opportunity to apply my skills and contribute to impactful projects.</p>
    </div>

  );
};
const styles = {
  Hero: {
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'center',
    padding: '40px'
  },
}
export default Hero;
