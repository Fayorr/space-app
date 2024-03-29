import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Navbar'
import '../../styles/Destination.css'



const Destination = () => {
  return (
    <div className='des-container'>
         <Navbar />
        <div className="navigation ">
          <h5>
            <span>01</span> Pick your destination
          </h5>
      </div>
      <div className="planets">
        <ol>
          <li>
            <NavLink to="/destination/moon">Moon</NavLink>
          </li>
          <li>
            <NavLink to="/destination/mars">Mars</NavLink>
          </li>
          <li>
            <NavLink to="/destination/europa">Europa</NavLink>
          </li>
          <li>
            <NavLink to="/destination/titan">Titan</NavLink>
          </li>
        </ol>
        <span className='line'></span>
      </div>
        <Outlet />
    </div>
  )
}

export default Destination;