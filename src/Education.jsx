import React from "react";
import "./Education.css"
const Education = () => {
    return <>
        <div className="edu-cat">
            <div className='edu-left'>
                <h1 className="show-edu">Education</h1>
                <img src="./edu_img.jpg" alt="" />
            </div>
            <div className="edu-right">
                <div className="education">
                    <div className="edu-logo">
                        <img src="./clg_logo.jpg" alt="IET-DAVV" />
                    </div>
                    <div className="edu-detail">
                        <h3>Institute of Engineering and Technology</h3>
                        {/* <hr /> */}
                        <p><small>Completed Bachlor's of engineering</small>(2019-2023)</p>
                        <p>
                            Pursuing Specialization in Information Technology and gaining the knowledge  of several Technology tools
                        </p>
                    </div>
                </div>
                <div className="education">
                    <div className="edu-logo">
                        <img src="./12_logo.png" alt="12^th" />
                    </div>
                    <div className="edu-detail">
                        <h3>Excellence Government Higher Secondary High School</h3>
                        {/* <hr /> */}
                        <p><small>class 12^th</small>(2017-2019)</p>
                        <p>
                            Studied class 11^th and 12^th,along with i passed intermediate with 81%
                        </p>
                    </div>
                </div>
                <div className="education">
                    <div className="edu-logo">
                        <img src="./10_logo.jpeg" alt="10 class" />
                    </div>
                    <div className="edu-detail">
                        <h3>Students Career Higher Seconadry High School</h3>
                        {/* <hr /> */}
                        <p><small>Class 10th</small>(2004-2017)</p>
                        <p>
                            Completed my schooling from kg to class 10th,<br /> Secured  91.2 percent  in my class 10 Boards Examination
                        </p>
                    </div>
                    </div>
        </div>
    </div>
    </>
}
export default Education