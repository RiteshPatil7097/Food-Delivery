import React from 'react'
import "./Footer.css"
import facebook_icon from '../../assets/assets/frontend_assets/facebook_icon.png'
import twitter_icon from '../../assets/assets/frontend_assets/twitter_icon.png'
import linkedin_icon from '../../assets/assets/frontend_assets/linkedin_icon.png'
import logo from '../../assets/assets/frontend_assets/logo.png'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
              <img src={logo} alt='' />
              <p>Food delivery apps make ordering meals simple and convenient. Users can browse menus, explore cuisines, and place orders in seconds. Fresh, hot food is delivered straight to their doorstep. This system saves time, reduces effort, and ensures satisfaction. Perfect for busy professionals, families, or anyone craving delicious food anytime, anywhere.</p>
              <div className="footer-social-icon">
                <img src={facebook_icon} />
                <img src={twitter_icon} />
                <img src={linkedin_icon} />
              </div>
            </div>
            <div className="footer-content-center">
              <h2>Company</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="footer-content-right">
              <h2>Get In Touch</h2>
              <ul>
                <li>+91-7719039629</li>
                <li>5riteshrp@gmail.com</li>
              </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright © 2025 Food.Delivery. All rights reserved.</p>
    </div>
  )
}

export default Footer

