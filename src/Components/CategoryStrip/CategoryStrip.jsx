import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import "./CategoryStrip.css";

const CategoryStrip = ({ businessName, handleClick }) => {
  // const [startIndex, setStartIndex] = useState(0);
  // const [scrollPosition, setScrollPosition] = useState(0);
  const tabContainerRef = React.createRef();
  const tabRef = React.createRef();
  const [showRightButton, setshowRightButton] = useState(true);
  const [showLeftButton, setshowLeftButton] = useState(false);

  let scrollPosition = 0;
  const setScrollPosition = (sum) => {
    scrollPosition = sum;
  };

  const handleScroll = () => {
    const container = tabContainerRef.current;
    if (!container) return;

    const tabWidth = tabRef.current.clientWidth;
    const maxScroll = container.scrollWidth - container.clientWidth;
    setScrollPosition(container.scrollLeft);

    // Update showLeftButton and showRightButton based on scroll position
    setshowLeftButton(container.scrollLeft > 0);
    setshowRightButton(container.scrollLeft < maxScroll - tabWidth);
  };

  const scrollTabs = (direction) => {
    const container = tabContainerRef.current;
    if (!container) return; // Add a check for null container

    const tabWidth = tabRef.current.clientWidth;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (direction === "left" && scrollPosition > 0) {
      setScrollPosition(scrollPosition - tabWidth);
      // setScrollPosition((prevScroll) => prevScroll - tabWidth);
    } else if (direction === "right" && scrollPosition < maxScroll) {
      // const sum = tabWidth + scrollPosition;
      // console.log(sum);
      // console.log(tabWidth);
      // console.log(scrollPosition);
      setScrollPosition(tabWidth + scrollPosition);
      // console.log(tabWidth, scrollPosition, maxScroll);
    }
    container.scrollLeft = scrollPosition;
    setshowRightButton(scrollPosition < maxScroll - tabWidth);
    setshowLeftButton(scrollPosition > 0);
  };

  // const cardsPerPage = 8;
  // const endIndex = startIndex + cardsPerPage;
  const navigate = useNavigate(); // Initialize the navigate function

  // const handleNextClick = () => {
  //   if (endIndex < businesses.length) {
  //     setStartIndex(startIndex + 1);
  //   }
  // };

  // const handlePrevClick = () => {
  //   if (startIndex > 0) {
  //     setStartIndex(startIndex - 1);
  //   }
  // };

  // const handleCardClick = (businessName) => {
  //   // Use navigate to programmatically navigate to the /businesses/:businessName route
  //   navigate(`/businesses/${businessName}`);
  // };

  return (
    // <div className="categorystrip">
    //   <button className="category_buttons_button1" onClick={handlePrevClick}>
    //     <i className="fa-solid fa-chevron-left"></i>
    //   </button>
    //   {businesses?.slice(startIndex).map((card, index) => (
    //     <div
    //       className="category_stripcard"
    //       key={index}
    //       onClick={() => handleCardClick(card.business_name)}
    //     >
    //       <span className="description" style={{ marginTop: "0px" }}>
    //         {card.business_name}
    //       </span>
    //     </div>
    //   ))}
    //   <button className="category_buttons_button2" onClick={handleNextClick}>
    //     <i className="fa-solid fa-chevron-right"></i>
    //   </button>
    // </div>
    <div class="wrapper">
      {showLeftButton && (
        <div class="icon" onClick={() => scrollTabs("left")}>
          <i id="left" class="fa-solid fa-angle-left"></i>
        </div>
      )}
      <ul class="tabs-box" ref={tabContainerRef} onScroll={handleScroll}>
        <li
          class="tab"
          ref={tabRef}
          onClick={() => {
            handleClick("All");
          }}
        >
          All
        </li>
        {businessName?.map((business_name, index) => {
          return (
            <li
              class="tab"
              ref={tabRef}
              key={index}
              onClick={() => {
                handleClick(business_name);
              }}
            >
              {business_name}
            </li>
          );
        })}
      </ul>

      {showRightButton && (
        <div class="icon" onClick={() => scrollTabs("right")}>
          <i id="right" class="fa-solid fa-angle-right"></i>
        </div>
      )}
    </div>
  );
};

export default CategoryStrip;
