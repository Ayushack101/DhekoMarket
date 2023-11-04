import React, { useState, useEffect } from "react";
import TailwindHeader from "../../Components/TailwindHeader/TailwindHeader";
import BusinessCard from "../../Components/BusinessCard/BusinessCard";
import Axios from "axios";
import { Link } from "react-router-dom";
import CategoryStrip from "../../Components/CategoryStrip/CategoryStrip";
import { CircularProgress } from "@material-ui/core";

const AllBusiness = ({ userLocation }) => {
  const [allBusinesses, setAllBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [businessName, setBusinessName] = useState([]);

  const fetchData = async () => {
    try {
      const response = await Axios.get(
        "https://dekhomarket.com/apis/all_business_api.php"
      );
      if (response.status === 200) {
        console.log(response?.data);
        setBusinessName(
          response?.data.map((all_business) => {
            return all_business.business_name;
          })
        );

        setAllBusinesses(response?.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = async (business_name) => {
    setLoading(true);
    if (business_name === "All") {
      fetchData();
    }

    try {
      const response = await Axios.post(
        "https://dekhomarket.com/apis/fetch_business_api.php",
        {
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          business_name: business_name,
        }
      );
      if (response.status === 200) {
        console.log(response);
        setAllBusinesses(response?.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-[100vw] h-[100vh]">
        <CircularProgress />
      </div>
    );
  }
  return (
    <>
    <TailwindHeader />
      <CategoryStrip businessName={businessName} handleClick={handleClick} />
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
