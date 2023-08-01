import React from 'react'
import Navbar from './Navbar'
// import '../styles/Crew.css'

import CrewSlider from "./CrewSlider";

const Crew = () => {
  return (
    <div className='crew'>
         <Navbar />
      <div className="navigation navi">
        <h5>
          <span>02</span> Meet your crew
        </h5>
      </div>
      <CrewSlider />

    </div>
  )
}

export default Crew;