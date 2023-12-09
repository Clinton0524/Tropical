import React from "react";
import "./Footer.css";
import facebook from "../Images/Component 6.svg";
import twitter from "../Images/Component 7.svg";
import instagram from "../Images/Component 8.svg";
const Footer = () => {
  return (
    
      <div className="container-9 mt-5">
        <div className="row">
          <div className="col-lg-10 mt-3 mb-3">
            <div className="items">
              <p className="mx-5"> Home </p>
              <p className="mx-5">Contact us</p>
              <p className="mx-5">Help</p>
            </div>
            </div>
            <div className="col-lg-2 mt-3 mb-3">
              <div className="social-icons">
                <img className="socials mx-3" src={facebook}></img>
                <img className="social mx-3" src={twitter}></img>
                <img className="social mx-3" src={instagram}></img>
             
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Footer;
