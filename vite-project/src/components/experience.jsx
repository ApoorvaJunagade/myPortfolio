import Navbar from "./navbar";

function Experience() {
  return (
    <section id="experience" style={styles.section}>

      <h2 >Work Experience</h2>

      <div style={styles.job}>
        <h3>Associate Web Designer — Vidyaroha</h3>
        <p><strong>Aug 2019 – Nov 2019</strong> | Nashik</p>
        <ul>
          <li>Developed a teacher's app for efficient data management.</li>
        </ul>
      </div>

      <div style={styles.job}>
        <h3>Associate Software Developer — Utthunga Technologies</h3>
        <p><strong>Jun 2021 – May 2022</strong> | Bangalore, India</p>
        <ul>
          <li>Assisted in the design, development, coding, testing, and debugging of software applications.</li>
        </ul>
      </div>

      <div style={styles.job}>
        <h3>Flutter Trainee — Techflux Solutions</h3>
        <p><strong>Nov 2022 – Jul 2023</strong> | Nashik</p>
        <ul>
          <li>Worked on mobile applications to build a leave management system.</li>
          <li>Developed a doctor's appointment booking application.</li>
          <li>Utilized Flutter for the frontend.</li>
          <li>Used Node.js for the backend.</li>
        </ul>
      </div>
    </section>
  );
};

const styles = {
  section: {
    fontFamily: 'Poppins, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    padding: '40px',

  },
  job: {
    marginBottom: '30px',
    marginLeft: '27%',            // Full height for vertical centering
  }
};

export default Experience;
