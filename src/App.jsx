import { useState } from 'react';
import './App.css'
import Navbar from './components/Navigation/Navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <div className={`${darkMode ? "dark" : ""}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Home />
        <Skills />
      </div>
    </>
  );
}

export default App
