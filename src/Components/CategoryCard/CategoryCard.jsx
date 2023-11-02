import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ imageSrc, title, description }) => {
  return (
    <div className="categorycard">
      <div className="categorycard_left">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="categorycard_right">
        <span>{title}</span>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
