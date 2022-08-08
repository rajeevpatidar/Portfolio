import React from "react";
import "./Projects.css"
import { Link,NavLink } from "react-router-dom";
const Projects = () => {
    return <>
        <div className="p_box">
            <div className="p_left">
                <div><h1 className="p_left_head">Coding Work...</h1></div>
                <div className="p_left_d_back">
                    <div  className="p_left_details">
                        <h1>GitHub</h1>
                        <p><a href='https://github.com/rajeevpatidar' target="_blank">
                            <img className="git_img" src="Git.png" alt=""  /></a></p>
                    </div>
                </div>
                <div className="p_left_d_back">
                    <div  className="p_left_details">
                        <h1>Hacker <br /> Rank</h1>
                        <p><a href='https://www.hackerrank.com/rajeev2001_24' target="_blank">
                            <img src="hackerrank.png" alt=""/></a></p>
                    </div>
                </div>
                <div className="p_left_d_back">
                    <div  className="p_left_details">
                        <h1>LeetCode</h1>
                        <p><a href='https://leetcode.com/user3131j/' target="_blank">
                            <img src="LeetCode.png" alt="" /></a></p>
                    </div>
                </div>
                <div className="p_left_d_back">
                    <div  className="p_left_details">
                        <h1>LinkedIn</h1>
                        <p><a href='https://www.linkedin.com/in/rajeev-patidar-106a05191' target="_blank">
                            <img src="LinkedIn.png" alt="" /></a></p>
                        {/* <p><a href='https://www.hackerrank.com/rajeev2001_24' target="_blank">Hacker Rank</a></p> */}
                    </div>
                </div>
                        {/* <p><a href='/' target="_blank">https://github.com/rajeevpatidar</a></p> */}
               
            </div>
            <div className="p_right">
                    <div>
                        <h1 className="p_right_head">PROJECT'S</h1>
                    </div>
                <div className="all_projects">
                    <div className="box_1">
                        <img src="netflix.jfif" alt="NETFLIX" />
                        <p><a className="all_link" href="https://rajeevpatidar.github.io/netflix-clone/" target="_blank">Netflix</a></p>
                    </div>
                    <div className="box_1">
                        <img src="color_gen.png" alt="NETFLIX" />
                        <p><a className="all_link" href="https://rajeevpatidar.github.io/colorGenerator/" target="_blank" >Color-Generator</a></p>
                    </div>
                    <div className="box_1">
                        <img src="grocery_list.jpg" alt="Grocery" />
                        <p><a className="all_link" href="https://rajeevpatidar.github.io/grocery_todoList/" target="_blank">Grocery-List</a></p>
                    </div>
                    <div className="box_1">
                        <img src="Menu_chart.jfif" alt="MenuChart" />
                        <p><a className="all_link" href="https://rajeevpatidar.github.io/menuChart/" target="_blank" >Menu-chart</a></p>
                    </div>
                    <div className="box_1">
                        <img src="portfolio.png" alt="Portfolio" />
                        <p><a className="all_link" href="https://rajeevpatidar.github.io/netflix-clone/" target="_blank" >Portfolio</a></p>
                    </div>
                    <div className="box_1">
                        <img src="netflix.jfif" alt="NETFLIX" />
                        <p><a className="all_link" href="https://rajeevpatidar.github.io/netflix-clone/" target="_blank">Netflix-Clone</a></p>
                    </div>
                    <div className="box_1">
                        <img src="netflix.jfif" alt="NETFLIX" />
                        <p><a className="all_link" href="https://rajeevpatidar.github.io/netflix-clone/" target="_blank">Netflix-Clone</a></p>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Projects