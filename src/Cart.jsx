import { useDispatch, useSelector } from "react-redux";
import { removeProduct , getCartTotal ,increaseProductQuantity ,decreaseProductQuantity} from './cartSlice';
import { useEffect} from "react";
import Footer from './Footer'
import DeleteIcon from '@mui/icons-material/Delete';
import * as React from 'react';
import "./Cart.css"
import Subtotal from "./Subtotal";
import CartEmpty from "./CartEmpty";






const Cart=()=>{
    const products = useSelector(state=>state.cart.cart);
    const {cart}=useSelector(state=>state.cart);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCartTotal());
    },[cart]);

    return(
       
       <>
          
            
<div className="container-fluid " >
         
         {cart.length?
            <div className="row mx-5 py-5">
            <h2 className='cart-heading'>Shopping Cart</h2>
            <div className="col-sm-8">
                
                    {
                       products.map((product,i)=>{return(
                            <div className=" row cart align-items-center" key={product.id}>
                                
                                <div className='col-sm-6 p-4 cart-img' >
                                    <img className="img-fluid" src={product.image} alt={product.title} width="250" height="250" />
                                </div>
                                 <div className="col-sm-6 p-4 cart-pro-detail">
                                    <p style={{overflow:"hidden" , height:"20px"}}> {product.title}</p>
                                    <p >Quantity {product.quantity}</p>
                                    <p className=''>Price : ${product.price}</p>

                                    <div className=''>
                                        <span className="border">  <button className=" btn1 mx-2" onClick={()=>dispatch(decreaseProductQuantity(product.id))}>-</button><input type="number" size="2"  min={"1"} value={product.quantity} placeholder="Quantity"/><button  size="small" className="btn1 mx-2" onClick={()=>dispatch(increaseProductQuantity(product.id))}>+</button></span>
                                        <span className="px-4"><button className="btn1" onClick={()=>dispatch(removeProduct(i))} > <DeleteIcon/>  </button></span>
                                    </div>
                                 </div>
                             
                       
                            </div>
                        )})
                   
                    }
                

                 </div>
                <div className="col-sm-4">
            <Subtotal/>
            </div>
            </div>
           :<CartEmpty/>}        
       </div>
        <Footer/>
       </>
    )
}
export default Cart;
            
       
        
       
       
       
       
