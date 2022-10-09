
import React from "react";
import Navbar from "../Components/Navbar";
import SecondNavbar from "../Components/SecondNavbar";
import { motion } from "framer-motion";
import { 
    FaFacebook, 
    FaGithub, 
    FaInstagram, 
    FaLinkedin, 
    FaTwitter 
} from 'react-icons/fa';

const homeVariants = {
    visibleButton: {
        scale: 1.1,
        transition: {
            duration: 0.5,
            yoyo: Infinity
        }
    },
    visibleSocialMedia: {
        scale: 1.2
    }
}

const Home = ()=> {
    return (
        <div className="home">
            <section className="first-home-section">
            <SecondNavbar className='second-navbar' />
                <div className="home-text">
                    <div className="home-dev-info">
                        <p className="first-p">hi!</p>
                        <p className="second-p">i'm chosen,</p>
                        <p className="third-p"
                        >
                            “I’m a Web Developer with a solid background in JavaScript and React. 
                            <br /> 
                            i'm also a MERN Stack Developer”
                        </p>
                        <motion.button 
                            className="download-cv"
                            variants={homeVariants}
                            animate='visibleButton'
                        >
                            Download<br /> Resume
                        </motion.button>
                    </div>
                   
                    
                    <div className='home-social-media'>
                        <motion.a 
                            href='https://www.twitter.com/chosenvincent1'
                            variants={homeVariants}
                            whileHover='visibleSocialMedia'
                        >
                            <FaTwitter className='social-icon' />
                        </motion.a>
                        <motion.a 
                            href='https://github.com/chosenvincent1'
                            variants={homeVariants}
                            whileHover='visibleSocialMedia'
                        >
                            <FaGithub className='social-icon' />
                        </motion.a>
                        <motion.a 
                            href='https://www.linkedin.com/in/chosenvincent1-674613217'
                            variants={homeVariants}
                            whileHover='visibleSocialMedia'
                        >
                            <FaLinkedin className='social-icon' />
                        </motion.a>
                        <motion.a 
                            href='https://www.instagram.com/chosenvincent1'
                            variants={homeVariants}
                            whileHover='visibleSocialMedia'
                        >
                            <FaInstagram className='social-icon' />
                        </motion.a>
                        <motion.a 
                            href='https://www.facebook.com/vincent.chosen.1'
                            variants={homeVariants}
                            whileHover='visibleSocialMedia'
                        >
                            <FaFacebook className='social-icon' />
                        </motion.a>                        
                    </div>

                    <img src="/images/chosen.png" alt="developer" className="developer" />
                </div>
                

                {/* <div className="project-completed">
                    <p>over 50 <span className="plus">+</span></p>
                    <p>projects <span className="completed">completed</span></p>
                    <p><span className="percent">100%</span> reliable</p>
                </div> */}
            </section>
        </div>
    )
}

export default Home