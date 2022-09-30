import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import { Route, Routes } from 'react-router-dom';
import './App.css';


function App() {

  return (
    <div>
      <Project />
      {/* <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/project' element={ <Project /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes> */}
    </div>
  );
}

export default App;
