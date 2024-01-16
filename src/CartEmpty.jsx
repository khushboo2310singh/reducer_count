import React from 'react'
import "./Cart.css"
import Cart from './Cart'
import { Link } from 'react-router-dom'
const CartEmpty = () => {
 

  return (
  <div className="container-fluid">
    <div className="row mt-3">
        <div className="col text-center mb-5">
            <h2 className='cart-heading text-center mt-3 mb-5 mt-5'>Your Shopping Bag is Empty !!</h2>
            <p className='mt-3 mb-3'> <Link to="/Login" className='text-decoration-none text-info '>Sign in</Link>  to link items to your account, or view items already in your account</p>
            <Link to="/" className='text-decoration-none cart-btn'>Continue Shopping</Link>
        </div>
    </div>
  </div>
  )
}

export default CartEmpty