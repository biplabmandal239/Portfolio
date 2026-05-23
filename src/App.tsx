import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Contact from './components/Contact/Contact';
import ChatbotWidget from './components/Chatbot/ChatbotWidget';
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

const THEME_STORAGE_KEY = 'portfolio-theme';

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (savedTheme === 'light') {
      return false;
    }

    return true;
  });
  const [openModal, setOpenModal] = useState<ProjectModalState>({
    state: false,
    project: null
  });

  const handleThemeChange = (isDarkMode: boolean): void => {
    setDarkMode(isDarkMode);
    window.localStorage.setItem(THEME_STORAGE_KEY, isDarkMode ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar darkMode={darkMode} onThemeChange={handleThemeChange} />
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
          <ChatbotWidget />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
};

export default App;
