import { useState } from "react"
import React from 'react'
import cross_icon from '../../assets/assets/frontend_assets/cross_icon.png'
import "./LoginPopup.css"
const LoginPopup = ({setShowLoginPopup}) => {
    const [currentState, setCurrentState] = useState("Login");
  return (
    <div className='LoginPopup' id='LoginPopup'>
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLoginPopup(false)} src={cross_icon} alt="image" />
            </div>
            <div className="login-popup-input">
                {currentState=="Login" ? <></> : <input type="text" placeholder='Your Name' required /> }
                <input type="email" placeholder='Your Email' required/>
                <input type="password" placeholder='Your Password'required />
            </div>
            <button>{currentState=="Sign Up" ? "Create Account" : "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>I agree to the Terms of Service and Privacy Policy</p>
            </div>

            {
                currentState=="Login" 
                ?
                <p>Create A New Account? 
                    <span className="log" onClick={()=>setCurrentState("Sign Up")}> Click Here</span>
                </p>
                :
                <p>ALready Have a An Account 
                    <span className="log" onClick={()=>setCurrentState("Login")}>  Login Here</span>
                </p>
            }
        </form>
    </div>
  )
}

export default LoginPopup