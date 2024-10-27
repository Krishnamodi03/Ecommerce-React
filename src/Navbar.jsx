import React, { useContext } from 'react'
import { CartCount } from './context/CartCount'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  let { state } = useContext(CartCount);
  let { count } = state;


  return (
    <nav>
      <div><img src="./public/urban-arcade-logo.png" alt="" height='60px' width='150px' /></div>
      <div className="nav-items">
        <div className="items">Home</div>
        <div className="items">Men</div>
        <div className="items">Women</div>
        <div className="items">Contact</div>
        <div className="items">About Us</div>
        <div className="items">
          <NavLink to='/cart'>
            <button className='cartbtn'>
              <FaShoppingCart style={{ fontSize: '20px' }} />
            </button>
          </NavLink>
          <sup>
            <small>{count}</small>
          </sup>
        </div>
        <div className="items"><FaHeart style={{ fontSize: '20px' }} /> </div>
      </div>
    </nav>
  )
}

export default Navbar
