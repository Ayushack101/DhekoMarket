import React, { useState } from "react";
import "./PhotosPage.css";
import PhotosCard from "../../Components/PhotosCard/PhotosCard";
import ReviewStrip from "../../Components/ReviewStrip/ReviewStrip";
import { useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import MainBannerCard from "../../Components/MainBannerCard/MainBannerCard";
import CircularProgress from "@material-ui/core/CircularProgress";

const PhotosPage = () => {
  const [data, setData] = useState();
  // Getting id from Parameter
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  // Business Gallery Api Call
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await Axios.get(
          `https://dekhomarket.com/apis/businsess_gallery_api.php?business_id=${id}`
        );
        setData(response?.data);
        if(response.status === 200){
          setLoading(false)
        }
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
          <CircularProgress style={{ color: "#007BFF",marginTop:"20%" }} />
        </div>
      ) : (
        <>
          <MainBannerCard imageUrl={data?.banner} />
          <ReviewStrip />
          <PhotosCard Images={data?.image} />
        </>
      )}
    </>
  );
};

export default PhotosPage;
