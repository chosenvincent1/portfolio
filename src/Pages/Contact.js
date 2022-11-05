import React, { useState, useEffect } from 'react';
import { 
    FaFacebook, 
    FaGithub, 
    FaInstagram, 
    FaLinkedin, 
    FaTwitter, 
    FaPaperclip 
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const contactVariants = {
    visibleSocialMedia: {
        scale: 1.2
    }
}

const containerVariants = {
    exit: {
        x: '-100vw',
        transition: {ease: 'easeIn'}
    }
}

const Contact = ({ setShowModal })=> {

    const [isFilePicked, setIsFilePicked] = useState(false);

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
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
        if(
            data.firstName !== '' && 
            data.lastName !== '' && 
            data.email !== '' &&
            data.message !== '' &&
            data.file.length !== 0
        ) {
            setShowModal(true); 
        }
    }

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setShowModal(true)
    //     }, 4000)
    // },[setShowModal])

    return(
         <div className='contact'>
            <motion.section 
                className='first-contact-section'
                variants={containerVariants}
                exit='exit'
            >
                <div className='contact-text'>
                    <p className='text-1'>Want to get in touch? Send message</p>
                    <p className='text-2'>You can also contact me on</p>
                    <div className='social-media'>
                        <motion.a 
                            href='https://www.twitter.com/chosenvincent1'
                            variants={contactVariants}
                            whileHover='visibleSocialMedia'
                        >
                            <FaTwitter className='social-icon' />
                        </motion.a>
                        <motion.a 
                            href='https://github.com/chosenvincent1'
                            variants={contactVariants}
                            whileHover='visibleSocialMedia'
                        >
                            <FaGithub className='social-icon' />
                        </motion.a>
                        <motion.a 
                            href='https://www.linkedin.com/in/chosenvincent1-674613217'
                            variants={contactVariants}
                            whileHover='visibleSocialMedia'
                        >
                            <FaLinkedin className='social-icon' />
                        </motion.a>
                        <motion.a 
                            href='https://www.instagram.com/chosenvincent1'
                            variants={contactVariants}
                            whileHover='visibleSocialMedia'
                        >
                            <FaInstagram className='social-icon' />
                        </motion.a>
                        <motion.a 
                            href='https://www.facebook.com/vincent.chosen.1'
                            variants={contactVariants}
                            whileHover='visibleSocialMedia'
                        >
                            <FaFacebook className='social-icon' />
                        </motion.a>                     
                    </div>
                </div>
                <form className='contact-form' onSubmit={handleSubmit}>
                    <p className='first-p-tag'>Message Me</p>
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
                    
                    <p className='second-p-tag'>Message</p>
                    <textarea 
                        name='message'
                        value={data.message}
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
                            <p className='selected-file'>
                                {`${data.file.length} selected`}
                            </p> : ''
                        }
                    </label>                      
                    <button className='send-btn'>Send</button>
                </form>
            </motion.section>
         </div>
    )
}

export default Contact