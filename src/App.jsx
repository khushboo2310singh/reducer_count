
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Products from './Products';
import Home from './Home';
import Cart from './Cart';
import Wishlist from './Wishlist';
import Head from './Head';
import {useSelector} from 'react-redux';
import Login from './Login'
import Footer from './Footer'
import Subtotal from './Subtotal';
import SinglePro from './SinglePro';
import CategoryJewel from './CategoryJewel';
import CategoryMen from './CategoryMen';
import CategoryWomen from './CategoryWomen';
import CategoryElectro from './CategoryElectro';
import Register from './Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reset from './Reset';
import Address from './Address'


const App=()=>{
    const count=useSelector(state=>state.cart.count);
    const categories=useSelector(state=>state.categories.categories);
    
    return(
      <>
    
       
        <BrowserRouter>
        <ToastContainer/>
        <Head/>
        
      
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Products" element={<Products />} />
                 <Route path="/Cart" element={<Cart />} /> 
                <Route path="/Wishlist" element={<Wishlist />} />
                <Route path="/Footer" element={<Footer />} />
                <Route path="/Subtotal" element={<Subtotal />} />
                 <Route path="/SinglePro/:id" element={<SinglePro />} />
                <Route path="/CategoryJewel" element={<CategoryJewel />} />  
                <Route path="/CategoryElectro" element={<CategoryElectro />} />  
                <Route path="/CategoryMen" element={<CategoryMen />} />  
                <Route path="/CategoryWomen" element={<CategoryWomen />} />  

                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register/>} />
                <Route path="/Reset" element={<Reset/>} />
                <Route path="/Address" element={<Address/>} />
                
            </Routes>
           
         </BrowserRouter> 
        
        
        </>
    );
}
export default App;


