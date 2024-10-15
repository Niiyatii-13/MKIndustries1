import React, { useContext } from 'react'
import './Search.css'
import FoodItem from '../../components/FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const Search = () => {
    const{results,search} = useContext(StoreContext)
  return (
    <div className='foodDisplay' id='foodDisplay'>
        <h2>Dishes matching '{search}'</h2>
            <div className='foodDisplayList'>
            {results.map((item)=>{
                return <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
            })}
            </div>
    </div>
  )
}

export default Search
