import React from "react";
import { RiVerifiedBadgeLine } from "react-icons/ri";

const HardSkills = () => {
    return(
    <div className="skills_content">
        <h3 className="skills_title">Hard Skills</h3>

        <div className="skills_box">
            <div className="skills_group">
                <div className="skills_data">
                 
               

                <h3 className="skills_name"> <RiVerifiedBadgeLine  className="logo_badge" />HTML</h3>
                <div className="skills_level">Advanced</div>
             </div>

              <div className="skills_data">
               
               

                <h3 className="skills_name"> <RiVerifiedBadgeLine  className="logo_badge"/>CSS</h3>
                <div className="skills_level">Advanced</div>
             </div>

              <div className="skills_data">
                 
               

                <h3 className="skills_name"><RiVerifiedBadgeLine className="logo_badge"/>JavaScript</h3>
                <div className="skills_level">Intermediate</div>
             </div>

             
            </div>

               <div className="skills_group">
                <div className="skills_data">
                 
               

                <h3 className="skills_name"><RiVerifiedBadgeLine className="logo_badge"/>React</h3>
                <div className="skills_level">Intermediate</div>
             </div>

              <div className="skills_data">
                 
               

                <h3 className="skills_name"><RiVerifiedBadgeLine className="logo_badge"/>Git&GitHub</h3>
                <div className="skills_level">Basics</div>
             </div>

              <div className="skills_data">
               
               

                <h3 className="skills_name"><RiVerifiedBadgeLine className="logo_badge"/>TailwindCSS</h3>
                <div className="skills_level">Intermediate</div>
             </div>
            </div>
        </div>
    </div>






    )
}


export default HardSkills