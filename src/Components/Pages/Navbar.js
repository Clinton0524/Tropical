import React from "react";
import { MenuItems } from "./MenuItems";
import Search from '../Images/Extra Icons.svg'
import Cart from '../Images/Component 2.svg'
import Group from '../Images/Group.svg'
import Img from '../Images/green-logos-famous-brands-1 1.png'
import {Link} from 'react-router-dom'

import './Navbar.css'
const Navbar = () => {
  return (
    
    <nav className="NavbarItems">
     <img className="logo"  src={Img} alt="hello"></img>
      <ul className="nav-menu">
        {MenuItems.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
      <div className="icon-1">
      <img  className='search mx-3'src={Search}></img>
      <Link to ='/login'>
      <img  className='search mx-3'src={Group}></img></Link>
      <img  className='search mx-3'src={Cart}></img>
      </div>
    </nav>
  
  );
};

export default Navbar;
