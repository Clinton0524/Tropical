import React from "react";
import Img from "../Images/AGLAONEMA PINK 1.png";
import Img9 from "../Images/Sansevieria Fernwood Mikado 1.png";
import Img8 from "../Images/ZZ plants 1.png";
import "./SubCategories.css";

const SubCategories = () => {
  return (
    <div>
      <h5 className="col-2 mx-3 mt-5 mb-5 fw-5">Sub Categories</h5>
      <div className="images">
        <div className="card-container-2 d-flex">
          <div className="image-container-2">
            <img className="img-0" src={Img} alt="contain"></img>
          </div>
          <div>
            <p className="pots">Flowering Plants</p>
          </div>
        </div>
        <div className="card-container-2 d-flex">
          <div className="image-container-2">
            <img className="img-0" src={Img8} alt="contain"></img>
          </div>
          <div>
            <p className="pots">Low-Light Plants</p>
          </div>
        </div>
        <div className="card-container-2 d-flex">
          <div className="image-container-2">
            <img className="img-0" src={Img9} alt="contain"></img>
          </div>
          
            <p className="pots">Flowering Plants</p>
          
        </div>
      </div>
    </div>
  );
};

export default SubCategories;
