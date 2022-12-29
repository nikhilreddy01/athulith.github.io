import React from "react";
import "./Navbar.scss"
import {useNavigate} from 'react-router-dom';
import Contactus from "../../pages/Contactus/Contactus";
const Navbar =()=>{
    const history = useNavigate();
  const onContactUsClick = ()=>{
    // history('/ContactUs')
  }
    return(
        <div className="nav-bar">
            <div className="logo">
              <div>Athulith</div>
              <span> Interiors</span>
            </div>
            {/* <div> */}
                {/* <marquee>contact Rajesh Reddy  at +91 8919281705</marquee> */}
            {/* </div> */}
            <div className="about-us">
                <div className="call"><a href="tel:+91 9392153622">
                +91 9392153622
            </a></div>
                {/* <div onClick={onContactUsClick}>Follow Us</div> */}
                <Contactus/>

            </div>

        </div>
    )

};
export default Navbar;