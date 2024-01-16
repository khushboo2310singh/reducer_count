import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import firebase from './Firebas'
import './Login.css'
import {activeUser} from './authSlice'
import {useNavigate, Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ColorRing } from  'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux';
import authSlice from './authSlice';

const Login  = () => {
    // const {}=useSelector(state=>state.auth);



    const[isLoading, setIsloading] = useState(false);
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    // const [islogout, setIslogout] = useState(false)
    
    const [data,setData] =useState({name:"",email:"",url:"",isLogged:false})
    const navigate =useNavigate();
    const auth = getAuth();

    const dispatch=useDispatch();
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        provider.setCustomParameters({
            'login_hint': 'username@gmail.com'
        });

       
        //user login with email and password

    const handleLogin=(e)=>{
        e.preventDefault();
        setIsloading(true);

           const auth = getAuth();

                 signInWithEmailAndPassword(auth, email, password)
                 .then((userCredential) => {
                 const user = userCredential.user;
                setIsloading(false);
                // setData(data.name);
                
                toast.success("Login successful..")
                navigate("/Cart")
                // console.log(user)
            })
            .catch((error) => {
                setIsloading(false);
                toast.error(error.message)
            });
        };

        //user login with google

            const handleLogingoogle=()=>{
            signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                const uid = user.uid;
                console.log(user.displayName);
                console.log(user.email);


            console.log(user.email);
                toast.success("Login successfully..")
                navigate("/")
                
            }).catch((error) => {

                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(error.message)

                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                
            });
        }

            
           

  
  return (
    <>
    {isLoading && 
    <div className=" d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
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
    <div className='container-fluid'>
        <div className='row justify-content-center align-items-center'>

            <div className='col-4 border pb-4 shadow-lg p-3 mb-5 bg-body rounded mt-5'  >

            <h4 className='text-center mt-3 mb-3'>Login</h4>

                
                <form onSubmit={handleLogin} className='auth-form '>
                        <div className="mb-3" >
                            <input type="email" className="auth-input" placeholder='Email Address' onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="auth-input" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                    <button type="submit" className='mb-2 auth-btn btn-dark'>Login</button>
                    <span><Link to="/Reset">Reset Password</Link></span>
                </form>
                        <p className='text-center '>OR</p>
                        <div>
                          
                           <button onClick={handleLogingoogle} className='auth-btn mb-3 '><img src="/image/google.png" alt="google" width={"25px"}/>Sign In with google</button> 
                        
                         </div>
                    <span>Don't have an account</span><span><Link to="/Register">Create an account</Link></span>
                   

           </div>
        </div>
    </div>
  
    </>
  )
}
export default Login;
