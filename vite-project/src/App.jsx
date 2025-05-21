import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Education from "./components/education";
import Experience from "./components/experience";
import Interests from "./components/intersts";
import Projects from "./components/Projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
function App() {
  return ( 
  <div style={{backgroundColor:"lightgray"}}>
 
  <Navbar/>
  <Hero/>
  <div id="education">
  <Education />
</div>

  <div id="experience">
  <Experience />
</div> 

<div id="interests">
  <Interests />
</div>


<div id="skills">
  <Skills/>
</div>

<div id="projects">
  <Projects />
</div>


<div id="contact">
  <Contact />
</div>
  </div>
   );
}

export default App;