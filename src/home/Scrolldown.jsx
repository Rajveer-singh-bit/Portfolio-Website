import React from "react";
import { CiDesktopMouse2 } from "react-icons/ci";
import { Link } from "react-scroll";
const ScrollDown = () => {
return(
    <div className="home_scroll">
        <Link to="about"  smooth={true} duration={10} className="home_scroll_btn button_flex"><CiDesktopMouse2/> </Link>
         <p className="home_scroll_name  typewriter-animation">
            Scroll Down ↓
         </p>


    </div>
)
}

export default ScrollDown