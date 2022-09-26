import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ()=> {
    const [hamburger, setHamburger] = useState(false)

    const clickHamburger = ()=> {
        setHamburger(prevhamburger => !prevhamburger)
    }

    return(
        <div className="navbar">
            <div className="logo">
            <p>chosen</p>
            </div>
            <ul>
                <li className="home-navbar">home</li>
                <li className="projects-navbar">projects</li>
                <li className="about-navbar">about</li>
                <li className="contact-navbar">contact me</li>
            </ul>
            <div className="hamburger-container" onClick={clickHamburger} >
                <FaBars id="menu" className= { `menu ${hamburger ? "remove-hamburger " : "hamburger "}`} />
                <FaTimes id="menu" className={`menu ${hamburger ? "cancel" : "remove-cancel"}`} />
            </div>

            <div className="mobile-nav" style={{display: hamburger? 'block': 'none'}}>
                <ul>
                    <li className="home-navbar">home</li>
                    <li className="projects-navbar">projects</li>
                    <li className="about-navbar">about</li>
                    <li className="contact-navbar">contact me</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar