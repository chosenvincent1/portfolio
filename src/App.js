import React, { useState } from 'react';
import Home from './Pages/Home';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Modal from './Components/Modal';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


function App() {

  const [showModal, setShowModal] = useState(false)

  const location = useLocation();

  return (
    <div className='app'>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Navbar />
      <AnimatePresence exitBeforeEnter onExitComplete={()=> setShowModal(false)}>
        <Routes location={location} key={location.key}>
            <Route path='/' element={ <Home /> } />
            <Route path='/project' element={ <Project /> } />
            <Route path='/contact' element={ <Contact setShowModal={setShowModal} /> } />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
