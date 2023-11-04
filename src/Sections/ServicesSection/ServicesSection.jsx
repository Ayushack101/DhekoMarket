import React, { useState } from "react";


const ServicesSection = ({ businesses, SubHeading }) => {

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="w-[85%] mt-[50px] px-10 mx-auto">
          <div style={{ display: "flex", gap: "20px" }}>
            <h3 className="font-semibold text-3xl text-black capitalize">
              Services
            </h3>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-y-10 md:gap-x-10 sm:gap-x-10 mt-8">
            {businesses.map((business, index) => {
              return (
                <div
                  key={index}
                  className=" cursor-pointer"
                  to={{
                    pathname: `/product/about/${business?.business_id}`,
                  }}
                >
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className="flex justify-center py-8 bg-gray-200">
                      <img
                        className=" w-36 h-36 rounded-full shadow-lg object-cover object-center"
                        src={business?.image}
                        alt="blog"
                      />
                    </div>
                    <div className="p-8">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {business?.services_name}
                      </h1>
                      <p className="leading-relaxed mb-3">
                        {business?.about_us}
                      </p>
                      <div className="flex items-center justify-between ">
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

export default ServicesSection;
