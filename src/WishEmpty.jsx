import React from 'react'

import { Link } from 'react-router-dom';
const WishEmpty = () => {
  return (
    <>
     <div className='mx-5 my-5 text-center'> 
            <h2 className='pro-head py-3'>Your Wishlist is empty</h2>
            <p className='mb-5'>Add items that you like to your wishlist. Review them anytime and easily move them to the bag..</p>
            <Link to="/" className='text-decoration-none cart-btn' style={{background:""}}>Continue Shopping</Link>
     </div>
    </>
  )
}

export default WishEmpty;