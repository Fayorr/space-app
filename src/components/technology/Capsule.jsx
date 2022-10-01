import React from 'react'
import Img1 from "../../assets/technology/image-space-capsule-portrait.jpg";
import Img2 from "../../assets/technology/image-space-capsule-landscape.jpg";

const Capsule = () => {
  return (
    <div className="tech-info">
      <div className="tech-det">
        <h6>The terminology...</h6>
        <h3>Space capsule</h3>
        <p>
          A space capsule is an often-crewed spacecraft that uses a blunt-body
          reentry capsule to reenter the Earth's atmosphere without wings. Our
          capsule is where you'll spend your time during the flight. It includes
          a space gym, cinema, and plenty of other activities to keep you
          entertained.
        </p>
      </div>
      <div className="img">
        <img src={Img1} alt="/" className="img1" />
        <img src={Img2} alt="/" className="img2" />
      </div>
    </div>
  )
}

export default Capsule