import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaBriefcase, FaHome, FaPhone, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ()=> {

    const location = useLocation();

    const { pathname } = location

    const splitLocation = pathname.split('/');


    return(
        <div className="navbar">
            <motion.div
                className="nav-icon-container"
                whileHover={{ scale: 1.3 }}
            >
                <Link to='/'>
                    <FaHome 
                        className="nav-icon home-nav-icon" 
                        style={{color: splitLocation[1] === '' ? '#FF6B00' : ''}}
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
                        style={{color: splitLocation[1] === 'project' ? '#FF6B00' : ''}}
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
                        style={{color: splitLocation[1] === 'contact' ? '#FF6B00' : ''}}
                    />
                </Link>
                
            </motion.div>
            
        </div>
    )
}

export default Navbar