import React, { useState } from 'react'
import './Loginpop.css'
import { assets } from '../../assets/frontend_assets/assets';
const Loginpop = ({setshowLogin}) => {
    const [currState, setcurrState] = useState("Login");

  return (
    <div className='login-popup'>
      <form  className='login-popup-container'>
        <div className="login-popup-title">
            <h2> {currState} </h2>
            <img onClick={()=> setshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></> :<input type="text" placeholder='your name' required />}
            <input type="email" placeholder='your email' required />
            <input type="password" placeholder='your password' required />
        </div>
        <button>{currState==="Signup"?"Create account":"Login"} </button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing, i agree to the  tems of use & privacy policy.</p>
        </div>
        {currState=== "Login"
        ?<p>Create a new account ? <span onClick={()=>setcurrState("Signup")}>Click here.</span></p>
      :<p>Already have an account ?<span onClick={()=>setcurrState("Login")}>Login here</span></p>
      }
      
      
      </form>
    </div>
  )
}

export default Loginpop
