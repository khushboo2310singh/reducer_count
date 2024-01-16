import React from 'react'
import { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from 'react-toastify';
import { ColorRing } from  'react-loader-spinner'

const Reset = () => {
    const auth = getAuth();

    const[email, setEmail] = useState("");      
    const[isloading, setIsloading] = useState(false);

    const handleReset=(e)=>{
        e.preventDefault();
        setIsloading(true);
        sendPasswordResetEmail(auth, email)
        .then(() => {
            setIsloading(false)
            toast.success("Check your email for reset link");

        })
    .catch((error) => {
        setIsloading(false)
        const errorMessage = error.message;
        toast.error(error.message);
        // ..
  });

    }
  return (
    <>
    {isloading &&<ColorRing
  visible={true}
  height="80"
  width="80"
  
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/> }

    <div className='container-fluid'>
        <div className='row justify-content-center align-items-center'>
            <h4 className='text-center mt-5 mb-3'>Reset Password</h4>

            <div className='col-4 border pb-4 shadow-lg p-3 mb-5 bg-body rounded'  >
                
                <form onSubmit={handleReset} className='auth-form '>
                        <div className="mb-3" >
                            <input type="email" className="auth-input" placeholder='Email Address'   onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        {/* <div className="mb-3">
                            <input type="password" className="auth-input" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                        </div> */}
                    <button type="submit" className='mb-2 auth-btn btn-dark'>Reset Password</button>
                    {/* <span><Link to="/Reset">Reset Password</Link></span> */}
                </form>
                        {/* <p className='text-center '>OR</p>
                        <div>
                          
                           <button onClick={handleLogingoogle} className='auth-btn mb-3 '><img src="/image/google.png" alt="google" width={"25px"}/>Sign In with google</button> 
                        
                         </div>
                    <span>Don't have an account</span><span><Link to="/Register">Create an account</Link></span>
                    */}

           </div>
        </div>
    </div>
  
    </>
  )
}

export default Reset