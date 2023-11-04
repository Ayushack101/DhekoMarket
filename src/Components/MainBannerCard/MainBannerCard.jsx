import React from "react";
import "./MainBannerCard.css";

const MainBannerCard = ({ imageUrl, product }) => {
  return (
    <div
      className="flex items-center justify-center relative"
      style={{
        width: "100%",
        height: "230px",
        zIndex: "0",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: "0.6",
        }}
      ></div>

      <h3
        className="flex opacity-100 font-bold text-6xl md:font-bold md:text-8xl relative z-10 tracking-wider  font-sans "
        style={{ opacity: "1" }}
      >
        {product.business_name}
      </h3>
    </div>
  );
};

export default MainBannerCard;
