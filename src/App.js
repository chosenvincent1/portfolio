import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import { Route, Routes } from 'react-router-dom';
// import Data from "../src/Projects/Data";
import './App.css';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/project' element={ <Project /> } />
        {/* <Route path='/project' 
        element={ Data.map((project, index) => {
          return <Project
          key={index}
          {...project}
        />}) } /> */}
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
    </div>
  );
}

export default App;
