import React from 'react'
import image from "../Images/Picture frame leaning against a white wall.png";
import "./login.css";
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';

const Signup = () => {
  return (
    <div>
        <Navbar />
      <div>
      <div className="imagebanner">
      <img src={image} alt="hello"></img>

      </div>
      <div classNameName="container-3">
        <div className="contents">
          <h3 className="headdings mb-4">Create Account </h3>

          <form>
            <div className="row">
              <div className="col-4">
              <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control email mx-5 "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Name "
                  />
                  <small
                    id="emailHelp"
                    className="form-text text-muted"
                  ></small>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control email mx-5 "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Phone Number"
                  />
                  <small
                    id="emailHelp"
                    className="form-text text-muted"
                  ></small>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control password mx-5 mt-3"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success mt-4"
                  style={{
                    width: "50%",
                    borderRadius: "18px",
                    marginRight: "135px",
                  }}
                >
                  Log in
                </button>
                <p className="create mt-2">Already Have An account 
                  <Link className='decor' to ="/login"> Login</Link></p>
              </div>
              
            </div>
          </form>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Signup