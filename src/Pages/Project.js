import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import ImageCircle from "../Components/ImageCircle";
import Data from "../Projects/Data";

const Project = ()=> {
    const [hover, setHover] = useState(false);

    const [slide, setSlide] = useState(Data);
    const [currentPosition, setCurrentPositon] = useState(0)

    let currentIndexValue = slide[currentPosition];

    const nextProject = ()=> {
        if (currentPosition !== slide.length - 1) {
            setCurrentPositon(currentPosition + 1) 
        } else {
            setCurrentPositon(currentPosition = 0)
        }
        currentIndexValue = slide[currentPosition];
    }

    console.log(slide.length-1)

    const prevProject = ()=> {
        if (currentPosition !== 0) {
            setCurrentPositon(currentPosition - 1)  
        } else {
            setCurrentPositon(currentPosition = slide.length - 1)
        }
        
        currentIndexValue = slide[currentPosition];
    }
    

    // const projects = Data.map((project, index) => {
    //     return <Card key={index} {...project} />
    // })

    const handleMouseOver = ()=> {
        setHover(true)
        
    }
    const handleMouseOut = ()=> {
        setHover(false)
    }


    return (
        <div className="project">
            {/* <Navbar /> */}
            <div className="about">
                <h1>about me</h1>
                <p>I’m a Web Developer and Technical Write. I build amazing UI using HTML, CSS, JavaScript, React and NodeJs.</p>
                <p>I’m also a student of the University Of Port Harcourt, I’m a proud Nigerian living in my home town of Port Harcourt, Rivers State.</p>
            </div>
            <h1>Projects</h1>
            <div className="project-container">
                <div className="project-arrow-container">
                    <FaAngleLeft 
                        className="arrow-left" 
                        onClick={prevProject}
                        style={{display: currentPosition===0 ? 'none' : ''}}
                    />
                    <p 
                        className="text-1"
                        style={{display: hover ? 'block' : 'none'}}
                        >Farm Website <br />Full-Stack Project <br /> <span className="small-text">Click to Visit Site</span></p>
                
                    <div className="project-container" 
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <Card currentIndexValue={currentIndexValue} />
                    </div>
                    <FaAngleRight 
                        className="arrow-right" 
                        onClick={nextProject}
                        style={{display: currentPosition === slide.length-1 ? 'none' : ''}}
                    />
                </div>
                <ImageCircle />
            </div>
            
        </div>
    )
}

export default Project