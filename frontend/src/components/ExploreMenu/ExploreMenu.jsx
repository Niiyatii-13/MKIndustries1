import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

const ExploreMenu = ({category,setCategory}) => {

  const {menu_list} = useContext(StoreContext);
  
  return (
    <div className='exploreMenu' id='exploreMenu'>
              <h1>Order reliable steel products here</h1>
                <p>Choose from a diverse catalog featuring reliable products. Our mission is to enhance your experience, with great service and products.</p>
      <div className="exploreMenuList">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='exploreMenuListItem'>
                    <img src={item.menu_image} className={category===item.menu_name?"active category":"category"} alt="" />
                    <p className='categoryText'>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
