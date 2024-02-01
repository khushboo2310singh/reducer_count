import React from 'react'
import { useReducer } from 'react'
const App = () => {

  const mystyle={
    theme:{
      backgroundColor:"skyblue",
      width:"100%",
      height:"100vh"
    },
    intheme:{
      backgroundColor:"brown",
     color:"white",
      height:"200px",
      width:"400px"
    }
   
   
  }
  const is={
    count:0,
  }
  const reducer=(state, action)=>{
    switch(action.type)
    {
      case "inc":
        return {...state,count:state.count+1}
    
    
      case "dec":
        return {...state,count:state.count-1}
      case "reset":
        return is;
     default:
      return state;
  }
}
  const[state,dispatch]=useReducer(reducer,is)
  return (
    <>
    <div className='container-fluid ' >
      <div className='row' style={mystyle.theme}>
        <div className='d-flex justify-content-center align-items-center' >
         
          <div style={mystyle.intheme}>
            
             <h2 className='text-center'>count is {state.count}</h2>
            <input type="button" value="Increment count" onClick={()=>dispatch({type:"inc"})} style={{backgroundColor:"black", color:"white"}}/>
            <input type="button" value="Decrement count" onClick={()=>dispatch({type:"dec"})} style={{backgroundColor:"black", color:"white"}}/>
            <input type="button" value="Reset count" onClick={()=>dispatch({type:"reset"})} style={{backgroundColor:"black", color:"white"}}/>
          
          </div>
          
          
        </div>
      </div>
    </div>
    </>
  )
}

export default App;