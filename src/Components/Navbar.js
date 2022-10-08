import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaBriefcase, FaHome, FaPhone, FaTimes } from 'react-icons/fa';

const Navbar = ()=> {

    return(
        <div className="navbar">
            <motion.div
                className="nav-icon-container"
                whileHover={{ scale: 1.3 }}
            >
                <FaHome 
                    className="nav-icon home-nav-icon" 
                />
            </motion.div>
            
            <motion.div
                className="nav-icon-container"
                whileHover={{ scale: 1.3 }}
            >
                <FaBriefcase 
                    className="nav-icon project-nav-icon" 
                />
            </motion.div>
            
            <motion.div
                className="nav-icon-container"
                whileHover={{ scale: 1.3 }}
            >
                <FaPhone 
                    className="nav-icon contact-nav-icon" 
                />
            </motion.div>
            
        </div>
    )
}

export default Navbar