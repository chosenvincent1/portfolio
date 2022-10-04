import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaPaperclip } from 'react-icons/fa';
// import Navbar from '../Components/Navbar';


const Contact = ()=> {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        description: '',
        file: ''
    });

    const [selectedfile, setSelectedFile] = useState('');
    const [isFilePicked, setIsFilePicked] = useState(false);

    const handleFileChange = (event)=> {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    }

    const handleDataChange = (event)=> {
        setData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }
    console.log(data)

    const handleSubmit = (e)=> {
        e.preventDefault();
    }

    return(
         <div className='contact'>
            {/* <Navbar /> */}
        
            <section className='first-contact-section'>
                <div className='contact-text'>
                    {/* <div className='circle first-circle'></div>
                    <div className='circle second-circle'></div> */}
                    <p className='text-1'>Need a project? <br />Contact me, I would love to help</p>
                    <p className='text-2'>Send a Request</p>
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
                <form className='contact-form' onSubmit={handleSubmit}>
                    <p className='first-p-tag'>I'm interested in a website</p>
                    <div className='first-last-name'>
                        <input 
                            type="text" 
                            className="first-name"
                            placeholder='First Name'
                            name='firstName'
                            value={data.firstName}
                            onChange={handleDataChange}
                        />
                        <input 
                            type="text" 
                            className="last-name" 
                            placeholder='Last Name'
                            name='lastName'
                            value={data.lastName}
                            onChange={handleDataChange}
                        />
                    </div>
                    <br />
                    <input 
                        type="email" 
                        className="email" 
                        placeholder='Email'
                        name='email'
                        value={data.email}
                        onChange={handleDataChange}
                    />
                    
                    <p className='second-p-tag'>Little description about your project</p>
                    <textarea 
                        name='description'
                        value={data.description}
                        onChange={handleDataChange}
                    />
                    <label className='add-file' htmlFor='attachment-input'>
                        {/* <FaPaperclip /> */}
                        { 
                            isFilePicked ? 
                            <p className='selected-file'>{selectedfile.name}</p> :  
                            <p className='attachment-text'>Add File</p>
                        }
                        <input 
                            type="file"
                            name='file'
                            className='attachment-input' 
                            id='attachment-input'
                            onChange={handleFileChange}
                        />
                        
                    </label>                      
                    <button className='send-btn'>Send</button>
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