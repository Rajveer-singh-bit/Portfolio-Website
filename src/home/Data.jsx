import React, { useEffect } from "react";
import { data } from "react-router-dom";
import  {  useRef } from 'react';
import Typed from 'typed.js';
import { FaRegHandPeace } from "react-icons/fa";

const Data = () => {
  const typedElement = useRef(null); // ✅ define this
  const typedInstance = useRef(null); // optional for cleanup

  useEffect(() => {
    typedInstance.current = new Typed(typedElement.current, {
      strings: [
        "Web Developer",
        "UI-UX Designer",
        
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    return () => {
      typedInstance.current.destroy(); // ✅ clean up
    };
  }, []);

return(
 <div>
    <div className="home_data">
        <h1 className="home_title">Rajveer Singh</h1>
        <h3 className="home_subtitle">I am   <span className="role" ref={typedElement}></span></h3>
        <p className="home_descr">Enthusiastic software developer with strong skills in front-end
                                  development and object-oriented programming. 
         </p>
         <button className="button button_flex">Say Hello <FaRegHandPeace  /> </button>
        
    </div>





 </div>




)
};



export default Data