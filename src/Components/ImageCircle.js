import React from "react";

const ImageCircle = ({circleClick, activeCircle})=> {
    return (
        <div className="circle" 
            onClick={circleClick}
            style={{backgroundColor: activeCircle ? '#FF6B00' : '#747474'}}
        >
        </div>
    )
}

export default ImageCircle