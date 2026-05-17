import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { ProjectModalState } from './types/portfolio';
import { darkTheme, lightTheme } from './styles/theme';
import { AccentWrapper, Body } from './AppStyle';
import './App.css';

const App = () => {
  const [darkMode] = useState(true);
  const [openModal, setOpenModal] = useState<ProjectModalState>({
    state: false,
    project: null
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <AccentWrapper>
            <Skills />
            <Experience />
          </AccentWrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <AccentWrapper>
            <Education />
            <Contact />
          </AccentWrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
};

export default App;
