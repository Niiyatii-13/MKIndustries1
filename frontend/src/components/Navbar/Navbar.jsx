import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
import SearchBar from '../SearchBar/SearchBar'

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token ,setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/')
  }

  return (
    <div className='navbar' id = 'navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      <ul className="navbarMenu">
        <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active list" : "list"}`}>Home</Link>
        <a href='#exploreMenu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active list" : "list"}`}>Menu</a>
        <a href='#appDownload' onClick={() => setMenu("mobile-app")} className={`${menu === "mobile-app list" ? "active" : "list"}`}>Mobile app</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active list" : "list"}`}>Contact Us</a>
      </ul>
      <div>
      <SearchBar />
      </div>
      <div className="navbarRight">
        <Link to ='/search'><img className = "searchIcon" src={assets.search_icon} alt="" /></Link>
        <Link to='/cart' className='navbarSearchIcon'>
          <img className = "basketIcon" src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? <button onClick={() => setShowLogin(true)}>Sign In</button>
          : <div className='navbarProfile'>
            <img className = 'profilePic' src={assets.profile_icon} alt="" />
            <ul className='navbarProfileDropdown'>
              <li onClick={()=>navigate('/myorders')}> <img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
              <hr />
              <li onClick={logout}> <img src={assets.logout_icon} alt="" /> <p>Logout</p></li> 
            </ul>
          </div>
        }

      </div>
    </div>
  )
}

export default Navbar
