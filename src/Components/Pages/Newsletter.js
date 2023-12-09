import React from "react";
import img from '../Images/IMG_2961-04022021 1.png'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <>
      <div className="container-2 mt-4 mb-4">
        <div className="row">
        <div className="col-lg-1 col-md-4 col-sm-2"></div>
          <div className="col-lg-4 col-md-4 col-sm-2 ">
            <h3 className="mt-2">The world's <br/> 1st subscription based Indoor Plant Company</h3>
           
            <p>
            The world’s first subscription based Indoor Plant Company – Harvestay is revolutionising the way people buy and care for their plants. With this innovative model, customers can subscribe to a monthly delivery of a curated selection of healthy and vibrant plants that
            </p>
          </div>
          <div className="col-lg-1 col-md-4 col-sm-2"></div>
          <div className="col-lg-6 col-md-4 col-sm-2">
            <img style={{border:'6px solid white',width:'100%'}} src={img}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
