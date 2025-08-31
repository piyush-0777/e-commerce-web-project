import React from 'react';
import './nav.css';
import { FaR, FaRegHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Nav = ( { hendalchang ,search}) => {
  return (
   <nav className='nav-container'>
    <div className='search-container'>
        <input onChange={hendalchang} value = {search} className='search-box' type="text" placeholder='enter hear text'  />
    </div>
    <div className='profile-container'>
        <a href="#">
        <FaRegHeart/>
        </a>
        <a href="#">
            <FaCartShopping/>
            </a>
            <a href="#">
            <FaGithub/>
        </a>
    </div>
   </nav>
  )
}

export default Nav
