import React, { useEffect } from 'react'
import { fetchCategoryWomen } from './categoriesSlice'
import { useDispatch, useSelector } from 'react-redux'
import './Product.css'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { ColorRing } from  'react-loader-spinner'

const CategoryWomen = () => {

    const categories = useSelector(state=>state.categories.categories);
    const status = useSelector(state=>state.categories.status);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCategoryWomen());
    },[]);

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
    /> </div>
    }

    if(status==="error")
    {
        return <div> Something went wrong. Please try again later.</div>
    }

    return (
        <>   
               <div className="container-fluid">
                    <div className='mx-5 my-5'>
                        <h2 className='pro-head py-3'>Namaste Autunm Collection</h2>
                        <p>Our most popular products for women. Updated frequently.</p> 
                    </div>
              
               <div className="row justify-content-center align-items-center mx-5">
                {
                 
                   categories.map(category=>{return(
                    <div className="col product " key={category.id} >
                           
                          <div className='product-img' >
                         
                                <Link to={`/SinglePro/${category.id}`}>  
                                    <div className='img-center'> <img className='img-fluid'  src={category.image} alt={category.title} width="115" height="115"/></div> 
                              </Link>
                          </div>
                              <h5 style={{letterSpacing:"-1px", fontSize:"14px"}}> {category.title.slice(0, 40)}</h5>
                              <p className='fw-bold '>${category.price}</p> 
                  </div>
      
                   )})
                }
               
      
                  
              </div>
             
            </div>
        
              <Footer/>
         </>
      
      )
}

export default CategoryWomen