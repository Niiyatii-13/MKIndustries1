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
            <p className='footerText'>Started by Bharti Jain in 2020 and now have more than 100k Instagram followers and more than 10k Facebook followers</p>
            <div className="footerSocialIcons">
                <a href = "https://www.facebook.com/p/Click-Good-Food-100064049550003/" target = "_blank"><img src={assets.facebook_icon} alt="" /></a>
                <a href = "https://www.instagram.com/clickgoodfood_/" target = "_blank"><img src={assets.instagram_icon} alt="" /></a>
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
                <li>+91 98236352400</li>
                <li>tanishqjain7310@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footerCopyright">Copyright 2024 © - All Right Reserved.</p>
    </div>
  )
}

export default Footer
