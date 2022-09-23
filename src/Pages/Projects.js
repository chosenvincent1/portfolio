import React from "react";
import Navbar from "../Components/Navbar";

const Project = ()=> {
    return (
        <div className="project">
            <Navbar />
            <div className="grid-items">
                <div className="grid grid-1">
                    <img src="./project/project-1.jpg" />
                    <p>Farm Website</p>
                    <p>october </p>
                    <p>Fullstack</p>
                </div>
                <div className="grid grid-2">
                    <img src="./project/project-2.jpg" />
                    <p>Farm Website</p>
                    <p>october </p>
                    <p>Fullstack</p>
                </div>
                <div className="grid grid-3">
                    <img src="./project/project-2.jpg" />
                    <p>Farm Website</p>
                    <p>october </p>
                    <p>Fullstack</p>
                </div>
                <div className="grid grid-4">
                    <img src="./project/project-4.jpeg" />
                    <p>Farm Website</p>
                    <p>october </p>
                    <p>Fullstack</p> 
                </div>
                <div className="grid grid-5">
                    <img src="./project/project-5.jpeg" />
                    <p>Farm Website</p>
                    <p>october </p>
                    <p>Fullstack</p>
                </div>
                <div className="grid grid-6">
                    <img src="./project/project-6.jpg" />
                    <p>Farm Website</p>
                    <p>october </p>
                    <p>Fullstack</p>                    
                </div>
            </div>
        </div>
    )
}

export default Project