import React from 'react'
import './Footer.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import Person2Icon from '@mui/icons-material/Person2';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    
        <div className="container-fluid ">
              <div className="row footer-header mx-5"  >
             
                    <div>
                          <h2 className='header-name m-5'>Shopper's Corner Cares</h2>
                          <p className='m-4' style={{color:"grey"}}>WE DO NOT ASK FOR YOUR BANK ACCOUNT OR CARD DETAILS VERBALLY OR TELEPHONICALLY </p>
                    </div>
              </div> 
             
             
            <div className="row row-cols-4 py-5 px-5 footer footer-c">
            
                  <div className="col">
                        <p className='p-header'>Shopper's Corner</p>
                        <p>Who are we</p>
                        <p>Join our Team</p>
                        <p>Terms and Condition</p>
                        <p>We respect your privacy</p>
                        <p>Return and Refund Policy</p>

                  </div>

                  <div className="col">
                        <p className='p-header'>Help</p>
                        <p>Track Your Order</p>
                        <p>Frequently Asked Question</p>
                        <p>Returns</p>
                        <p>Cancellations</p>
                        <p>Payments</p>
                  </div>

                  <div className="col">
                        <p className='p-header'>Shop By</p>
                        <p>Men</p>
                        <p>Women</p>
                        <p>Kids</p>
                        <p>Stores</p>
                        <p>New Arrival</p>
                  </div>

                  <div className="col">
                        <p className='p-header'>Follow us</p>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>Printrest</p>    
                  </div>
              
            </div>

 
            <div className="row footer footer-c "  >
            
                        <div className='px-5 '>
                              <div className=' py-5 border-pay'>
                                    <h6>Payment methods</h6>
                                    <div >
                                    <span className='my-2 mx-2'> <AccountBalanceIcon/>Net <span style={{background:"black",color:"white"}}>BANKING</span> </span>
                                    <span  className='my-2 mx-2'>Visa</span>
                                    <span  className='my-2 mx-2'><CurrencyRupeeIcon/>CASH on Delivery</span>
                                    <span  className='my-2 mx-2'><CreditCardIcon/>Creditcard</span>
                              </div>
                        </div>     
                  </div>
            </div> 
            <div className='row  footer-m footer '>
                 
                        <div className='col-3 d-block'>
                              <Link to="/" className='text-m'> <div><HomeIcon/></div>Home</Link>
                        </div>
                        <div className='col-3'>
                              <Link to="/Cart" className='text-m'><div><ShoppingBagIcon/></div>Bag</Link>
                        </div>
                        <div className='col-3'>
                              <Link to="/Wishlist" className='text-m'><div><FavoriteIcon/></div>Wishlist</Link>
                        </div>
                        <div className='col-3'>
                              <Link to="/Login" className='text-m'><div><Person2Icon/></div>Profile</Link>
                        </div>
                 
                  
            </div>

 
</div>
    
  )
}
export default Footer;

