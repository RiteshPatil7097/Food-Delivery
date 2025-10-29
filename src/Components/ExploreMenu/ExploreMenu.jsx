import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets/frontend_assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id='explore-menu'>
      <h2>Explore our Menu</h2>
      <p className='explore-menu-text'>Discover a variety of delicious dishes crafted to satisfy your cravings. From appetizers to desserts, our menu offers something for everyone.</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index)=>{
          return(
            <div onClick={()=>{setCategory(prev=>prev==item.menu_name?"ALL":item.menu_name)}}
                 keys={index} 
                 className="explore-menu-list-item">
              <img className={category === item.menu_name ? "active" : ""}
                   src={item.menu_image}  
                   alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          )
        }
      )}
      </div>

      <hr/>

    </div>
  )
}

export default ExploreMenu