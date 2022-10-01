import React, { useState } from "react";
import { FaBars, FaBriefcase, FaHome, FaPhone, FaTimes } from 'react-icons/fa';

const Navbar = ()=> {

    return(
        <div className="navbar">
            <FaHome className="home-nav-icon" />
            <FaBriefcase className="project-nav-icon" />
            <FaPhone className="contact-nav-icon" />
        </div>
    )
}

export default Navbar