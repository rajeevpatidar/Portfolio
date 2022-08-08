import React from "react";
import "./Footer.css"
// import InstagramIcon from '@mui/icons-material/Instagram';
const Footer =()=>{
    return(
        <>
        <footer>
            <div className="footer">
                <small>copyright &copy; 2022 Rjeeva pvt.lt. All right Reserved.</small>
                <div className="foot_div">
                    Contact-me @
                    <ul className="foot_ul">
                        <li><a href="https://www.instagram.com/rajeev_patidar_/" target="_blank"><img src="ig.png" alt="" /></a></li>
                        <li><a href="https://www.instagram.com/rajeev_patidar_/" target="_blank"><img src="fb.png" alt="" /></a></li>
                        <li><a href="https://www.instagram.com/rajeev_patidar_/" target="_blank"><img src="LinkedIn.png" alt="" /></a></li>
                        <li><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank"><img src="email.png" alt="" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer