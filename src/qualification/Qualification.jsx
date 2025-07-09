import React, { useState, useEffect, useRef } from "react";
import { FaUserGraduate } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const Qualification = () => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="qualification section">
        <h2 className="section_title">Qualification</h2>
        <div className="section_subtitle">My Personal Journey</div>

        <div className="qualification_container container">
          <div className="qualification_tabs">
            <div className="qualification_button button_flex">
              <FaUserGraduate /> Education
            </div>
          </div>

          <div className="qualification_sections">
            <div
              className={`qualification_content ${isVisible ? "is-visible" : ""}`}
              ref={domRef}
            >
              <div className="qualification_data">
                <div></div>

                <div>
                  <div className="qualification_rounder"></div>
                  <div className="qualification_line"></div>
                </div>

                <div>
                  <h3 className="qualification_title">Bachelor's Degree</h3>
                  <div className="qualification_subtitle">Khalsa College, Patiala</div>
                  <div className="qualification_calen">
                    <SlCalender /> 2022–2025
                  </div>
                </div>
              </div>

              <div className="qualification_data">
                <div></div>

                <div>
                  <div className="qualification_rounder"></div>
                  <div className="qualification_line"></div>
                </div>

                <div>
                  <h3 className="qualification_title">Senior School</h3>
                  <div className="qualification_subtitle">Play Way Senior Secondary School, Patiala</div>
                  <div className="qualification_calen">
                    <SlCalender /> 2021–2022
                  </div>
                </div>
              </div>

              <div className="qualification_data">
                <div></div>

                <div>
                  <div className="qualification_rounder"></div>
                  <div className="qualification_line"></div>
                </div>

                <div>
                  <h3 className="qualification_title">Secondary School</h3>
                  <div className="qualification_subtitle">Play Way Secondary School, Patiala</div>
                  <div className="qualification_calen">
                    <SlCalender /> 2019–2020
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
