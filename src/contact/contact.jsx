import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaArrowCircleRight , FaWhatsapp , FaLinkedin ,FaRegHandPeace} from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";


const Contact = () => {

      const form = useRef();

  function sendEmail(e)  {
    e.preventDefault();

    emailjs
      .sendForm('service_n35srsc', 'template_e36djkf', form.current, {
        publicKey: 'w2uWXcVaouCifJRr8',
      })
      
        e.target.reset()
        
      
  };

    return (
     <div>
      <div className="contact section">
        <h2 className="section_title">Get in Touch</h2>
        <div className="section_subtitle">Contact Me</div>

        <div className="contact_container container grid">
            <div className="contact_content">
                <h3 className="contact_title">Talk to me </h3>

                <div className="contact_info">
                    <div className="contact_card">
                        <IoMdMailUnread className="contact_btn_mail"/>
                        <h3 className="contact_card_title">Email</h3>
                        <div className="contact_card_data">rajveers5329@gmail.com</div>
                        <a href="mailto:rajveers5329@gmail.com" className="contact_btn">Write me {" "}< FaArrowCircleRight className="contact_btn_icon"/></a>
                    </div>

                     <div className="contact_card">
                        <FaWhatsapp className="contact_btn_mail"/>
                        <h3 className="contact_card_title">Whatsapp</h3>
                        <div className="contact_card_data">9878157465</div>
                        <a href="https://api.whatsapp.com/send?
                       phone=9878157465&text=Hello, more information!" className="contact_btn">Write me {" "}< FaArrowCircleRight className="contact_btn_icon"/></a>
                    </div>

                     <div className="contact_card">
                        <FaLinkedin className="contact_btn_mail"/>
                        <h3 className="contact_card_title">Linkdin</h3>
                        <div className="contact_card_data">rajveer-singh-r98781</div>
                        <a href="www.linkedin.com/in/rajveer-singh-r98781" className="contact_btn">Write me {" "}< FaArrowCircleRight className="contact_btn_icon"/></a>
                    </div>
                </div>
            </div>

            <div className="contact_content">
                <h3 className="contact_title">Write me your project</h3>
                
                <form  ref={form} onSubmit={sendEmail}  className="contact_form">
                    <div className="contact_form_div">
                        <label className="contact_form_tag">Name</label>
                        <input required type="text" name="name" placeholder="Insert your name" className="contact_form_input" />
                    </div>

                       <div className="contact_form_div">
                        <label className="contact_form_tag">Mail</label>
                        <input type="email" name="email" required placeholder="Insert your email" className="contact_form_input" />
                    </div>

                       <div className="contact_form_div">
                        <label className="contact_form_tag">Project</label>
                       <textarea required name="project" cols={40} rows={30} placeholder="Write your project" className="contact_form_input  "></textarea>
                    </div>
                    <button className="button button_flex">Send Message <FaRegHandPeace  /> </button>
                    
                    </form>
            </div>
        </div>




















        </div>
     </div>
    )


}

export default Contact