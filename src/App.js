import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'


function App() {

  const location = useLocation();

  return (
    <div className='app'>
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
            <Route path='/' element={ <Home /> } />
            <Route path='/project' element={ <Project /> } />
            <Route path='/contact' element={ <Contact /> } />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
