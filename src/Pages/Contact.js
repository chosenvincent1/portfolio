import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaPaperclip } from 'react-icons/fa';
// import Navbar from '../Components/Navbar';


const Contact = ()=> {

    const [isFilePicked, setIsFilePicked] = useState(false);

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        description: '',
        file: []
    });


    const handleDataChange = (event)=> {
        const {name, value, type, files} = event.target
        setData(prevData => {
            return {
                ...prevData,
                [name]: type === 'file' ? [...data.file, files[0]] : value
            }
        })
        setIsFilePicked(true);
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
    }

    return(
         <div className='contact'>
        
            <section className='first-contact-section'>
                <div className='contact-text'>
                    <p className='text-1'>Need a project? Send Request</p>
                    <p className='text-2'>You can also contact me on</p>
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
                        <FaPaperclip />
                        <p className='attachment-text'>Add Files</p>
                        
                        <input 
                            type="file"
                            name='file'
                            className='attachment-input' 
                            id='attachment-input'
                            onChange={handleDataChange}
                            value=''
                        /> 
                        { isFilePicked ?
                            <p className='selected-file'>{`${data.file.length} selected`}</p>
                            : ''
                        }
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