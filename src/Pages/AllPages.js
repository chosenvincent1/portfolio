import React from "react";
import Navbar from "../Components/Navbar";
import Contact from "./Contact";
import Home from "./Home";
import Project from "./Project";
import { Route, Routes } from 'react-router-dom';

const AllPages = ()=> {
    return (
        <div className="all-pages">
          
          <Home />
          <Project />
          <Contact /> 
        
        </div>
    )
}

export default AllPages
