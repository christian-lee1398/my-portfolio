import './App.css';
import About from "./components/about"
import Contact from "./components/contact"
import Projects from "./components/projects"
import Navbar from "./components/navbar"
import Skills from "./components/skills"

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
