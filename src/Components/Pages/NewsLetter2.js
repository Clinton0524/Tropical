import React from "react";
import img from "../Images/Portrait of blonde woman holding a plant.png";
import imgs from "../Images/b49b7ccf-a4e6-4bdc-999e-63b093a3ffa5 1.png";
import immg from "../Images/5-star-reviews-png-review-clipart-1b329e0d4e3a8d21-1024x249.png";
import harveyStay from "../Images/167 1.png";
import circle from "../Images/Ellipse 3.svg";
import profile from "../Images/goodgirl.png";
import "./NewsLetter2.css";
const NewsLetter2 = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-3 mx-5">
           <h5 style={{fontWeight:'50px',color:'green'}}>400+</h5> PRODUCTS
            <br />
            <br />
            <h5 style={{fontWeight:'50px',color:'green'}}>1100+</h5>
           
           ORDERS
            <br />
            <br />
            <h5 style={{fontWeight:'50px',color:'green'}}> 1250+ </h5>
            PLANT TYPES
          </div>

          <div className="col-lg-4">
            <img className="image-2" src={img}></img>
          </div>
          <div className="col-3">
          <h5 style={{fontWeight:'50px',color:'green'}}>350+</h5> PROJECTS DONE
          <br/>
          <br/>
          <h5 style={{fontWeight:'50px',color:'green'}}>400+</h5>
          HAPPY CLIENTS
          <br/>
          <br/>
          <h5 style={{fontWeight:'50px',color:'green'}}>1250+</h5>
          PLANT TYPES
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="">
        <div className="row">
          <div className="col-lg-3">
            <img className="leaf" src={imgs}></img>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-4">
            <h4> Testemonials</h4>
            <p className="paragraph">
              A testominal is an honest endorsement of your product or service
              that usually comes from a customer,a collegue or a peer who has
              benefited from or experienced success as a result of the work you
              did for them.
            </p>
            <div>
              <img className="ratings" src={immg}></img>
            </div>

            <img className="profile" src={profile}></img>
            <p className="Louis">Luis Lara</p>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
      <div className="container-1">
        <div className="row">
          <div className="col-lg-1 col-md-4 col-sm-2"></div>
          <div className="col-lg-6 col-md-6 col-sm-2">
            <p className="text">
              Discover the convinence of online shopping &the oppurtunity of
              Franchise Ownership
            </p>
            <div className="enquiry">
              <button
                className="btn btn-light"
                style={{
                  borderRadius: "25px",
                  color: "#155E1E",
                  display: "flex",
                }}
              >
                Enquire Now
              </button>
            </div>
          </div>

          <div className="col-lg-5 col-md-6 col-sm-2 ">
            <img
              style={{ border: "3px solid grey" }}
              className="harvey"
              src={harveyStay}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter2;
