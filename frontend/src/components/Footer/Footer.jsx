import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footerContent">
        <div className="footerContentLeft">
            <img src={assets.logo} className='logo' alt="" />
            <p className='footerText'>Created by Niyati Maheshwari</p>
            <div className="footerSocialIcons">
                <a href = "" target = "_blank"><img src={assets.facebook_icon} alt="" /></a>
                <a href = "" target = "_blank"><img src={assets.instagram_icon} alt="" /></a>
            </div>
        </div>
        <div className="footerContentCenter">
            <h2>COMPANY</h2>
            <ul>
                <a className="home" href = "#navbar">Home</a>
                <li>About us</li>
                <li>Delivery</li>
            </ul>
        </div>
        <div className="footerContentRight">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 9522236917</li>
                <li>niyati.260@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footerCopyright">Copyright 2024 © - All Right Reserved.</p>
    </div>
  )
}

export default Footer
