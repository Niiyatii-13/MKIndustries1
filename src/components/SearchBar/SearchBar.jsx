import React, { useContext, useEffect, useState } from 'react'
import './SearchBar.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { StoreContext } from '../../Context/StoreContext'


const SearchBar = () => {
    
    const {url,search,setSearch,fetchSearch} = useContext(StoreContext)

    
    return (
        <div className = 'search'>
            <input type="text" placeholder='Search' value = {search} onChange={(e)=>{setSearch(e.target.value) 
                                                                                     fetchSearch(e.target.value)}}/>
           
        </div>
  )
}

export default SearchBar
