import React from "react";
import { FaAward , FaBriefcase } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";


const Info = ()=> {
    return(
        <div>
            <div className="about_info grid">
                <div className="about_box">
                    <div><FaAward className="about_icon"/></div>
                    <div className="about_title">Experience</div>
                    <div className="about_subtitle">Fresher</div>
                </div>

                 <div className="about_box">
                    <div><FaBriefcase  className="about_icon"/></div>
                    <div className="about_title">Completed</div>
                    <div className="about_subtitle">5+ Projects</div>
                </div>

                 <div className="about_box">
                    <div><FaHeadphones  className="about_icon"/></div>                    
                    <div className="about_title">Support</div>
                    <div className="about_subtitle">24/7</div>
                </div>
            </div>









        </div>
    )

}

export default Info