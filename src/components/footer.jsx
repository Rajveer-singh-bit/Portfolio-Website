import React from "react";
import { FaInstagram, FaLinkedin, FaGithub , FaFacebookF ,FaArrowCircleRight  } from 'react-icons/fa';
import { IoMdMailUnread } from "react-icons/io";

const Footer = ()=>{
    return(
        <div>
       <div className="footer">
        <div className="footer_container container">
            <h1 className="logo logo_footer">.Rajveer</h1>
             <h3 className="footer_line">Living, learning, & leveling up one day at a time.</h3>

          <div className="footer_social">
                <a href="https://instagram.com/rajveer._013" target="_blank" className="home_socialIcon instagram" >
                  <FaInstagram />
                </a>
          
                <a href="https://linkedin.com/in/rajveer_singh-r98781" target="_blank"className="home_socialIcon linkdin" >
                  <FaLinkedin />
                </a>
          
                <a href="https://github.com/Rajveer-singh-bit" target="_blank" className="home_socialIcon github">
                  <FaGithub />
                </a>

                  <a href="mailto:rajveers5329@gmail.com" target="_blank" className="home_socialIcon mail">
                  <IoMdMailUnread />
                </a>

                  <a href="https://github.com/Rajveer-singh-bit" target="_blank" className="home_socialIcon facebook">
                  <FaFacebookF />
                </a>
          </div>

               <div className="footer_copy">Handcrafted by me © twentytwentyfive</div>
        </div>
       </div>







        </div>
    )

}

export default Footer