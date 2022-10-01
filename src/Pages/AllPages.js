import React from "react";
import Contact from "./Contact";
import Home from "./Home";
import Project from "./Project";

const AllPages = ()=> {
    return (
        <div className="all-pages">
          <Home />
          <Project />
          {/* <Contact />  */}
        </div>
    )
}

export default AllPages
