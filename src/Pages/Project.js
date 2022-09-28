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
                {/* <div className="grid grid-1">
                    <img src='./project/project-2.jpg'/>
                    <p className="project-name">Farm Website</p>
                    <p className="project-description">Frontend Project</p>
                </div>
                <div className="grid grid-2">
                    <img src="./project/project-2.jpg" />
                    <p className="project-name">Farm Website</p>
                    <p className="project-description">Fullstack Project</p>
                </div>
                <div className="grid grid-3">
                    <img src="./project/project-2.jpg" />
                    <p className="project-name">Farm Website</p>
                    <p className="project-description">Frontend Project</p>
                </div>
                <div className="grid grid-4">
                    <img src="./project/project-4.jpeg" />
                    <p className="project-name">Farm Website</p>
                    <p className="project-description">Fullstack Project</p> 
                </div>
                <div className="grid grid-5">
                    <img src="./project/project-5.jpeg" />
                    <p className="project-name">Farm Website</p>
                    <p className="project-description">Frontend Project</p>
                </div>
                <div className="grid grid-6">
                    <img src="./project/project-6.jpg" />
                    <p className="project-name">Farm Website</p>
                    <p className="project-description">Fullstack Project</p>                    
                </div> */}
            </div>
        </div>
    )
}

export default Project