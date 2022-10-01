
import React from "react";
import Navbar from "../Components/Navbar";
import Project from "./Project";
// import SecondNavbar from "../Components/SecondNavbar";

const Home = ()=> {
    return (
        <div className="home">
            <Navbar />

            <section className="first-home-section">
                <div className="home-text">
                    <h1 className="logo">chosen</h1>
                    <p className="first-p">hi!</p>
                    <p className="second-p">i'm chosen,</p>
                    {/* <p className="third-p">(web developer)</p> */}
                    <p className="fourth-p">“I’m a Web Developer with a solid background in JavaScript and React. i'm also a MERN Stack Developer”</p>
                    <button>Download CV</button>
                </div>

                <div className="project-completed">
                    <p>over 207 <span className="plus">+</span></p>
                    <p>projects <span className="completed">completed</span></p>
                    <p><span className="percent">100%</span> reliable</p>
                </div>

                <div className="home-image">
                    <div className="home-image-btn">
                        <button className="btn">lets' talk</button>
                    </div>
                    <img src="/images/html.png" alt="" className="html" />
                    <img src="/images/css.png" alt="" className="css" />
                    <img src="/images/javascript.png" alt="" className="javascript" />
                    <img src="/images/react.png" alt="" className="react" />
                    <img src="/images/node.png" alt="" className="node" />
                    {/* <img src="/images/mongodb.png" alt="" className="mongodb" /> */}
                    <img src="/images/developer.png" alt="" className="developer" />
                </div>
            </section>

            {/* <section className="second-home-section">
                <div className="statistics">
                    <p>project statistics</p>
                    <button>know more</button>
                </div>
                    <p className="quote">“When you base your expectations only on what you see, you blind yourself to the possibililities of a new reality”</p>
                <div className="blog-btn">
                    <p>visit blog</p>
                    <div className="btn-arrow">
                        <img src="../images/Icon-color.png" alt="arrow" />
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default Home