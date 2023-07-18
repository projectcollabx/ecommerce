import React from 'react';
// import s1 from "../../images/";
import './ElementorSection.css';

const ElementorSection = ({imgLink,flag,heading,content}) => {
  return (
    <section className="elementor-section">

      <div className="elementor-container" style={{
          flexDirection:flag?'row-reverse':'row'
        }} >
        
        <div className="elementor-column" >
          <div className="elementor-widget">
            <h2 className="elementor-heading-title">{heading}</h2>
          </div>
          <div className="elementor-widget">
            <div className="elementor-divider">
              <span className="elementor-divider-separator"></span>
            </div>
          </div>
          {/* <div className="elementor-widget">
            <h4 className="elementor-heading-title">Where we Design Your Vision</h4>
          </div> */}
          <div className="elementor-widget">
            <p>{content}</p>
          </div>
          <div className="elementor-widget">
            <div className="elementor-divider">
              <span className="elementor-divider-separator"></span>
            </div>
          </div>
          {/* <div className="elementor-widget">
            <ul className="elementor-icon-list-items">
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon">
                  <i className="fas fa-phone"></i>
                </span>
                <span className="elementor-icon-list-text">Call Us Today</span>
              </li>
            </ul>
          </div> */}
          {/* <div className="elementor-widget">
            <h3 className="elementor-heading-title">+1(647)-463-9803</h3>
        </div>*/}
        </div> 
        <div className="elementor-column">
          <div className="elementor-widget">
            <img src={imgLink} alt="Civil Engineer Construction" />
          </div>
        </div>
      </div>
     </section>

  );
};

export default ElementorSection;
