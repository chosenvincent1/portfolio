import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';


const backdrop = {
    hidden: { opacity: 0},
    visible: { opacity: 1}
}

const modal = {
    initial: {
        y: '-100vh',
        opacity: 0
    },
    animate: {
        y: '300px',
        opacity: 1,
        transition: { delay: 0.5 }
    }
}

const Modal = ({ showModal })=> {

    return (
        <AnimatePresence>
            {showModal && (
                <motion.div className='backdrop'
                    variants={backdrop}
                    initial='hidden'
                    animate='visible'
                >
                    <motion.div className='modal'
                        variants={modal}
                        initial='initial'
                        animate='animate'
                        exit='initial'
                    >
                        <p>Message sent successfully</p>
                        <Link to='/'>
                            <button>Go Back to Home</button>
                        </Link>
                    </motion.div>
                    
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal