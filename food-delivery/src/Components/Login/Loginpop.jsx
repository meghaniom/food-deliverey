import React, { useState } from 'react'
import './Loginpop.css'
import { assets } from '../../assets/frontend_assets/assets';
const Loginpop = ({setshowLogin}) => {
    const [currState, setcurrState] = useState("Signup");

  return (
    <div className='login-popup'>
      <form  className='login-popup-container'>
        <div className="login-popup-title">
            <h2> {currState} </h2>
            <img onClick={()=> setshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            <input type="text" placeholder='your name' required />
            <input type="email" placeholder='your email' required />
            <input type="password" placeholder='your password' required />
        </div>
        <button>{currState==="Signup"?"Create account":"Login"} </button>
      </form>
    </div>
  )
}

export default Loginpop
