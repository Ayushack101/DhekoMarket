import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";
import ProductSection from "../../Sections/ProductSection/ProductSection";
import CircularProgress from "@material-ui/core/CircularProgress";
import Axios from "axios";
const ProductPage = ({
  imageURL,
  ProductHead,
  Heading,
  SubHeading,
  userLocation,
}) => {
  const { businessName } = useParams();
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

  userLocation.business_name = businessName;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.post(
          "https://dekhomarket.com/apis/fetch_business_api.php",
          userLocation
        );
        if (response.status === 200) {
          setBusinesses(response?.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(businesses);
  return (
    <>
      {loading ? (
        <div className="loading-container">
          <CircularProgress style={{ color: "#007BFF" }} />
        </div>
      ) : (
        <ProductSection
          imageURL={imageURL}
          ProductHead={ProductHead}
          Heading={Heading}
          SubHeading={SubHeading}
          Businesses={businesses}
        />
      )}
    </>
  );
};

export default ProductPage;
