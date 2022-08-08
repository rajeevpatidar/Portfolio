import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbarcss.css"
const Navbar  = ()=>{
    const [theme ,setTheme] = useState("light_theme");
    const  changeMode=()=>{
        if(theme==="dark_theme"){
            setTheme("light_theme")
        }
        else{
            setTheme("dark_theme")
        }
    }
    useEffect(()=>{
        document.body.className = theme;
    }); 
    return(
        <nav className="nav-box">
            <div className="nav-div">
                <div className="nav-comps" id="nav-head">
                    <img src="" alt="" />
                    <h1>PortFolio</h1>
                    
                </div>
                <div className="nav-comps" id="nav-link">

                    <NavLink exact activeClassName = "port" className="port-comp" to='/' >Home</NavLink>
                    <NavLink exact activeClassName = "port" className="port-comp"  to='/about' >About</NavLink>
                    <NavLink exact activeClassName = "port" className="port-comp"  to='/education' >Education</NavLink>
                    <NavLink exact activeClassName = "port" className="port-comp"  to='/Projects' >Projects</NavLink>
                    {/* <NavLink exact activeClassName = "port" className="port-comp"  to='/skills' >Tech Skills</NavLink> */}
                </div>
                {/* <div> */}
                    {/* <button className="mode_btn" onClick={changeMode}>{theme==="light_theme"?"Dark Mode":"Light Mode"}</button></div> */}
            </div>
        </nav>
    )
}
export default Navbar;