import React from "react";

const ImageCircle = ({circleClick, activeCircle})=> {
    return (
        // <div className="project-circle">
            <div className="circle" 
                onClick={circleClick}
                style={{backgroundColor: activeCircle ? '#FF6B00' : ''}}
            >

            </div>
           
        // {/* </div> */}
    )
}

export default ImageCircle