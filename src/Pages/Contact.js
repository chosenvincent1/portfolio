import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaPaperclip } from 'react-icons/fa';
import Navbar from '../Components/Navbar';


const Contact = ()=> {
    
    return(
         <div className='contact'>
            <Navbar />
            
            <section className='first-contact-section'>
                <div className='contact-text'>
                    <p className='text-1'>Need a project? <br /> I would love to help</p>
                    <p className='text-2'>Send a request</p>
                    <p className='text-3'>You can also contact me on</p>
                    <div className='social-media'>
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
                <form className='contact-form'>
                    <p className='first-p-tag'>I'm interested in a website</p>
                    <div className='first-last-name'>
                        <input type="text" className="first-name" placeholder='First Name' />
                        <input type="text" className="last-name" placeholder='Last Name' />
                    </div>
                    <br />
                    <input type="email" className="email" placeholder='Email' />
                    
                    <p className='second-p-tag'>Little description about your project</p>
                    <textarea />
                    <label className='add-file' htmlFor='attachment-input'>
                        <FaPaperclip />
                        <p className='attachment-text'>Add attachment</p>
                        <input type="file" className='attachment-input' id='attachment-input'/>  
                    </label>                      
                    <button className='send-btn'>Send Request</button>
                </form>
                <div className='mobile-contact-text'>
                    <p className='text-3'>You can also contact me on</p>
                    <div className='social-media'>
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
            </section>
         </div>
    )
}

export default Contact