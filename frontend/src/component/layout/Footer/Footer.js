import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import logo from "../../../images/a&s_logo.png";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className = 'upperFooter'>
          <div className="leftFooter">
            <img src={logo} alt="Logo" className="logo" />
            {/* <p>A & S Ventures</p> */}

            <div className="midFooter"></div>
          </div>

          <div className="rightFooter">
            <h4>Our Company</h4>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
          </div>

          <div className="rightFooter">
            <h4>Our Work</h4>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
          </div>

          <div className="rightFooter">
            <h4>Our Products</h4>
            <a href="https://www.amazon.in/stores/page/2FFDBFD8-3C56-4071-9E9F-4E022833AC59">
              Amazon
            </a>
            <a href="https://www.meesho.com/ASVENTURES?_ms=1">Meesho</a>
            <a href="https://www.indiamart.com/as-ventures-haridwar/">
              IndiaMart
            </a>
          </div>
          <div className="rightFooter">
            <h4>Contact Details</h4>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
          </div>
        </div>

        <div className="footerCopyright">
          <p>Copyright © 2023 A&S Ventures</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
