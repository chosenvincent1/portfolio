import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Grid = ({image, name, description, link, currentIndexValue})=> {

    const redirect = ()=> {
        window.location.replace(link)
    }

    console.log(currentIndexValue.image)
    

    return(
        <motion.div 
            className="project-image" 
            onClick={redirect}
            whileHover={{ scale: 1.1 }}
        >
            <img src={currentIndexValue.image} />
        </motion.div>
    )
}

export default Grid