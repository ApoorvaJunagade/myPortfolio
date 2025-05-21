import React from 'react';

const Navbar = () => {
  const handleAboutChange = (e) => {
    const value = e.target.value;

    if (value) {
      // Check if the value is a URL
      if (value.startsWith('http')) {
        window.open(value, '_blank'); // Open resume in new tab
      } else {
        window.location.href = `#${value}`; // Scroll to section
      }

      e.target.selectedIndex = 0; // Reset to placeholder
    }
  };

  return (
    <nav style={styles.navbar}>
      <a href="#" style={styles.link}>Home</a>

      <select onChange={handleAboutChange} style={styles.select} defaultValue="">
        <option value="" disabled>About</option>
        <option value="education">Education</option>
        <option value="experience">Experience</option>
        <option value="interests">Interests</option>
        <option value="skills">Skills</option>
  <option value="https://drive.google.com/file/d/1EoExLmv6PEH357_aLEi94TpT_NlKa95n/view?usp=drive_link">View My Resume</option>

      </select>

      <a href="#projects" style={styles.link}>Projects</a>
      <a href="#contact" style={styles.link}>Contact</a>
    </nav>
  );
};

const styles = {
  navbar: {
    
    position: 'fixed',         // Sticks the navbar to top
    top: 0,                    // Aligns to top of viewport
    width: '100%',             // Full width
    zIndex: 1000,   
    display: 'flex',
    gap: '20px',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  link: {
    textDecoration: 'none',
    color: '#333',
  },
  select: {
    backgroundColor: '#f0f0f0',
    border:'none'
  }
};

export default Navbar;
