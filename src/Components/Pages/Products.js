import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Img from "../Images/AGLAONEMA PINK 1.png";
import Img2 from "../Images/GOLDEN KING MARBLE 1.png";
import Img3 from "../Images/Radish microgreen seeds 1.svg";
import Img4 from "../Images/Sansevieria Fernwood Mikado 1.png";
import wishlist from "../Images/material-symbols_heart-plus.svg";
import wishlistnon from "../Images/material-symbols_heart-plus-outline.svg";
import "./Product.css";
const Products = () => {
  return (
    <>
      <h5 className="mt-5 mb-5">Our Recent Products</h5>
      <div className="container ">
        <div className="row">
          <div className="col-lg-3 col-sm-12">
            <div className="card-container">
            <img className="heart" src={wishlistnon}></img>
              <div className="image-container">
                <img className="img-0" src={Img} alt="contain"></img>
              </div>
            </div>
            <p className="txt mx-2 mt-1 fw-2">Aglaonema<br/>$ 250</p>
          </div>

          <div className="col-lg-3 col-sm-12">
            <div className="card-container">
              <img className="heart" src={wishlist}></img>

              <div className="image-container">
                <img className="img-0" src={Img2} alt="contain"></img>
              </div>
            </div>
            <p className="txt mx-2 mt-1 fw-2">Golden King Marble<br/>$ 340</p>
          </div>

          <div className="col-lg-3 col-sm-12">
            <div className="card-container">
            <img className="heart" src={wishlist}></img>
              <div className="image-container">
                <img className="img-0" src={Img3} alt="contain"></img>
              </div>
            </div>
            <p className="txt mx-2 mt-1 fw-2">Radish Micro Green<br/>$ 250</p>
          </div>
          <div className="col-lg-3 col-sm-12">
            <div className="card-container">
            <img className="heart" src={wishlistnon}></img>
              <div className="image-container">
                <img className="img-0" src={Img4} alt="contain"></img>
              </div>
            </div>
            <p className="txt mx-2 mt-1 fw-2">Sanservia Frnwood<br/>$ 250</p>
          </div>
        </div>
      </div>
      <div className="view"><p>View more...</p></div>
    </>
  );
};

export default Products;
