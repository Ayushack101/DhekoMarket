import React from "react";
import "./BusinessAboutUsSection.css";
const BusinessAboutUsSection = ({data}) => {
  return (
    <>
      <div className="aboutuspage">
        <div className="aboutuscontent">
          <div className="aboutuscontentleft1">
            <span>{data?.title1}</span>
            <span>{data?.our_expertise}</span>
          </div>
          <div className="aboutuscontentright">
            <img src={data?.image1} alt="" />
          </div>
        </div>
        <div className="aboutuscontent">
          <div className="aboutuscontentleft2">
            <img src={data?.image2} alt="" />
          </div>
          <div className="aboutuscontentright" id="s2">
            <span>{data?.title2}</span>
            <span>{data?.what_we_do}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessAboutUsSection;
