import React from 'react'
import "./MainBannerCard.css"

const MainBannerCard = ({imageUrl}) => {
  return (
    <div className='MainBannerCard'>
        <img src={imageUrl} alt="" />
    </div>
  )
}

export default MainBannerCard