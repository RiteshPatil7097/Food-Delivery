import React from 'react'
import "./Header.css"
//import Head from "assets/assets/frontend_assets/header-img.png"
const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your Favourite Food here</h2>
            <p>Craving something delicious? Explore our wide range of meals prepared by top chefs and delivered hot and fresh to your doorstep. Whether it’s a quick snack, a hearty meal, or a sweet dessert — we’ve got you covered with just a few clicks!</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header