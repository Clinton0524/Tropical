import React from "react";
import img from "../Images/Banner.png";
import "./Hero.css";
import arrow from "../Images/material-symbols_arrow-right-alt-rounded.svg";
const Hero = () => {
  return (
    <div className="hero">
      <img src={img} alt="hello"></img>
      <div className="hero-text">
        <h2 className="first">Now, anyone can farm </h2>
        <h2 className="second">Easy Plant Kits for everyone</h2>
        <button style={{ borderRadius: "20px" }} className="btn btn-success">
          Shop Now
          <img className="arrow" src={arrow}></img>
        </button>
      </div>
    </div>
  );
};

export default Hero;
