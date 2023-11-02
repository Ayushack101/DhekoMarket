import React, { useEffect } from "react";
import "./ServicePage.css";
import BannerSliderSection from "../../Sections/BannerSliderSection/BannerSliderSection";
import ReviewStrip from "../../Components/ReviewStrip/ReviewStrip";
import ServiceSection from "../../Sections/ServiceSection/ServiceSection";
import MainBannerCard from "../../Components/MainBannerCard/MainBannerCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useState } from "react";
import  Axios  from "axios";
import { useParams } from "react-router-dom";
const ServicePage = () => {
  // State Management
  const [loading, setLoading] = useState(false);
  const [banner,setBanner] = useState();
  const [Data,setData] = useState();

  const{id} = useParams();

  useEffect(() => {
    const fetchApi = async() => {
      try {
        const response = await Axios.get(`https://dekhomarket.com/apis/business_services.php?business_id=${id}`);
        setData(response?.data?.service)
        setBanner(response?.data?.banner)
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);



  return (
    <>
      {loading ? (
        <div className="loading-container">
          <CircularProgress style={{ color: "#007BFF" }} />
        </div>
      ) : (
        <>
          <div className="aboutservicepage">
            <MainBannerCard imageUrl={banner} />
            <ReviewStrip />
            <ServiceSection service={Data}/>
          </div>
        </>
      )}
    </>
  );
};

export default ServicePage;
