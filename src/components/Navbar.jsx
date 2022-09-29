import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import '../styles/Navbar.css'
import  hamburger  from "../assets/shared/icon-hamburger.svg";
import  close  from "../assets/shared/icon-close.svg";

const Navbar = () => {
 
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

  return (
    <nav className="nav">
    <div>
        <img src={logo} alt="" className="logo" />
        <span className="nav-line"></span>
      <ul className={toggle ? 'nav-menu active' : 'nav-menu'}>

        <li className="nav-item">
          <NavLink to="/">
              <span className="number">00</span> <span>Home</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/destination">
              <span className="number">01</span> Destination
          </NavLink>  
        </li>

        <li className="nav-item">
          <NavLink to="/crew">
              <span className="number">02</span> Crew
           </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/technology">
              <span className="number">03</span> Technology
          </NavLink>
        </li>
      </ul>
    
    </div>
    <div className="menu-icon" onClick={handleClick}>
          <img src={ toggle ? close : hamburger } alt="" className='bars' />
    </div>
</nav>
    
  )
}

export default Navbar;