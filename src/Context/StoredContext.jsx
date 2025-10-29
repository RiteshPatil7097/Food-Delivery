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

  useEffect(()=>{
    console.log(cartItems);
  },[cartItems])


  const contextValue = {
    food_list: food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart
  }

  return(
    <StoredContext.Provider value={contextValue}>
        {props.children}
    </StoredContext.Provider>
  )
}
export default StoredContextProvider