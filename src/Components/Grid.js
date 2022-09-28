import React from "react";
import { useNavigate } from "react-router-dom";

const Grid = ({image, name, description, link})=> {
    const navigate = useNavigate();

    const redirect = ()=> {
        window.location.replace(link)
    }
    // console.log(image)
    return(
        <div className="grid" onClick={redirect}>
            <img src={image} />
            <p className="project-name">{name}</p>
            <p className="project-description">{description}</p>
        </div>
    )
}

export default Grid