import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./ProductAboutPage.css";
import { useParams } from "react-router-dom";
import ReviewStrip from "../../Components/ReviewStrip/ReviewStrip";
import UpcomingProductCard from "../../Components/UpcomingProductCard/UpcomingProductCard";
import BuissnessOverviewSection from "../../Sections/BuissnessOverviewSection/BuissnessOverviewSection";
import OverviewreviewSection from "../../Sections/OverviewreviewSection/OverviewreviewSection";
import ProductSection from "../../Sections/ProductSection/ProductSection";
import RelevantProductSection from "../../Sections/RelevantProductSection/RelevantProductSection";
import MainBannerCard from "../../Components/MainBannerCard/MainBannerCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import AboutBusinessCard from "../../Components/AboutBusinessCard/AboutBusinessCard";
import ServicesSection from "../../Sections/ServicesSection/ServicesSection";
// import TailwindHeader from "../../Components/TailwindHeader/TailwindHeader";

const ProductAboutPage = () => {
  // State Management
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [businesses, setBusinesses] = useState();
  const [banner, setBanner] = useState();
  const RelevantBusinesses = product["relevant_businesses"];

  // Fetch Business By Id Api Call
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          `https://dekhomarket.com/apis/fetchBusinessById.php?business_id=${id}`
        );
        if (response.status === 200) {
          setProduct(response?.data?.data);
          setBanner(response?.data?.data?.banners?.[0]);
          // setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  //  Business Details Api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          `https://dekhomarket.com/apis/business_details_api.php?id=${id}`
        );
        if (response.status === 200) {
          setBusinesses(response?.data?.service);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  // console.log(businesses);

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <CircularProgress
            style={{ color: "#007BFF", alignSelf: "center", marginTop: "20%" }}
          />
        </div>
      ) : (
        <>
          {/* <MainBannerCard imageUrl={banner} />
          <ReviewStrip /> */}
          {/* <TailwindHeader /> */}
          <AboutBusinessCard product={product} />
          <ServicesSection SubHeading={"BUSINESSES"} businesses={businesses} />
          {/* <BuissnessOverviewSection Business={product} /> */}
          {/* <ProductSection SubHeading={"BUSINESSES"} Businesses={businesses} /> */}
          <UpcomingProductCard RelevantBusinesses={RelevantBusinesses} />
          <RelevantProductSection RelevantBusinesses={RelevantBusinesses} />
          {/* <OverviewreviewSection product={product} /> */}
        </>
      )}
    </>
  );
};

export default ProductAboutPage;
