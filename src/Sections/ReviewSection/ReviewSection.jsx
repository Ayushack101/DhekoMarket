import React,{useState} from "react";
import "./ReviewSection.css";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import AdCard from "../../Components/AdCard/AdCard";
import ReviewStrip from "../../Components/ReviewStrip/ReviewStrip";
const ReviewSection = ({product,data}) => {
  
  return (
    <div className="reviewsection">
      <ReviewStrip/>
      <div className="reviewsectioncontent">
      <ReviewCard product={product} data={data}/>
      <div className="alladdcards">
        <AdCard />
        <AdCard />
      </div>
      </div>
    </div>
  );
};

export default ReviewSection;
