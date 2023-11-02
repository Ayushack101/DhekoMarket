import React from "react";
import "./RelevantProductCard.css";
import { Link } from "react-router-dom";

const RelevantProduct = ({ business }) => {
  console.log(business);
  return (
    <Link
      className=" cursor-pointer"
      to={{
        pathname: `/product/about/${business?.business_id}`,
      }}
    >
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 h-72 w-full object-cover object-center "
          src={business?.images}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            CATEGORY
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {business?.title}
          </h1>
          <p className="leading-relaxed mb-3">{business?.sub_title}</p>
          <div className="flex items-center flex-wrap ">
            <a className="text-indigo-600 inline-flex items-center md:mb-2 lg:mb-0">
              Within - 8km
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <i class="fa-regular fa-star pr-2"></i>
              <span>3 Reviews</span>
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <i class="fa-regular fa-bookmark pr-2"></i> <span>Save</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RelevantProduct;
