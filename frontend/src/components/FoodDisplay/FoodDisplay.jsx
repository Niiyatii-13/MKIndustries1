import React, { useContext, useEffect, useState } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import axios from 'axios'
import { StoreContext } from '../../Context/StoreContext'
import Loading from '../Loading/Loading'

const FoodDisplay = ({category}) => {
  
  const {url} = useContext(StoreContext);
  const[food_list,setFoodList] = useState([])
  const[loading,setLoading] = useState(true);
  const fetchFoodList = async () => {
    setLoading(true);
    try {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data)
      
    } catch (error) {
        console.log(error);
    }finally{
        setLoading(false);
    }  
    console.log(food_list);
}
  //reload
  useEffect(()=>{
    fetchFoodList()
  },[])
  
  
  if(loading)return <Loading/>
  return (
      <div className='foodDisplay' id='foodDisplay'>
      <h2>Top dishes near you</h2>
      <div className='foodDisplayList'>
        {food_list.map((item)=>{
          if (category==="All" || category===item.category) {
            return <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
          }
        })}
      </div>
      </div>
  )
  
}
export default FoodDisplay;
