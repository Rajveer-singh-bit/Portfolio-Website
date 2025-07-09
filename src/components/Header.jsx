import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import {  NavLink } from 'react-router-dom';
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";
import { LuContact } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";
import { IoAppsOutline } from "react-icons/io5";
import { Link } from "react-scroll";





const Header =()=>{


const[Toggle,showMenu] = useState(false);


    return(
      <div className="header">
        <nav className="Nav_container">
          <div>
             <Link to="#" className="logo">.Rajveer</Link> 
          </div>

         <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
            <ul className="nav_list">
              <li>
                  <Link to="home"  smooth={true} duration={10} className="lists">{<IoHomeOutline />}</Link>
                  <Link to="home"  smooth={true} duration={10}className="nav_link">Home</Link>
               </li>
              <li> 
                 <Link to="about"  smooth={true} duration={10} className="lists">{<IoPersonOutline />}</Link>
                <Link to="about" smooth={true} duration={10} className="nav_link">About</Link>
                 </li>
              <li> 
                 <Link to="skills"  smooth={true} duration={10} className="lists">{<MdOutlineContactPage  />}</Link>
                 <Link to="skills"  smooth={true} duration={10}  className="nav_link">Skills</Link>
              </li>
               <li> 
                 <Link to="projects" smooth={true} duration={10} className="lists">{<RiGalleryLine  />}</Link>
                <Link to="projects"  smooth={true} duration={10} className="nav_link">Projects</Link>
                 </li>
                  <li> 
                 <Link to="contact"  smooth={true} duration={10} className="lists">{<LuContact />}</Link>
                <Link to="contact"  smooth={true} duration={10} className="nav_link">Contact</Link>
                 </li>
           
           </ul>
           <div className="nav_close" onClick={()=>{
          showMenu(!Toggle)
         }} ><LiaTimesSolid /></div>
         </div>
         <div className="nav_toggle" onClick={()=>{
          showMenu(!Toggle)
         }}>
           <IoAppsOutline />
         </div>
      </nav>
           
             



        



        </div>
    )

}




export default Header