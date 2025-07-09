import React from "react";
import HTML from '../assests/html.png'
import CSS from '../assests/css.png'
import Javascript  from '../assests/Javascript.svg'
import react from '../assests/react.png'


const Projects = () =>{
    return( 
         
          <div className="projects section">
        <h2 className="section_title">Projects</h2>
        <div className="section_subtitle">My Personal Projects</div>
        


      <div className="project-container"> 
      <div className="project-card project1" >
        <div className="project-no  project-no-right">01</div>



         



        
        <div className="project-content project-content-left">
          <div className="project-skills-container">
            <img src={HTML} width={100} height={60}  />
             <img src={Javascript} width={40} height={40} />
             <img src={CSS} width={80} height={30}  />
            
         
          </div>
          <h2 className="card_heading">Online Shopping Web</h2>
           
          <p className="card-sub-heading">"Your one-stop online destination for trendy fashion</p>
         <a href="https://khalsa-urban-threads.netlify.app/"  target="_blank" rel="noopener noreferrer"> <button className="link_button">Github.com</button></a>
          
        </div>
       

  </div>
   <div>
                 
                  <div className="project_line"></div>
                </div>
     

  




  

      <div class="project-card" id="project2">
      <div class="project-no project-no-left">02</div>
      
      <div class="project-content project-content-right">
        <div class="project-skills-container">
           <img src={HTML} width={100} height={60}  />
             <img src={Javascript} width={40} height={40} />
             <img src={CSS} width={80} height={30}  />
            
         
        </div>
        <h2 class="card_heading">Passcode Generator</h2>
         
        <p class="card-sub-heading">Generates strong and random passwords .</p>
 <a href="https://github.com/Rajveer-singh-bit/Passcode-Generator.git"  target="_blank" rel="noopener noreferrer"> <button className="link_button">Github.com</button></a>        
      </div>
    </div>  


    
    </div> 

  




      <div className="project-container2"> 


    <div class="project-card" id="project3">
    <div class="project-no project-no-right">03</div>
    
    <div class="project-content project-content-left">
      <div class="project-skills-container">
         <img src={HTML} width={100} height={60}  />
             <img src={react} width={80} height={40} />
             <img src={CSS} width={80} height={30}  />
            
       
      </div>
      <h2 class="card_heading">Todo List</h2>
       
      <p class="card-sub-heading">A simple React app to add, view, and manage daily tasks efficiently.</p>
 <a href="https://github.com/Rajveer-singh-bit/ToDo-List.git"  target="_blank" rel="noopener noreferrer"> <button className="link_button">Github.com</button></a>      
    </div>


     
  </div> 

       <div>
                 
                  <div className="project_line"></div>
                </div>




 <div class="project-card" id="project4">
    <div class="project-no project-no-left">04</div>
    
    <div class="project-content project-content-right">
      <div class="project-skills-container">
         <img src={HTML} width={100} height={60}  />
             <img src={Javascript} width={40} height={40} />
             <img src={CSS} width={80} height={30}  />
            
     
      </div>
      <h2 class="card_heading">Weather API</h2>
       
      <p class="card-sub-heading">A app showing real-time temperature and conditions.</p>
 <a href="https://github.com/Rajveer-singh-bit/Weather-API.git" className="anchor" target="_blank" rel="noopener noreferrer"> <button className="link_button">Github.com</button></a>      
    </div>
  </div> 
</div> 





</div>


        
    )
}

export default Projects