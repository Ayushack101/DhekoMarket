import React from 'react'
import logo from "../../Assets/dekho_market_logo.png";
import "./DownloadAppCard.css"
const DownloadAppCard = () => {
  return (
    <div className='downloadappcard'>
      <div className="downloadappcard_left">
      <img src={logo} alt="" />
      </div>
      <div className="downloadappcard_right">
        <span>Download DekhoMarket For Android or ios</span>
        <span>Dekho Market is hosted by the Hello Mistri Pvt Ltd, a private
          organization that also operates a range of other projects.Download our app and use it.</span>
          <span><img src="https://www.freepnglogos.com/uploads/google-play-png-logo/get-it-on-google-play-google-play-badge-png-logos-23.png" alt="" />
          <img src="https://w7.pngwing.com/pngs/34/523/png-transparent-app-store-apple-logo-apple-text-logo-video-game.png" alt="" /></span>
      </div>
   
    </div>
  )
}

export default DownloadAppCard