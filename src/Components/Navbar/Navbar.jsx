import React,{useState} from 'react'
import './Navbar.css'
import logo from '../../assets/assets/frontend_assets/logo.png'
import search_icon from '../../assets/assets/frontend_assets/search_icon.png'
import basket_icon from '../../assets/assets/frontend_assets/basket_icon.png'
const Navbar = () => {
    const [menu,setMenu]=useState("home");
  return (
    <div className='Navbar'>
        <img src={logo} alt="Logo" />
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("home")} className={menu=="home"?"active":""}>home</li>
            <li onClick={()=>setMenu("Menu")} className={menu=="Menu"?"active":""}>Menu</li>
            <li onClick={()=>setMenu("About us")} className={menu=="About us"?"active":""}>About Us</li>
            <li onClick={()=>setMenu("Contact us")} className={menu=="Contact us"?"active":""}>Contact us</li>
        </ul>
        <div className="navbar-right">
            <img src={search_icon} alt="Search_icon" />
            <div className="navbar-search-icon">
                <img src={basket_icon} alt="Search Icon" />
                <div className="dot"></div>
            </div>
            <button>Sign</button>
        </div>
    </div>
  )
}

export default Navbar