import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'
import {ShoppingCart} from './';
import { useStateContext } from '@/context/StateContext';

const NavBar = () => {
  const {showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Matt's Techstore </Link>
      </p>
      <button type="button" className="cart-icon" onClick={()=>setShowCart(true)}>
        <AiOutlineShopping />
        <span className = "cart-item-qty"> {totalQuantities} </span>
      </button>

      {showCart && <ShoppingCart />}

    </div>
  )
}

export default NavBar