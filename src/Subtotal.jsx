import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import './Subtotal.css';
import { useEffect } from 'react';
import isLoggedIn from './authSlice'
// import userID from "./authSlice"
import {useNavigate} from "react-router-dom";
import Address from './Address';


const Subtotal = () => {
  const navigate= useNavigate();
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
  // const userID =useSelector((state)=>state.auth.userID)
const {totalQuantity, totalPrice}=useSelector(state=>state.cart);
const[shipping, setshipping] = useState("");

useEffect(() => {
if (totalPrice <= 150) {
  setshipping(30);
} else if (totalPrice <= 250) {
  setshipping(25);
} else if (totalPrice > 350) {
  setshipping(20);
}
}, [totalPrice]);

  return (<>
    
             {/* <div className=" subtotal  ">
                 <div className='my-4 order '><h4>Order Details</h4></div>
                    <div className='my-1'>Total Quantity: <span className='px-5 mx-3'>{totalQuantity}</span></div>
                    <div className='my-1'> Subtotal:<span className='px-5 mx-5'> ${totalPrice}</span></div> 
                     
                       <div className='text-center' >
                       <button className=' cart-btn my-4 px-5 py-1' >Proceed to Buy</button>
                       </div>
                    
                    
             </div> */}
            <div className='subtotal'>
              <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Order Detail</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Total Quantity</th>
                      <td></td>
                      <td></td>
                      <td>{totalQuantity}</td>
                    </tr>
                    <tr>
                      <th scope="row">Total Price</th>
                      <td></td>
                      <td></td>
                      <td className='text-right'>{totalPrice}</td>
                    </tr>
                    <tr>
                      <th scope="row">Shipping Charge</th>
                      <td></td>
                      <td></td>
                      <td className='text-right'>{shipping}</td>
                    </tr>
                    <tr>
                      <th scope="row">Subtotal</th>
                      <td></td>
                      <td></td>
                      <td>{totalPrice+ shipping}</td>
                    </tr>
                   
                  </tbody>
          </table>
                   <div className="d-grid gap-2">
                    {(isLoggedIn)?
                    <><Link to="/Address">
                    <button type="button" className="cart-btn " data-bs-toggle="modal" data-bs-target="#exampleModal">Proceed to buy</button>
                    </Link>
                    </>
                    :
                   <Link to="/Login">
                    <button type="button" className="cart-btn btn " data-bs-toggle="modal" data-bs-target="#exampleModal">Proceed to buy</button>

                    </Link>
}
                  </div> 

            </div>
            
            </>     
  )
}
export default Subtotal