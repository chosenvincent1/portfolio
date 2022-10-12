import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import { 
    FaBars, 
    FaBriefcase, 
    FaHome, 
    FaPhoneSquare, 
    FaTimes 
} from 'react-icons/fa';

const SecondNavbar = ()=> {

    const [hamburger, setHamburger] = useState(false);

    const location = useLocation();

    const clickHamburger = ()=> {
        setHamburger(prevhamburger => !prevhamburger)
    }

    //destructure pathname from useLocation
    const { pathname } = location;

    //split method to get the name of the path in array
    const splitLocation = pathname.split('/');

    return (
        <div className="second-navbar">
            <div className="logo">
            <p>chosen</p>
            </div>
            
            <Link to='/contact'>
                <motion.button 
                    className="hire-me"
                    whileHover={{ 
                        scale: 1.1,
                    }}
                >
                    Hire Me
                </motion.button>
            </Link>
        </div>
    )
}

export default SecondNavbar