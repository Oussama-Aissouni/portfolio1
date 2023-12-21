import { useState } from 'react';
import Navbar from './components/Navigation/Navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import './App.css'

function App() {

  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <div className={`${darkMode ? "dark" : ""} w-[100vw]`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Home darkMode={darkMode}/>
        <Skills/>
        <Projects darkMode={darkMode}/>
      </div>
    </>
  );
}

export default App