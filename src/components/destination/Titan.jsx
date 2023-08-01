import React from 'react'
import image from '../../assets/destination/image-titan.webp'
const Titan = () => {
  return (
   <div className="destination-det">
      <div className="dest-img">
        <img src={image} alt="" />
      </div>
      <div className="dest-info">
        <h2>Titan</h2>
        <p>
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </p>
        <div className='linee'></div>
        <div>
          <div className="left">
            <div className="subheading2">Avg. distance</div>
            <div className="subheading1">1.6 bil. km</div>
          </div>
          <div className="right">
            <div className="subheading2">Est. travel time</div>
            <div className="subheading1">7 years</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Titan