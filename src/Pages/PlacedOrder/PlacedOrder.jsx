import React,{useContext} from 'react'
import { StoredContext } from "../../Context/StoredContext";
import "./PlacedOrder.css"
const PlacedOrder = () => {
    const {getTotalCartAmount} = useContext(StoredContext);
  return (
     <form className="place-order">
        <div className="place-order-left">
           <p className='title'>Delivery Information</p>
           <div className="multi-fields">
             <input type="text" placeholder='First Name' />
              <input type="text" placeholder='Last Name' />
           </div>

           <input type="email" placeholder='Email address'/>
           <input type="text" placeholder='Phone Number'/>
          
           <div className="multi-fields">
             <input type="text" placeholder='Street'/>
             <input type="text" placeholder='City' />
           </div>

           <div className="multi-fields">
            <input type="text" placeholder='State' />
             <input type="text" placeholder='Zip code' />  
           </div>

           <input type="text" placeholder='Country' />
        </div>


        <div className="place-order-right">
             <div className="cart-total">
             <h2>Cart Total</h2>
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>₹{getTotalCartAmount()}</p>
                </div>
              <hr/>
                <div className="cart-total-details">
                  <p>Delivery fee</p>
                   <p>₹{getTotalCartAmount()==0 ? 0 : 60}</p>
                </div>
              <hr/>
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>₹{getTotalCartAmount()==0 ? 0 : getTotalCartAmount()+60}</b>
                </div>
              <button>Proceed to Payment</button>
            </div>
        </div>
     </form>
  )
}

export default PlacedOrder