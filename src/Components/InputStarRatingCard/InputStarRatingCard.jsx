import React, { useState } from "react";

const InputStarRatingCard = ({ name, value, onStarClick }) => {
  const [hoveredStar, setHoveredStar] = useState(null);

  const handleStarClick = (rating) => {
    onStarClick(name, rating);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= (hoveredStar || value) ? "filled" : ""}`}
          onClick={() => handleStarClick(star)}
          onMouseEnter={() => setHoveredStar(star)}
          onMouseLeave={() => setHoveredStar(null)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default InputStarRatingCard;
