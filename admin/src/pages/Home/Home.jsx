import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios';
import { url } from '../../assets/assets'
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [noOfOrders, setNoOfOrder] = useState(0);
    const [noOfCustomers,setNoOfCustomer] = useState(0);
    const [noOfFoodItems,setNoOfFoodItems] = useState(0);



    const fetchCustomerCount = async ()=>{
        const response = await axios.get(url + '/api/user/list');
        setNoOfCustomer(response.data.data.length)
    }

    const fetchOrderCount = async ()=>{
        const response = await axios.get(url + '/api/order/list');
        setNoOfOrder(response.data.data.length)
    }

    const fetchFoodCount = async ()=>{
        const response = await axios.get(url + '/api/food/list');
        setNoOfFoodItems(response.data.data.length)
    }

    useEffect(()=>{

        fetchCustomerCount();
        fetchOrderCount();
        fetchFoodCount();

    },[])

    const navigate = useNavigate();

    return (
        <div className='home flex-col'>
            <p className='homeMessage'>Welcome User, here are the statistics about the restaurant</p>
            <div className="stats">
                
                <div className = "stat">
                    <div className="count">
                        <p>Number of users registered are:</p>
                        <p>{noOfCustomers}</p>
                    </div>
                    <button onClick = {()=>navigate("/users")}>View</button>
                </div>
                <div className = "stat">
                    <div className="count">
                        <p>Number of items are:</p>
                        <p>{noOfFoodItems}</p>
                    </div>
                    <button onClick = {()=>navigate("/list")}>View</button>
                </div>
                <div className = "stat">
                    <div className="count">
                        <p>Number of total orders are:</p>
                        <p>{noOfOrders}</p>
                    </div>
                    <button onClick = {()=>navigate("/orders")}>View</button>
                </div>
            </div>
        </div>  
  )
}

export default Home
