import React, { useState, useEffect } from "react";
import "./NearbyBusinesses.css";
import ProductSection from "../../Sections/ProductSection/ProductSection";
import Axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

const NearbyBusinesses = () => {
  const [NearBybusinesses, setNearByBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "https://dekhomarket.com/apis/near-by-business.php"
        );
        if (response.status === 200) {
          setNearByBusinesses(response?.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="nearbybusinesses">
      {loading ? (
        <div className="loading-container">
          <CircularProgress style={{ color: "#007BFF" }} />
        </div>
      ) : (
        <ProductSection
          SubHeading={"NEARBY BUSINESS"}
          Businesses={NearBybusinesses}
        />
      )}
    </div>
  );
};

export default NearbyBusinesses;
