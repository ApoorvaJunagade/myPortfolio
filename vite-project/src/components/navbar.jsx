import React from 'react';
import "./styles/navbar.css"
const Navbar = () => {
  const handleAboutChange = (e) => {
    const value = e.target.value;

    if (value) {
      if (value.startsWith('http')) {
        window.open(value, '_blank');
      } else {
        window.location.href = `#${value}`;
      }

      e.target.selectedIndex = 0;
    }
  };

  return (
    <nav className="navbar">
  <a href="#" className="nav-link">Home</a>

  <select onChange={handleAboutChange} className="nav-select" defaultValue="">
    <option value="" disabled>About</option>
    <option value="education">Education</option>
    <option value="experience">Experience</option>
    <option value="interests">Interests</option>
    <option value="skills">Skills</option>
    <option value="https://drive.google.com/file/d/1EoExLmv6PEH357_aLEi94TpT_NlKa95n/view?usp=drive_link">
      View My Resume
    </option>
  </select>

  <a href="#projects" className="nav-link">Projects</a>
  <a href="#contact" className="nav-link">Contact</a>
</nav>
  );
};

// // Media query using inline styles (optional suggestion):
// Use a CSS file or styled-components for better media query support.

export default Navbar;
