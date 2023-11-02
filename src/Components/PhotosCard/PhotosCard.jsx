import React from "react";
import "./PhotosCard.css";

const PhotosCard = ({ Images }) => {
  return (
    <div className="photoscard">
      <div className="photoscardcontent">
        <div className="photosheading">Latest Photos</div>
        <div className="allphotos">
          {Images?.map((Card, index) => {
            return (
              <div className="perphotocard" key={index}>
                <img
                  src={Card}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PhotosCard;
