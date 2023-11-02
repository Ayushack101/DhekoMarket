import React, { useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, subtitle, images,setShowPopup,distance,review}) => {
  // State Management
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="productcard">
      <div className="productcardimg">
        <img src={images[currentImage]} alt="" />
      </div>
      <div className="productcardcontent">
        <div className="cardcontentleft">
          <span>{title}</span>
          <span>{subtitle}</span>
          <span>
            <Link
              to={{
                pathname: `/product/about/${id}`,
              }}
            >
              <span className="view">View</span>
            </Link>
          </span>
        </div>
        <div className="cardcontentright">

          <div className="items">
          <i class="fas fa-location-arrow"></i>
          <span>Within - {distance}Km</span>
          </div>
      
          <div className="items">
            <i class="fa-solid fa-star"></i>
            <span>{review} Reviews</span>
          </div>
          
          <div className="items">
            <i class="fa-regular fa-bookmark" onClick={setShowPopup}></i>
            <span>Save</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
