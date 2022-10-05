
import React from "react";
import Navbar from "../Components/Navbar";
import SecondNavbar from "../Components/SecondNavbar";
import Project from "./Project";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home = ()=> {
    return (
        <div className="home">
            <section className="first-home-section">
                <div className="home-text">
                    <SecondNavbar className='second-navbar' />
                    <p className="first-p">hi!</p>
                    <p className="second-p">i'm chosen,</p>
                    {/* <p className="third-p">web developer</p> */}
                    <p className="fourth-p">“I’m a Web Developer with a solid background in JavaScript and React. <br /> i'm also a MERN Stack Developer”</p>
                   
                    <button className="hire-me">Hire me</button>
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
                </div>
                

                <div className="project-completed">
                    <p>over 207 <span className="plus">+</span></p>
                    <p>projects <span className="completed">completed</span></p>
                    <p><span className="percent">100%</span> reliable</p>
                </div>

                <div className="home-image">
                    <div className="home-image-btn">
                        <button className="btn">lets' talk</button>
                    </div>
                    <img src="/images/developer.png" alt="" className="developer" />
                </div>
            </section>
        </div>
    )
}

export default Home