import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import ReviewSection from "../../Sections/ReviewSection/ReviewSection";
import MainBannerCard from "../../Components/MainBannerCard/MainBannerCard";
import CircularProgress from "@material-ui/core/CircularProgress";


const ReviewPage = () => {
  // State Management
  const [data,setData] = useState();
  const [banner, setBanner] = useState();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  // Take id from Parameter
  const { id } = useParams();

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
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const apifetch = async () => {
      try {
        const response =await Axios.get(`https://dekhomarket.com/apis/reviews-graph-api.php?business_id=${id}`)
        if(response.status === 200){
            setData(response?.data)
        }
      } catch (error) {
        console.log(error);
      }
    };
    apifetch();
  }, []);

  
  return (
    <>
      {loading ? (
        <div className="loading-container">
          <CircularProgress style={{ color: "#007BFF", marginTop: "20%" }} />
        </div>
      ) : (
        <>
          <MainBannerCard imageUrl={banner} />
          <ReviewSection product={product} data={data}/>
        </>
      )}
    </>
  );
};

export default ReviewPage;
