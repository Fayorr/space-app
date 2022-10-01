import React from 'react'
import '../../styles/Vehicle.css'
import Img from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import Img2 from "../../assets/technology/image-launch-vehicle-landscape.jpg";

const Vehicle = () => {
  return (
       <div className="tech-info">
      <div className="tech-det">
        <h6>The terminology...</h6>
        <h3>Launch vehicle</h3>
        <p>
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used
          to carry a payload from Earth's surface to space, usually to Earth
          orbit or beyond. Our WEB-X carrier rocket is the most powerful in
          operation. Standing 150 metres tall, it's quite an awe-inspiring sight
          on the launch pad!
        </p>
      </div>
      <div className="img">
        <img src={Img} alt="/" className="img1" />
        <img src={Img2} alt="/" className="img2" />
      </div>
    </div>
  )
}

export default Vehicle