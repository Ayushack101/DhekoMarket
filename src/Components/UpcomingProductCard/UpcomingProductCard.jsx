import React from "react";
import "./UpcomingProductCard.css";
import { Link } from "react-router-dom";
const UpcomingProductCard = ({ RelevantBusinesses }) => {
  return (
    // <div className="upcomingproduct">
    //   <img
    //     src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
    //     alt=""
    //     style={{ width: "300px", height: "300px" }}
    //   />
    //   <div className="upcomingproductcontent">
    //     <span>Upcoming Businesses</span>
    //     <span>These are the all Upcoming Businesses on our website.You have to book in advance.</span>
    //     <span style={{cursor:"pointer"}}><Link to="/upcomingbusiness">View</Link></span>
    //   </div>
    // </div>
    <>
      <section className="text-gray-600 body-font" >
        <div className="w-[85%] mt-[70px] px-10 mx-auto">
          <h3 className="font-semibold text-3xl text-black capitalize">
            Upcomming Services
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-y-10 md:gap-x-10 sm:gap-x-10 mt-8">
            {RelevantBusinesses.map((business, index) => {
              return (
                <div
                  key={index}
                  className="cursor-pointer"
                  to={{
                    pathname: `/product/about/${business?.business_id}`,
                  }}
                >
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className="flex justify-center py-8 bg-gray-200">
                      <img
                        className=" w-36 h-36 rounded-full shadow-lg object-cover object-center"
                        src={business?.images}
                        alt="blog"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {business?.title}
                      </h1>
                      <p className="leading-relaxed mb-3">
                        {business?.sub_title}
                      </p>
                      <div className="flex items-center flex-wrap justify-between">
                        <a className="text-indigo-600 inline-flex items-center md:mb-2 lg:mb-0">
                          Price - ₹800
                        </a>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <i class="fa-regular fa-bookmark pr-2"></i>{" "}
                          <span>Book</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default UpcomingProductCard;
