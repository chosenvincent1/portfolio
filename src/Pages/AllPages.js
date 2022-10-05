import React from "react";
import Navbar from "../Components/Navbar";
import Contact from "./Contact";
import Home from "./Home";
import Project from "./Project";
import { Route, Routes } from 'react-router-dom';

const AllPages = ()=> {
    return (
        <div className="all-pages">
          <Navbar />
          <Home />
          <Project />
          <Contact /> 
        {/* <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/project' element={ <Project /> } />
          <Route path='/contact' element={ <Contact /> } />
      </Routes> */}
        </div>
    )
}

export default AllPages
