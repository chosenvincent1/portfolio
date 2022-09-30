import React, { useState } from "react";
import { FaBars, FaBriefcase, FaHome, FaPhoneSquare, FaTimes } from 'react-icons/fa';

const Navbar = ()=> {

    return(
        <div className="navbar">
            <FaHome className="home-nav-icon" />
            <FaBriefcase className="project-nav-icon" />
            <FaPhoneSquare className="contact-nav-icon" />
        </div>
    )
}

export default Navbar