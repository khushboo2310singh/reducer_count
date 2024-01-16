import {useDispatch, useSelector} from 'react-redux';
import { useEffect,useState } from 'react';
import { fetchProducts } from './productSlice';
import './Product.css'
import { Link } from 'react-router-dom';
import { ColorRing } from  'react-loader-spinner'

const Products=()=>{
    //console.log("From Products");
    const products=useSelector(state=>state.products.products);
    const status=useSelector(state=>state.products.status);
    // const[page, setPage]=useState(1)
    const dispatch=useDispatch();
    useEffect(()=>{
        //console.log("I am here");
        dispatch(fetchProducts());
    },[]);
    //console.log(products);
    

    if(status==="wait")
    {
        return <div className=" d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
        <ColorRing
      visible={true}
      height="80"
      width="80"
      
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    /> </div>;
    }

    if(status==="error")
    {
        return <div>Something went wrong. Please try again later</div>;
    }
// const selectpage=(selectedPage)=>{
//   if(
//     selectedPage>=1 &&
//     selectedPage<=products.length/10 &&
//     selectedPage !== page
//   )
//   setPage(selectedPage);
// }

    //console.log("before return in products  : ",products);
    return(
        <>
           
            
         <div className="container-fluid">
          
        
         <div className="row justify-content-center align-items-center mx-5">
          {
           
            //  products.slice(0,page*10).map(product=>{return(
             products.map(product=>{return(
              <div className="col product " key={product.id} >
                     
                    <div className='product-img' >
                        <Link to={`/SinglePro/${product.id}`}>  
                            <div className='img-center'> <img className='img-fluid'  src={product.image} alt={product.title} width="115" height="115"/></div> 
                        </Link>
                    </div>
                        <h5 style={{letterSpacing:"-1px", fontSize:"14px"}}> {product.title.slice(0, 40)}</h5>
                        <p className='fw-bold '>${product.price}</p> 
             </div>

             )})
            
         }
          {/* {products.length > 0 &&(<div className='pagination'>
             <span onClick={()=>{selectpage(page-1)}}>◀</span>
             {[...Array(products.length/10)].map((_, i)=>{
              return <span className={page===i+1 ?"pagination__selected":""} onClick={()=>{selectpage(i+1)}} key={i}>{i+1}</span>;
             })}
             <span onClick={()=>{selectpage(page+1)}}>▶</span>
             </div>
             )} */}
             
            
        </div>
       
      </div>
  
        </>
    )
}
export default Products;