import logo from './logo.svg';
import './App.css';
import About from './components/About.js'
import Navbar from './components/Navbar.js'
import Projects from './components/Projects.js'
import Skills from './components/Skills.js'
import Contact from './components/Contact.js'

function App() {
  return (
    <main>
        <Navbar /> 
        <About />
        <Projects />
        <Skills />
        <Contact />
    </main>
  );
}

export default App;
