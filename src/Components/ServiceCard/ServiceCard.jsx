import React from "react";
import "./ServiceCard.css";
const ServiceCard = ({ title, subtitle, icon }) => {
  return (
    <div className="Servicecard">
      <img src={icon} alt="" style={{width:"80px",height:"80px",borderRadius:"12px"}}/>
      <span className="mobile">{title}</span>
      <p>
        We are best in industry to create {subtitle}.We are Industry experts to
        do such type of work.
      </p>
      <span className="more">More</span>
    </div>
  );
};

export default ServiceCard;
