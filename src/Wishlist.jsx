import {useDispatch, useSelector} from 'react-redux';
import { removePro } from './wishlistSlice';
import DeleteIcon from '@mui/icons-material/Delete';
// import './Product.css'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Footer from './Footer'
import {addProduct} from './cartSlice';
import Products from './Products';
import './Wishlist.css'
import WishEmpty from './WishEmpty';







const Wishlist=()=>{
    const products=useSelector(state=>state.wish.wish);
    const {wish} = useSelector(state=>state.wish)
    const status=useSelector(state=>state.products.status);
    const dispatch=useDispatch();
    

   


    
    return(
        <>
           
            
         <div className="container-fluid" >
            {wish.length?
         <div className="row justify-content-center align-items-center gx-1 gy-5">
         <h2 className='mx-5 py-5 text-center pro-head'>My Wishlist</h2>

          {
           
             products.map((product,i)=>{return(
              <div className="col-sm wishlist mx-3 p-3 my-3 " key={product.id} >
                
                <div className='col-sm flex justify-content-center align-items-center' >
                <div className='product-img ' >
                <div ><img src={product.image} alt={product.title} width="115" height="115  " /></div>
                </div>
                <h5 style={{letterSpacing:"-1px", fontSize:"14px"}}> {product.title.slice(0, 40)}</h5>
                        <p className='fw-bold '>${product.price}</p> 
                    
                    <div class="d-grid gap-2 d-md-flex justify-content-between    "> 
                       
                       <div><button  className=' btn1'  onClick={()=>dispatch(removePro(i))} > <DeleteIcon/>  </button></div> 
                       <div> <button  className=' btn1' onClick={()=>dispatch(addProduct (product))}> <ShoppingBagIcon/></button></div> 

                    </div>
                </div>
               
                   
            </div>

             )})
          }
         

            
        </div>
        :<WishEmpty/>}
      </div>
         
          <Footer/>
        </>
    )
}
export default Wishlist;

