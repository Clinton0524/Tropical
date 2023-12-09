import React from 'react'
import Img from '../Images/AGLAONEMA PINK 1.png'
import Img1 from '../Images/Top view gardening tools and plants.png'
import Img2 from '../Images/Rectangle 22.png'
import Img3 from '../Images/Rectangle 21.png'
import './Services.css'
const Services = () => {
  return (
    <div className='mt-5 mb-5'>
      <h5 className='mt-5 mb-5'>Our Services</h5>
     
      <div className="container ">
        <div className="row">
        
          <div className="col-lg-3 col-sm-12">
            <div className="card-container">
              <div className="image-container">
                <img className="img-0" src={Img} alt="contain"></img>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-12">
            <div className="card-container">
              <div className="image-container">
                <img className="img-0" src={Img1} alt="contain"></img>
              </div>
            </div>
          </div>
        

        <div className="col-lg-3 col-sm-12">
          <div className="card-container">
            <div className="image-container">
              <img className="img-0" src={Img2} alt="contain"></img>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12">
          <div className="card-container">
            <div className="image-container">
              <img className="img-0" src={Img3} alt="contain"></img>
            </div>
          </div>
        </div>
      </div>
      </div></div>
  )
}

export default Services