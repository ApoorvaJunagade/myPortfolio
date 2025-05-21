import projects from './data/projects.js';

function Projects() {
  return (
    <section id="projects" style={styles.projects} className="p-6 bg-gray-100">
      <h2 style={styles.title} className="text-2xl font-bold mb-6">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-lg shadow bg-white">
            <img style={styles.ProjectImage} src={project.image} alt={project.title} className="rounded mb-3" />
            <h3 style={styles.ProjectTitle} className="text-xl font-semibold">{project.title}</h3>
            <p style={styles.ProjectDescription} className="mb-2">{project.description}</p>
            <div>
              <a href={project.liveLink} style={styles.link} className="text-blue-500 mr-4" target="_blank" rel="noreferrer">Live Demo</a>
              <a href={project.githubLink} style={styles.link} className="text-blue-500" target="_blank" rel="noreferrer">GitHub Link</a>
              <br /><br />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
const styles = {
  projects: {
    fontFamily: 'Poppins, sans-serif',

  },
  section: {
    width: '300px',
    margin: '0 auto',
  },
  title: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '40px'

  },
  ProjectImage: {

    display: 'block',
    margin: '0 auto',
    width: '100%',
    maxWidth: '500px', // or whatever max you prefer
    height: 'auto',
  },

  ProjectTitle: {
    display: 'flex',
    justifyContent: 'center'
  },
  ProjectDescription: {
    padding: '40px'
  },
  link: {
    margin: '20%',
  }

}

export default Projects;
