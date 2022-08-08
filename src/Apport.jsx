import React from "react";
import Navbar from "./Navbar";
// import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import {Routes ,Route,Link} from "react-router-dom";
import Homey from "./homey";
// import Content from "./Content";
const Appy = ()=>{
    return(
        <>
            <Navbar />
            <Routes >
                <Route exact path="/" element={<Homey />}  />
                <Route exact path="/about" element = {<About />} />
                <Route exact path="/education" element  = {<Education />}  />
                {/* <Route exact path="/skills" element = {<Skills />} /> */}
                <Route exact path="/Projects" element={<Projects/>}/>
            </Routes>
        </>
    )
}
export default Appy;