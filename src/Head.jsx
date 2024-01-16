import * as React from 'react';
import './Head.css';
import {useDispatch, useSelector} from 'react-redux';
import { getAuth,onAuthStateChanged,signOut  } from "firebase/auth";

import {Link, NavLink, useNavigate} from 'react-router-dom'
import { totalQuantity } from './cartSlice';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState ,useEffect} from 'react';
import {activeUser, remove_activeUser, selectIsLoggedIn} from './authSlice'
import{ ShowOnLogout} from './hide_auth_menu';
import ShowOnLogin from './hide_auth_menu' 
import IsLoggedIn from './authSlice'

   const Head=()=>{
    // const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)

    const [data, setData] =useState();
    const navigate =useNavigate();
    const [islogout, setIslogout] = useState(false)
    const[displayName,setdisplayName]=useState("")
    const auth = getAuth();
    
    const {totalQuantity}=useSelector(state=>state.cart);

    const Quantity=useSelector(state=>state.cart.totalQuantity);
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)

    // const {totalQuantity, totalPrice}=useSelector(state=>state.cart);

    const cart = useSelector(state=>state.cart.cart)

    console.log("total is",totalQuantity);
    // const activeLink = ({isActive})=>{
    //   isActive ?`${className="active"}`:"";
    // }
    const dispatch=useDispatch()
    const handleSearch=(e)=>{
            setData(e.target.value);
            console.log(e.target.value);

      if(e.target.value==="men's clothing")
                navigate("/CategoryMen")
      if(e.target.value==="women's clothing")
                navigate("/CategoryWomen")
      if(e.target.value==="jewelery")
                navigate("/CategoryJewel")
      if(e.target.value==="electronics")
                navigate("/CategoryElectro")
      setData("");
    }

     //monitor currently sign in user

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            const uid = user.uid;
            // console.log(user);
            // console.log(user.displayName);
            if(user.displayName==null)
              {
                const uname = user.email.substring(0, user.email.indexOf("@"));
                // console.log(uname);
                setdisplayName(uname);
              }

            else
              {
                setdisplayName(user.displayName);
              }
            

              dispatch(activeUser(
                        {
                          email:user.email,
                          userName:user.displayName? user.displayName:displayName,
                          userID:user.uid
                        }
                  ));
          } 
          else 
              {
              setdisplayName("");
                dispatch(remove_activeUser());
              }
        });
  },[dispatch,displayName])

  //logout

  const handleLogout=()=>{
    const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        toast.success("Logout successfully")
          // setData({name:"",email:"",url:"",isLogged:false});
        navigate("/");

    })
    .catch((error) => {
        toast.error(error.message);
    });
}



   

  return (

    <>
    <nav className="navbar navbar-expand-lg navbar-dark header">
    <div className="container-fluid ">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <Link to="/" className="navbar-brand head_title"><LocalMallIcon/>Shopper's Corner</Link>
         <div className="collapse navbar-collapse active" id="navbarTogglerDemo03">

           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
            <li className="nav-item">
              <NavLink to ="/" className="nav-link">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to ="/CategoryMen" className="nav-link">Men</NavLink>
            </li>

            <li className="nav-item activeLink">
              <NavLink to="/CategoryWomen" className="nav-link"  >Women</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/CategoryJewel" className="nav-link" >Jewellery</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/CategoryElectro" className="nav-link ">Electronics</NavLink>
            </li>
          
        </ul>
       
            
              <input props={{ 'aria-label': 'search' }} placeholder="Search…" onClick={handleSearch}list="browsers" name="browser" id="browser" className='header__input' size="30"/> <span className={isLoggedIn?'srh_login':"srh_logout"} >
              <SearchIcon/> </span>
              <datalist id="browsers">
                    <option value="men's clothing"/>
                    <option value="women's clothing"/>
                    <option value="jewelery"/>
                    <option value="electronics"/>
                   
                  </datalist>
                  <div>
                  <ShowOnLogin>
                  <Link to="/Login" style={{ color:"white"}} className='mx-2 menu_link'>
                     
                    <IconButton   
                          size="large"
                          color="inherit" >
                          <AccountCircle />
                    </IconButton>
                    Hi,{displayName}
                    </Link>
                
                
                 <Link to="#" style={{ color:"white"}} className='mx-2 menu_link'>My Order</Link>
                 <Link to="/" style={{ color:"white"}} className='mx-2 menu_link' onClick={handleLogout}>Logout</Link>

                 </ShowOnLogin>
                <ShowOnLogout>
                      <Link to="/Login" style={{ color:"white"}} className='mx-2 menu_link'>Login</Link>
                      </ShowOnLogout>
          
            <NavLink to="/Wishlist"  style={{ color:"white"}}>
             <IconButton
                size="large"
                color="inherit"> 
                <FavoriteIcon/>
            </IconButton>
            </NavLink> 

            <Link to="/cart"  style={{ color:"white"}}>
             <IconButton
                size="large"
                color="inherit"> 
                <Badge badgeContent={Quantity} color="error">
                  <ShoppingCartIcon/>
               </Badge>
            </IconButton>
            </Link> 
        </div>
      </div>
    </div>
  </nav>
    
    
    </>
  )
    
};
export default Head;
