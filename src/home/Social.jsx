import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Social = ()=> {
return(  <div>

<div className="home_social">
      <a href="https://instagram.com/rajveer._013" target="_blank" className="home_socialIcon instagram" >
        <FaInstagram />
      </a>

      <a href="https://linkedin.com/in/rajveer_singh-r98781" target="_blank"className="home_socialIcon linkdin" >
        <FaLinkedin />
      </a>

      <a href="https://github.com/Rajveer-singh-bit" target="_blank" className="home_socialIcon github">
        <FaGithub />
      </a>

</div>



</div>
)
}





export default Social