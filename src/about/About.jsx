import React from "react";
import AboutImg from '../assests/about.jpg'
import Info from './Info'
import { Link } from "react-router-dom"
import { PiReadCvLogo } from "react-icons/pi";

const About = () =>{

    const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/resume/RajveerCV.pdf"; // relative to public folder
  link.download = "RajveerCV.pdf"; // name to save as
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

    return(
    <div>


        <div className="about section about">
            <h2 className="section_title">About Me</h2>
            <div className="section_subtitle">My Introduction</div>
            <div className="about_container container grid">
                <img src={AboutImg}  className="about_img" />
                <div className="about_data"> <Info /> 
                <div className="about_descr">Creative and enthusiastic front-end developer focused on building clean, user-friendly, and responsive web interfaces.
                     Dedicated to delivering smooth user experiences and visually appealing designs.</div>
                      <button onClick={handleDownload}   className="Cvbutton"> Download Resume <PiReadCvLogo/></button>
                      
                      
                      
                      
            </div>
            </div>
        </div>
    
    
    
    
    </div>
    )

}

export default About