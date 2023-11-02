import React from "react";
import "./ReviewStrip.css";
import { useLocation, useParams, Link } from "react-router-dom";

const ReviewStrip = () => {
  const location = useLocation();
  const { id } = useParams();

  return (
    <div className="reviewstrip">
        <span
        className={
          location.pathname === `/product/about/${id}` ? "active-link" : ""
        }
      >
        <Link
          to={{
            pathname: `/product/about/${id}`,
          }}
        >
          <span className="/product/about">Overview</span>
        </Link>
      </span>
      <span
        className={
          location.pathname === `/product/about/review/${id}` ? "active-link" : ""
        }
      >
        <Link
          to={{
            pathname: `/product/about/review/${id}`,
          }}
        >
          <span className="/product/about/review">Reviews</span>
        </Link>
      </span>
      <span
        className={
          location.pathname ===  `/product/about/photos/${id}` ? "active-link" : ""
        }
      >
        <Link
          to={{
            pathname: `/product/about/photos/${id}`,
          }}
        >
          <span className="/product/about/photos">Photos</span>
        </Link>
      </span>
      <span
        className={
          location.pathname === `/product/about/aboutus/${id}` ? "active-link" : ""
        }
      >
        <Link
          to={{
            pathname: `/product/about/aboutus/${id}`,
          }}
        >
          <span className="/product/about/aboutus">AboutUs</span>
        </Link>
      </span>
      <span
        className={
          location.pathname === `/product/about/services/${id}` ? "active-link" : ""
        }
      >
      <Link
          to={{
            pathname: `/product/about/services/${id}`,
          }}
        >
          <span className="/product/about/aboutus">Services</span>
        </Link>
      </span>
    </div>
  );
};

export default ReviewStrip;
