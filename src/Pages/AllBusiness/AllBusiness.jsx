import React, { useState, useEffect } from "react";
import TailwindHeader from "../../Components/TailwindHeader/TailwindHeader";
import BusinessCard from "../../Components/BusinessCard/BusinessCard";
import Axios from "axios";
import { Link } from "react-router-dom";
import CategoryStrip from "../../Components/CategoryStrip/CategoryStrip";
import { CircularProgress } from "@material-ui/core";

const AllBusiness = () => {
  const [allBusinesses, setAllBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "https://dekhomarket.com/apis/all_business_api.php"
        );
        if (response.status === 200) {
          setAllBusinesses(response?.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(allBusinesses);
  if (loading) {
    return (
      <div className="flex items-center justify-center w-[100vw] h-[100vh]">
        <CircularProgress />
      </div>
    );
  }
  return (
    <>
      {/* <TailwindHeader /> */}
      <CategoryStrip businesses={allBusinesses} />
      <section className="text-gray-600 body-font">
        <div className="about-b-card mt-8 px-10 mx-auto mb-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 md:gap-x-10 mt-6">
            {allBusinesses.map((business, index) => {
              return <BusinessCard key={index} business={business} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllBusiness;
