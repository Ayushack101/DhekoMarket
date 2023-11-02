import React, { useState, useEffect } from "react";
import "./HeroCategorySection.css";
import CategoryStrip from "../../Components/CategoryStrip/CategoryStrip";
import Axios from "axios";
const HeroCategorySection = () => {
  const [businesses, setBusnisses] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "https://dekhomarket.com/apis/api_fetch.php"
        );
        if (response.status === 200) {
          setBusnisses(response?.data?.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="herocategorysection">
      <CategoryStrip businesses={businesses}/>
    </div>
  );
};

export default HeroCategorySection;
