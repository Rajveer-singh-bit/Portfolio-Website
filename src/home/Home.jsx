import React from "react";
import Social from "./Social";
import Data from "./Data";
import myPhoto from '../assests/profile.jpg'
import ScrollDown from "./Scrolldown";


const Home = ()=>{
    return(
        <div className="home section">
            <div className="home_container container grid">
                <div className="home_content grid">
                    <Social/>

                 <img src={myPhoto}  className="home_img"/>

                    <div className="home_imgg">
                        <Data/>
                    </div>
                   
                </div>
                 <ScrollDown/>
            </div>
        </div>






    )
}


export default Home