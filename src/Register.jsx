import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from './Firebas'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const auth = getAuth();
    const[email, setEmail]=useState("");
    const[name, setName]=useState("");
    const[password, setPassword]=useState("");
    const[cpassword, setCpassword]=useState("");
    const[isLoading,setIsloading] = useState(false)
    const navigate=useNavigate();
    // const [file, setfile] = useState("");
    const handleSubmit=(e)=>{
      e.preventDefault();
      // console.log(email,password,cpassword);
      if(password!== cpassword)
      toast.error('Password do not match ')
      setIsloading(true);  
      createUserWithEmailAndPassword(auth, email, password,name)
     .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    setIsloading(false);
    toast.success("Registration successful")
    navigate("/Login");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    toast.error( error.message);
    setIsloading(false);

  });
    }
  return (
    <>
    <div className='container-fluid'>
        <div className='row justify-content-center align-items-center'>
          {isLoading && <h5>Loading..</h5> }
            <div className='col-4 border pb-4 shadow-lg p-3 mb-5 mt-5 bg-body rounded'  >
            <h4 className='text-center mt-3 mb-3'>Register</h4>

            
                
                <form onSubmit={handleSubmit} className='auth-form '>

                            <div className="mb-3">
                              <input 
                              type="text" 
                              value={name} 
                              placeholder='Username' 
                              className="auth-input" required 
                              onChange={(e)=>setName(e.target.value)}/>
                              </div>
                            <div className="mb-3">
                              <input 
                              type="email" 
                              value={email} 
                              placeholder='Email Address' 
                              className="auth-input" required 
                              onChange={(e)=>setEmail(e.target.value)}/>
                              </div>

                            <div className="mb-3">
                              <input 
                              type="password" 
                              value={password} 
                              placeholder='Password'
                              className="auth-input"  required  
                              onChange={(e)=>setPassword(e.target.value)}/>
                              </div>
                            <div className="mb-3">
                              <input 
                              type="password" 
                              value={cpassword} 
                              className="auth-input" 
                              placeholder='Confirm Password' required 
                              onChange={(e)=>setCpassword(e.target.value)}/>
                              </div>

                    <button type="submit" className='mb-2 auth-btn btn-dark'>Sign Up</button>
                </form>
                        <div>
                        {/* <div><input type="file" value={file} placeholder='Password' onChange={(e)=>setfile(e.target.value)}/></div> */}

                            <div className=' grid justify-content-center align-items-center'>
                            </div>
                         </div>
                         <span>Already have an account? </span><span><Link to="/Login" className='text-decoration-none'>Sign In</Link></span>
           </div>
        </div>
    </div>
  
    </>
    
  
  )
}

export default Register