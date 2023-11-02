import React from "react";
import logo from "../../Assets/dekho_market_logo.png";
import "./AboutMarketCard.css";
const AboutMarketCard = () => {
  return (
    <div className="aboutmarket">
      <div className="aboutmarket_left">
        <img src={logo} alt="" />
      </div>
      <div className="aboutmarket_right">
        <span>
        
          Dekho Market is hosted by the Hello Mistri Pvt Ltd, a private
          organization that also operates a range of other projects.
        </span>
        <span>Connect With Us</span>
      </div>
    </div>
  );
};

export default AboutMarketCard;
