import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Grid = ({image, name, description, link})=> {

    const redirect = ()=> {
        window.location.replace(link)
    }

    return(
        <div className="project-image" onClick={redirect}>
            <img src={image} />
            {/* <p className="project-name">{name}</p>
            <p className="project-description">{description}</p> */}
        </div>
    )
}

export default Grid