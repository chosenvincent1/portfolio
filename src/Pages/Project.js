import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import Data from "../Projects/Data";

const Project = ()=> {
    const projects = Data.map((project, index) => {
        return <Card key={index} {...project} />
    })


    return (
        <div className="project">
            <Navbar />
            <div className="about">
                <h1>about me</h1>
                <p>I’m a Web Developer and Technical Write. I build amazing UI using HTML, CSS, JavaScript, React and NodeJs.</p>
                <p>I’m also a student of the University Of Port Harcourt, I’m a proud Nigerian living in my home town of Port Harcourt, Rivers State.</p>
            </div>
            <h1>Projects</h1>
            <div className="project-arrow-container">
                <FaAngleLeft className="arrow-left" />
\                <div className="project-container">
                    {projects}
                </div>
                <FaAngleRight className="arrow-right" />
            </div>
            
        </div>
    )
}

export default Project