import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageCircle = ({circleClick, activeCircle})=> {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className="circle" 
            onClick={circleClick}
            style={{backgroundColor: activeCircle ? '#FF6B00' : '#747474'}}
        >
        </div>
    )
}

export default ImageCircle