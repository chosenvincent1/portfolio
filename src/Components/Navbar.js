import React, { useState } from "react";
import { FaBars, FaBriefcase, FaHome, FaPhone, FaTimes } from 'react-icons/fa';

const Navbar = ()=> {

    return(
        <div className="navbar">
            <FaHome className="nav-icon home-nav-icon" />
            <FaBriefcase className="nav-icon project-nav-icon" />
            <FaPhone className="nav-icon contact-nav-icon" />
        </div>
    )
}

export default Navbar