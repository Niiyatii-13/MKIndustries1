import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import axios from 'axios'
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';
import Loading from '../../components/Loading/Loading';


const MyOrders = () => {
  
  const [data,setData] =  useState([]);
  const [loading,setLoading] = useState(true);
  const {url,token} = useContext(StoreContext);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
      setData(response.data.data)
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
    } 
  }

  useEffect(()=>{
    if (token) {
      fetchOrders();
    }
  },[token])

  if(loading)return <Loading/>

  return (
    <div className='myOrders'>
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order,index)=>{
          return (
            <div key={index} className='myOrdersOrder'>
                <img src={assets.parcel_icon} alt="" />
                <p>{order.items.map((item,index)=>{
                  if (index === order.items.length-1) {
                    return item.name+" x "+item.quantity
                  }
                  else{
                    return item.name+" x "+item.quantity+", "
                  }
                  
                })}</p>
                <p>${order.amount}.00</p>
                <p>Items: {order.items.length}</p>
                <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                <button onClick = {fetchOrders}>Track Order</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders
