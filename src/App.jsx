import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutMe from './components/AboutSection/AboutMe';
import Skills from './components/SkillSection/Skills';
import Contact from './components/ContactSection/Contact';
import Projects from './components/ProjectSection/Projects';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
