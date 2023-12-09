import React from "react";
import Img from "../Images/AGLAONEMA PINK 1.png";
import category from "../Images/Monstera deliciosa plant in a pot (1).png";
import category1 from "../Images/Empty terracotta clay plant pot.png";
import category2 from "../Images/Potted house plant isolated in white background.png";
import './Categories.css'
const Categories = () => {
  return (
    <div>
      <h5 className="col-2 mt-5 mb-5 fw-5">Categories</h5>
      <div className="images">
        <div className="card-container-1">
          <div className="image-container-1">
            <img className="img-0" src={category} alt="contain"></img>
          </div>
          <div>
            <p className="pots">Plants</p>
          </div>
        </div>

        <div className="card-container-1">
          <div className="image-container-1">
            <img className="img-5" src={category1} alt="contain"></img>
          </div>
          <div>
            <p className="pots">Pots</p>
          </div>
        </div>
        <div className="card-container-1">
          <div className="image-container-1">
            <img className="img-9" src={category2} alt="contain"></img>
          </div>
          <div>
            <p className="pots">Combos</p>
          </div>
        </div>
        <div>
        <button className="btn btn-dark" style={{borderRadius:"15px",marginTop:'82px',width:'110%'}}>See all</button>
        </div>
      
      </div>
    </div>
  );
};

export default Categories;
