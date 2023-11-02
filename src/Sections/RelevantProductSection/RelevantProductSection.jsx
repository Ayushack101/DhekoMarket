import React from "react";
import "./RelevantProductSection.css";
import RelevantProductCard from "../../Components/RelevantProductCard/RelevantProductCard";
const RelevantProductSection = ({ RelevantBusinesses }) => {
  return (
    <>
      <div>
        <div>
          <div className="w-[85%] my-[70px] px-10 mx-auto">
            <h3 className="font-semibold text-3xl text-black capitalize">
              Relevant Businesses
            </h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 md:gap-x-10 mt-8">
              {RelevantBusinesses &&
                RelevantBusinesses.map((business, index) => {
                  return (
                    <RelevantProductCard business={business} key={index} />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelevantProductSection;
