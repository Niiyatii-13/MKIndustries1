import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ image, name, price, desc , id }) => {

    const [itemCount, setItemCount] = useState(0);
    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

    return (
        <div className='foodItem'>
            <div className='foodItemImgContainer'>
                <img className='foodItemImage' src={url+"/images/"+image} alt="" />
                {!cartItems[id]
                ?<img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                :<div className="foodItemCounter">
                        <img src={assets.remove_icon_red} className= "plus" onClick={()=>removeFromCart(id)} alt="" />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} className= "minus" onClick={()=>addToCart(id)} alt="" />
                    </div>
                }
            </div>
            <div className="foodItemInfo">
                <div className="foodItemNameRating">
                    <p>{name}</p> <img src={assets.rating_starts} alt="" />
                </div>
                <p className="foodItemDesc">{desc}</p>
                <p className="foodItemPrice">${price}</p>
            </div>
        </div>
    )
}

export default FoodItem
