import React,{createContext,useEffect,useState} from 'react'
import { food_list } from '../assets/assets/frontend_assets/assets'
export const StoredContext = createContext(null)

  const StoredContextProvider = (props) => {

  const [cartItems,setCartItems]=useState({});

  const addToCart=(itemId)=>{
    if(!cartItems[itemId]){
      setCartItems(prev=>({...prev,[itemId]:1}))
    }
    else{
      setCartItems(prev=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }

  const removeFromCart=(itemId)=>{
    if(cartItems[itemId] && cartItems[itemId]>0){
      setCartItems(prev=>({...prev,[itemId]:prev[itemId]-1}))
    }
  }

  const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo=food_list.find((food)=>food._id===item);
        totalAmount += cartItems[item]*itemInfo.price;
      }
    }
    return totalAmount;
  }


  const contextValue = {
    food_list: food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  }

  return(
    <StoredContext.Provider value={contextValue}>
        {props.children}
    </StoredContext.Provider>
  )
}
export default StoredContextProvider