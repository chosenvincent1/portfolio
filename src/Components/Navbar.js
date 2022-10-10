import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaBriefcase, FaHome, FaPhone, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ()=> {

    const location = useLocation();

    const { pathname } = location

    console.log(location)

    return(
        <div className="navbar">
            <motion.div
                className="nav-icon-container"
                whileHover={{ scale: 1.3 }}
            >
                <Link to='/'>
                    <FaHome 
                        className="nav-icon home-nav-icon" 
                    />
                </Link>
            </motion.div>
            
            <motion.div
                className="nav-icon-container"
                whileHover={{ scale: 1.3 }}
            >
                <Link to='/project'>
                    <FaBriefcase 
                        className="nav-icon project-nav-icon" 
                    />
                </Link>
                
            </motion.div>
            
            <motion.div
                className="nav-icon-container"
                whileHover={{ scale: 1.3 }}
            >
                <Link to='/contact'>
                    <FaPhone 
                        className="nav-icon contact-nav-icon" 
                    />
                </Link>
                
            </motion.div>
            
        </div>
    )
}

export default Navbar