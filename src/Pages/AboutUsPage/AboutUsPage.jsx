import React, { useEffect } from "react";
import "./AboutUsPage.css";
import ReviewStrip from "../../Components/ReviewStrip/ReviewStrip";
import MainBannerCard from "../../Components/MainBannerCard/MainBannerCard";
import BusinessAboutUsSection from "../../Sections/BusinessAboutUsSection/BusinessAboutUsSection";
import Axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const AboutUsPage = () => {
  // State Management
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  // Use the useParams hook to get the id from the URL
  const { id } = useParams();

  // Api Call
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await Axios.get(
          `https://dekhomarket.com/apis/abouts_api.php?business_id=${id}&type=Business`
        );

        if (response.status === 200) {
          setData(response?.data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchApi();
  }, []);

  
  return (
    <>
      {loading ? (
        <div className="loading-container">
          <CircularProgress style={{ color: "#007BFF",marginTop:"20%" }} />
        </div>
      ) : (
        <>
          <MainBannerCard imageUrl={data?.banner} />
          <ReviewStrip />
          <BusinessAboutUsSection data={data?.data[0]} />
        </>
      )}
    </>
  );
};

export default AboutUsPage;
