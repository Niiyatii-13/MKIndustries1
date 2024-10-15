import React from 'react'
import './SocialMedia.css'
import { assets } from '../../assets/assets'

const SocialMedia = () => {
    return (
        <div className='appDownload' id='appDownload'>
            <p>Do visit our Instagram and Facebook profile</p>
            <div className="appDownloadPlatforms">
                <a href = "https://www.facebook.com/p/Click-Good-Food-100064049550003/" target = "_blank"><img src={assets.facebook_icon} className='facebookIcon' alt="" /></a>
                <a href = "https://www.instagram.com/clickgoodfood_/" target = "_blank"><img src={assets.instagram_icon} alt="" className='instaIcon'/></a>
            </div>
        </div>
    )
}

export default SocialMedia
