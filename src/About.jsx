import React from "react";
import "./About.css";
const About = () => {
    return (
        <>
            <div className="about-box">
                <div className="left-about">
                    <div className="left_detail_more">
                        <h1>WHY I STARTED?</h1>
                        <p>To Grow More,To Know More</p>
                    </div>
                    <div className="left_details">
                        <div className="left_details_cont1">
                            <div>
                                <h1>Email</h1><p>rajeev2001.24@gmail.com</p>
                            </div>
                            <div>
                                <h1>Phone no.</h1><p><span>+91-</span>9644559729</p>
                            </div>
                            <div>
                                <h1>Age</h1><p>21 years</p>
                            </div>
                            <div>
                                <h1>Birthday</h1><p>24/08/2001</p>
                            </div>
                            <div>
                                <h1>City</h1><p>Indore</p>
                            </div>
                            <div>
                                <h1>Address</h1><p>10/1 A.B. Road Gawali palasia</p>
                            </div>
                            <div>
                                <h1>Degree</h1><p>Bachlor's of Engineering</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="right-about">
                    <div className="about-detail">
                        <h1 className="about_me">About Me</h1>
                        <p className="p-out">
                            <p className="p1"></p>
                            <p className="p2"></p>
                        </p>
                        <h1 className="about_name">
                            I'm Rajeev Patidar and Web Developer
                        </h1>
                        <p className="about-me">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis temporibus neque eveniet. Ipsum pariatur illo nisi laboriosam dolorem, consequatur corporis hic ut at quibusdam, labore officiis fuga aperiam sit.
                        </p>
                    </div>
                    <div className="about-more">

                        <div className="cont-1">
                            <h3>
                                Aim
                            </h3>
                            <ul>
                                <li>To became independent</li>
                                <li>Want to start a start-up</li>
                                <li>Make my skills fluent</li>
                            </ul>
                        </div>
                        <div className="cont-1">
                            <h3>
                                Languages
                            </h3>
                            <ul>
                                <li className="about_lang_li">
                                    <div className="about_lang">
                                        <div className="about_lang_name">
                                            <span>Python</span>
                                            <span>70%</span>
                                        </div>
                                        <div className="about_lang_per">                          
                                                <div className="dark_per"></div>
                                                <div className="light_per"></div>
                                        </div>
                                    </div>
                                </li>
                                <li className="about_lang_li">
                                    <div className="about_lang">
                                        <div className="about_lang_name">
                                            <span>CPP</span>
                                            <span>60%</span>
                                        </div>
                                        <div className="about_lang_per">
                                                <div className="dark_cpp"></div>
                                                <div className="light_cpp"></div>
                                        </div>
                                    </div>
                                </li>
                                <li className="about_lang_li">
                                    <div className="about_lang">
                                        <div className="about_lang_name">
                                            <span>JavaScript</span>
                                            <span>50%</span>
                                        </div>
                                        <div className="about_lang_per">
                                                <div className="dark_cpp"></div>
                                                <div className="light_cpp"></div>
                                        </div>
                                    </div>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className="about-more">

                        <div className="cont-1">
                            <h3>
                                Skills
                            </h3>
                            <ul>
                                <li>Front-end Developer</li>
                                <li>Python Developer</li>
                                <li>React.js</li>
                                <li>Data Structure</li>
                                <li>Critical Thinking</li>
                                <li>Problem Solving</li>
                            </ul>
                        </div>
                        <div className="cont-1">
                            <h3>
                                Hobbies
                            </h3>
                            <ul>
                                <li>Playing chess</li>
                                <li>Bike Racing</li>
                                <li>Playing cards</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default About