import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const SignUp = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='row justify-content-center align-items-center m-5 p-5'>
            
            <div className='form-div' style={{width:"400px" }} >
            <div className='p-3 justify-content-center align-items-center  '><div style={{background:"yellow",width:"100px" , height:"100px"}}> <img className='img-fluid' src="#" alt="mypic" /></div></div>
                    <span>Already have an account? </span><span><Link to="/Login">Sign In</Link></span>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
            </form>
           </div>
        </div>
    </div>
  
    </>
  )
}

export default SignUp;