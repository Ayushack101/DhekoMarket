import React from 'react'
import "./ReviewMiniCard.css"
import StarRatingCard from "../StarRatingCard/StarRatingCard"
const ReviewMiniCard = ({review}) => {
  return (
    <div className='reviewminicard'>
        <StarRatingCard rating={review?.rating}/>
        <span className='reviewtitle'>{review?.name}</span>
        <span className='reviewsubtitle'>{review?.description}</span>
        <span className='reviewminicardcontent'>{review?.reviews}</span>
    </div>
  )
}

export default ReviewMiniCard