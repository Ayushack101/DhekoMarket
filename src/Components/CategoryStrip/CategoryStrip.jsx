import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./CategoryStrip.css";

const CategoryStrip = ({ businesses }) => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 8;
  const endIndex = startIndex + cardsPerPage;
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNextClick = () => {
    if (endIndex < businesses.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleCardClick = (businessName) => {
    // Use navigate to programmatically navigate to the /businesses/:businessName route
    navigate(`/businesses/${businessName}`);
  };

  return (
    <div className="categorystrip">
      <button className="category_buttons_button1" onClick={handlePrevClick}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      {businesses?.slice(startIndex, endIndex).map((card, index) => (
        <div
          className="category_stripcard"
          key={index}
          onClick={() => handleCardClick(card.business_name)}
        >
          <span className="description" style={{ marginTop: "0px" }}>
            {card.business_name}
          </span>
        </div>
      ))}
      <button className="category_buttons_button2" onClick={handleNextClick}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default CategoryStrip;
