import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useParams } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Cart.css';
import {addtoPro} from './wishlistSlice';
import {addProduct} from './cartSlice';
import StarIcon from '@mui/icons-material/Star';
import { ToastContainer, toast } from 'react-toastify';




const SinglePro = () => {


  const { id } = useParams();
  const products = useSelector((state) => state.products.products); // Access products from the Redux store state
  const status = useSelector((state) => state.products.status); // Access status from the Redux store state
  const dispatch = useDispatch(); // Get the dispatch function
  const product=products[id-1];
  console.log("here is",products);
  return(
    <> 
    <div className="container">
        <div className="row  my-5 mx-2 py-5 px-5 ">
          <div className="col-sm-6 py-5 flex justify-content-center align-items-center" >
            <div className='product-img'>
                <img className='img-fluid'  src={product.image} alt={product.title} width="155" height="155"/>
            </div>
          </div>
          <div className="col-sm-6 py-5">
            <div>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <span className=' border fw-bold '> Rating {product.rating && product.rating.rate}<span style={{color:"#1ca671"}}><StarIcon/></span></span>
             
                    <div>
                         <input type="button" value={"Add to bag"}  className='cart-btn my-4 px-5 py-2 ' onClick={()=>dispatch(addProduct(product))}/>
                        
                         <button className='btn1' onClick={()=> dispatch(addtoPro(product))}> <FavoriteIcon/></button>
                    </div>
                   
                    
            </div>

          </div>
          
        </div>
    </div>
  
    
    </>
  )
};
export default SinglePro;