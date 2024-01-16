import React from 'react'
import Subtotal from './Subtotal'
import { useState } from 'react'
// import {totalPrice,shipping} from './Subtotal'
const Address = () => {
  const [data, setData] = useState({});
  const formSubmit=()=>{
    
  }

  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <h4 className='pt-5 px-5'>Shipping Address</h4>
                <div className="col-12 p-5">
                <form onSubmit={formSubmit} className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="inputname" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputname" value={data.name} onChange={(e)=>setData(e.target.value)} required/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputmobile" className="form-label">Mobile No.</label>
                    <input type="number" className="form-control" id="inputmobile" value={data.mobile} onChange={(e)=>setData(e.target.value)} required/>
                  </div>
 
                  <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={data.addr} onChange={(e)=>setData(e.target.value)} required/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" value={data.city} onChange={(e)=>setData(e.target.value)} required/>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <input type='text' id="inputState" className="form-select" value={data.state} onChange={(e)=>setData(e.target.value)} required/>
                      
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" value={data.zip} onChange={(e)=>setData(e.target.value)} required/>
                  </div>
                  
                  <div className="col pb-5">
                    <button type="submit" className="btn btn-primary cart-btn">Procced to Payment</button>
                  </div>
</form>
                </div>
                {/* <div className="col-4">
                    <div>
                    </div>
                
                </div> */}
            </div>
        </div>
    </>
  )
}

export default Address