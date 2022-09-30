import React, { useState } from "react";
import { FaBars, FaBriefcase, FaHome, FaPhoneSquare, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ()=> {
    const [hamburger, setHamburger] = useState(false);

    const location = useLocation();

    const clickHamburger = ()=> {
        setHamburger(prevhamburger => !prevhamburger)
    }

    //destructure pathname from useLocation
    const { pathname } = location;

    //split method to get the name of the path in array
    const splitLocation = pathname.split('/');

    return(
        <div className="navbar">
            <FaHome className="home-nav-icon" />
            <FaBriefcase className="project-nav-icon" />
            <FaPhoneSquare className="contact-nav-icon" />
        </div>
    )
}

export default Navbar

{/* <div className="logo">
            <p>chosen</p>
            </div>
            <ul>
                <li className='home-navbar' >
                    <Link
                        className={splitLocation[1] === '' ? 'active' : ''}
                        to='/'
                        >home
                    </Link>
                </li>
                <li className='projects-navbar' >
                    <Link
                        className={splitLocation[1] === 'project' ? 'active' : ''}
                        to='/project'
                        >projects
                    </Link>
                </li>
                <li className="about-navbar">
                    <Link
                        className={splitLocation[1] === 'about' ? 'active' : ''}
                        to='/about'
                        >about
                    </Link>
                </li>
                <li className="contact-navbar">
                    <Link
                        className={splitLocation[1] === 'contact' ? 'active' : ''}
                        to='/contact'
                        >contact me
                    </Link>
                </li>
            </ul>
            <div className="hamburger-container" onClick={clickHamburger} >
                <FaBars id="menu" className= { `menu ${hamburger ? "remove-hamburger " : "hamburger "}`} />
                <FaTimes id="menu" className={`menu ${hamburger ? "cancel" : "remove-cancel"}`} />
            </div>

            <div className="mobile-nav" style={{display: hamburger? 'block': 'none'}}>
                <ul>
                    <li className="home-navbar">
                        <Link to='/'>home</Link>
                    </li>
                    <li className="projects-navbar">
                        <Link to='/project'>projects</Link>
                    </li>
                    <li className="about-navbar">
                        <Link to='/about'>about</Link>
                    </li>
                    <li className="contact-navbar">
                        <Link to='/contact'>contact me</Link>
                    </li>
                </ul>
            </div> */}