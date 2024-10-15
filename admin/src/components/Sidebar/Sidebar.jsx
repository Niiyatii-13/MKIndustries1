import React from 'react'
import  './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarOptions">
      <NavLink to='/' className="sidebarOption">
            <img src={assets.home_icon} alt="" />
            <p>Home</p>
        </NavLink>
        <NavLink to='/add' className="sidebarOption">
            <img src={assets.add_icon} alt="" />
            <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebarOption">
            <img src={assets.order_icon} alt="" />
            <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebarOption">
            <img src={assets.order_icon} alt="" />
            <p>Orders</p>
        </NavLink>
        <NavLink to='/users' className="sidebarOption">
            <img src={assets.users_icon} alt="" />
            <p>Users</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
