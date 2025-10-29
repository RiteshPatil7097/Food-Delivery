import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoredContext } from '../../Context/StoredContext.jsx'
import FoodItem from '../FoodItem/FoodItem.jsx'

const FoodDisplay = ({ category }) => {   // ✅ Accept category as a prop
    const { food_list } = useContext(StoredContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    console.log(category, item.category);  // ✅ Will now work
                    if (category === "ALL" || category === item.category) {
                        return (
                            <FoodItem
                                key={index}
                                id={item._id}  // ✅ use _id not id
                                name={item.name}
                                price={item.price}
                                description={item.description}
                                image={item.image}
                            />
                        );
                    }
                    return null;  // ✅ Always return something inside map
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;
