import React from 'react'
import image from '../../assets/destination/image-europa.webp'
const Europa = () => {
  return (
    <div className="destination-det">
      <div className="dest-img">
        <img src={image} alt="" />
      </div>
      <div className="dest-info">
        <h2>Europa</h2>
        <p>
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover's dream. With an icy surface, it's perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </p>
       <div className='linee'></div>
        <div>
          <div className="left">
            <div className="subheading2">Avg. distance</div>
            <div className="subheading1">628 mil. km</div>
          </div>
          <div className="right">
            <div className="subheading2">Est. travel time</div>
            <div className="subheading1">3 years</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Europa