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
                    <p>I’m a Web Developer and Technical Write. I build amazing UI using HTML, CSS, JavaScript, React and NodeJs.</p>
                    <p>I’m also a student of the University Of Port Harcourt, I’m a proud Nigerian living in my home town of Port Harcourt, Rivers State.</p>
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
                    <FaArrowCircleLeft 
                        style={{
                            color: 'white',
                            fontSize: 24,
                            marginRight: 10,
                        }}  
                    />
                    
                    
                    <div className="projects" 
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        
                        <Card currentIndexValue={currentIndexValue} />
                    </div>

                    <FaArrowCircleRight
                        style={{
                            color: 'white',
                            fontSize: 24,
                        }}  
                    />
                    
                </div>
            </motion.section>
        </div>
    )
}

export default Project