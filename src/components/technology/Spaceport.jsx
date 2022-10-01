import React from 'react'
import Img1 from "../../assets/technology/image-spaceport-portrait.jpg";
import Img2 from "../../assets/technology/image-spaceport-landscape.jpg";

const Spaceport = () => {
  return (
    <div className="tech-info">
      <div className="tech-dett">
        <h6>The terminology...</h6>
        <h3>Spaceport</h3>
        <p>
          A spaceport or cosmodrome is a site for launching (or receiving)
          spacecraft, by analogy to the seaport for ships or airport for
          aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
          situated to take advantage of the Earth's rotation for launch.
        </p>
      </div>
      <div className="img">
        <img src={Img1} alt="/" className="img1" />
        <img src={Img2} alt="/" className="img2" />
      </div>
    </div>
  )
}

export default Spaceport;