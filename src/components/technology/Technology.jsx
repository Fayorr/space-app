import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Navbar'
import '../../styles/Technology.css'



const Technology = () => {
  return (
    <div className="technology">
         <Navbar />
      <div className="navigation">
        <h5>
          <span>03</span> Space launch 101
        </h5>
      </div>
      <div className="content">
        <div className="btnn">
          <NavLink to="/technology/vehicle">
            <button>1</button>
          </NavLink>

          <NavLink to="/technology/spaceport">
            <button>2</button>
          </NavLink>
          <NavLink to="/technology/capsule">
            <button>3</button>
          </NavLink>
        </div>
      </div>
        <Outlet />
    </div>
  )
}

export default Technology;