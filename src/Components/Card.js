import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";

const Card = ({image, name, description, link, currentIndexValue})=> {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };

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
            <img src='../images/farm.jpg' />
        </motion.div>
    )
}

export default Card