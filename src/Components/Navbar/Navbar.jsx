import React,{useContext, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/assets/frontend_assets/logo.png'
import search_icon from '../../assets/assets/frontend_assets/search_icon.png'
import basket_icon from '../../assets/assets/frontend_assets/basket_icon.png'
import { StoredContext } from '../../Context/StoredContext.jsx'
import { Link } from 'react-router-dom'
const Navbar = ({setShowLoginPopup}) => {
    const [menu,setMenu]=useState("home");
    const {getTotalCartAmount}=useContext(StoredContext);
  return (

    <div className='Navbar'>
        <Link to={'/'}>  <img src={logo} alt="Logo"/> </Link>
        <ul className="navbar-menu">
            <Link onClick={()=>setMenu("Home")} className={menu=="Home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu=="Menu"?"active":""}>Menu</a>
            <a href='#AppDownload' onClick={()=>setMenu("Mobile App")} className={menu=="Mobile App"?"active":""}>Mobile App</a>
            <a href='#footer' onClick={()=>setMenu("Contact us")} className={menu=="Contact us"?"active":""}>Contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={search_icon} alt="Search_icon" />
            <div className="navbar-search-icon">
                <Link to={'/cart'}><img src={basket_icon} alt="Search Icon" /></Link>
                <div className={getTotalCartAmount()===0 ? "":"dot"}></div>
            </div>
            <button onClick={()=>setShowLoginPopup(true)} >
            Sign in
            </button>
        </div>
    </div>
  )
}

export default Navbar