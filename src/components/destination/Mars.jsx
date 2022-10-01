import React from 'react'
import image from '../../assets/destination/image-mars.webp'


const Mars = () => {
  return (
    <div className="destination-det">
      <div className="dest-img">
        <img src={image} alt="/" />
      </div>
      <div className="dest-info">
        <h2>Mars</h2>
        <p>
          Don't forget to pack your hiking boots. You'll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It's
          two and a half times the size of Everest!
        </p>
        <div className='linee'></div>
        <div>
          <div className="left">
            <div className="subheading2">Avg. distance</div>
            <div className="subheading1">225 mil. km</div>
          </div>
          <div className="right">
            <div className="subheading2">Est. travel time</div>
            <div className="subheading1">9 months</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mars