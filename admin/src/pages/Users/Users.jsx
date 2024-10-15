import React, { useEffect, useState } from 'react'
import './Users.css'
import axios from 'axios';
import { url } from '../../assets/assets'
 
const Users = () => {

    const [userList, setUserList] = useState([]);
    
    const fetchList = async ()=>{
        const response = await axios.get(url + '/api/user/list')
        setUserList(response.data.data)
    }
    useEffect(()=>{
        fetchList();
    },[])
    return (
        <div className='list add flex-col'>
        <p className='users'>Users</p>
        <div className='listTable'>
          <div className="userFormat title">
            <b>Name</b>
            <b>E-Mail</b>
            <b>ID</b>
          </div>
          {userList.map((item,index)=>{
            return (
              <div key={index} className='userTableFormat'>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>${item._id}</p>
              </div>
            )
          })}
            </div>
        </div>
    )
}

export default Users