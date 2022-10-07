
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

const Home = ()=> {
    return (
        <div className="home">
            <section className="first-home-section">
            <SecondNavbar className='second-navbar' />
                <div className="home-text">
                    <p className="first-p">hi!</p>
                    <p className="second-p">i'm chosen,</p>
                    <p className="fourth-p">“I’m a Web Developer with a solid background in JavaScript and React. <br /> i'm also a MERN Stack Developer”</p>
                   
                    <motion.button 
                        className="download-cv"
                        initial={{ y: '-100vh' }}
                        animate={{ y: 0 }}
                        transition={{delay: 2}}
                    >
                        Download CV
                    </motion.button>
                    <div className='home-social-media'>
                        <a href='https://www.twitter.com/chosenvincent1'>
                            <FaTwitter className='social-icon' />
                        </a>
                        <a href='https://github.com/chosenvincent1'>
                            <FaGithub className='social-icon' />
                        </a>
                        <a href='https://www.linkedin.com/in/chosenvincent1-674613217'>
                            <FaLinkedin className='social-icon' />
                        </a>
                        <a href='https://www.instagram.com/chosenvincent1'>
                            <FaInstagram className='social-icon' />
                        </a>
                        <a href='https://www.facebook.com/vincent.chosen.1'>
                            <FaFacebook className='social-icon' />
                        </a>                        
                    </div>

                    <img src="/images/chosen.png" alt="" className="developer" />
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