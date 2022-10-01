import React from "react";
import Navbar from "../Components/Navbar";
import Contact from "./Contact";
import Home from "./Home";
import Project from "./Project";

const AllPages = ()=> {
    return (
        <div className="all-pages">
          <Navbar />
          <Home />
          <Project />
          <Contact /> 
        </div>
    )
}

export default AllPages
