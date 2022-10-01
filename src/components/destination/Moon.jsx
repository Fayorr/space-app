import React from 'react'
import image from '../../assets/destination/image-moon.webp'
import '../../styles/Moon.css'
const Moon = () => {
  return (
      <div className="destination-det">
        <div className="dest-img">
          <img src={image} alt="/" />
        </div>
        <div className="dest-info">
          <h2>Moon</h2>
          <p>
            See our planet as you've never seen it before. A perfect relaxing trip
            away to help regain perspective and come back refreshed. While you're
            there, take in some history by visiting the Luna 2 and Apollo 11
            landing sites.
          </p>
          <div className='linee'></div>
          <div>
            <div className="left">
              <div className="subheading2">Avg. distance</div>
              <div className="subheading1">384,400 km</div>
            </div>
            <div className="right">
              <div className="subheading2">Est. travel time</div>
              <div className="subheading1">3 days</div>
            </div>
          </div>
        </div>
      </div>
      

  )
}

export default Moon