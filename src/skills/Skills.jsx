import React from "react";
import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";

const Skills = () => {
    return(
        <div className="skills section">
             <h2 className="section_title">Skills</h2>
            <div className="section_subtitle">My Technical Level</div>

            <div className="skills_container container grid">
                <HardSkills/>


                <SoftSkills/>
            </div>
        </div>






    )

}


export default Skills

