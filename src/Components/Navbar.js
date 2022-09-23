import React, { useState } from "react";

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
            <div className="hamburger-container" onClick={clickHamburger}>
                <img src="./logo512.png" alt="hamburger" className={ hamburger ? "remove-hamburger " : "hamburger "} />
                <img src="./images/instagram.png" alt="cancel" className={hamburger ? "cancel" : "remove-cancel"} />
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