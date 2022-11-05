import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Card from "../Components/Card";
import Data from "../Projects/Data";
import { motion } from "framer-motion";

const containerVariants = {
    exit: {
        x: '-100vw',
        transition: {ease: 'easeIn'}
    }
}

const Project = ()=> {
      
    const [hover, setHover] = useState(false);
    const [slide, setSlide] = useState(Data);
    const [currentPosition, setCurrentPositon] = useState(0)
    const [activeCircle, setActiveCircle] = useState(false)

    let currentIndexValue = slide[currentPosition];
    let projectName = Data[currentPosition].name
    let projectDescription = Data[currentPosition].description

    const nextProject = ()=> {
        if (currentPosition !== slide.length - 1) {
            setCurrentPositon(currentPosition + 1) 
        } else {
            setCurrentPositon(currentPosition = 0)
        }
        currentIndexValue = slide[currentPosition];
    }

    const prevProject = ()=> {
        if (currentPosition !== 0) {
            setCurrentPositon(currentPosition - 1)  
        } else {
            setCurrentPositon(currentPosition = slide.length - 1)
        }
        
        currentIndexValue = slide[currentPosition];
    }
    
    const circleClick = ()=> {
        setActiveCircle(prevActiveCircle => !prevActiveCircle)
    }

    const handleMouseOver = ()=> {
        setHover(true)  
    }
    const handleMouseOut = ()=> {
        setHover(false) 
    }


    return (
        <div className="project">
            <motion.section
                className="first-project-section"
                variants={containerVariants}
                exit='exit'
            >
                <div className="about">
                    <h1>about me</h1>
                    <p>I’m a self-taught front-end web developer with a solid background in JavaScript and ReactJS. I’m also familiar with MERN (MongoDB, Express, React and Node.js) software stack. I’m looking for an opportunity to challenge myself and a position where I can offer the best with the knowledge I have acquired so far.</p>
                </div>
                
                <h1>Projects</h1>
                <div className="project-container">
                    <p 
                        className="text-1"
                        style={{display: hover ? 'block' : 'none'}}
                    >
                        <span className="project-name">
                            {projectName}
                        </span> <br />
                        <span className="project-description">
                            ({projectDescription})
                        </span> <br />
                        <span className="small-text">
                            Click to Visit Site
                        </span>
                    </p>

                    {/* Project Card */}
                   <div className="card-container" >
                        <FaArrowCircleLeft 
                            className="left-arrow"
                            onClick={prevProject}
                            style={{
                                visibility: currentPosition === 0 ? 'hidden' : 'visible'
                            }}
                        />
                        <div className="projects" 
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        >
                            <Card currentIndexValue={currentIndexValue} />
                        </div>
                        <FaArrowCircleRight 
                            className="right-arrow"
                            onClick={nextProject}
                            style={{
                                visibility: currentPosition === slide.length - 1 ? 'hidden' : 'visible'
                            }}
                        />
                   </div>
                    
                </div>
            </motion.section>
        </div>
    )
}

export default Project