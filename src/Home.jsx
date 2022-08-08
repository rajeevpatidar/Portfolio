import React from "react";
import  { MyLink} from "react-router-dom"
import './Homecss.css'
const Home = ()=>{
    return(
        <>
            <div className="intro-box">
                <div className="left-box">
                    <div className="container">
                    <img src="my_img.jpg" alt="" />
                    <div className="overlap">
                        <h1 className="text">Hi there!</h1>
                    </div>
                    </div>
                </div>
                <div className="right-box">
                    <h1>Rajeev Patidar
                        <hr style={{color:"white"}} />
                    </h1>
                    <div>
                    {/* <a href="https://www.google.com/"><button>Visit google</button></a> */}
                    </div>
                    <small><span>IT Guy |Bachlor of engg.| </span></small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quidem <br />nostrum ipsa natus accusamus porro officiis sit vero non amet illo <br />laboriosam ipsum soluta architecto pariatur, minima inventore <br />necessitatibus, itaque, consequuntur corrupti odio. Doloribus odit rerum <br />ipsam dolore vero dolorem.</p>
                </div>
            </div>
        </>
    )
}
export default Home;