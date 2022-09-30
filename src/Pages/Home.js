
import React from "react";
import Navbar from "../Components/Navbar";

const Home = ()=> {
    return (
        <div className="home">
            <Navbar />

            <section className="first-home-section">
                <div className="home-text">
                    <h1 className="logo">chosen</h1>
                    <p className="first-p">hi, i'm</p>
                    <p className="second-p">chosen vincent,</p>
                    <p className="third-p">(web developer)</p>
                    <p className="fourth-p">“I’m Highly Experienced in Html, CSS, JavaScript, React, and Nodejs”</p>
                    <button>Download CV</button>
                </div>

                <div className="home-image">
                    <div className="home-image-btn">
                        <button className="btn">lets' talk</button>
                    </div>
                    <img src="/images/developer.png" alt="" className="developer" />
                    <img src="/images/html.png" alt="" className="html" />
                    <img src="/images/css.png" alt="" className="css" />
                    <img src="/images/javascript.png" alt="" className="javascript" />
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