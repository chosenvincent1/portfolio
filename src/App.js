import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className='app'>
      <Navbar />
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/project' element={ <Project /> } />
          <Route path='/contact' element={ <Contact /> } />
      </Routes>
    </div>
  );
}

export default App;
