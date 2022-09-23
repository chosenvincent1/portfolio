import React from 'react';
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
                        <a href=''>
                        <img src='./images/whatsApp.png' alt='whatsApp' className='social-icon whatsApp' />
                        </a>
                        <a href=''>
                            <img src='./images/facebook.png' alt='facebook' className='social-icon facebook' />
                        </a>
                        <a href=''>
                            <img src='./images/instagram.png' alt='instagram' className='social-icon instagram' />
                        </a>
                        <a href=''>
                            <img src='./images/linkedin.png' alt='linkedin' className='social-icon linkedin' />
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
                    <div className='add-file'>
                        <div className='add-attachment'>
                            <img src='' alt='' className='attachment-icon' />
                            <p className='attachment-text'>Add attachment</p>
                        </div>
                        {/* <input type="file" /> */}
                    </div>
                    <button className='send-btn'>Send Request</button>
                </form>
            </section>
         </div>
    )
}

export default Contact