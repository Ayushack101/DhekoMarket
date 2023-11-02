import React, { useState } from "react";
import "./ReviewCard.css";
import StarRating from "../StarRatingCard/StarRatingCard";
import ReviewMiniCard from "../ReviewMiniCard/ReviewMiniCard";
import { Link } from "react-router-dom";

const ReviewCard = ({ product, data,setShowPopup }) => {
  const [allReviews, setShowAllReviews] = useState();

  // Extract Business Reviews From Product
  const All_Business_reviews = product?.Business_reviews;
  const Business_reviews = product?.Business_reviews?.slice(0, 3);

  console.log(data);

  return (
    <div className="reviewcard">
      <div className="reviewcardcontent">
        <div style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
          <span className="ratingspan">Rating & reviews</span>
          <button
            type="button"
            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            onClick={()=>setShowPopup(false)}
          >
          <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="reviews">
          <div className="div1">
            <span className="ratingpoint">{data?.average}</span>
            <StarRating rating={data?.average} />
            <span>{data?.total_review} ratings</span>
          </div>
          <div class="rating-container">
            <div class="rating-line">
              <div class="star">★</div>
              <div class="rating-label">5</div>
              <div class="yellow-line" style={{ width: data?.fivestar }}></div>
            </div>
            <div class="rating-line">
              <div class="star">★</div>
              <div class="rating-label">4</div>
              <div class="yellow-line" style={{ width: data?.fourstar }}></div>
            </div>
            <div class="rating-line">
              <div class="star">★</div>
              <div class="rating-label">3</div>
              <div class="yellow-line" style={{ width: data?.threestar }}></div>
            </div>
            <div class="rating-line">
              <div class="star">★</div>
              <div class="rating-label">2</div>
              <div class="yellow-line" style={{ width: data?.twostar }}></div>
            </div>
            <div class="rating-line">
              <div class="star">★</div>
              <div class="rating-label">1</div>
              <div class="yellow-line" style={{ width: data?.onestar }}></div>
            </div>
          </div>
          <ul>
            <li>
              <p> Highly Used For</p>
            </li>
            <li>
              <i class="fa-solid fa-circle-check"></i> Best Price
            </li>
            <li>
              <i class="fa-solid fa-circle-check"></i>
              <span> Great Value</span>
            </li>
            <li>
              <i class="fa-solid fa-circle-check"></i>
              <span> Good Condition</span>
            </li>
          </ul>
        </div>
        <span className="families">What Families are saying</span>
        <div className="reviewcards">
          {allReviews
            ? All_Business_reviews?.map((review, index) => (
                <ReviewMiniCard key={index} review={review} />
              ))
            : Business_reviews?.map((review, index) => (
                <ReviewMiniCard key={index} review={review} />
              ))}
        </div>
        <span className="allreviews">
          <Link to="" onClick={() => setShowAllReviews(!allReviews)}>
            {allReviews ? "View Less Reviews" : "View More Reviews"}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
