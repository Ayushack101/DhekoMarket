import React from 'react';

const StarRating = ({ rating }) => {
  const maxRating = 5; // Maximum rating possible
  const filledStars = Math.floor(rating); // Number of filled stars
  const remainder = rating - filledStars; // Fractional part of the rating

  const starIcons = [];
  
  // Add filled stars
  for (let i = 0; i < filledStars; i++) {
    starIcons.push(<span key={i} className="star filled">&#9733;</span>);
  }
  
  // Add half star if needed
  if (remainder >= 0.5) {
    starIcons.push(<span key="half" className="star half">&#9733;</span>);
  }
  
  // Add empty stars to fill the row
  for (let i = starIcons.length; i < maxRating; i++) {
    starIcons.push(<span key={i} className="star">&#9733;</span>);
  }

  return (
    <div className="star-rating">
      {starIcons}
    </div>
  );
};

export default StarRating;
