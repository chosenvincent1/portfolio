import React from "react";

const Grid = ({image, name, description})=> {
    console.log(image)
    return(
        // <div className="grid-items">
            <div className="grid">
                <img src={image} />
                <p className="project-name">{name}</p>
                <p className="project-description">{description}</p>
            </div>
        // </div>
    )
}

export default Grid