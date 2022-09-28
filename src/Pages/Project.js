import React from "react";
import Grid from "../Components/Grid";
import Navbar from "../Components/Navbar";
import Data from "../Projects/Data";

const Project = ()=> {
    const projects = Data.map((project, index) => {
        return <Grid key={index} {...project} />
    })


    return (
        <div className="project">
            <Navbar />
            <div className="grid-items">
                {projects}
            </div>
        </div>
    )
}

export default Project